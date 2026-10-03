export type ProductCategory = 'materials' | 'machines' | 'clothes' | 'shoes';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[]; // For Jumia-style image carousel and multi-angle thumbnails
  aspectRatio?: '4:3' | '16:9' | '1:1';
  features: string[];
  specifications: ProductSpecification[];
  availableOptions: {
    label: string;
    choices: string[];
  }[];
  condition?: string;
  warrantyOrGuarantee?: string;
  bestFor: string;
  salesType?: string; // e.g., 'Retail & Wholesale (Yards, Bundles & Cartons)'
  stockStatus?: string; // e.g., 'In Stock (Balogun Lagos Warehouse)'
  origin?: string;
}

export interface InquiryItem {
  product: Product;
  selectedOptions: Record<string, string>;
  quantity: number;
  customNote?: string;
}

export interface StoreContact {
  phone: string;
  displayPhone: string;
  businessName: string;
  shopAddress: string;
  city: string;
  operatingHours: string;
}

