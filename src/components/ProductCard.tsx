import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
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
      {/* Top Section: Code Banner */}
      <div className="p-3.5 pb-0 flex items-center justify-between">
        <span className="bg-[#0B2419] text-[#52B788] font-mono text-[11px] sm:text-xs font-black px-2.5 sm:px-3 py-1 rounded-lg tracking-wider">
          CODE: {product.sku}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
          In Stock
        </span>
      </div>

      {/* Product Image Stage - Generous space for cloth and shoe details */}
      <div className="relative aspect-square m-3 sm:m-3.5 mb-2 rounded-2xl overflow-hidden bg-stone-100 select-none">
        <img
          src={gallery[currentImgIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          referrerPolicy="no-referrer"
        />

        {/* Carousel controls if there are two or more images */}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black shadow-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 z-10 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black shadow-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 z-10 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Subtle dots indicator (no 1/4 text) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-xs px-2 py-1 rounded-full pointer-events-none">
              {gallery.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentImgIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Wholesale & Retail Tag */}
        <div className="absolute bottom-2 right-2 z-10">
          <span className="bg-[#D1FAE5] text-[#065F46] font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md border border-[#A7F3D0] shadow-2xs uppercase tracking-wider">
            WHOLESALE & RETAIL
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3.5 sm:p-4 pt-1 space-y-3">
        <h3 className="font-sans font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 leading-snug group-hover:text-[#0F2E22] transition-colors">
          {product.name}
        </h3>

        {/* Quantity Stepper */}
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span className="font-medium text-gray-500 text-[11px] sm:text-xs">
            Qty ({product.unitLabel || 'units'}):
          </span>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => Math.max(1, q - 1));
              }}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-gray-700 hover:text-black font-bold text-sm hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-2 sm:px-3 py-0.5 font-mono font-bold text-gray-900 text-xs">
              {quantity}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((q) => q + 1);
              }}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-gray-700 hover:text-black font-bold text-sm hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Main Action: Big Green Order on WhatsApp Button (As Requested) */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full py-2.5 px-2 sm:px-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#0F2E22] text-[11px] sm:text-xs font-black rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4 fill-[#0F2E22]" />
          <span>ORDER ON WHATSAPP</span>
        </button>

        {/* Secondary Actions: [+ Add Bag] and [Details] */}
        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <button
            type="button"
            onClick={handleAddBag}
            className={`py-1.5 sm:py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold border transition-colors flex items-center justify-center gap-1 cursor-pointer ${
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
            className="py-1.5 sm:py-2 px-2 bg-stone-50 hover:bg-stone-100 text-gray-700 border border-gray-200 rounded-xl text-[11px] sm:text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Details</span>
          </button>
        </div>
      </div>
    </article>
  );
};
