import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  ShoppingBag,
  Check,
  Copy,
  ShieldCheck,
  MapPin,
  Truck,
  Globe,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Product } from '../types';
import {
  buildSingleProductWhatsAppMessage,
  formatDisplayPhone,
  openWhatsAppChat,
  SHOP_LOCATION,
} from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  whatsAppNumber: string;
  onAddToInquiry: (product: Product, options: Record<string, string>, quantity: number, note: string) => void;
  isInInquiryBag: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  whatsAppNumber,
  onAddToInquiry,
  isInInquiryBag,
}) => {
  if (!isOpen || !product) return null;

  // Jumia-style carousel state
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Selected options state
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.availableOptions.forEach((opt) => {
      if (opt.choices.length > 0) {
        initial[opt.label] = opt.choices[0];
      }
    });
    return initial;
  });

  const [orderType, setOrderType] = useState<'Retail' | 'Wholesale'>('Retail');
  const [destination, setDestination] = useState<string>('Lagos Delivery');
  const [quantity, setQuantity] = useState(1);
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

  const handleOptionChange = (label: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [label]: choice }));
  };

  const whatsappMessage = buildSingleProductWhatsAppMessage(
    product,
    selectedOptions,
    quantity,
    customerNote,
    orderType,
    destination
  );

  const handleSendWhatsApp = () => {
    openWhatsAppChat(whatsAppNumber, whatsappMessage);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-stone-950/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[94vh] shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#FAF9F5] border-b border-stone-200 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 font-semibold">
            <span className="text-amber-900 font-bold uppercase tracking-wider">Ayobami SAM Venture</span>
            <span aria-hidden="true">·</span>
            <span>37/39 Balogun West, Molake House</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-stone-700 bg-stone-200/80 px-2 py-0.5 rounded">SKU: {product.sku}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/80 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Jumia-Style Product Image Carousel */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Image Stage */}
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 aspect-4/3 shadow-xs">
                <img
                  src={gallery[activeImageIndex]}
                  alt={`${product.name} - view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Previous / Next Arrow Controls */}
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

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-mono px-2.5 py-1 rounded-md z-10">
                      {activeImageIndex + 1} / {gallery.length} Photos
                    </div>
                  </>
                )}
              </div>

              {/* Jumia-Style Multi-Angle Clickable Thumbnail Strip */}
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
                            ? 'border-stone-900 ring-2 ring-stone-900/20 shadow-xs'
                            : 'border-stone-200 hover:border-stone-400 opacity-70 hover:opacity-100'
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

              {/* Balogun Assurance Box */}
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Ayobami SAM Venture Quality Guarantee</span>
                </div>
                <p className="leading-relaxed text-xs sm:text-sm">
                  {product.warrantyOrGuarantee || 'Direct inspection at 37/39 Balogun West, Molake House, Lagos.'}
                </p>
                <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1.5 text-stone-600 font-medium">
                    <Truck className="w-4 h-4 text-emerald-700" />
                    <span>Interstate Delivery across all 36 Nigerian States</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-600 font-medium">
                    <Globe className="w-4 h-4 text-amber-700" />
                    <span>DHL International Export</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Wide, Easy-to-Read Product & Purchase Module */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product Header */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  {product.category} · {product.subcategory}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug">
                  {product.name}
                </h2>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Price upon request block (strictly no amount) */}
              <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-wider font-bold text-amber-900">
                    Balogun Wholesale & Retail Price
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-stone-900">
                    Price Upon Request
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                    Direct WhatsApp Terms
                  </span>
                  <p className="text-[11px] text-stone-600 mt-1">Discounts on bulk bales & rolls</p>
                </div>
              </div>

              {/* Order Mode: Retail vs Wholesale */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Select Order Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderType('Retail')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer text-center ${
                      orderType === 'Retail'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    Retail (Single Yards / Pairs / Sets)
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('Wholesale')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer text-center ${
                      orderType === 'Wholesale'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    Wholesale (Bales / Rolls / Cartons)
                  </button>
                </div>
              </div>

              {/* Delivery Destination Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Delivery Destination
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Lagos Delivery / Pickup', 'Interstate (All 36 States)', 'International (UK/US/Abroad)'].map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => setDestination(dest)}
                      className={`p-2 rounded-xl text-center border font-semibold transition-all cursor-pointer leading-tight ${
                        destination === dest
                          ? 'bg-amber-100/90 text-amber-950 border-amber-800 font-bold'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Available Options */}
              {product.availableOptions.map((optGroup, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    {optGroup.label}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {optGroup.choices.map((choice, cIdx) => {
                      const isSelected = selectedOptions[optGroup.label] === choice;
                      return (
                        <button
                          key={cIdx}
                          type="button"
                          onClick={() => handleOptionChange(optGroup.label, choice)}
                          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-stone-900 text-white border-stone-900 shadow-xs font-semibold'
                              : 'bg-white text-stone-700 border-stone-300 hover:border-stone-400'
                          }`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Quantity Stepper */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Quantity Required ({product.category === 'materials' ? 'Yards / Bundles' : 'Units'})
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3.5 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 text-base font-bold transition-colors cursor-pointer"
                    >
                      −
                    </button>
                    <span className="px-5 py-2 text-base font-mono font-extrabold text-stone-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3.5 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 text-base font-bold transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-stone-600 font-medium">
                    {orderType === 'Wholesale' ? 'Bulk discount applied on WhatsApp' : 'Retail quantity'}
                  </span>
                </div>
              </div>

              {/* Client Notes / Sizing */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Custom Sizing or Special Instructions (Optional)
                </label>
                <textarea
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="e.g. Need 4 yards of Navy Blue delivered to Ikeja, Lagos, or urgent wedding Aso-Ebi for 6 people."
                  rows={2}
                  className="w-full text-xs sm:text-sm p-3 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all text-stone-800 leading-relaxed"
                />
              </div>

              {/* Primary Actions */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm sm:text-base font-bold rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>Send Inquiry to WhatsApp (Ayobami SAM Venture)</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleAddToBag}
                    className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Added to Bag!</span>
                      </>
                    ) : isInInquiryBag ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Update in Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Inquiry Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
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

              {/* Collapsible WhatsApp Live Message Preview */}
              <div className="pt-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="w-full flex items-center justify-between text-xs text-stone-500 hover:text-stone-900 transition-colors py-1 cursor-pointer"
                >
                  <span className="font-semibold">Preview message that will be sent on WhatsApp</span>
                  {showPreview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showPreview && (
                  <pre className="mt-2 p-3.5 bg-stone-900 text-stone-200 text-xs rounded-xl whitespace-pre-wrap font-mono leading-relaxed border border-stone-800">
                    {whatsappMessage}
                  </pre>
                )}
              </div>
            </div>
          </div>

          {/* Full Specifications Section: Wide, Easy-to-Read Table */}
          <div className="pt-6 border-t border-stone-200 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Product Specifications & Balogun Store Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  Key Quality Points
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-800 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  Specifications & Origin
                </h4>
                <div className="divide-y divide-stone-200 border border-stone-200 rounded-2xl overflow-hidden bg-stone-50">
                  {product.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="px-4 py-3 text-xs sm:text-sm flex justify-between gap-4">
                      <span className="text-stone-600 font-medium">{spec.label}</span>
                      <span className="text-stone-900 font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
