import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { openWhatsAppChat } from '../utils/whatsapp';

interface EndSectionProps {
  onBrowseDepartments: () => void;
}

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=37%2F39+Balogun+West+Molake+House+Lagos+Island+Nigeria';

export const EndSection: React.FC<EndSectionProps> = ({ onBrowseDepartments }) => {
  const handleCall = () => {
    window.location.href = `tel:${STORE_INFO.phone1}`;
  };

  const handleOpenGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Lead Text */}
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal text-center">
          customers across all 36 Nigerian states and worldwide. Whether you need 1 machine or 50 rolls of Ankara, we deliver guaranteed quality with honest business ethics.
        </p>

        {/* Card 1: Retail & Wholesale Flexibility */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-sm flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
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

        {/* Card 2: Physical Lagos Market Storefront - EXPANDED & CLICKS TO LIVE GOOGLE MAPS (Requirement #3) */}
        <div
          onClick={handleOpenGoogleMaps}
          className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/80 shadow-xl text-white group flex flex-col justify-between min-h-[300px] sm:min-h-[360px] p-6 sm:p-8 cursor-pointer hover:border-[#D4AF37] transition-all"
          title="Click to open live Google Maps location"
        >
          {/* Expanded Storefront Photo in the Background */}
          <img
            src="/shop-location.jpg"
            alt="37/39 Balogun West, Molake House Storefront"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          {/* Crisp, Balanced Overlay to ensure the shop image is highly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2419] via-[#0B2419]/50 to-black/20" />

          {/* Top Bar inside Location Card */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 bg-[#0B2419]/90 backdrop-blur-xs text-[#D4AF37] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 text-xs font-black uppercase tracking-wider shadow-sm">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>PHYSICAL BALOGUN MARKET SHOWROOM</span>
            </div>
            <span className="bg-[#25D366] text-[#0B2419] text-[10px] font-black px-2.5 py-1 rounded-full uppercase shadow-xs flex items-center gap-1">
              <span>LIVE MAP</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>

          {/* Bottom Content inside Location Card */}
          <div className="relative z-10 space-y-2 pt-16">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-black text-xl sm:text-2xl text-white drop-shadow-sm leading-tight">
                  Physical Lagos Market Storefront
                </h4>
                <ExternalLink className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs sm:text-sm text-[#F4EBD9] leading-relaxed font-medium drop-shadow-xs max-w-lg">
                Visit <strong>37/39 Balogun West, Molake House, Lagos</strong> for direct in-person inspection of our Ankara, lace, Italian shoes, and industrial tailoring machines.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 bg-[#D4AF37] hover:bg-white text-[#0B2419] font-black rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>

              <span className="inline-flex items-center gap-1.5 text-white/90 bg-black/40 backdrop-blur-xs px-3 py-2 rounded-xl text-[11px] font-medium">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </span>
            </div>
          </div>
        </div>

        {/* Two Big Action Buttons */}
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
            <Phone className="w-4 h-4 text-[#0B2419]" />
            <span>Call: {STORE_INFO.phone1}</span>
          </button>
        </div>

        {/* Static Action Buttons Bar (Sits under, not floating) */}
        <div className="pt-4 pb-2">
          <div className="bg-white rounded-3xl p-4 border border-gray-200 shadow-sm flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {/* Phone Call */}
            <a
              href={`tel:${STORE_INFO.phone1}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0B2419] hover:bg-[#153e2c] text-[#D4AF37] font-bold text-xs transition-transform hover:scale-105 shadow-xs"
              title={`Call: ${STORE_INFO.phone1}`}
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Us</span>
            </a>

            {/* Live Google Maps */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs transition-transform hover:scale-105 shadow-xs"
              title="Open Live Google Maps"
            >
              <MapPin className="w-4 h-4 text-amber-700" />
              <span>Live Google Maps</span>
            </a>

            {/* Facebook */}
            <a
              href={STORE_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs transition-transform hover:scale-105 shadow-xs"
              title="Facebook Page"
            >
              <span className="font-serif text-sm font-black">f</span>
              <span>Facebook</span>
            </a>

            {/* TikTok */}
            <a
              href={STORE_INFO.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black hover:bg-neutral-800 text-white font-bold text-xs transition-transform hover:scale-105 shadow-xs"
              title="TikTok Account"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 9.75 5.37 6.28 6.28 0 0 0 2.94-5.37V8.87a8.28 8.28 0 0 0 3.76.9V6.69z" />
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
