export type MainSection = 'cloths' | 'shoes' | 'tailoring-machine';

export interface Product {
  id: string;
  sku: string;
  name: string;
  mainSection: MainSection;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  galleryImages: string[];
  colors?: string[];
  availableStock?: number;
  minimumOrder?: number;
  unitLabel?: string;
  badge?: string;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  suitableFor?: string[];
  textureNote?: string;
  origin?: string;
  isWholesaleAvailable?: boolean;
  wholesaleNote?: string;
  isMatchingSet?: boolean;
}

export interface InquiryItem {
  product: Product;
  selectedColor?: string;
  selectedSize?: string;
  quantity: number;
  customNote?: string;
}

export interface FabricCalculatorItem {
  outfitName: string;
  gender: 'Men' | 'Women';
  recommendedYards: number;
  suggestedFabrics: string[];
  description: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  verifiedBuyer: boolean;
  fabricBought: string;
}
