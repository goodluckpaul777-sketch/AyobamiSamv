import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO } from '../data/products';
import { buildSingleProductWhatsAppMessage, openWhatsAppChat } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToInquiry: (product: Product, quantity: number) => void;
  isInInquiryBag: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToInquiry,
  isInInquiryBag,
}) => {
  const gallery = product.galleryImages && product.galleryImages.length > 0 ? product.galleryImages : [product.image];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [quantity, setQuantity] = useState<number>(product.minimumOrder || 1);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = buildSingleProductWhatsAppMessage(
      product,
      {},
      quantity,
      '',
      'Retail',
      'Nigeria / Worldwide'
    );
    openWhatsAppChat(STORE_INFO.whatsappClean, msg);
  };

  const handleAddBag = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToInquiry(product, quantity);
  };

  return (
    <article
      onClick={() => onOpenDetails(product)}
      className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      {/* Top Section: Code Banner (Matching Screenshot 4) */}
      <div className="p-3.5 pb-0 flex items-center justify-between">
        <span className="bg-[#0B2419] text-[#52B788] font-mono text-[11px] font-black px-3 py-1 rounded-lg tracking-wider">
          CODE: {product.sku}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
          In Stock
        </span>
      </div>

      {/* Product Image Stage (Screenshot 4) */}
      <div className="relative aspect-square m-3.5 mb-2 rounded-2xl overflow-hidden bg-stone-100 select-none">
        <img
          src={gallery[currentImgIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          referrerPolicy="no-referrer"
        />

        {/* Carousel controls */}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-black shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-black shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded">
              📷 {currentImgIndex + 1}/{gallery.length}
            </div>
          </>
        )}

        {/* Wholesale & Retail Tag (Screenshot 4) */}
        <div className="absolute bottom-2 right-2">
          <span className="bg-[#D1FAE5] text-[#065F46] font-bold text-[10px] px-2.5 py-0.5 rounded-md border border-[#A7F3D0] shadow-2xs uppercase tracking-wider">
            WHOLESALE & RETAIL
          </span>
        </div>
      </div>

      {/* Product Details (Screenshot 4) */}
      <div className="p-4 pt-1 space-y-3.5">
        <h3 className="font-sans font-bold text-sm sm:text-base text-gray-900 line-clamp-2 leading-snug group-hover:text-[#0F2E22] transition-colors">
          {product.name}
        </h3>

        {/* Quantity Stepper (Screenshot 4) */}
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span className="font-medium text-gray-500">
            Qty ({product.unitLabel || 'units'}):
          </span>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => Math.max(1, q - 1));
              }}
              className="px-2.5 py-1 text-gray-700 hover:text-black font-bold text-sm hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1 font-mono font-bold text-gray-900 text-xs">
              {quantity}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => q + 1);
              }}
              className="px-2.5 py-1 text-gray-700 hover:text-black font-bold text-sm hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Main Action: Big Green Inquire on WhatsApp Button (Screenshot 4) */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#0F2E22] text-xs font-black rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4 fill-[#0F2E22]" />
          <span>INQUIRE ON WHATSAPP</span>
        </button>

        {/* Secondary Actions: [+ Add Bag] and [📷 Photos] (Screenshot 4) */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={handleAddBag}
            className={`py-2 px-2 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1 cursor-pointer ${
              isInInquiryBag
                ? 'bg-[#0F2E22] text-white border-[#0F2E22]'
                : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{isInInquiryBag ? 'In Bag' : '+ Add Bag'}</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="py-2 px-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Photos</span>
          </button>
        </div>
      </div>
    </article>
  );
};
