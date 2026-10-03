import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { openWhatsAppChat } from '../utils/whatsapp';

interface EndSectionProps {
  onBrowseDepartments: () => void;
}

export const EndSection: React.FC<EndSectionProps> = ({ onBrowseDepartments }) => {
  const handleCall = () => {
    window.location.href = `tel:${STORE_INFO.phone1}`;
  };

  const handleWhatsApp = () => {
    openWhatsAppChat(
      STORE_INFO.whatsappClean,
      `Hello ${STORE_INFO.storeName}! I am reaching out regarding orders from your Balogun West store.`
    );
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-t border-gray-200">
      <div className="max-w-xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Lead Text (Exact copy from Screenshot 3) */}
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal text-center">
          customers across all 36 Nigerian states and worldwide. Whether you need 1 machine or 50 rolls of Ankara, we deliver guaranteed quality with honest business ethics.
        </p>

        {/* Card 1: Retail & Wholesale Flexibility (Screenshot 3) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
              Retail & Wholesale Flexibility
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Buy single pieces or bulk wholesale bundles with swift countrywide dispatch.
            </p>
          </div>
        </div>

        {/* Card 2: Physical Lagos Market Storefront with Location Image Background */}
        <div className="relative rounded-3xl p-5 sm:p-6 overflow-hidden border border-[#D4AF37]/50 shadow-md text-white group flex items-start gap-4">
          {/* Location Image Background */}
          <img
            src="/shop-location.jpg"
            alt="37/39 Balogun West, Molake House Storefront"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          />
          {/* Elegant Dark Overlay for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2419]/95 via-[#0B2419]/85 to-[#0B2419]/70 pointer-events-none" />

          {/* Foreground content */}
          <div className="relative z-10 w-11 h-11 rounded-2xl bg-[#D4AF37] text-[#0B2419] flex items-center justify-center shrink-0 shadow-md">
            <MapPin className="w-6 h-6 text-[#0B2419]" />
          </div>
          <div className="relative z-10 space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-serif font-black text-sm sm:text-base text-white leading-snug">
                Physical Lagos Market Storefront
              </h4>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-white/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                Molake House
              </span>
            </div>
            <p className="text-xs text-[#E0D6C8] leading-relaxed font-normal">
              Visit 37/39 Balogun West, Molake House, Lagos for direct in-person inspection and pickup.
            </p>
          </div>
        </div>

        {/* Two Big Action Buttons (Screenshot 3) */}
        <div className="space-y-3 pt-2">
          {/* Button 1: Solid Dark Green */}
          <button
            onClick={onBrowseDepartments}
            className="w-full py-4 px-6 bg-[#0B2419] hover:bg-[#123827] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-md transition-all cursor-pointer text-center"
          >
            Browse All 3 Departments
          </button>

          {/* Button 2: White with Dark Green Border */}
          <button
            onClick={handleCall}
            className="w-full py-4 px-6 bg-white hover:bg-gray-50 text-[#0B2419] border-2 border-[#0B2419] text-xs sm:text-sm font-bold rounded-2xl shadow-xs transition-all cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <span>Call: {STORE_INFO.phone1}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
