import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ExternalLink, ShoppingBag, Truck, MapPin } from 'lucide-react';
import { InquiryItem } from '../types';
import { buildMultiItemWhatsAppMessage, openWhatsAppChat } from '../utils/whatsapp';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  whatsAppNumber: string;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearBag: () => void;
  onBrowseCategory: (cat: string) => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  whatsAppNumber,
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
    openWhatsAppChat(whatsAppNumber, msg);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-[#FAF9F5] border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base leading-tight">Balogun Quote Bag</h3>
              <p className="text-xs text-stone-600">
                Ayobami SAM Venture · {totalItemsCount} item{totalItemsCount !== 1 ? 's' : ''} queued
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 stroke-1" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-stone-900 text-base">Your Quote Bag is Empty</p>
                <p className="text-xs sm:text-sm text-stone-500 max-w-xs leading-relaxed">
                  Add Swiss lace, Senator fabrics, shoes, or tailor machines to request a consolidated quotation from our Balogun store.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2 w-full max-w-xs">
                <button
                  onClick={() => {
                    onBrowseCategory('materials');
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-xs sm:text-sm font-semibold text-stone-800 rounded-xl transition-colors cursor-pointer"
                >
                  Browse Clothing Materials
                </button>
                <button
                  onClick={() => {
                    onBrowseCategory('clothes');
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-xs sm:text-sm font-semibold text-stone-800 rounded-xl transition-colors cursor-pointer"
                >
                  Browse Senator Attire
                </button>
                <button
                  onClick={() => {
                    onBrowseCategory('shoes');
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-xs sm:text-sm font-semibold text-stone-800 rounded-xl transition-colors cursor-pointer"
                >
                  Browse Leather Shoes
                </button>
                <button
                  onClick={() => {
                    onBrowseCategory('machines');
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-xs sm:text-sm font-semibold text-stone-800 rounded-xl transition-colors cursor-pointer"
                >
                  Browse Tailor Machines
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 pb-1 border-b border-stone-100">
                <span className="font-semibold text-stone-700">Selected Stock Items</span>
                <button
                  onClick={onClearBag}
                  className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  Clear bag
                </button>
              </div>

              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setOrderType('Retail')}
                  className={`py-1.5 rounded-lg transition-all ${
                    orderType === 'Retail' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                  }`}
                >
                  Retail Quotation
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('Wholesale')}
                  className={`py-1.5 rounded-lg transition-all ${
                    orderType === 'Wholesale' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
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
                    className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-2 text-xs"
                  >
                    <div className="flex gap-3 items-start">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 object-cover rounded-lg bg-stone-200 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-bold text-stone-900 truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-stone-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] font-mono text-stone-500">
                          {item.product.sku}
                        </p>

                        {/* Selected options */}
                        {Object.entries(item.selectedOptions).length > 0 && (
                          <div className="text-[11px] text-stone-600 mt-1 line-clamp-1">
                            {Object.entries(item.selectedOptions)
                              .map(([k, v]) => `${k}: ${v}`)
                              .join(' | ')}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quantity controller & Price note */}
                    <div className="flex items-center justify-between pt-1 border-t border-stone-200/60">
                      <span className="text-[11px] font-medium text-stone-600">
                        Price: <strong className="text-stone-900">On Request</strong>
                      </span>

                      <div className="flex items-center border border-stone-300 rounded-md bg-white">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-stone-600 hover:text-stone-900 font-bold"
                        >
                          −
                        </button>
                        <span className="px-2 py-0.5 font-mono font-bold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-stone-900 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Buyer Contact info for the WhatsApp message */}
              <div className="pt-3 border-t border-stone-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Buyer Details for Direct Quote
                </h4>

                <div className="space-y-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name / Business Name"
                    className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-800"
                  />

                  <input
                    type="text"
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    placeholder="Delivery Location (e.g. Lagos, Abuja, London, US)"
                    className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-800"
                  />

                  <textarea
                    value={generalNote}
                    onChange={(e) => setGeneralNote(e.target.value)}
                    placeholder="Special request (e.g. wholesale bale discount, wedding deadline, waybill arrangement)"
                    rows={2}
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-800"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#FAF9F5] border-t border-stone-200 space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span>Total Selected Items:</span>
              <span className="font-mono font-bold text-stone-900 text-sm">
                {totalItemsCount} units ({orderType})
              </span>
            </div>

            <div className="text-[11px] text-stone-500 text-center">
              Direct quote & delivery schedule provided via WhatsApp from Balogun West.
            </div>

            <button
              onClick={handleSendBatchWhatsApp}
              className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Send WhatsApp Inquiry ({totalItemsCount} Items)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
