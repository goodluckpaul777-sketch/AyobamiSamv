import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { openWhatsAppChat } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  whatsAppNumber: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsAppNumber }) => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  const handleWhatsAppClick = () => {
    openWhatsAppChat(
      whatsAppNumber,
      `Hello ${STORE_INFO.storeName}! I am contacting your Balogun West shop from the website.`
    );
  };

  return (
    <>
      {/* Floating Bottom Action Dock (Matching Screenshot 3) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-md w-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-3 py-2 shadow-2xl border border-gray-200/80 flex items-center gap-2.5 sm:gap-3.5">
          
          {/* 1. Phone Call Button: Dark green rounded square (Screenshot 3) */}
          <a
            href={`tel:${STORE_INFO.phone1}`}
            className="w-11 h-11 rounded-2xl bg-[#0B2419] hover:bg-[#153e2c] text-[#D4AF37] flex items-center justify-center transition-transform hover:scale-105 shadow-xs shrink-0"
            title={`Call: ${STORE_INFO.phone1}`}
            aria-label="Direct Phone Call"
          >
            <Phone className="w-5 h-5 text-[#D4AF37]" />
          </a>

          {/* 2. Facebook Button: Blue circle (Screenshot 3) */}
          <a
            href={STORE_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center font-black text-lg transition-transform hover:scale-105 shadow-xs shrink-0"
            title="Facebook Page"
            aria-label="Facebook"
          >
            <span className="font-serif">f</span>
          </a>

          {/* 3. TikTok Button: Black rounded square (Screenshot 3) */}
          <a
            href={STORE_INFO.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-xs shrink-0"
            title="TikTok Account"
            aria-label="TikTok"
          >
            {/* TikTok Musical Note Logo */}
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 9.75 5.37 6.28 6.28 0 0 0 2.94-5.37V8.87a8.28 8.28 0 0 0 3.76.9V6.69z" />
            </svg>
          </a>

          {/* 4. Storefront Location Button: Round photo with map pin overlay (Screenshot 3) */}
          <button
            onClick={() => setShowLocationModal(true)}
            className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-xs hover:scale-105 transition-transform shrink-0 cursor-pointer"
            title="View Showroom Location"
            aria-label="Showroom Location"
          >
            <img
              src="/shop-location.jpg"
              alt="Balogun Store"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/hero-logo.png';
              }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
          </button>

          {/* 5. WhatsApp Floating Button: Bright green circle with white speech bubble (Screenshot 3) */}
          <button
            onClick={handleWhatsAppClick}
            className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer shrink-0"
            title="Chat on WhatsApp (08033810865)"
            aria-label="WhatsApp Order"
          >
            <MessageCircle className="w-6 h-6 fill-white text-white" />
          </button>

        </div>
      </div>

      {/* Showroom Location Popup */}
      {showLocationModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowLocationModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-sm w-full p-6 space-y-4 shadow-2xl border border-gray-100 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-[#D4AF37]">
              <img src="/shop-location.jpg" alt="Storefront" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-1">
              <h4 className="font-serif font-black text-lg text-[#0F2E22]">
                Ayobami SAM Ventures
              </h4>
              <p className="text-xs text-gray-600 font-medium">
                {STORE_INFO.address}
              </p>
            </div>

            <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl">
              Mon – Sat: 8:00 AM – 6:00 PM<br />
              Direct pickup & physical fabric/shoe inspection welcome.
            </div>

            <button
              onClick={() => {
                setShowLocationModal(false);
                handleWhatsAppClick();
              }}
              className="w-full py-3 bg-[#25D366] text-[#0F2E22] font-black text-xs rounded-xl"
            >
              Contact on WhatsApp for Directions
            </button>
          </div>
        </div>
      )}
    </>
  );
};
