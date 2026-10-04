import React from 'react';
import { MapPin, Clock, ShieldCheck, Truck, Globe, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import { formatDisplayPhone, openWhatsAppChat, SECONDARY_PHONE_NUMBER, FACEBOOK_URL, TIKTOK_URL } from '../utils/whatsapp';

interface ShowroomInfoProps {
  whatsAppNumber: string;
}

export const ShowroomInfo: React.FC<ShowroomInfoProps> = ({ whatsAppNumber }) => {
  const handleShowroomVisitInquiry = () => {
    openWhatsAppChat(
      whatsAppNumber,
      'Hello Ayobami SAM Venture! I would like to schedule a visit to your shop at 37/39 Balogun West, Molake House, Lagos.'
    );
  };

  return (
    <section id="showroom-info" className="py-16 sm:py-20 bg-[#FAF9F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <p className="text-xs uppercase tracking-wider font-bold text-amber-900">
            Balogun West Commercial Hub · Lagos Island
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Visit Our Store at 37/39 Balogun West, Molake House
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Ayobami SAM Venture welcomes wholesale merchants, fashion designers, wedding Aso-Ebi committees, and tailors. Whether you visit in person or order through WhatsApp, we guarantee authentic materials and safe delivery.
          </p>
        </div>

        {/* 3 Pillars of Balogun Venture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Fabrics & Materials */}
          <div className="p-6 sm:p-7 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-900 font-bold text-lg">
              ✂️
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Authentic Swiss Voile & Senator Fabrics
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every yard is inspected for colorfastness, tight weaves, and authentic Swiss/Italian milling. Sold in 4-yard/5-yard retail cuts or complete bales for major ceremonies.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800">
              Physical fabric feel & touch testing available in-store.
            </div>
          </div>

          {/* Pillar 2: Artisan Footwear */}
          <div className="p-6 sm:p-7 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 font-bold text-lg">
              👞
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Pure Nigerian Leather Footwear
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Hand-lasted cowhide leather half-shoes and Goodyear-welted oxfords built to complement Nigerian Senator kaftans and formal suits with all-day comfort.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800">
              Sizes 30 to 45 with custom wide-foot adjustments.
            </div>
          </div>

          {/* Pillar 3: Industrial Tailor Machines */}
          <div className="p-6 sm:p-7 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 font-bold text-lg">
              ⚙️
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Tested Industrial Tailoring Equipment
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Direct-drive lockstitch and 4-thread overlock sergers bench-tested on generators before dispatch. 1-year service warranty with genuine spare parts.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800">
              Setup support for new and expanding fashion ateliers.
            </div>
          </div>
        </div>

        {/* Physical Store Box with Full Contact Details */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <MapPin className="w-4 h-4" />
              <span>Physical Store Address & Contacts</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ayobami SAM Venture
            </h3>
            <p className="text-sm sm:text-base text-stone-300 font-medium">
              37/39 Balogun West, Molake House, Lagos Island, Lagos State, Nigeria.
            </p>
            
            {/* Phone & Social Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-stone-200">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: <a href="tel:08033810865" className="font-mono text-white underline">08033810865</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Alternative: <a href="tel:09150996348" className="font-mono text-white underline">09150996348</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: <strong className="font-mono text-white">08033810865</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4 pt-2 text-xs">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-200 transition-colors flex items-center gap-1.5"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-200 transition-colors flex items-center gap-1.5"
              >
                <span>TikTok (@ayobami.samuel31)</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={handleShowroomVisitInquiry}
              className="px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-xs transition-colors flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Connect with Ayobami SAM on WhatsApp</span>
            </button>
            <div className="text-center text-xs text-stone-400 font-mono">
              WhatsApp: 08033810865
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
