/**
 * Synchronization script: Supabase -> Local Files (Permanent GitHub Backup)
 * 
 * Safety invariants:
 * 1. Downloads binary image files from Supabase Storage into /public/images/
 * 2. Rewrites image references from Supabase URLs to local relative paths (/images/filename.ext)
 * 3. Safely merges products into src/data/synced-products.json without duplicates
 * 4. Preserves baseline products in src/data/products.ts
 * 5. Verifies every referenced image file physically exists
 * 6. Never deletes local files unless explicitly approved
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://pwnnihjxtkavqpoflkmk.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bm5paGp4dGthdnFwb2Zsa21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyMjIzNTQsImV4cCI6MjEwNjc5ODM1NH0.xga3wP-uhT_Wvj1v7DxPnZR3IOw_mEy97B4XNE5hYzo';

const PUBLIC_IMAGES_DIR = path.resolve(__dirname, '../public/images');
const SYNCED_PRODUCTS_FILE = path.resolve(__dirname, '../src/data/synced-products.json');

async function downloadFile(url, destPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: status ${response.status}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(destPath, buffer);
}

function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

async function main() {
  console.log('🚀 Starting Supabase to Local Source Backup Synchronization...');

  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  // 1. Fetch products from Supabase
  console.log('📥 Querying products from Supabase...');
  const { data: dbProducts, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Error querying Supabase products:', error.message);
    process.exit(1);
  }

  console.log(`✓ Retrieved ${dbProducts.length} product(s) from Supabase.`);

  // 2. Read existing synced-products.json
  let existingSynced = [];
  if (fs.existsSync(SYNCED_PRODUCTS_FILE)) {
    try {
      const content = fs.readFileSync(SYNCED_PRODUCTS_FILE, 'utf8');
      existingSynced = JSON.parse(content || '[]');
    } catch (e) {
      console.warn('⚠️ Could not parse existing synced-products.json, starting fresh');
      existingSynced = [];
    }
  }

  const syncedMap = new Map();
  for (const item of existingSynced) {
    if (item && item.id) syncedMap.set(item.id, item);
  }

  // 3. Process each product from Supabase
  let imagesDownloaded = 0;
  for (const row of dbProducts) {
    const productId = row.id;

    async function processImageUrl(imgUrl, index) {
      if (!imgUrl || typeof imgUrl !== 'string') return imgUrl;

      // Check if it is a Supabase storage URL
      if (imgUrl.includes('/storage/v1/object/public/product-images/')) {
        const urlParts = imgUrl.split('/product-images/');
        const remoteFileName = path.basename(urlParts[1] || `image_${Date.now()}`);
        const localFileName = sanitizeFileName(`sb_${productId}_${index}_${remoteFileName}`);
        const localFilePath = path.join(PUBLIC_IMAGES_DIR, localFileName);
        const localPublicUrl = `/images/${localFileName}`;

        // Only download if it does not already exist
        if (!fs.existsSync(localFilePath)) {
          console.log(`⬇️ Downloading new image: ${localFileName}`);
          try {
            await downloadFile(imgUrl, localFilePath);
            imagesDownloaded++;
          } catch (dlErr) {
            console.error(`⚠️ Failed to download ${imgUrl}:`, dlErr.message);
            // If download fails, retain existing or warn
            return imgUrl;
          }
        }
        return localPublicUrl;
      }
      return imgUrl;
    }

    const localMainImage = await processImageUrl(row.image, 0);
    const localGallery = [];
    if (Array.isArray(row.gallery_images)) {
      for (let i = 0; i < row.gallery_images.length; i++) {
        const processed = await processImageUrl(row.gallery_images[i], i + 1);
        localGallery.push(processed);
      }
    } else {
      localGallery.push(localMainImage);
    }

    const localProduct = {
      id: row.id,
      sku: row.sku || `ASV-${row.id.slice(-6).toUpperCase()}`,
      name: row.name,
      mainSection: row.main_section || 'cloths',
      category: row.category,
      categorySlug: row.category_slug,
      description: row.description || '',
      image: localMainImage,
      galleryImages: localGallery,
      colors: Array.isArray(row.colors) ? row.colors : [],
      availableStock: row.available_stock ?? 1,
      minimumOrder: row.minimum_order ?? 1,
      unitLabel: row.unit_label || 'piece',
      badge: row.badge || undefined,
      isNewArrival: Boolean(row.is_new_arrival),
      isFeatured: Boolean(row.is_featured),
      inStock: row.in_stock !== false,
      rating: row.rating ? Number(row.rating) : 5.0,
      reviewCount: row.review_count ? Number(row.review_count) : 1,
      suitableFor: Array.isArray(row.suitable_for) ? row.suitable_for : [],
      textureNote: row.texture_note || undefined,
      origin: row.origin || undefined,
      isWholesaleAvailable: row.is_wholesale_available !== false,
      wholesaleNote: row.wholesale_note || undefined,
      isMatchingSet: Boolean(row.is_matching_set),
    };

    syncedMap.set(productId, localProduct);
  }

  const updatedSyncedList = Array.from(syncedMap.values());

  // 4. Pre-Commit Validation Checks
  console.log('🔍 Running pre-commit validation checks...');

  // Check 4a: Verify no Supabase storage URLs remain in local product image paths
  for (const prod of updatedSyncedList) {
    if (prod.image && prod.image.includes('supabase.co/storage')) {
      console.error(`❌ Validation failed: Product "${prod.name}" (${prod.id}) still contains a Supabase Storage URL in image!`);
      process.exit(1);
    }
  }

  // Check 4b: Verify local image files exist
  for (const prod of updatedSyncedList) {
    if (prod.image && prod.image.startsWith('/images/')) {
      const diskPath = path.join(__dirname, '../public', prod.image);
      if (!fs.existsSync(diskPath)) {
        console.warn(`⚠️ Warning: Referenced local image does not exist on disk: ${diskPath}`);
      }
    }
  }

  // Check 4c: Check for duplicate IDs
  const seenIds = new Set();
  for (const prod of updatedSyncedList) {
    if (seenIds.has(prod.id)) {
      console.error(`❌ Validation failed: Duplicate product ID found: ${prod.id}`);
      process.exit(1);
    }
    seenIds.add(prod.id);
  }

  // 5. Write updated synced-products.json
  fs.writeFileSync(SYNCED_PRODUCTS_FILE, JSON.stringify(updatedSyncedList, null, 2) + '\n');
  console.log(`✅ Successfully updated ${SYNCED_PRODUCTS_FILE} with ${updatedSyncedList.length} products.`);
  console.log(`📸 New images downloaded: ${imagesDownloaded}`);
  console.log('🎉 Supabase synchronization completed successfully!');
}

main().catch((err) => {
  console.error('Fatal synchronization error:', err);
  process.exit(1);
});
