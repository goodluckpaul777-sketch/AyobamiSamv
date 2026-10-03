import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- CLOTHING MATERIALS & FABRICS (BALOGUN MARKET SPECIALTY) ---
  {
    id: 'mat-swiss-voile-lace',
    sku: 'ASV-LACE-01',
    name: 'Luxury Swiss Voile Lace & Polish Guinea Brocade Fabric',
    category: 'materials',
    subcategory: 'Voile Lace & Guinea Brocade',
    tagline: 'Authentic high-luster Swiss embroidery with soft hand-feel for Aso-Ebi and royal occasions',
    description:
      'Directly imported from verified mills for Ayobami SAM Venture at Balogun Market. This luxury Swiss voile lace features dense floral threadwork, high color fastness, and breathable pure cotton base. Paired with polished 100% Guinea cotton brocade that shines with every movement. Ideal for wedding guests, VIP celebrations, and dignified traditional attires.',
    image: '/src/assets/images/luxury_lace_materials_1791037752206.jpg',
    gallery: [
      '/src/assets/images/luxury_lace_materials_1791037752206.jpg',
      '/src/assets/images/senator_cashmere_fabrics_1791037771667.jpg',
      '/src/assets/images/tailored_clothing_fabric_1791037445225.jpg',
    ],
    features: [
      '100% Pure cotton Swiss voile base with intricate scalloped border',
      'High-luster Polish Guinea Brocade fabric with stamped water-repellent sheen',
      'Color-fast dye technology — zero bleeding or fading upon washing',
      'Available in 5-yard cuts for single outfits or wholesale 50-yard bales for wedding Aso-Ebi',
      'Direct Balogun West shop stock with immediate nationwide dispatch',
    ],
    specifications: [
      { label: 'Fabric Composition', value: '100% Premium Cotton Voile Base' },
      { label: 'Standard Length', value: '5 Yards (4.57 Meters) per piece' },
      { label: 'Width', value: '52 – 54 inches (Wide cut)' },
      { label: 'Sales Mode', value: 'Retail (5 yds) & Wholesale (Bales / Cartons)' },
      { label: 'Stock Location', value: '37/39 Balogun West, Molake House, Lagos' },
      { label: 'Shipping', value: 'All 36 States in Nigeria + DHL Worldwide' },
    ],
    availableOptions: [
      {
        label: 'Color Palette',
        choices: ['Royal Emerald Green', 'Imperial Champagne Gold', 'Deep Royal Blue', 'Pristine White & Silver', 'Rich Wine Burgundy'],
      },
      {
        label: 'Order Volume',
        choices: ['Retail (Single 5 Yards Piece)', 'Wholesale Bundle (3 - 5 Pieces)', 'Bulk Aso-Ebi Bale (10+ Pieces)'],
      },
    ],
    salesType: 'Retail & Wholesale (Yards, Pieces & Bales)',
    stockStatus: 'In Stock (Balogun Lagos Warehouse)',
    warrantyOrGuarantee: '100% Authentic Voile Guarantee — Physical Inspection at Molake House Welcome',
    bestFor: 'Aso-Ebi groups, wedding guests, coronation ceremonies, society women, and fashion designers.',
  },
  {
    id: 'mat-senator-cashmere-wool',
    sku: 'ASV-SEN-MAT',
    name: 'Premium 7-Star Cashmere Wool Senator & Atiku Suiting Fabric',
    category: 'materials',
    subcategory: 'Senator & Suiting Materials',
    tagline: 'Heavy drape wrinkle-free cashmere wool blend designed for tropical Nigerian weather',
    description:
      'The crown jewel of Balogun West menswear fabrics. This 7-star cashmere wool blend is custom milled with dense cross-weave technology that gives men’s Senator suits, kaftans, and safari sets an infallible razor-sharp crease and commanding drape without suffocating heat.',
    image: '/src/assets/images/senator_cashmere_fabrics_1791037771667.jpg',
    gallery: [
      '/src/assets/images/senator_cashmere_fabrics_1791037771667.jpg',
      '/src/assets/images/luxury_lace_materials_1791037752206.jpg',
      '/src/assets/images/traditional_kaftan_wear_1791037494025.jpg',
    ],
    features: [
      'Cashmere-wool blend with micro-poly fiber for permanent crease retention',
      'Smooth matte texture with subtle luxury sheen under sunlight',
      'Wrinkle-resistant: recovers immediately from sitting in cars or flights',
      'Sold in 4-yard cuts (standard full Senator outfit with trousers) or wholesale rolls (30 yards)',
      'Pre-shrunk fabric base ready for direct tailor needlework',
    ],
    specifications: [
      { label: 'Blend', value: 'Cashmere Wool & High-Grade Spun Yarn' },
      { label: 'Standard Cut', value: '4 Yards (Complete Senator Suit + Trousers)' },
      { label: 'Width', value: '58 – 60 inches (Double width)' },
      { label: 'Weight', value: '290 GSM (Substantial body without heat)' },
      { label: 'Origin', value: 'Milled in England & Italy, Stocked in Lagos' },
    ],
    availableOptions: [
      {
        label: 'Colorway',
        choices: ['Midnight Black', 'Dark Charcoal Gray', 'Deep Navy Blue', 'Rich Caramel Khaki', 'Army Olive Green', 'Chocolate Brown'],
      },
      {
        label: 'Purchase Quantity',
        choices: ['4 Yards (1 Senator Suit)', '8 Yards (2 Senator Outfits)', '12 Yards (3 Suits / Family Pack)', 'Full 30-Yard Roll (Wholesale for Tailors)'],
      },
    ],
    salesType: 'Retail & Wholesale (4 Yards Cuts or 30-Yard Rolls)',
    stockStatus: 'In Stock (Molake House Balogun)',
    warrantyOrGuarantee: 'Authentic 7-Star Grade Guarantee — Non-Fading',
    bestFor: 'Master tailors, bespoke fashion houses, groomsmen outfits, executive Senator wear.',
  },

  // --- TAILOR MACHINES ---
  {
    id: 'tm-lockstitch-9800',
    sku: 'ASV-TM9800',
    name: 'Industrial Direct-Drive Lockstitch Sewing Machine (Emel / Juki Grade)',
    category: 'machines',
    subcategory: 'Lockstitch Tailor Machines',
    tagline: 'High-speed computerized servo motor with automatic needle positioning for master tailors',
    description:
      'The workhorse of Nigerian tailor workshops from Lagos Island to Kano. Powered by a heavy-duty 550W internal direct-drive silent servo motor that reduces electricity bills by 70% and runs effortlessly on small shop generators (I-pass-my-neighbor to 2.5KVA). Tested for sewing cashmere Senator fabrics, suiting wool, jeans, and lace linings.',
    image: '/src/assets/images/industrial_tailor_machine_1791037423139.jpg',
    gallery: [
      '/src/assets/images/industrial_tailor_machine_1791037423139.jpg',
      '/src/assets/images/heavy_duty_overlock_1791037456641.jpg',
      '/src/assets/images/cutting_table_machine_1791037505604.jpg',
    ],
    features: [
      'Internal 550W direct-drive servo motor (ultra-silent, saves up to 70% power)',
      'Works perfectly on domestic electricity and backup generator',
      'Automatic needle up/down positioning memory dial',
      'Speed adjustable from 200 to 5,000 stitches per minute with digital display',
      'Complete set: Machine head, reinforced steel stand, tabletop, drawer, and oil pump',
    ],
    specifications: [
      { label: 'Stitch Length', value: '0 – 5.0 mm adjustable' },
      { label: 'Needle System', value: 'DB x 1 (#9 - #18)' },
      { label: 'Motor Wattage', value: '550W Energy Saving Servo' },
      { label: 'Voltage', value: '220V / 50Hz (Generator Compatible)' },
      { label: 'Warranty', value: '12 Months Free Technical Service' },
    ],
    availableOptions: [
      {
        label: 'Fabric Class Setup',
        choices: ['Standard Suiting & Senator Fabrics', 'Heavy Suiting, Denim & Leather', 'Lightweight Lace & Chiffon'],
      },
      {
        label: 'Supply Bundle',
        choices: ['Complete Set (Head + Stand + Table + Motor)', 'Machine Head Only', 'Full Workshop Pack (+ Extra Bobbins, Needles & Oil)'],
      },
    ],
    salesType: 'Retail (Single Set) & Wholesale (Cartons for Resellers)',
    stockStatus: 'In Stock (Ready for Dispatch at Balogun)',
    warrantyOrGuarantee: '1-Year Balogun Workshop Service Warranty & Spare Parts Guarantee',
    bestFor: 'Fashion schools, bespoke tailors, garment mass-production hubs, and boutique designers.',
  },
  {
    id: 'tm-overlock-747f',
    sku: 'ASV-TM747F',
    name: 'Industrial 4-Thread Super High-Speed Overlock Weaving Machine',
    category: 'machines',
    subcategory: 'Overlock & Weaving Machines',
    tagline: 'Precision fabric edge trimming and seam reinforcement for clean Nigerian fashion finishing',
    description:
      'Essential for every tailor aiming for neat, non-fraying international standard seams. Features high-hardness alloy knives that cleanly slice fabric edges while dual needles weave 4 tight interlocking threads over the seam. Essential for kaftans, Senator trousers, agbada armholes, and ready-to-wear shirts.',
    image: '/src/assets/images/heavy_duty_overlock_1791037456641.jpg',
    gallery: [
      '/src/assets/images/heavy_duty_overlock_1791037456641.jpg',
      '/src/assets/images/industrial_tailor_machine_1791037423139.jpg',
      '/src/assets/images/cutting_table_machine_1791037505604.jpg',
    ],
    features: [
      'Dual-needle 4-thread overlock seam with differential feed mechanism',
      'High-speed 6,000 RPM operation with minimal vibration',
      'Automatic micro-lubrication system that protects fabrics from oil drips',
      'Sharp alloy steel cutting knife that trims multiple layers cleanly',
      'Comes with full table, motor, and multi-cone thread stand',
    ],
    specifications: [
      { label: 'Seam Width', value: '4.0 mm – 6.0 mm' },
      { label: 'Stitch Length', value: '0.8 – 3.8 mm' },
      { label: 'Motor', value: 'Energy-Saving Servo Motor' },
      { label: 'Table Size', value: '120 cm x 55 cm Industrial Wood Stand' },
    ],
    availableOptions: [
      {
        label: 'Configuration',
        choices: ['Complete Table & Motor Set', 'Head Unit Only'],
      },
      {
        label: 'Needle Type',
        choices: ['DC x 27 Standard Pack', 'DC x 27 Heavy Pack'],
      },
    ],
    salesType: 'Retail & Wholesale (Single Set or Bulk Shop Supply)',
    stockStatus: 'In Stock (Balogun West Warehouse)',
    warrantyOrGuarantee: '12-Month Mechanical Guarantee',
    bestFor: 'Seam finishing on lace, Senator wear, shirts, trousers, and knitwear.',
  },
  {
    id: 'tm-cutting-press-8',
    sku: 'ASV-CUT8',
    name: 'Industrial Fabric Rotary Cutter & Commercial Pressing Boiler Iron',
    category: 'machines',
    subcategory: 'Cutting & Finishing Equipment',
    tagline: 'Rapid multi-layer fabric cutting and dry steam iron station for razor-sharp Senator creases',
    description:
      'Boost tailoring workshop speed. The octagonal rotary cutting machine effortlessly slices through up to 25 layers of Senator fabric or lace at once, saving hours of manual scissors fatigue. Paired with a heavy industrial pressurized dry-steam boiler iron with Teflon shoe that presses lapels and trouser lines without burning or creating shine.',
    image: '/src/assets/images/cutting_table_machine_1791037505604.jpg',
    gallery: [
      '/src/assets/images/cutting_table_machine_1791037505604.jpg',
      '/src/assets/images/industrial_tailor_machine_1791037423139.jpg',
      '/src/assets/images/heavy_duty_overlock_1791037456641.jpg',
    ],
    features: [
      'Octagonal 100mm high-speed rotary steel blade with built-in stone sharpener',
      'High-capacity pressurized boiler iron with Teflon non-shine shoe plate',
      'Thermo-resistant silicone rest pad and ergonomic wooden grip',
      'Safety guard and finger protection shields',
    ],
    specifications: [
      { label: 'Cutting Height', value: 'Up to 27 mm fabric stack' },
      { label: 'Iron Power', value: '1600W Commercial Boiler' },
      { label: 'Blade Size', value: '100 mm Octagonal Alloy' },
      { label: 'Voltage', value: '220V Standard' },
    ],
    availableOptions: [
      {
        label: 'Equipment Selection',
        choices: ['Rotary Cutter + Industrial Steam Iron Combo', 'Rotary Fabric Cutter Only', 'Pressing Boiler Iron Only'],
      },
    ],
    salesType: 'Retail & Wholesale',
    stockStatus: 'In Stock at Molake House',
    warrantyOrGuarantee: '6 Months Full Workshop Warranty',
    bestFor: 'Cutting rooms, mass-production tailors, and busy alteration studios.',
  },

  // --- NIGERIAN & BESPOKE CLOTHING ---
  {
    id: 'cl-senator-kaftan-04',
    sku: 'ASV-SEN04',
    name: 'Regal Hand-Embroidered Senator Kaftan & Trousers Set',
    category: 'clothes',
    subcategory: 'Senator & Ceremonial Attire',
    tagline: 'Premium cashmere-wool blend with customized geometric chest embroidery and sharp trousers',
    description:
      'Handcrafted by seasoned master tailors using our finest 7-star Balogun cashmere material. Designed with a commanding mandarin collar, clean front placket featuring intricate tonal embroidery, and matching tailored trousers with side slant pockets and adjustable waistband.',
    image: '/src/assets/images/traditional_kaftan_wear_1791037494025.jpg',
    gallery: [
      '/src/assets/images/traditional_kaftan_wear_1791037494025.jpg',
      '/src/assets/images/tailored_clothing_fabric_1791037445225.jpg',
      '/src/assets/images/senator_cashmere_fabrics_1791037771667.jpg',
    ],
    features: [
      'Tailored from 7-star wrinkle-resistant cashmere wool blend',
      'Intricate precision embroidery using German Madeira thread',
      'Concealed snap-button front closure for seamless modern look',
      'Includes matching trousers with belt loops and phone pockets',
      'Available in standard sizes or custom bespoke measurements sent via WhatsApp',
    ],
    specifications: [
      { label: 'Fabric Composition', value: '7-Star Cashmere Wool Blend' },
      { label: 'Collar Type', value: 'Reinforced Mandarin / Nehru Collar' },
      { label: 'Trouser Cut', value: 'Slim-Tapered with Hem Extension' },
      { label: 'Embroidery Style', value: 'Tonal Geometric Placket' },
    ],
    availableOptions: [
      {
        label: 'Colorway',
        choices: ['Imperial White & Silver Accent', 'Midnight Obsidian Black', 'Royal Emerald Green', 'Caramel Champagne', 'Deep Wine Burgundy'],
      },
      {
        label: 'Sizing Preference',
        choices: ['Standard Medium (Chest 40)', 'Standard Large (Chest 42-44)', 'Standard X-Large (Chest 46)', 'Standard XX-Large (Chest 48+)', 'Send Custom Measurements on WhatsApp'],
      },
    ],
    salesType: 'Single Orders & Bulk Ceremonial Sets (Groomsmen & Chiefs)',
    stockStatus: 'Ready-to-Wear In Stock & Custom Tailoring in 5 Days',
    warrantyOrGuarantee: 'Guaranteed Master Fitting & Free Adjustment Support',
    bestFor: 'Weddings, VIP ceremonial banquets, Sunday service, chieftaincy titles, and high-profile events.',
  },
  {
    id: 'cl-bespoke-suit-01',
    sku: 'ASV-SUIT01',
    name: 'Master Tailored Two-Piece Super 150s Merino Wool Suit',
    category: 'clothes',
    subcategory: 'Corporate & Formal Suiting',
    tagline: 'Hand-canvassed construction with sculpted lapels and bespoke horn buttons',
    description:
      'Impeccably tailored from premium imported Super 150s Merino worsted wool. Features half-canvas internal chest piece that molds naturally to the wearer’s contours, pick-stitched lapels, functional cuffs, and double rear vents.',
    image: '/src/assets/images/tailored_clothing_fabric_1791037445225.jpg',
    gallery: [
      '/src/assets/images/tailored_clothing_fabric_1791037445225.jpg',
      '/src/assets/images/traditional_kaftan_wear_1791037494025.jpg',
      '/src/assets/images/senator_cashmere_fabrics_1791037771667.jpg',
    ],
    features: [
      'Half-canvas internal chest construction for natural drape',
      'Breathable Bemberg cupro interior lining',
      'Hand-sewn Milanese buttonhole on left lapel',
      'Unfinished trouser hems ready for precise tailoring or cuffs',
    ],
    specifications: [
      { label: 'Fabric Composition', value: '100% Super 150s Merino Wool' },
      { label: 'Fabric Weight', value: '280g / Four-Season' },
      { label: 'Lapel Style', value: 'Notch Lapel (Standard) / Peak Lapel (Custom)' },
    ],
    availableOptions: [
      {
        label: 'Colorway',
        choices: ['Midnight Navy', 'Charcoal Pinstripe', 'Classic Graphite Gray', 'Jet Black'],
      },
      {
        label: 'Size',
        choices: ['EU 46 (US 36)', 'EU 48 (US 38)', 'EU 50 (US 40)', 'EU 52 (US 42)', 'EU 54 (US 44)', 'EU 56 (US 46)', 'Custom Bespoke Measurement'],
      },
    ],
    salesType: 'Retail & Bulk Corporate Orders',
    stockStatus: 'Available for Fitting at Molake House',
    warrantyOrGuarantee: 'Master Fit Guarantee',
    bestFor: 'Corporate executives, bank managers, black-tie weddings, and international travel.',
  },

  // --- SHOES & FOOTWEAR (NIGERIAN ARTISAN & FORMAL) ---
  {
    id: 'sh-artisan-halfshoes-01',
    sku: 'ASV-HALF-01',
    name: 'Artisan Handcrafted Nigerian Cowhide Leather Half-Shoes & Slippers',
    category: 'shoes',
    subcategory: 'Traditional Half-Shoes & Loafers',
    tagline: 'Pure full-grain cowhide leather slip-on half-shoes designed for Senator wear and Agbada',
    description:
      'The indispensable footwear for complete Nigerian gentleman styling. Hand-lasted in Lagos from thick, supple local and Italian cowhide leather. Features an open-heel slip-on back for effortless slide-in comfort, padded memory-foam footbed, and durable non-slip rubber soles built for paved and unpaved terrain.',
    image: '/src/assets/images/leather_halfshoes_sandals_1791037784278.jpg',
    gallery: [
      '/src/assets/images/leather_halfshoes_sandals_1791037784278.jpg',
      '/src/assets/images/bespoke_leather_shoes_1791037434340.jpg',
      '/src/assets/images/monk_strap_shoes_1791037483800.jpg',
    ],
    features: [
      '100% genuine full-grain cowhide leather with hand-burnished finish',
      'Easy slip-on half-shoe / mule silhouette matching Senator and Kaftan styles',
      'High-density orthopedic inner footbed with arch support',
      'Reinforced non-slip rubber outsole with grooved grip',
      'Sweat-absorbent natural leather lining prevents odor in warm climates',
    ],
    specifications: [
      { label: 'Upper Material', value: 'Full-Grain Calf & Cowhide Leather' },
      { label: 'Outsole', value: 'Heavy Duty Textured Rubber Sole' },
      { label: 'Lining', value: 'Genuine Goat Leather Lining' },
      { label: 'Made In', value: 'Lagos Artisan Footwear Workshop' },
    ],
    availableOptions: [
      {
        label: 'Shoe Size (EU/NG)',
        choices: ['Size 40 (US 7)', 'Size 41 (US 8)', 'Size 42 (US 9)', 'Size 43 (US 10)', 'Size 44 (US 11)', 'Size 45 (US 12)', 'Size 46 (US 13)', 'Custom Wide Fit'],
      },
      {
        label: 'Leather Shade',
        choices: ['Burnished Cognac Brown', 'Jet Black Mirror Polish', 'Dark Espresso Brown', 'Deep Wine Oxblood'],
      },
    ],
    salesType: 'Retail (Single Pair) & Wholesale (Cartons of 12 Pairs)',
    stockStatus: 'In Stock (Balogun West)',
    warrantyOrGuarantee: '100% Genuine Leather Certificate Included',
    bestFor: 'Daily Senator pairing, Friday Juma’at, church service, weddings, and casual leisure.',
  },
  {
    id: 'sh-oxford-brogue-01',
    sku: 'ASV-SH-OX01',
    name: 'Handcrafted Goodyear-Welted Calfskin Oxford Brogue Shoes',
    category: 'shoes',
    subcategory: 'Formal Dress Shoes',
    tagline: 'Full-grain Italian calf leather with hand-burnished patina finish and oak-bark soles',
    description:
      'The pinnacle of formal cordwaining. Each pair is built on a sculpted wooden last with genuine Goodyear welted construction, allowing for infinite resoling over a lifetime of wear. Features delicate brogue perforations, closed lacing, and oak-bark tanned leather soles.',
    image: '/src/assets/images/bespoke_leather_shoes_1791037434340.jpg',
    gallery: [
      '/src/assets/images/bespoke_leather_shoes_1791037434340.jpg',
      '/src/assets/images/leather_halfshoes_sandals_1791037784278.jpg',
      '/src/assets/images/monk_strap_shoes_1791037483800.jpg',
    ],
    features: [
      '1.4mm thickness full-grain European calfskin leather',
      'Traditional Goodyear-welted construction with cork filler bed',
      'Solid oak-bark tanned leather outsoles with beveled waist',
      'Full natural calfskin leather lining for breathability and comfort',
      'Hand-applied multi-layered patina wax polish',
    ],
    specifications: [
      { label: 'Upper Leather', value: 'Full-Grain Calfskin' },
      { label: 'Sole Type', value: 'Oak-Bark Leather with Rubber Heel Tap' },
      { label: 'Construction', value: 'Goodyear Welt 360°' },
    ],
    availableOptions: [
      {
        label: 'Shoe Size',
        choices: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'],
      },
      {
        label: 'Color Finish',
        choices: ['Cognac Antique Burnished', 'Espresso Dark Brown', 'Polished Jet Black', 'Oxblood Burgundy'],
      },
    ],
    salesType: 'Retail & Wholesale',
    stockStatus: 'In Stock (Molake House)',
    warrantyOrGuarantee: '2-Year Craftsmanship Warranty on Stitching & Soles',
    bestFor: 'Corporate executive wear, wedding grooms, church service, and diplomatic functions.',
  },
  {
    id: 'sh-double-monk-03',
    sku: 'ASV-SH-MNK03',
    name: 'Italian Hand-Polished Double Monk Strap Shoes with Brass Buckles',
    category: 'shoes',
    subcategory: 'Monk Strap & Loafers',
    tagline: 'Chiselled toe profile with solid forged brass buckles and buffalo leather sole',
    description:
      'A commanding contemporary classic. The double monk strap provides the sleek formality of an oxford with effortless slip-on versatility. Crafted from drum-dyed calf leather with hand-finished edge bevels and solid brass buckles that will never tarnish.',
    image: '/src/assets/images/monk_strap_shoes_1791037483800.jpg',
    gallery: [
      '/src/assets/images/monk_strap_shoes_1791037483800.jpg',
      '/src/assets/images/leather_halfshoes_sandals_1791037784278.jpg',
      '/src/assets/images/bespoke_leather_shoes_1791037434340.jpg',
    ],
    features: [
      'Hand-cut and hand-lasted calfskin uppers',
      'Solid forged brass buckle hardware in antique gold finish',
      'Orthopedic memory foam under-heel pad for all-day comfort',
      'Channel-stitched leather sole protected against moisture',
    ],
    specifications: [
      { label: 'Closure', value: 'Double Brass Buckle Straps' },
      { label: 'Sole', value: 'Vegetable-Tanned Buffalo Leather Sole' },
      { label: 'Lining', value: 'Breathable Goat Leather Lining' },
    ],
    availableOptions: [
      {
        label: 'Size',
        choices: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'],
      },
      {
        label: 'Color Shade',
        choices: ['Honey Cognac', 'Dark Chocolate Brown', 'Piano Black'],
      },
    ],
    salesType: 'Retail & Wholesale',
    stockStatus: 'In Stock at Balogun',
    warrantyOrGuarantee: 'First Free Resole & Polish Service',
    bestFor: 'Modern business wear, tailored senator suits, and evening receptions.',
  },
];

export const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Balogun Stocks' },
  { id: 'materials', label: 'Clothing Materials & Lace' },
  { id: 'clothes', label: 'Senator & Suiting Attire' },
  { id: 'shoes', label: 'Leather Shoes & Half-Shoes' },
  { id: 'machines', label: 'Industrial Tailor Machines' },
] as const;

export const BALOGUN_SHOWROOM_STATS = [
  { value: '37/39 Balogun', label: 'Molake House, Lagos Island Hub' },
  { value: 'Wholesale & Retail', label: 'Yards, Bundles, Pairs & Cartons' },
  { value: '36 States + Export', label: 'Nationwide & DHL International' },
  { value: 'Direct WhatsApp', label: 'Immediate Best Price Quotations' },
];
