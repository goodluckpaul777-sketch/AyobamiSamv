import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { MainSection } from '../types';
import { openWhatsAppChat } from '../utils/whatsapp';

interface HeroProps {
  onSelectSection: (sec: MainSection) => void;
  onExploreAll: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectSection, onExploreAll, onContactClick }) => {
  const handleWhatsAppOrder = () => {
    openWhatsAppChat(
      STORE_INFO.whatsappClean,
      `Hello ${STORE_INFO.storeName}! I am visiting your website and would like to inquire & order products from your Balogun West inventory.`
    );
  };

  return (
    <section className="relative bg-[#0B2419] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Subtle background gold dot grid (as shown in Screenshot 1 & 2) */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        
        {/* Centered Golden AS Crown Emblem Logo (Screenshot 2) */}
        <div className="flex justify-center pt-2">
          <img
            src="/hero-logo.png"
            alt="Ayobami SAM Ventures Golden Crown Crest"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.35)]"
          />
        </div>

        {/* Pill Badge (Screenshot 2) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#081B13] text-[#D4AF37] border border-[#D4AF37]/50 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="tracking-wider uppercase text-[11px] sm:text-xs">
            AYOBAMI SAM VENTURES • 37/39 BALOGUN WEST, LAGOS
          </span>
        </div>

        {/* Big Bold Editorial Headline with Colored Keywords (Screenshot 2) */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14]">
          PREMIER NIGERIAN HUB FOR{' '}
          <span className="text-[#D4AF37]">CLOTHS</span>,{' '}
          <span className="text-[#D4AF37]">SHOES</span> &{' '}
          <span className="text-[#80C5A8]">TAILORING MACHINES</span>
        </h1>

        {/* Paragraph Text (Exact copy from Screenshot 2) */}
        <p className="text-sm sm:text-base lg:text-lg text-[#E0D6C8] font-normal leading-relaxed max-w-2xl mx-auto text-balance">
          Welcome to Ayobami SAM Ventures at 37/39 Balogun West, Molake House, Lagos. We supply authentic native wear, handcrafted Italian native leather shoes, and heavy-duty industrial sewing machines across Nigeria and overseas.
        </p>

        {/* Two Action Buttons (Screenshot 2) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 max-w-md mx-auto">
          {/* Button 1: Bright green rounded button */}
          <button
            onClick={handleWhatsAppOrder}
            className="w-full sm:w-auto flex-1 py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-[#0F2E22] text-xs sm:text-sm font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider"
          >
            <MessageCircle className="w-5 h-5 fill-[#0F2E22]" />
            <span>INQUIRE & ORDER ON WHATSAPP</span>
          </button>

          {/* Button 2: Dark button with gold border */}
          <button
            onClick={onExploreAll}
            className="w-full sm:w-auto flex-1 py-4 px-6 bg-transparent hover:bg-white/10 text-white border border-[#D4AF37]/60 text-xs sm:text-sm font-bold rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Browse Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

        {/* 3 Stats Columns (Screenshot 2) */}
        <div className="pt-8 sm:pt-12 grid grid-cols-3 divide-x divide-white/15 max-w-lg mx-auto text-center">
          <div className="space-y-0.5 px-2">
            <span className="font-serif text-xl sm:text-2xl font-black text-[#D4AF37] block">
              100%
            </span>
            <span className="text-[11px] sm:text-xs text-[#E0D6C8] font-medium block">
              Genuine Quality
            </span>
          </div>

          <div className="space-y-0.5 px-2">
            <span className="font-serif text-xl sm:text-2xl font-black text-[#D4AF37] block">
              24/7
            </span>
            <span className="text-[11px] sm:text-xs text-[#E0D6C8] font-medium block">
              Available 24/7
            </span>
          </div>

          <div className="space-y-0.5 px-2">
            <span className="font-serif text-xl sm:text-2xl font-black text-[#D4AF37] block">
              Direct
            </span>
            <span className="text-[11px] sm:text-xs text-[#E0D6C8] font-medium block">
              Retail & Wholesale
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
