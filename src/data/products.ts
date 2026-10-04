import { Product, ReviewItem } from "../types";

export const STORE_INFO = {
  storeName: "Ayobami SAM Ventures",
  tagline: "Premier Nigerian Hub for Cloths, Shoes & Tailoring Machines",
  address: "37/39 Balogun West, Molake House, Lagos Island, Nigeria",
  marketLocation: "37/39 Balogun West, Molake House, Lagos",
  phone1: "08033810865",
  phone2: "09150996348",
  whatsapp: "08033810865",
  whatsappClean: "2348033810865",
  facebook: "https://www.facebook.com/share/1BeLmWzV8P/",
  tiktok: "https://tiktok.com/@ayobami.samuel31",
  themeColor: "#0F2E22",
  goldColor: "#D4AF37",
  logoUrl: "/hero-logo.png",
  openingHours: "Available 24/7",
  aboutText:
    "Welcome to Ayobami SAM Ventures at 37/39 Balogun West, Molake House, Lagos. We supply authentic native wear, handcrafted Italian native leather shoes, and heavy-duty industrial sewing machines across Nigeria and overseas.",
};

export const MAIN_SECTIONS = [
  {
    id: "cloths",
    deptNumber: "DEPARTMENT 01",
    name: "CLOTHS & FABRICS",
    slug: "cloths",
    subtitle: "HOLLANDADA, Pleasant by JOJO, BLISS & Aso-Oke Luxe",
    description:
      "Authentic HOLLANDADA wax prints, Pleasant by JOJO, BLISS 100% cotton, and Aso-Oke Luxe by the yard and wholesale bales from Balogun West.",
    linkText: "View Cloth Collections →",
    image: "/images/lsw_IMG-20260927-WA0239.jpg",
    subcategories: ["HOLLANDADA", "Pleasant by JOJO", "BLISS Cotton", "Aso-Oke Luxe"],
    features: ["100% Pure Cotton", "Original Dutch & African Wax", "Direct Wholesale Cuts", "Aso-Ebi Uniform Bundles"],
  },
  {
    id: "shoes",
    deptNumber: "DEPARTMENT 02",
    name: "SHOES & BAGS",
    slug: "shoes",
    subtitle: "Matching Shoes and Bags",
    description:
      "Matching shoes and bags — luxury Owambe crystal party heels, emerald & silver flats, and matching designer clutch bag sets with jeweled buckles.",
    linkText: "View Shoe Collections →",
    image: "/images/lsw_IMG-20260927-WA0047.jpg",
    subcategories: ["Matching shoes and bags", "2-in-1 Matching Sets", "Luxury Handbags", "Leather Flats"],
    features: ["Matching Shoe & Bag Sets", "Jeweled Buckles & Crystals", "Comfort Cushion Soles", "Bespoke Euro Sizing (40-46)"],
  },
  {
    id: "tailoring-machine",
    deptNumber: "DEPARTMENT 03",
    name: "TAILORING MACHINES",
    slug: "tailoring-machine",
    subtitle: "Industrial, Domestic & Pressing Gear",
    description:
      "Commercial direct-drive lockstitch sewing machines, Peacock heavy-duty pressing irons, 4-thread overlock sergers, and cutting equipment.",
    linkText: "View Machine Collections →",
    image: "/images/tt_images_14.jpg",
    subcategories: ["Tailoring Irons & Equipment", "Industrial Sewing Machines", "Domestic Machines & Accessories"],
    features: ["Heavy Duty Peacock Iron", "Direct-Drive Energy Saving", "Overlock Weaving 4-Thread", "12 Months Workshop Warranty"],
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    "id": "prod-purple-print",
    "sku": "#019001-1",
    "name": "HOLLANDADA",
    "mainSection": "cloths",
    "category": "Hollandada Real Wax",
    "categorySlug": "ankara",
    "description": "Purple & blue block print — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0239.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0239.jpg"
    ],
    "colors": [
      "Purple & blue block print"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.8,
    "reviewCount": 25,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-green-print",
    "sku": "#019001-2",
    "name": "HOLLANDADA",
    "mainSection": "cloths",
    "category": "Hollandada Real Wax",
    "categorySlug": "ankara",
    "description": "Green & yellow block print — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0236.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0236.jpg"
    ],
    "colors": [
      "Green & yellow block print"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 26,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018959-h",
    "sku": "#019001-3",
    "name": "Pleasant by JOJO 018959-H",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Red, teal & gold floral ovals · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0119.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0119.jpg"
    ],
    "colors": [
      "Red, teal & gold floral ovals"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 27,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018966-j",
    "sku": "#019001-4",
    "name": "Pleasant by JOJO 018966-J",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Brown & cream geometric · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0112.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0112.jpg"
    ],
    "colors": [
      "Brown & cream geometric"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.8,
    "reviewCount": 28,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018966-c",
    "sku": "#019001-5",
    "name": "Pleasant by JOJO 018966-C",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Royal blue & tan geometric · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0102.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0102.jpg"
    ],
    "colors": [
      "Royal blue & tan geometric"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 29,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018962-k",
    "sku": "#019001-6",
    "name": "Pleasant by JOJO 018962-K",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Red & black swirl · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0095.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0095.jpg"
    ],
    "colors": [
      "Red & black swirl"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 30,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018966-b",
    "sku": "#019001-7",
    "name": "Pleasant by JOJO 018966-B",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Green & tan geometric · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0074.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0074.jpg"
    ],
    "colors": [
      "Green & tan geometric"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 31,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018966-a",
    "sku": "#019001-8",
    "name": "Pleasant by JOJO 018966-A",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Coral, teal & brown geometric · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0065_2.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0065_2.jpg"
    ],
    "colors": [
      "Coral, teal & brown geometric"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 32,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018962-f",
    "sku": "#019001-9",
    "name": "Pleasant by JOJO 018962-F",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Orange & black swirl · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0090.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0090.jpg"
    ],
    "colors": [
      "Orange & black swirl"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 33,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018962-g",
    "sku": "#019001-10",
    "name": "Pleasant by JOJO 018962-G",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Green & black swirl · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0080.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0080.jpg"
    ],
    "colors": [
      "Green & black swirl"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 34,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018962-b",
    "sku": "#019001-11",
    "name": "Pleasant by JOJO 018962-B",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Teal & black swirl · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0048_1.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0048_1.jpg"
    ],
    "colors": [
      "Teal & black swirl"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 35,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018966-g",
    "sku": "#019001-12",
    "name": "Pleasant by JOJO 018966-G",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Orange, tan & brown geometric · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0038_1.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0038_1.jpg"
    ],
    "colors": [
      "Orange, tan & brown geometric"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 36,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018966-h",
    "sku": "#019001-13",
    "name": "Pleasant by JOJO 018966-H",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Pink & purple geometric · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0043_1.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0043_1.jpg"
    ],
    "colors": [
      "Pink & purple geometric"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 37,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018985-e",
    "sku": "#019001-14",
    "name": "Pleasant by JOJO 018985-E",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Purple & bronze patchwork · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0057_1.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0057_1.jpg"
    ],
    "colors": [
      "Purple & bronze patchwork"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 38,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018985-b",
    "sku": "#019001-15",
    "name": "Pleasant by JOJO 018985-B",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Multicolour patchwork · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0297_1.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0297_1.jpg"
    ],
    "colors": [
      "Multicolour patchwork"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 39,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018985-f",
    "sku": "#019001-16",
    "name": "Pleasant by JOJO 018985-F",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Yellow, purple & teal patchwork · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0022_1.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0022_1.jpg"
    ],
    "colors": [
      "Yellow, purple & teal patchwork"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 40,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018958-d",
    "sku": "#019001-17",
    "name": "Pleasant by JOJO 018958-D",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Orange & green leaves on forest · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0037.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0037.jpg"
    ],
    "colors": [
      "Orange & green leaves on forest"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 41,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018958-e",
    "sku": "#019001-18",
    "name": "Pleasant by JOJO 018958-E",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Coral & teal leaves on brown · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0175.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0175.jpg"
    ],
    "colors": [
      "Coral & teal leaves on brown"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 42,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-019004-d",
    "sku": "#019001-19",
    "name": "Pleasant by JOJO 019004-D",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Purple & orange florals · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0218.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0218.jpg"
    ],
    "colors": [
      "Purple & orange florals"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 43,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-019004-i",
    "sku": "#019001-20",
    "name": "Pleasant by JOJO 019004-I",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Green & orange florals · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0229.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0229.jpg"
    ],
    "colors": [
      "Green & orange florals"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 44,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-017210-bb",
    "sku": "#019001-21",
    "name": "Pleasant by JOJO 017210-BB",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Pink & plum batik · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0020.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0020.jpg"
    ],
    "colors": [
      "Pink & plum batik"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 25,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018959-c",
    "sku": "#019001-22",
    "name": "Pleasant by JOJO 018959-C",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Orange & rust floral ovals · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0247.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0247.jpg"
    ],
    "colors": [
      "Orange & rust floral ovals"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 26,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-pj-018959-k",
    "sku": "#019001-23",
    "name": "Pleasant by JOJO 018959-K",
    "mainSection": "cloths",
    "category": "Pleasant by JOJO",
    "categorySlug": "ankara",
    "description": "Grey, silver & gold floral ovals · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20260927-WA0277.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0277.jpg"
    ],
    "colors": [
      "Grey, silver & gold floral ovals"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 27,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020948-c",
    "sku": "#019001-24",
    "name": "BLISS 020948-C",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Cream & brown chevron · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0012.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0012.jpg"
    ],
    "colors": [
      "Cream & brown chevron"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 28,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020948-g",
    "sku": "#019001-25",
    "name": "BLISS 020948-G",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Black & olive chevron · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0044.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0044.jpg"
    ],
    "colors": [
      "Black & olive chevron"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 29,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020948-d",
    "sku": "#019001-26",
    "name": "BLISS 020948-D",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Black & white chevron · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0033.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0033.jpg"
    ],
    "colors": [
      "Black & white chevron"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 30,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020404-i",
    "sku": "#019001-27",
    "name": "BLISS 020404-I",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Magenta & purple patchwork · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0030.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0030.jpg"
    ],
    "colors": [
      "Magenta & purple patchwork"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 31,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020404-b",
    "sku": "#019001-28",
    "name": "BLISS 020404-B",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Royal blue & gold patchwork · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0027.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0027.jpg"
    ],
    "colors": [
      "Royal blue & gold patchwork"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 32,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020407-e",
    "sku": "#019001-29",
    "name": "BLISS 020407-E",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Blue, gold & white rings · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0018.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0018.jpg"
    ],
    "colors": [
      "Blue, gold & white rings"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 33,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020407-b",
    "sku": "#019001-30",
    "name": "BLISS 020407-B",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Orange & gold rings · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0013.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0013.jpg"
    ],
    "colors": [
      "Orange & gold rings"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 34,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020407-a",
    "sku": "#019001-31",
    "name": "BLISS 020407-A",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Green, orange & white rings · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0008.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0008.jpg"
    ],
    "colors": [
      "Green, orange & white rings"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 35,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020948-f",
    "sku": "#019001-32",
    "name": "BLISS 020948-F",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Black & royal blue chevron · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0039.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0039.jpg"
    ],
    "colors": [
      "Black & royal blue chevron"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 36,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-bliss-020404-j",
    "sku": "#019001-33",
    "name": "BLISS 020404-J",
    "mainSection": "cloths",
    "category": "BLISS Cotton",
    "categorySlug": "ankara",
    "description": "Green & red patchwork · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0028.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0028.jpg"
    ],
    "colors": [
      "Green & red patchwork"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 37,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019423-e",
    "sku": "#019001-34",
    "name": "ASO-OKE LUXE 019423-E",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Burgundy, black & gold plaid · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0035_1.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0035_1.jpg"
    ],
    "colors": [
      "Burgundy, black & gold plaid"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 38,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019701-nn",
    "sku": "#019001-35",
    "name": "ASO-OKE LUXE 019701-NN",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Purple, gold & black striped dots · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0037.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0037.jpg"
    ],
    "colors": [
      "Purple, gold & black striped dots"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 39,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019700-h",
    "sku": "#019001-36",
    "name": "ASO-OKE LUXE 019700-H",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Black, white & grey plaid · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0021.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0021.jpg"
    ],
    "colors": [
      "Black, white & grey plaid"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 40,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019423-h",
    "sku": "#019001-37",
    "name": "ASO-OKE LUXE 019423-H",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Navy, red & teal plaid · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0011.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0011.jpg"
    ],
    "colors": [
      "Navy, red & teal plaid"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 41,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019658-d",
    "sku": "#019001-38",
    "name": "ASO-OKE LUXE 019658-D",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Black & white geometric weave · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0010.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0010.jpg"
    ],
    "colors": [
      "Black & white geometric weave"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 42,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019701-o",
    "sku": "#019001-39",
    "name": "ASO-OKE LUXE 019701-O",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Pink, blue & gold striped dots · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0004.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0004.jpg"
    ],
    "colors": [
      "Pink, blue & gold striped dots"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 43,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019701-n",
    "sku": "#019001-40",
    "name": "ASO-OKE LUXE 019701-N",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Purple, white & gold striped dots · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0002.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0002.jpg"
    ],
    "colors": [
      "Purple, white & gold striped dots"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 44,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019701-l",
    "sku": "#019001-41",
    "name": "ASO-OKE LUXE 019701-L",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Orange & black striped dots · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0032.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0032.jpg"
    ],
    "colors": [
      "Orange & black striped dots"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 25,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019701-k",
    "sku": "#019001-42",
    "name": "ASO-OKE LUXE 019701-K",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Gold & black striped dots · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0015.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0015.jpg"
    ],
    "colors": [
      "Gold & black striped dots"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 5,
    "reviewCount": 26,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-aso-019701-p",
    "sku": "#019001-43",
    "name": "ASO-OKE LUXE 019701-P",
    "mainSection": "cloths",
    "category": "Aso-Oke Luxe",
    "categorySlug": "ankara",
    "description": "Royal blue & gold striped dots · 6 yards, 100% cotton — authentic 100% cotton premium material for bespoke native wear, kaftans, Senator styles, and Owambe celebrations.",
    "availableStock": 50,
    "minimumOrder": 1,
    "unitLabel": "yards",
    "image": "/images/lsw_IMG-20261003-WA0041.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20261003-WA0041.jpg"
    ],
    "colors": [
      "Royal blue & gold striped dots"
    ],
    "textureNote": "100% pure premium cotton that softens luxuriously after wash.",
    "origin": "Balogun West Stock",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 27,
    "suitableFor": [
      "Aso-Ebi Wedding Uniforms",
      "Traditional Native Wear",
      "Ceremonial Owambe Fashions",
      "Matching Couples Outfits"
    ]
  },
  {
    "id": "prod-shoe-green-flats",
    "sku": "#019008-1",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Emerald flats — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0041.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0041.jpg"
    ],
    "colors": [
      "Emerald flats"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 30,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-silver-flats",
    "sku": "#019008-2",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Silver flats — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0042.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0042.jpg"
    ],
    "colors": [
      "Silver flats"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 31,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-silver-set",
    "sku": "#019008-3",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Silver heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0049.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0049.jpg"
    ],
    "colors": [
      "Silver heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 32,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-gold-set",
    "sku": "#019008-4",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Gold heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0047.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0047.jpg"
    ],
    "colors": [
      "Gold heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 33,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-black-flats",
    "sku": "#019008-5",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Black flats — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0046.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0046.jpg"
    ],
    "colors": [
      "Black flats"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 34,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-red-flats",
    "sku": "#019008-6",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Red flats — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0044.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0044.jpg"
    ],
    "colors": [
      "Red flats"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 35,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-green-set",
    "sku": "#019008-7",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Green heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0051.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0051.jpg"
    ],
    "colors": [
      "Green heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 36,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-blue-set",
    "sku": "#019008-8",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Blue heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0053.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0053.jpg"
    ],
    "colors": [
      "Blue heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 37,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-royal-blue-set",
    "sku": "#019008-9",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Royal blue heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0176.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0176.jpg"
    ],
    "colors": [
      "Royal blue heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 38,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-pink-set",
    "sku": "#019008-10",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Hot pink heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0172.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0172.jpg"
    ],
    "colors": [
      "Hot pink heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 39,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-olive-set",
    "sku": "#019008-11",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Olive heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0183.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0183.jpg"
    ],
    "colors": [
      "Olive heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 40,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-shoe-fuchsia-set",
    "sku": "#019008-12",
    "name": "Matching shoes and bags",
    "mainSection": "shoes",
    "category": "Matching Shoes & Bags",
    "categorySlug": "matching-sets",
    "description": "Fuchsia red heel & bag set — luxury Owambe crystal party heels, flats, and matching designer clutch bag sets with jeweled buckles.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/lsw_IMG-20260927-WA0180.jpg",
    "galleryImages": [
      "/images/lsw_IMG-20260927-WA0180.jpg"
    ],
    "colors": [
      "Fuchsia red heel & bag set"
    ],
    "origin": "Handcrafted Italian Native Leather & Crystals",
    "isWholesaleAvailable": true,
    "wholesaleNote": "Size ranges 40 to 46 available. Custom shoe boxes provided.",
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 41,
    "isMatchingSet": true,
    "suitableFor": [
      "Owambe Weddings & Receptions",
      "Aso-Ebi Celebrations",
      "Sunday Best & Anniversaries"
    ]
  },
  {
    "id": "prod-industrial-straight-stitch",
    "sku": "#019002-1",
    "name": "Industrial Straight-Stitch Sewing Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "Original heavy-duty industrial straight-stitch sewing machine head with solid cast steel construction and smooth high-speed stitching for tailoring workshops.",
    "availableStock": 18,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_14.jpg",
    "galleryImages": [
      "/images/tt_images_14.jpg"
    ],
    "colors": [
      "Industrial Green Cast Steel"
    ],
    "origin": "Heavy Duty Metal Cast",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 35,
    "suitableFor": [
      "Tailoring Institutes",
      "Bespoke Tailors",
      "High-Speed Stitching"
    ]
  },
  {
    "id": "prod-sewing-machine-table-stand",
    "sku": "#019002-2",
    "name": "Sewing Machine with Table & Stand",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "Complete industrial straight-stitch sewing machine unit mounted on a heavy-duty wooden worktable with reinforced steel stand and foot treadle pedal.",
    "availableStock": 14,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_16.jpg",
    "galleryImages": [
      "/images/tt_images_16.jpg"
    ],
    "colors": [
      "Clean Industrial White / Wooden Table Stand"
    ],
    "origin": "Complete Table Unit",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 28,
    "suitableFor": [
      "Tailoring Studios",
      "Fashion Designers",
      "Professional Workshops"
    ]
  },
  {
    "id": "prod-home-sewing-machine-jl220",
    "sku": "#019002-3",
    "name": "Home Sewing Machine JL220",
    "mainSection": "tailoring-machine",
    "category": "Domestic Machines & Accessories",
    "categorySlug": "domestic-machines",
    "description": "Compact multi-stitch domestic sewing machine JL220 in mint green with built-in stitch selector dials, buttonholing, and reverse stitch function.",
    "availableStock": 20,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_15.jpg",
    "galleryImages": [
      "/images/tt_images_15.jpg"
    ],
    "colors": [
      "Mint Green / White"
    ],
    "origin": "Precision Home Craft",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 22,
    "suitableFor": [
      "Home Sewing",
      "Boutique Alterations",
      "Fashion Learners"
    ]
  },
  {
    "id": "prod-overlock-serger-machine",
    "sku": "#019002-4",
    "name": "Overlock Serger Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "Commercial multi-thread overlock serger machine for trimming edges, neatening seams, and preventing fraying on native lace, agbada, and dresses.",
    "availableStock": 12,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_9.jpg",
    "galleryImages": [
      "/images/tt_images_9.jpg"
    ],
    "colors": [
      "Commercial White"
    ],
    "origin": "Commercial Serger Weave",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 26,
    "suitableFor": [
      "Fray Prevention & Edge Weaving",
      "Native Agbada Sleeve Edging"
    ]
  },
  {
    "id": "prod-brother-lock-1034d",
    "sku": "#019002-5",
    "name": "Brother Lock 1034D Overlocker",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "High-precision 3/4 thread Brother Lock 1034D overlocker with color-coded lay-in threading, differential feed, and clean knife trimming mechanism.",
    "availableStock": 10,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_7.jpg",
    "galleryImages": [
      "/images/tt_images_7.jpg"
    ],
    "colors": [
      "Brother Classic White"
    ],
    "origin": "Brother Precision Engineering",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 33,
    "suitableFor": [
      "Professional Edge Finishing",
      "Knits & Wovens",
      "Tailoring Boutiques"
    ]
  },
  {
    "id": "prod-brother-cv3550-coverstitch",
    "sku": "#019002-6",
    "name": "Brother CV3550 Coverstitch Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "Commercial double-sided top-coverstitch and hem-stitching machine for professional hem finishes, neckline binding, and decorative flatlock seams.",
    "availableStock": 8,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_download_6.webp",
    "galleryImages": [
      "/images/tt_download_6.webp"
    ],
    "colors": [
      "Brother Studio White"
    ],
    "origin": "Double-Sided Coverstitch",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 18,
    "suitableFor": [
      "Double-Sided Coverstitching",
      "Top-Grade Hem Finishing",
      "Necklines & Cuffs"
    ]
  },
  {
    "id": "prod-jaktec-direct-drive",
    "sku": "#019002-7",
    "name": "Jaktec Direct-Drive Industrial Sewing Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "Ultra-silent energy-saving direct-drive industrial lockstitch sewing machine with built-in speed regulation, automatic needle positioning, and integrated LED needle light.",
    "availableStock": 15,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_3.jpg",
    "galleryImages": [
      "/images/tt_images_3.jpg"
    ],
    "colors": [
      "Clean Industrial White / Blue Trim"
    ],
    "origin": "Direct-Drive Technology",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 29,
    "suitableFor": [
      "High-Volume Garment Factories",
      "Bespoke Senator Suiting",
      "Speed Production"
    ]
  },
  {
    "id": "prod-classic-treadle-cabinet",
    "sku": "#019002-8",
    "name": "Classic Treadle Sewing Machine with Cabinet",
    "mainSection": "tailoring-machine",
    "category": "Domestic Machines & Accessories",
    "categorySlug": "domestic-machines",
    "description": "Authentic manual foot treadle sewing machine with rich polished wooden cabinet table, fold-out extension leaf, and storage drawers. Operates with zero electricity.",
    "availableStock": 16,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_2.jpg",
    "galleryImages": [
      "/images/tt_images_2.jpg"
    ],
    "colors": [
      "Black Cast Iron with Gold Filigree / Mahogany Wood"
    ],
    "origin": "Traditional Treadle Cast",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 42,
    "suitableFor": [
      "Zero-Electricity Stitching",
      "Classic Tailoring",
      "Reliable Workshop Backup"
    ]
  },
  {
    "id": "prod-singer-heritage-head",
    "sku": "#019002-9",
    "name": "Singer Heritage Sewing Machine Head",
    "mainSection": "tailoring-machine",
    "category": "Domestic Machines & Accessories",
    "categorySlug": "domestic-machines",
    "description": "Vintage-styled black Singer heritage manual lockstitch sewing machine head with ornate gold filigree detailing, manual flywheel, and hardened steel gears.",
    "availableStock": 14,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_download_2.webp",
    "galleryImages": [
      "/images/tt_download_2.webp"
    ],
    "colors": [
      "Gloss Black Cast Iron with Gold Detailing"
    ],
    "origin": "Singer Heritage Engineering",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 25,
    "suitableFor": [
      "Manual Flywheel Operation",
      "Treadle Conversion",
      "Sturdy Canvas & Cotton"
    ]
  },
  {
    "id": "prod-single-head-embroidery",
    "sku": "#019002-10",
    "name": "Single-Head Computerized Embroidery Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "Professional computerized single-head embroidery machine with color touchscreen controller, high-speed multi-needle embroidery hoop, and USB pattern transfer.",
    "availableStock": 5,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_4.jpg",
    "galleryImages": [
      "/images/tt_images_4.jpg"
    ],
    "colors": [
      "Industrial White / Green Hoop"
    ],
    "origin": "Computerized Precision Embroidery",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 15,
    "suitableFor": [
      "Agbada Neck Embroidery",
      "Corporate Logos",
      "Custom Monogramming"
    ]
  },
  {
    "id": "prod-dual-head-embroidery",
    "sku": "#019002-11",
    "name": "Dual-Head Embroidery Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machines",
    "categorySlug": "industrial-machines",
    "description": "Industrial dual-head computerized embroidery workstation for simultaneous twin-garment embroidery production with automated color change and thread trimmers.",
    "availableStock": 3,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_images_5.jpg",
    "galleryImages": [
      "/images/tt_images_5.jpg"
    ],
    "colors": [
      "Heavy-Duty Steel / Multi-Thread Spool Rack"
    ],
    "origin": "Industrial High-Capacity Embroidery",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 11,
    "suitableFor": [
      "Factory Scale Embroidery",
      "Agbada Chest Plackets",
      "Uniform Bulk Production"
    ]
  },
  {
    "id": "prod-butterfly-jh8190s",
    "sku": "#019002-12",
    "name": "Butterfly JH8190S Home Sewing Machine",
    "mainSection": "tailoring-machine",
    "category": "Domestic Machines & Accessories",
    "categorySlug": "domestic-machines",
    "description": "Versatile Butterfly JH8190S domestic zig-zag and straight-stitch electric sewing machine with built-in free arm for cuffs, drop-in bobbin, and foot speed pedal.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_1.jpg",
    "galleryImages": [
      "/images/tt_1.jpg"
    ],
    "colors": [
      "White / Butterfly Emblem"
    ],
    "origin": "Butterfly Authentic Brand",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 30,
    "suitableFor": [
      "Domestic Tailoring",
      "Buttonholes & Zippers",
      "Beginner to Intermediate"
    ]
  },
  {
    "id": "prod-electric-rotary-cutter",
    "sku": "#019002-13",
    "name": "Electric Rotary Fabric Cutter",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Commercial high-speed electric octagonal rotary blade fabric cutter with built-in sharpening stone. Slices smoothly through up to 15 layers of cloth simultaneously.",
    "availableStock": 22,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_download_5.webp",
    "galleryImages": [
      "/images/tt_download_5.webp"
    ],
    "colors": [
      "Industrial Teal / Steel Blade"
    ],
    "origin": "Commercial Cutting Tool",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 31,
    "suitableFor": [
      "Multi-Layer Fabric Stacks",
      "Fast Workshop Cutting",
      "Precision Pattern Slicing"
    ]
  },
  {
    "id": "prod-digital-heat-press",
    "sku": "#019002-14",
    "name": "Digital Heat Press Machine",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Flatbed digital clamshell heat press and interlining machine with dual digital temperature and countdown timer display for applying stiffening collar stays and transfers.",
    "availableStock": 15,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_download_4.webp",
    "galleryImages": [
      "/images/tt_download_4.webp"
    ],
    "colors": [
      "Matte Black Steel Frame"
    ],
    "origin": "Industrial Thermal Press",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 19,
    "suitableFor": [
      "Senator Collar Interlining",
      "Transfer Printing",
      "Crisp Pocket Cuffs"
    ]
  },
  {
    "id": "prod-eyelet-button-press",
    "sku": "#019002-15",
    "name": "Eyelet & Button Press Machine",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Heavy-duty cast metal lever hand press for eyelets, grommets, rivet studs, and fabric-wrapped bespoke buttons with universal die adapters.",
    "availableStock": 25,
    "minimumOrder": 1,
    "unitLabel": "machines",
    "image": "/images/tt_download.jpg",
    "galleryImages": [
      "/images/tt_download.jpg"
    ],
    "colors": [
      "Workshop Green Cast Iron"
    ],
    "origin": "Hand-Operated Die Press",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.8,
    "reviewCount": 14,
    "suitableFor": [
      "Fabric Buttons",
      "Shoe Eyelets",
      "Agbada Grommets"
    ]
  },
  {
    "id": "prod-peacock-iron",
    "sku": "#019002-16",
    "name": "Peacock Iron",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Original heavy-duty Peacock tailoring pressing iron with solid cast metal base, superior thermal retention, ergonomic heat-resistant wooden handle, and razor-sharp crease edge.",
    "availableStock": 30,
    "minimumOrder": 1,
    "unitLabel": "pieces",
    "image": "/peacock-iron.jpeg",
    "galleryImages": [
      "/peacock-iron.jpeg"
    ],
    "colors": [
      "Original Cast Charcoal Grey / Wood"
    ],
    "textureNote": "Solid heavy-gauge iron base with superior heat conductivity.",
    "origin": "Original Peacock Brand",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 48,
    "suitableFor": [
      "Senator Native Suit Creasing",
      "Heavy Suiting Wool Pressing",
      "Agbada & Kaftan Finishing"
    ]
  },
  {
    "id": "prod-professional-steam-iron",
    "sku": "#019002-17",
    "name": "Professional Steam Iron",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "High-output electric steam iron with ceramic non-stick soleplate, variable steam burst, and continuous precision temperature dial for delicate silks and heavy cottons.",
    "availableStock": 24,
    "minimumOrder": 1,
    "unitLabel": "pieces",
    "image": "/images/tt_images_20.jpg",
    "galleryImages": [
      "/images/tt_images_20.jpg"
    ],
    "colors": [
      "Midnight Black / Chrome"
    ],
    "origin": "Professional Steam System",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 27,
    "suitableFor": [
      "Wrinkle-Free Steam Pressing",
      "Wedding Gowns",
      "Cotton Wax Finishing"
    ]
  },
  {
    "id": "prod-electric-dry-iron",
    "sku": "#019002-18",
    "name": "Electric Dry Iron",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Reliable lightweight electric dry iron with polished aluminum soleplate, heat-resistant grip handle, and rapid heating coil for everyday pressing.",
    "availableStock": 35,
    "minimumOrder": 1,
    "unitLabel": "pieces",
    "image": "/images/tt_images_18.jpg",
    "galleryImages": [
      "/images/tt_images_18.jpg"
    ],
    "colors": [
      "White / Navy Blue Trim"
    ],
    "origin": "Precision Electric Coil",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.7,
    "reviewCount": 20,
    "suitableFor": [
      "Quick Everyday Pressing",
      "Domestic Care",
      "Budget-Friendly Workshop"
    ]
  },
  {
    "id": "prod-antique-charcoal-iron",
    "sku": "#019002-19",
    "name": "Antique Charcoal Iron",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Authentic solid cast-iron heavy charcoal pressing box iron with hinged lid, brass rooster locking latch, and curved heat-shield wooden handle. 100% electricity-free.",
    "availableStock": 18,
    "minimumOrder": 1,
    "unitLabel": "pieces",
    "image": "/images/tt_images_17.jpg",
    "galleryImages": [
      "/images/tt_images_17.jpg"
    ],
    "colors": [
      "Rustic Cast Metal / Brass Latch"
    ],
    "origin": "Traditional Charcoal Press",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 4.9,
    "reviewCount": 38,
    "suitableFor": [
      "Electricity-Free Pressing",
      "Deep Heavy Creases",
      "Traditional Tailoring"
    ]
  },
  {
    "id": "prod-sewing-thread-rack-60",
    "sku": "#019002-20",
    "name": "Sewing Thread Set with Rack — 60 Colours",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Full workshop wooden stand organizer equipped with 60 vibrant high-tensile spun polyester thread spools, covering every shade required for garment matching.",
    "availableStock": 40,
    "minimumOrder": 1,
    "unitLabel": "sets",
    "image": "/images/tt_images_12.jpg",
    "galleryImages": [
      "/images/tt_images_12.jpg"
    ],
    "colors": [
      "60-Color Complete Spectrum"
    ],
    "origin": "High-Tensile Spun Polyester",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": false,
    "rating": 4.9,
    "reviewCount": 30,
    "suitableFor": [
      "Tailoring Studios",
      "Color Matching",
      "Embroidery & Hemming"
    ]
  },
  {
    "id": "prod-gold-male-mannequin",
    "sku": "#019002-21",
    "name": "Gold Male Mannequin",
    "mainSection": "tailoring-machine",
    "category": "Tailoring Irons & Equipment",
    "categorySlug": "tailoring-irons",
    "description": "Luxury reflective mirror-finish metallic gold male display mannequins with stable square base. Ideal for showcasing tailored Senator suits, agbada, and bespoke menswear.",
    "availableStock": 15,
    "minimumOrder": 1,
    "unitLabel": "pieces",
    "image": "/images/tt_1790592631587.png",
    "galleryImages": [
      "/images/tt_1790592631587.png"
    ],
    "colors": [
      "Reflective Metallic Gold Mirror Finish"
    ],
    "origin": "Luxury Boutique Display",
    "isWholesaleAvailable": true,
    "badge": "WHOLESALE & RETAIL",
    "inStock": true,
    "isFeatured": true,
    "rating": 5,
    "reviewCount": 24,
    "suitableFor": [
      "Senator Suit Display",
      "Agbada Showcase",
      "Showroom Visual Merchandising"
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    name: "Adetoun Akinwale",
    location: "Lagos",
    role: "Aso Ebi Client",
    comment:
      "I got my Aso Ebi from Ayobami Sam Ventures and honestly, I really liked it. The material was nice and the colour was exactly what I wanted. I’ve already recommended them to my sister.",
    rating: 5,
    date: "Verified Buyer",
    verifiedBuyer: true,
    fabricBought: "Aso Ebi Fabric",
  },
  {
    name: "Morenike Adeyemi",
    location: "Ibadan",
    role: "Wedding Bride",
    comment:
      "I bought my wedding fabric here and I was happy with it. I wasn’t even sure which one to pick at first, but they helped me choose something really nice. The material came out beautifully after sewing.",
    rating: 5,
    date: "Verified Buyer",
    verifiedBuyer: true,
    fabricBought: "Wedding Fabric",
  },
  {
    name: "Temilade Adebayo",
    location: "Lagos Island",
    role: "Wedding Guest",
    comment:
      "I needed fabric and shoes for a wedding and wanted everything to match. I found what I was looking for at Ayobami Sam Ventures. The shoes went really well with the fabric and I got a lot of compliments that day.",
    rating: 5,
    date: "Verified Buyer",
    verifiedBuyer: true,
    fabricBought: "Matching Fabric & Shoes Set",
  },
  {
    name: "Abimbola Ogunleye",
    location: "Ogun State",
    role: "Sewing Business Owner",
    comment:
      "I bought a tailoring machine from them for my sewing business. So far, I’m happy with it. The machine works well and the buying process was straightforward. I’ll definitely buy from them again.",
    rating: 5,
    date: "Verified Buyer",
    verifiedBuyer: true,
    fabricBought: "Tailoring Machine",
  },
  {
    name: "Omowunmi Olatunji",
    location: "Abuja",
    role: "Frequent Client",
    comment:
      "I’ve bought materials from Ayobami Sam Ventures a few times now, especially for parties and family occasions. They have good options and the prices are fair. It’s one of the places I check first when I need fabric.",
    rating: 5,
    date: "Verified Buyer",
    verifiedBuyer: true,
    fabricBought: "Party & Occasion Fabrics",
  },
];
