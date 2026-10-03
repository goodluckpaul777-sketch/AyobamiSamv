import React from 'react';
import { ArrowRight, Scissors } from 'lucide-react';
import { MAIN_SECTIONS } from '../data/products';
import { MainSection } from '../types';

interface ThreePillarsSectionProps {
  selectedSection: MainSection | 'all';
  onSelectSection: (sec: MainSection) => void;
}

export const ThreePillarsSection: React.FC<ThreePillarsSectionProps> = ({
  selectedSection,
  onSelectSection,
}) => {
  return (
    <section className="relative bg-[#0B2419] py-12 sm:py-16 overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Subtle gold dot pattern (Screenshot 1) */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Section Header (Screenshot 4) */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block">
            OUR THREE CORE SPECIALTIES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight">
            EXPLORE BY DEPARTMENT
          </h2>
          <p className="text-xs sm:text-sm text-[#E0D6C8] font-normal leading-relaxed max-w-lg mx-auto">
            Whether you need authentic Nigerian fabrics, luxury handcrafted shoes, or commercial sewing machines, Ayobami SAM Ventures has you covered.
          </p>
        </div>

        {/* The 3 Department Cards (Exact design & text from Screenshot 1) */}
        <div className="space-y-6">
          
          {/* Card 1: CLOTHS & FABRICS (Screenshot 1) */}
          <div
            onClick={() => onSelectSection('cloths')}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 transition-all hover:-translate-y-1 cursor-pointer group space-y-4"
          >
            <div className="space-y-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-[#C5A059] block">
                DEPARTMENT 01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2E22] tracking-tight">
                CLOTHS & FABRICS
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              Authentic native wear, crisp cashmere Senator materials, polished Atiku, and royal Aso-Oke by the yard and wholesale rolls.
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F2E22] group-hover:text-[#C5A059] transition-colors">
                View Cloth Collections
              </span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: SHOES & BAGS (Female shoe sticker and luxury bag) */}
          <div
            onClick={() => onSelectSection('shoes')}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 transition-all hover:-translate-y-1 cursor-pointer group space-y-4"
          >
            {/* Female Shoe & Luxury Bag Stickers in rounded box */}
            <div className="w-16 h-14 rounded-2xl bg-[#FEF3C7]/70 border border-[#FDE68A] flex items-center justify-center gap-1.5 text-2xl shadow-2xs">
              <span role="img" aria-label="female high heel shoe" className="text-2xl hover:scale-110 transition-transform">👠</span>
              <span role="img" aria-label="luxury handbag" className="text-xl hover:scale-110 transition-transform">👜</span>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-[#C5A059] block">
                DEPARTMENT 02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2E22] tracking-tight">
                SHOES & BAGS
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              Luxury women’s Owambe crystal party heels, coordinated 2-in-1 matching designer clutch bags, elegant bridal stilettos, and handcrafted Italian leather native loafers.
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F2E22] group-hover:text-[#C5A059] transition-colors">
                View Shoe Collections
              </span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: TAILORING MACHINES (Screenshot 1) */}
          <div
            onClick={() => onSelectSection('tailoring-machine')}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 transition-all hover:-translate-y-1 cursor-pointer group space-y-4"
          >
            {/* Scissors / Wrench icon in light blue rounded box (Screenshot 1) */}
            <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0369A1] shadow-2xs">
              <Scissors className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-[#C5A059] block">
                DEPARTMENT 03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2E22] tracking-tight">
                TAILORING MACHINES
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              Commercial direct-drive lockstitch sewing machines, Peacock heavy-duty pressing irons, 4-thread overlock sergers, and cutting equipment.
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F2E22] group-hover:text-[#C5A059] transition-colors">
                View Machine Collections
              </span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
