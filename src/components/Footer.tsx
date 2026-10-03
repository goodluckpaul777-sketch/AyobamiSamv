import React from 'react';
import { MessageCircle, MapPin, Settings, Globe, Truck, Phone, ExternalLink } from 'lucide-react';
import {
  formatDisplayPhone,
  openWhatsAppChat,
  SECONDARY_PHONE_NUMBER,
  FACEBOOK_URL,
  TIKTOK_URL,
} from '../utils/whatsapp';

interface FooterProps {
  whatsAppNumber: string;
  onOpenSettingsModal: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  whatsAppNumber,
  onOpenSettingsModal,
  onSelectCategory,
}) => {
  const handleChat = () => {
    openWhatsAppChat(
      whatsAppNumber,
      'Hello Ayobami SAM Venture! I am contacting your Balogun West shop from the website footer.'
    );
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Location (Stylish text logo without extra clutter) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ayobami Sam Ventures
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              37/39 Balogun West, Molake House, Lagos, Nigeria. Retail & wholesale Nigerian clothing materials, Swiss lace, Senator fabrics, handcrafted leather shoes, and industrial tailoring machines.
            </p>

            <div className="space-y-2 text-xs text-stone-300 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Molake House, 37/39 Balogun West, Lagos Island</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Calls: <a href="tel:08033810865" className="hover:text-white underline font-mono">08033810865</a> / <a href="tel:09150996348" className="hover:text-white underline font-mono">09150996348</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Interstate Delivery to all 36 States across Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Worldwide Shipping for UK, US, Canada & Diaspora</span>
              </div>
            </div>

            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleChat}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp: 08033810865</span>
              </button>
            </div>
          </div>

          {/* Quick Categories Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-100">
              Balogun Stocks
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('materials')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Swiss Voile Lace & Guinea Brocade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('materials')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  7-Star Cashmere Wool Senator Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('clothes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Embroidered Senator Kaftans & Agbada
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('shoes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Handcrafted Nigerian Leather Half-Shoes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('shoes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Goodyear-Welted Oxford Brogues
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('machines')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Industrial Lockstitch & Overlocks
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Quotation Policy */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-100">
              Retail & Wholesale WhatsApp Policy
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              We do not post fixed currency prices online to accommodate varying retail cuts (4 yds / 5 yds), bulk wholesale bales (50 yds+), currency exchange on imported equipment, and interstate waybill logistics.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenSettingsModal}
                className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <Settings className="w-4 h-4" />
                <span>Configure / Test Merchant WhatsApp Number</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Ayobami SAM Venture. 37/39 Balogun West, Molake House, Lagos, Nigeria.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Wholesale & Retail</span>
            <span aria-hidden="true">·</span>
            <span>08033810865 / 09150996348</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Export</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
