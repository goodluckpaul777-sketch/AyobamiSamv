import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ExternalLink, ShoppingBag, Truck } from 'lucide-react';
import { InquiryItem, MainSection } from '../types';
import { STORE_INFO } from '../data/products';
import { buildMultiItemWhatsAppMessage, openWhatsAppChat } from '../utils/whatsapp';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearBag: () => void;
  onBrowseCategory: (cat: MainSection) => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
  onBrowseCategory,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [generalNote, setGeneralNote] = useState('');
  const [orderType, setOrderType] = useState<'Retail' | 'Wholesale'>('Retail');

  if (!isOpen) return null;

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSendBatchWhatsApp = () => {
    if (items.length === 0) return;
    const msg = buildMultiItemWhatsAppMessage(items, customerName, deliveryCity, generalNote, orderType);
    openWhatsAppChat(STORE_INFO.whatsappClean, msg);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-[#0F2E22] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37] text-[#0F2E22] flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base leading-tight">Quote Bag</h3>
              <p className="text-xs text-[#D4AF37]">
                {STORE_INFO.storeName} · {totalItemsCount} item{totalItemsCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 stroke-1" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-[#0F2E22] text-base">Your Quote Bag is Empty</p>
                <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                  Add Swiss lace, Ankara wax, Senator materials, leather shoes, or Peacock irons to request an instant WhatsApp quotation.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2 w-full max-w-xs">
                <button
                  onClick={() => {
                    onBrowseCategory('cloths');
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#0F2E22] rounded-xl transition-colors cursor-pointer"
                >
                  Browse Fabrics & Textiles
                </button>
                <button
                  onClick={() => {
                    onBrowseCategory('shoes');
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#0F2E22] rounded-xl transition-colors cursor-pointer"
                >
                  Browse Shoes & Bags
                </button>
                <button
                  onClick={() => {
                    onBrowseCategory('tailoring-machine');
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#0F2E22] rounded-xl transition-colors cursor-pointer"
                >
                  Browse Tailoring Machines
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-500 pb-1 border-b border-gray-100">
                <span className="font-bold text-gray-700">Selected Stock Items</span>
                <button
                  onClick={onClearBag}
                  className="text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  Clear bag
                </button>
              </div>

              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setOrderType('Retail')}
                  className={`py-1.5 rounded-lg transition-all ${
                    orderType === 'Retail' ? 'bg-[#0F2E22] text-white shadow-xs' : 'text-gray-600'
                  }`}
                >
                  Retail Order
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('Wholesale')}
                  className={`py-1.5 rounded-lg transition-all ${
                    orderType === 'Wholesale' ? 'bg-[#0F2E22] text-white shadow-xs' : 'text-gray-600'
                  }`}
                >
                  Wholesale Bulk
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-stone-50 border border-gray-200 rounded-2xl space-y-2 text-xs"
                  >
                    <div className="flex gap-3 items-start">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 object-cover rounded-xl bg-stone-200 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-bold text-[#0F2E22] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-gray-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] font-mono text-gray-500">
                          {item.product.sku}
                        </p>

                        {item.selectedColor && (
                          <div className="text-[11px] text-gray-600 mt-0.5">
                            Color: <strong>{item.selectedColor}</strong>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quantity controller & Price note */}
                    <div className="flex items-center justify-between pt-1 border-t border-gray-200">
                      <span className="text-[11px] font-medium text-gray-600">
                        Price: <strong className="text-[#0F2E22]">Upon Request</strong>
                      </span>

                      <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-gray-600 hover:text-black font-bold"
                        >
                          −
                        </button>
                        <span className="px-2 py-0.5 font-mono font-bold text-[#0F2E22]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-gray-600 hover:text-black font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Info */}
              <div className="pt-3 border-t border-gray-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Customer & Delivery Location
                </h4>

                <div className="space-y-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="w-full text-xs px-3 py-2 bg-stone-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0F2E22]"
                  />

                  <input
                    type="text"
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    placeholder="City / State / Country (e.g. Lagos, Abuja, London)"
                    className="w-full text-xs px-3 py-2 bg-stone-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0F2E22]"
                  />

                  <textarea
                    value={generalNote}
                    onChange={(e) => setGeneralNote(e.target.value)}
                    placeholder="Order note (e.g. need delivery by Friday / bulk pricing inquiry)"
                    rows={2}
                    className="w-full text-xs p-2.5 bg-stone-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0F2E22]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#FAF8F5] border-t border-gray-200 space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Total Selected Items:</span>
              <span className="font-mono font-black text-[#0F2E22] text-sm">
                {totalItemsCount} units ({orderType})
              </span>
            </div>

            <div className="text-[11px] text-gray-500 text-center">
              Direct quote & delivery schedule provided via WhatsApp from 37/39 Balogun West.
            </div>

            <button
              onClick={handleSendBatchWhatsApp}
              className="w-full py-4 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-[#0F2E22] text-xs sm:text-sm font-black rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-[#0F2E22]" />
              <span>Send WhatsApp Inquiry ({totalItemsCount} Items)</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
