import React from 'react';
import { ShoppingBag, MessageCircle, MapPin, Phone, Settings } from 'lucide-react';
import { formatDisplayPhone, openWhatsAppChat, SECONDARY_PHONE_NUMBER, FACEBOOK_URL, TIKTOK_URL } from '../utils/whatsapp';

interface HeaderProps {
  whatsAppNumber: string;
  inquiryItemCount: number;
  onOpenInquiryDrawer: () => void;
  onOpenSettingsModal: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  whatsAppNumber,
  inquiryItemCount,
  onOpenInquiryDrawer,
  onOpenSettingsModal,
  onSelectCategory,
}) => {
  const handleDirectWhatsApp = () => {
    openWhatsAppChat(
      whatsAppNumber,
      'Hello Ayobami SAM Venture! I am contacting your Balogun West shop from your website.'
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200">
      {/* Top micro-announcement banner with verified store address, phone numbers, and social links */}
      <div className="bg-stone-900 text-stone-200 text-[11px] sm:text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Location & Lines */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1 font-medium text-amber-300">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>37/39 Balogun West, Molake House, Lagos</span>
            </span>
            <span className="text-stone-500 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call: <a href="tel:08033810865" className="hover:text-white underline font-mono">08033810865</a> / <a href="tel:09150996348" className="hover:text-white underline font-mono">09150996348</a></span>
            </span>
          </div>

          {/* Social Links & WhatsApp Notice */}
          <div className="flex items-center gap-3 text-stone-300 ml-auto sm:ml-0">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white transition-colors font-medium flex items-center gap-1 hover:underline"
              title="Visit Ayobami SAM Venture on Facebook"
            >
              <span>Facebook</span>
            </a>
            <span className="text-stone-600">·</span>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white transition-colors font-medium flex items-center gap-1 hover:underline"
              title="Follow Ayobami Samuel on TikTok"
            >
              <span>TikTok</span>
            </a>
            <span className="text-stone-600 hidden md:inline">·</span>
            <span className="font-mono text-emerald-400 font-semibold hidden md:inline">
              WhatsApp: 08033810865
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Stylish "Ayobami Sam Ventures" text logo without unnecessary extra elements */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 hover:text-amber-950 transition-colors whitespace-nowrap"
        >
          Ayobami Sam Ventures
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-stone-700">
          <button
            onClick={() => onSelectCategory('materials')}
            className="hover:text-stone-900 transition-colors cursor-pointer py-1 hover:border-b-2 hover:border-stone-900"
          >
            Clothing Materials
          </button>
          <button
            onClick={() => onSelectCategory('clothes')}
            className="hover:text-stone-900 transition-colors cursor-pointer py-1 hover:border-b-2 hover:border-stone-900"
          >
            Senator Attire
          </button>
          <button
            onClick={() => onSelectCategory('shoes')}
            className="hover:text-stone-900 transition-colors cursor-pointer py-1 hover:border-b-2 hover:border-stone-900"
          >
            Leather Shoes
          </button>
          <button
            onClick={() => onSelectCategory('machines')}
            className="hover:text-stone-900 transition-colors cursor-pointer py-1 hover:border-b-2 hover:border-stone-900"
          >
            Tailor Machines
          </button>
          <a
            href="#showroom-info"
            className="hover:text-stone-900 transition-colors py-1 hover:border-b-2 hover:border-stone-900"
          >
            Balogun Store
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp Number Setting */}
          <button
            onClick={onOpenSettingsModal}
            title={`Active WhatsApp: ${formatDisplayPhone(whatsAppNumber)}`}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5 text-stone-500" />
            <span className="font-mono text-[11px] truncate max-w-[110px]">
              08033810865
            </span>
          </button>

          {/* Inquiry Quote Bag Trigger */}
          <button
            onClick={onOpenInquiryDrawer}
            className="relative p-2.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
            aria-label="View Inquiry Bag"
            title="View Quote Inquiry Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {inquiryItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-800 text-white font-mono text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {inquiryItemCount}
              </span>
            )}
          </button>

          {/* Primary WhatsApp Direct CTA */}
          <button
            onClick={handleDirectWhatsApp}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span className="hidden sm:inline">WhatsApp: 08033810865</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};
