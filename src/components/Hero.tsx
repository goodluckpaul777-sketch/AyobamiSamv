import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { BALOGUN_SHOWROOM_STATS } from '../data/products';
import { openWhatsAppChat } from '../utils/whatsapp';

interface HeroProps {
  whatsAppNumber: string;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ whatsAppNumber, onSelectCategory }) => {
  const handleGeneralInquiry = () => {
    openWhatsAppChat(
      whatsAppNumber,
      'Hello Ayobami SAM Venture! I am inquiring about your clothing materials, shoes, and tailor machines in Balogun West, Molake House, Lagos.'
    );
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-18 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Wide, Easy-to-Read Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Trust Header */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-900/90">
              <span className="flex items-center gap-1.5 bg-amber-100/70 text-amber-900 px-2.5 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5" /> 37/39 Balogun West, Molake House, Lagos
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-emerald-800 font-bold">Retail & Wholesale Supply</span>
            </div>

            {/* Large, Easy-to-read Hero Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.18] text-balance">
              Nigeria’s Hub for Premium Clothing Materials, Handcrafted Shoes & Industrial Tailor Machines.
            </h1>

            {/* Wide, High Legibility Subtitle */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
              Welcome to <strong className="font-bold text-stone-900">Ayobami SAM Venture</strong>. Based in the heart of Lagos Island at Molake House, Balogun West. We supply authentic Swiss voile lace, luxury 7-star cashmere Senator materials, artisan leather footwear, and heavy-duty industrial sewing machines to customers across Nigeria and worldwide.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-stone-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Retail (Yards/Pieces) & Bulk Wholesale (Bales)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Interstate Dispatch (36 States) + DHL Abroad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Direct WhatsApp Negotiation & Quotations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Physical Balogun Shop Inspection Available</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={handleGeneralInquiry}
                className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold rounded-xl shadow-xs transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Chat with Ayobami SAM Venture on WhatsApp</span>
              </button>

              <a
                href="#catalog"
                className="px-5 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Quick Category Buttons */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => onSelectCategory('materials')}
                className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-200 font-semibold text-stone-800 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                Lace & Senator Fabrics
              </button>
              <button
                onClick={() => onSelectCategory('clothes')}
                className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-200 font-semibold text-stone-800 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                Bespoke Senator Attire
              </button>
              <button
                onClick={() => onSelectCategory('shoes')}
                className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-200 font-semibold text-stone-800 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                Artisan Leather Footwear
              </button>
              <button
                onClick={() => onSelectCategory('machines')}
                className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-200 font-semibold text-stone-800 rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                Industrial Tailor Machines
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 group">
              <img
                src="/src/assets/images/luxury_lace_materials_1791037752206.jpg"
                alt="Luxury Swiss Voile Lace & Guinea Brocade at Ayobami SAM Venture, Balogun West Lagos"
                className="w-full h-auto object-cover aspect-4/3 transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent pointer-events-none" />

              {/* In-Hero Floating Label */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      Balogun West Store · Lagos Island
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Ayobami SAM Venture Showroom
                    </h3>
                  </div>
                  <button
                    onClick={handleGeneralInquiry}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Inquire on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Proof Metrics */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {BALOGUN_SHOWROOM_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
