import React, { useState } from 'react';
import { MessageCircle, Plus, Eye, Check, ChevronLeft, ChevronRight, MapPin, Truck } from 'lucide-react';
import { Product } from '../types';
import { buildSingleProductWhatsAppMessage, openWhatsAppChat } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  whatsAppNumber: string;
  onOpenDetails: (product: Product) => void;
  onAddToInquiry: (product: Product) => void;
  isInInquiryBag: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  whatsAppNumber,
  onOpenDetails,
  onAddToInquiry,
  isInInquiryBag,
}) => {
  // Jumia-style multi-image carousel index
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleInstantWhatsAppInquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultOptions: Record<string, string> = {};
    product.availableOptions.forEach((opt) => {
      if (opt.choices.length > 0) {
        defaultOptions[opt.label] = opt.choices[0];
      }
    });

    const msg = buildSingleProductWhatsAppMessage(
      product,
      defaultOptions,
      1,
      '',
      'Retail',
      'Nigeria / Worldwide'
    );
    openWhatsAppChat(whatsAppNumber, msg);
  };

  const handleBagClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToInquiry(product);
  };

  return (
    <article
      onClick={() => onOpenDetails(product)}
      className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Jumia-Style Product Image Carousel Stage */}
      <div className="relative aspect-4/3 bg-stone-100 overflow-hidden select-none">
        <img
          src={gallery[currentImgIndex]}
          alt={`${product.name} - view ${currentImgIndex + 1}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
        />

        {/* Carousel Previous / Next Arrows (Jumia-style) */}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Carousel Dot Indicators */}
            <div className="absolute bottom-2.5 left-1/2 -translate-y-0 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-stone-900/60 backdrop-blur-xs px-2 py-0.5 rounded-full">
              {gallery.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    dotIdx === currentImgIndex ? 'bg-white w-3' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Sales Type Badge (Retail & Wholesale) */}
        <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide z-10">
          {product.salesType || 'Retail & Wholesale'}
        </div>

        {/* Balogun Stock Status */}
        <div className="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded-md z-10">
          In Stock (Balogun)
        </div>
      </div>

      {/* Product Content: Wide, Easy-to-Read Text */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Category & SKU metadata */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-semibold">
            <span className="text-amber-900">{product.category}</span>
            <span aria-hidden="true">·</span>
            <span>{product.subcategory}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-stone-400">{product.sku}</span>
          </div>

          {/* High-Legibility Title (Wide & Clear) */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-950 transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>

          {/* Tagline / Key Specs summary */}
          <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed font-normal">
            {product.tagline}
          </p>

          {/* Delivery & Logistics notes */}
          <div className="flex items-center gap-3 text-xs text-stone-500 pt-1">
            <span className="flex items-center gap-1 font-medium text-stone-700">
              <Truck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Lagos Dispatch & Interstate Delivery</span>
            </span>
          </div>
        </div>

        {/* Pricing Notice & Primary WhatsApp Inquire Button (Strictly No Amount) */}
        <div className="pt-4 border-t border-stone-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="block text-[11px] uppercase font-bold tracking-wider text-stone-500">
                Balogun Showroom Price
              </span>
              <span className="text-base sm:text-lg font-extrabold text-stone-900">
                Price On Request
              </span>
            </div>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded">
              Wholesale & Retail
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleInstantWhatsAppInquire}
              className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Inquire WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(product);
              }}
              className="w-full py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span>View & Order</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
