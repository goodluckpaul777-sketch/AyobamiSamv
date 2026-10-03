import React, { useState } from 'react';
import { MessageCircle, X, ChevronUp, Wrench, Scissors, Sparkles, Send } from 'lucide-react';
import { formatDisplayPhone, openWhatsAppChat } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  whatsAppNumber: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsAppNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuickChat = (topic: string) => {
    let msg = `Hello Ayobami SAM Venture (Balogun Lagos)! 👋\n`;
    if (topic === 'materials') {
      msg += `I am looking to buy clothing materials & fabrics (Swiss lace / Senator cashmere). Please send me available colors, wholesale bundles and retail yard quotation.`;
    } else if (topic === 'machines') {
      msg += `I am looking to buy industrial tailor sewing machines. Please send me your price quotes and available models in your Balogun shop.`;
    } else if (topic === 'shoes') {
      msg += `I would like to inquire about your handcrafted Nigerian leather half-shoes, loafers, or formal dress shoes.`;
    } else {
      msg += `I have an inquiry for your store at 37/39 Balogun West, Molake House, Lagos.`;
    }
    openWhatsAppChat(whatsAppNumber, msg);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="p-3.5 bg-emerald-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <div>
                <p className="font-bold text-xs leading-tight">Ayobami SAM Venture</p>
                <p className="text-[10px] text-emerald-100">Balogun West, Lagos · Quick Reply</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 space-y-1.5 text-xs">
            <p className="text-[11px] text-stone-500 font-semibold px-1 pb-1">
              What are you looking for today?
            </p>

            <button
              onClick={() => handleQuickChat('materials')}
              className="w-full p-2.5 text-left hover:bg-stone-50 rounded-xl flex items-center gap-2.5 text-stone-800 transition-colors cursor-pointer group"
            >
              <Scissors className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="truncate font-medium">Clothing Materials & Swiss Lace</span>
            </button>

            <button
              onClick={() => handleQuickChat('machines')}
              className="w-full p-2.5 text-left hover:bg-stone-50 rounded-xl flex items-center gap-2.5 text-stone-800 transition-colors cursor-pointer group"
            >
              <Wrench className="w-4 h-4 text-stone-500 shrink-0" />
              <span className="truncate font-medium">Industrial Tailor Machines</span>
            </button>

            <button
              onClick={() => handleQuickChat('shoes')}
              className="w-full p-2.5 text-left hover:bg-stone-50 rounded-xl flex items-center gap-2.5 text-stone-800 transition-colors cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="truncate font-medium">Leather Shoes & Half-Shoes</span>
            </button>

            <button
              onClick={() => handleQuickChat('general')}
              className="w-full p-2.5 text-left hover:bg-stone-50 rounded-xl flex items-center gap-2.5 text-stone-800 transition-colors cursor-pointer group"
            >
              <Send className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="truncate font-medium">General Balogun Shop Inquiry</span>
            </button>
          </div>

          <div className="px-3 py-2 bg-stone-50 border-t border-stone-100 text-[11px] text-stone-600 text-center font-mono font-medium">
            WhatsApp: {formatDisplayPhone(whatsAppNumber)}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer group"
        aria-label="Connect on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white/20 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
