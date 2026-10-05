import { createClient } from '@supabase/supabase-js';
import { Product } from '../types';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://pwnnihjxtkavqpoflkmk.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bm5paGp4dGthdnFwb2Zsa21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyMjIzNTQsImV4cCI6MjEwNjc5ODM1NH0.xga3wP-uhT_Wvj1v7DxPnZR3IOw_mEy97B4XNE5hYzo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const BUCKET_NAME = 'product-images';

export interface DbProductRow {
  id: string;
  sku: string | null;
  name: string;
  main_section: string;
  category: string;
  category_slug: string;
  description: string | null;
  image: string;
  gallery_images: string[] | null;
  colors: string[] | null;
  available_stock: number | null;
  minimum_order: number | null;
  unit_label: string | null;
  badge: string | null;
  is_new_arrival: boolean | null;
  is_featured: boolean | null;
  in_stock: boolean | null;
  rating: number | null;
  review_count: number | null;
  suitable_for: string[] | null;
  texture_note: string | null;
  origin: string | null;
  is_wholesale_available: boolean | null;
  wholesale_note: string | null;
  is_matching_set: boolean | null;
  created_at?: string;
  updated_at?: string;
}

export function dbRowToProduct(row: DbProductRow): Product {
  return {
    id: row.id,
    sku: row.sku || `ASV-${row.id.slice(-6).toUpperCase()}`,
    name: row.name,
    mainSection: (row.main_section as Product['mainSection']) || 'cloths',
    category: row.category,
    categorySlug: row.category_slug,
    description: row.description || '',
    image: row.image,
    galleryImages: Array.isArray(row.gallery_images) ? row.gallery_images : [],
    colors: Array.isArray(row.colors) ? row.colors : [],
    availableStock: typeof row.available_stock === 'number' ? row.available_stock : 1,
    minimumOrder: typeof row.minimum_order === 'number' ? row.minimum_order : 1,
    unitLabel: row.unit_label || 'piece',
    badge: row.badge || undefined,
    isNewArrival: Boolean(row.is_new_arrival),
    isFeatured: Boolean(row.is_featured),
    inStock: row.in_stock !== false,
    rating: typeof row.rating === 'number' ? row.rating : 5.0,
    reviewCount: typeof row.review_count === 'number' ? row.review_count : 1,
    suitableFor: Array.isArray(row.suitable_for) ? row.suitable_for : [],
    textureNote: row.texture_note || undefined,
    origin: row.origin || undefined,
    isWholesaleAvailable: row.is_wholesale_available !== false,
    wholesaleNote: row.wholesale_note || undefined,
    isMatchingSet: Boolean(row.is_matching_set),
  };
}

export function productToDbRow(product: Product): DbProductRow {
  return {
    id: product.id,
    sku: product.sku,
    name: product.name,
    main_section: product.mainSection,
    category: product.category,
    category_slug: product.categorySlug,
    description: product.description,
    image: product.image,
    gallery_images: product.galleryImages || [],
    colors: product.colors || [],
    available_stock: product.availableStock ?? 1,
    minimum_order: product.minimumOrder ?? 1,
    unit_label: product.unitLabel ?? 'piece',
    badge: product.badge || null,
    is_new_arrival: product.isNewArrival ?? false,
    is_featured: product.isFeatured ?? false,
    in_stock: product.inStock ?? true,
    rating: product.rating ?? 5.0,
    review_count: product.reviewCount ?? 1,
    suitable_for: product.suitableFor || [],
    texture_note: product.textureNote || null,
    origin: product.origin || null,
    is_wholesale_available: product.isWholesaleAvailable ?? true,
    wholesale_note: product.wholesaleNote || null,
    is_matching_set: product.isMatchingSet ?? false,
    updated_at: new Date().toISOString(),
  };
}

/**
 * Upload an image file directly to Supabase Storage bucket 'product-images'.
 * Returns the permanent public CDN URL.
 */
export async function uploadImageToSupabase(file: File, prefix = 'product'): Promise<string> {
  const fileExt = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const cleanBaseName = file.name
    .replace(/\.[^/.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .slice(0, 30);
  const fileName = `${prefix}_${Date.now()}_${cleanBaseName}.${fileExt}`;
  const filePath = `uploads/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: '31536000',
      upsert: false,
    });

  if (uploadError) {
    console.error('Supabase image upload error:', uploadError);
    throw uploadError;
  }

  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath);
  return data.publicUrl;
}

/**
 * Delete an image file from Supabase Storage given its public URL or file path.
 */
export async function deleteImageFromSupabase(imageUrl: string): Promise<boolean> {
  if (!imageUrl.includes(BUCKET_NAME)) {
    return false; // Local image or external URL, not in Supabase bucket
  }

  try {
    const parts = imageUrl.split(`${BUCKET_NAME}/`);
    if (parts.length < 2) return false;
    const filePath = decodeURIComponent(parts[1]);

    const { error } = await supabase.storage.from(BUCKET_NAME).remove([filePath]);
    if (error) {
      console.warn('Failed to delete image from Supabase storage:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error deleting image from Supabase storage:', err);
    return false;
  }
}

/**
 * Fetch all products stored in Supabase.
 */
export async function fetchSupabaseProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Notice: Error fetching Supabase products:', error.message);
      return [];
    }

    return (data as DbProductRow[]).map(dbRowToProduct);
  } catch (err) {
    console.warn('Notice: Network error fetching Supabase products:', err);
    return [];
  }
}

/**
 * Save (insert or update) a product in Supabase.
 */
export async function saveProductToSupabase(product: Product): Promise<boolean> {
  try {
    const row = productToDbRow(product);
    const { error } = await supabase.from('products').upsert(row, { onConflict: 'id' });

    if (error) {
      console.error('Failed to save product to Supabase:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Exception saving product to Supabase:', err);
    return false;
  }
}

/**
 * Delete a product from Supabase.
 */
export async function deleteProductFromSupabase(productId: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('products').delete().eq('id', productId);
    if (error) {
      console.error('Failed to delete product from Supabase:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Exception deleting product from Supabase:', err);
    return false;
  }
}
