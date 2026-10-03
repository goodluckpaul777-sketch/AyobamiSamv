import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { openWhatsAppChat } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  whatsAppNumber: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsAppNumber }) => {
  const handleWhatsAppClick = () => {
    openWhatsAppChat(
      whatsAppNumber,
      `Hello ${STORE_INFO.storeName}! I am contacting your Balogun West shop from the website.`
    );
  };

  return (
    /* ONLY WhatsApp icon moves along when scrolling, positioned in the BOTTOM LEFT corner (without the "1" badge) */
    <div className="fixed bottom-5 left-5 z-50 group">
      <button
        onClick={handleWhatsAppClick}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer active:scale-95"
        title="Chat on WhatsApp (08033810865)"
        aria-label="Chat on WhatsApp"
      >
        {/* Soft pulsing green halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="relative w-7 h-7 fill-white text-white drop-shadow-xs" />
      </button>

      {/* Floating Tooltip Label on Desktop */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex items-center bg-[#0B2419] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap border border-[#D4AF37]/40 pointer-events-none transition-all">
        <span>Order on WhatsApp (08033810865)</span>
      </div>
    </div>
  );
};
