import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  ShoppingBag,
  Check,
  Copy,
  ShieldCheck,
  Truck,
  Globe,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Product } from '../types';
import { STORE_INFO } from '../data/products';
import {
  buildSingleProductWhatsAppMessage,
  formatDisplayPhone,
  openWhatsAppChat,
} from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToInquiry: (product: Product, options: Record<string, string>, quantity: number, note: string) => void;
  isInInquiryBag: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToInquiry,
  isInInquiryBag,
}) => {
  if (!isOpen || !product) return null;

  const gallery = product.galleryImages && product.galleryImages.length > 0 ? product.galleryImages : [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : ''
  );
  const [orderType, setOrderType] = useState<'Retail' | 'Wholesale'>('Retail');
  const [destination, setDestination] = useState<string>('Lagos Delivery');
  const [quantity, setQuantity] = useState<number>(product.minimumOrder || 1);
  const [customerNote, setCustomerNote] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const selectedOptions: Record<string, string> = {};
  if (selectedColor) selectedOptions['Color'] = selectedColor;

  const whatsappMessage = buildSingleProductWhatsAppMessage(
    product,
    selectedOptions,
    quantity,
    customerNote,
    orderType,
    destination
  );

  const handleSendWhatsApp = () => {
    openWhatsAppChat(STORE_INFO.whatsappClean, whatsappMessage);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddToBag = () => {
    onAddToInquiry(product, selectedOptions, quantity, customerNote);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[94vh] shadow-2xl border border-gray-200 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#0F2E22] text-white flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="text-[#D4AF37] uppercase tracking-wider">{STORE_INFO.storeName}</span>
            <span className="text-white/40">·</span>
            <span>37/39 Balogun West, Molake House</span>
            <span className="text-white/40">·</span>
            <span className="font-mono text-[#D4AF37] bg-white/10 px-2 py-0.5 rounded">SKU: {product.sku}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Jumia-Style Carousel */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Image Viewport */}
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-gray-200 aspect-4/3 shadow-sm select-none">
                <img
                  src={gallery[activeImageIndex]}
                  alt={`${product.name} - view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-stone-900 shadow-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-stone-900 shadow-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Multi-Angle Clickable Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {gallery.map((imgUrl, thumbIdx) => {
                    const isActive = thumbIdx === activeImageIndex;
                    return (
                      <button
                        key={thumbIdx}
                        type="button"
                        onClick={() => setActiveImageIndex(thumbIdx)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                          isActive
                            ? 'border-[#0F2E22] ring-2 ring-[#D4AF37] shadow-sm'
                            : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Thumbnail ${thumbIdx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Store Guarantees */}
              <div className="bg-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-[#D4AF37]/30 space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2 font-bold text-[#0F2E22]">
                  <ShieldCheck className="w-5 h-5 text-[#52B788] shrink-0" />
                  <span>Ayobami SAM Ventures Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  Direct inspection at 37/39 Balogun West, Molake House, Lagos Island. Wholesale & retail verification prior to waybill dispatch.
                </p>
                <div className="pt-2 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1.5 font-medium text-gray-600">
                    <Truck className="w-4 h-4 text-[#52B788]" />
                    <span>Nationwide 36 States Waybill</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-gray-600">
                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                    <span>DHL International Export</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product & Order Configuration */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0F2E22] bg-gray-100 px-2.5 py-0.5 rounded">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="text-xs font-black uppercase tracking-wider text-[#D4AF37] bg-[#0F2E22] px-2.5 py-0.5 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#0F2E22] leading-snug">
                  {product.name}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Price upon request block (strictly no amount) */}
              <div className="p-4 bg-[#FAF8F5] border border-[#D4AF37]/50 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-wider font-bold text-gray-500">
                    Balogun Showroom Price
                  </span>
                  <span className="text-xl font-black text-[#0F2E22]">
                    Price Upon Request
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#52B788] bg-[#52B788]/10 px-2.5 py-1 rounded-md border border-[#52B788]/30">
                    Retail & Wholesale Quote
                  </span>
                </div>
              </div>

              {/* Order Mode: Retail vs Wholesale */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Select Order Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderType('Retail')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer text-center ${
                      orderType === 'Retail'
                        ? 'bg-[#0F2E22] text-white border-[#0F2E22] shadow-xs'
                        : 'bg-stone-50 text-gray-700 border-gray-300 hover:bg-stone-100'
                    }`}
                  >
                    Retail (Single Unit / Yards)
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('Wholesale')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer text-center ${
                      orderType === 'Wholesale'
                        ? 'bg-[#0F2E22] text-white border-[#0F2E22] shadow-xs'
                        : 'bg-stone-50 text-gray-700 border-gray-300 hover:bg-stone-100'
                    }`}
                  >
                    Wholesale (Bales / Cartons)
                  </button>
                </div>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Delivery Destination
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Lagos Delivery / Pickup', 'Interstate (36 States)', 'International (Abroad)'].map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => setDestination(dest)}
                      className={`p-2 rounded-xl text-center border font-semibold transition-all cursor-pointer ${
                        destination === dest
                          ? 'bg-[#D4AF37]/20 text-[#0F2E22] border-[#D4AF37] font-bold'
                          : 'bg-stone-50 text-gray-600 border-gray-200'
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color choices if available */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Select Color / Finish
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                          selectedColor === c
                            ? 'bg-[#0F2E22] text-white border-[#0F2E22] font-bold'
                            : 'bg-white text-gray-700 border-gray-300'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Quantity ({product.unitLabel || 'units'})
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(product.minimumOrder || 1, q - 1))}
                      className="px-3.5 py-2 text-gray-700 hover:text-black font-bold text-base cursor-pointer"
                    >
                      −
                    </button>
                    <span className="px-5 py-2 text-base font-mono font-black text-[#0F2E22]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3.5 py-2 text-gray-700 hover:text-black font-bold text-base cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">
                    {orderType === 'Wholesale' ? 'Volume discount applied on WhatsApp' : 'Standard cut'}
                  </span>
                </div>
              </div>

              {/* Customer Sizing / Custom Note */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Custom Sizing or Special Instructions (Optional)
                </label>
                <textarea
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="e.g. Delivery to Lekki Lagos / Groomsmen sizes 42, 44 / Need 2 cartons of Peacock Iron"
                  rows={2}
                  className="w-full text-xs p-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F2E22] text-gray-800"
                />
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-[#0F2E22] text-sm sm:text-base font-black rounded-2xl shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-[#0F2E22]" />
                  <span>Send Order to WhatsApp ({STORE_INFO.phone1})</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleAddToBag}
                    className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-[#0F2E22] text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-4 h-4 text-[#52B788]" />
                        <span>Added to Bag!</span>
                      </>
                    ) : isInInquiryBag ? (
                      <>
                        <Check className="w-4 h-4 text-[#52B788]" />
                        <span>Update in Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Quote Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#52B788]" />
                        <span>Copied Text!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Collapsible live message preview */}
              <div className="pt-2 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="w-full flex items-center justify-between text-xs text-gray-500 hover:text-black transition-colors py-1 cursor-pointer"
                >
                  <span className="font-semibold">Preview prefilled WhatsApp text</span>
                  {showPreview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showPreview && (
                  <pre className="mt-2 p-3.5 bg-[#0F2E22] text-[#E0D6C8] text-xs rounded-xl whitespace-pre-wrap font-mono leading-relaxed border border-white/10">
                    {whatsappMessage}
                  </pre>
                )}
              </div>
            </div>

          </div>

          {/* Suitable For & Parameters */}
          {product.suitableFor && product.suitableFor.length > 0 && (
            <div className="pt-6 border-t border-gray-200 space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#0F2E22]">
                Recommended Use & Tailoring Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.suitableFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
