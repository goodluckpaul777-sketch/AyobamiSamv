import React, { useState } from 'react';
import { ShoppingBag, Shield, Menu, X, MessageCircle, Phone, MapPin, ExternalLink, Search } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { MainSection } from '../types';
import { openWhatsAppChat } from '../utils/whatsapp';

interface HeaderProps {
  activeTab: 'home' | 'catalog' | 'about' | 'contact';
  setActiveTab: (tab: 'home' | 'catalog' | 'about' | 'contact') => void;
  activeSection: MainSection | 'all';
  setActiveSection: (sec: MainSection | 'all') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  inquiryItemCount: number;
  onOpenInquiryBag: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
  inquiryItemCount,
  onOpenInquiryBag,
  onOpenAdmin,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTrustModalOpen, setIsTrustModalOpen] = useState(false);

  const handleSelectSection = (sec: MainSection) => {
    setActiveSection(sec);
    setActiveTab('catalog');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    openWhatsAppChat(
      STORE_INFO.whatsappClean,
      `Hello ${STORE_INFO.storeName}! I am contacting your Balogun West shop from your website.`
    );
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
          
          {/* Left Brand Identity: Crest + Title + Molake House Address (Exact layout as Screenshot 1 & 2) */}
          <button
            onClick={() => {
              setActiveTab('home');
              setActiveSection('all');
              setSearchQuery('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer group"
          >
            <img
              src="/hero-logo.png"
              alt="Ayobami SAM Ventures Crest"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold text-[#0F2E22] tracking-tight leading-none group-hover:text-[#D4AF37] transition-colors">
                Ayobami SAM
              </span>
              <span className="font-serif text-base sm:text-lg font-bold text-[#0F2E22] tracking-tight leading-tight group-hover:text-[#D4AF37] transition-colors">
                Ventures
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=37%2F39+Balogun+West+Molake+House+Lagos+Island+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#C5A059] hover:text-[#0F2E22] leading-tight pt-0.5 transition-colors flex items-center gap-1 group/addr"
                title="Open live Google Maps location"
              >
                <span>37/39 BALOGUN WEST,</span>
                <span className="block">• MOLAKE HOUSE, LAGOS</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/addr:opacity-100" />
              </a>
            </div>
          </button>

          {/* Desktop Direct Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-700">
            <button
              onClick={() => handleSelectSection('cloths')}
              className={`hover:text-[#0F2E22] transition-colors cursor-pointer ${
                activeSection === 'cloths' && activeTab === 'catalog' ? 'text-[#0F2E22] font-black underline' : ''
              }`}
            >
              1. Cloths & Fabrics
            </button>
            <button
              onClick={() => handleSelectSection('shoes')}
              className={`hover:text-[#0F2E22] transition-colors cursor-pointer ${
                activeSection === 'shoes' && activeTab === 'catalog' ? 'text-[#0F2E22] font-black underline' : ''
              }`}
            >
              2. Shoes & Bags
            </button>
            <button
              onClick={() => handleSelectSection('tailoring-machine')}
              className={`hover:text-[#0F2E22] transition-colors cursor-pointer ${
                activeSection === 'tailoring-machine' && activeTab === 'catalog' ? 'text-[#0F2E22] font-black underline' : ''
              }`}
            >
              3. Tailoring Machines
            </button>
          </nav>

          {/* Right Action Icons: 3 rounded square buttons (Screenshot 1 & 2) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Button 1: Shopping Bag with Badge */}
            <button
              onClick={onOpenInquiryBag}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-gray-200 flex items-center justify-center text-gray-800 transition-all cursor-pointer shadow-2xs"
              aria-label="View Inquiry Bag"
              title="Quote Bag"
            >
              <ShoppingBag className="w-5 h-5 text-gray-800" />
              {inquiryItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#0F2E22] font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {inquiryItemCount}
                </span>
              )}
            </button>

            {/* Button 2: Dark green rounded square with golden shield (Admin Portal) */}
            <button
              onClick={onOpenAdmin}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F2E22] hover:bg-[#1B4332] border border-[#0F2E22] flex items-center justify-center text-[#D4AF37] transition-all cursor-pointer shadow-2xs group"
              aria-label="Admin Portal & Store Manager"
              title="Admin Portal (Manage Inventory, Images & Contacts)"
            >
              <Shield className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </button>

            {/* Button 3: Hamburger menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-800 transition-all cursor-pointer shadow-2xs"
              aria-label="Open Navigation Menu"
              title="Menu"
            >
              <Menu className="w-5 h-5 text-gray-800" />
            </button>
          </div>

        </div>

        {/* Top Search Bar to locate item using code or name (Requirement #4) */}
        <div className="bg-[#FAF8F5] border-t border-gray-200/80 px-4 py-2 sm:py-2.5">
          <div className="max-w-4xl mx-auto relative flex items-center">
            <Search className="w-4 h-4 text-[#0B2419] absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== 'home' && activeTab !== 'catalog') {
                  setActiveTab('catalog');
                }
              }}
              placeholder="Search item by code or name (e.g., #019001-1, Hollandada, Loafers, Lion)..."
              className="w-full pl-10 pr-9 py-2 bg-white rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-[#0F2E22] focus:ring-1 focus:ring-[#0F2E22] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 text-gray-400 hover:text-black cursor-pointer rounded-full"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Slide-over Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img src="/hero-logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-serif font-black text-[#0F2E22]">Ayobami SAM</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-black rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 3 Core Departments */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Store Departments
                </span>
                <button
                  onClick={() => handleSelectSection('cloths')}
                  className="w-full p-3 rounded-xl bg-gray-50 hover:bg-[#0F2E22] hover:text-white text-[#0F2E22] text-xs font-bold text-left transition-colors cursor-pointer"
                >
                  1. Cloths & Fabrics
                </button>
                <button
                  onClick={() => handleSelectSection('shoes')}
                  className="w-full p-3 rounded-xl bg-gray-50 hover:bg-[#0F2E22] hover:text-white text-[#0F2E22] text-xs font-bold text-left transition-colors cursor-pointer"
                >
                  2. Shoes & Bags
                </button>
                <button
                  onClick={() => handleSelectSection('tailoring-machine')}
                  className="w-full p-3 rounded-xl bg-gray-50 hover:bg-[#0F2E22] hover:text-white text-[#0F2E22] text-xs font-bold text-left transition-colors cursor-pointer"
                >
                  3. Tailoring Machines
                </button>
              </div>

              {/* General Links */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <button
                  onClick={() => {
                    setActiveTab('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-xs font-semibold text-gray-700 hover:text-[#0F2E22]"
                >
                  Home Showcase
                </button>
                <button
                  onClick={() => {
                    setActiveSection('all');
                    setActiveTab('catalog');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-xs font-semibold text-gray-700 hover:text-[#0F2E22]"
                >
                  Full Catalogue ({STORE_INFO.address})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-xs font-semibold text-gray-700 hover:text-[#0F2E22]"
                >
                  Balogun West Showroom Info
                </button>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-xs font-semibold text-gray-700 hover:text-[#0F2E22]"
                >
                  Contact & Orders
                </button>
              </div>

              {/* Admin Portal Entry in Menu */}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full py-2.5 px-4 bg-[#0B2419] text-[#D4AF37] text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer border border-[#D4AF37]/40 hover:bg-[#123827] transition-colors"
                >
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span>Open Admin Portal</span>
                </button>
              </div>
            </div>

            {/* Direct Calls & WhatsApp in Menu */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${STORE_INFO.phone1}`}
                className="w-full py-3 px-4 bg-gray-100 text-gray-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#52B788]" />
                <span>Call {STORE_INFO.phone1}</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 bg-[#25D366] text-[#0F2E22] text-xs font-black rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-[#0F2E22]" />
                <span>WhatsApp: 08033810865</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trust & Verification Modal */}
      {isTrustModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsTrustModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 space-y-4 shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2 text-[#0F2E22]">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif font-black text-lg">Merchant Authenticity</h3>
              </div>
              <button onClick={() => setIsTrustModalOpen(false)} className="p-1 text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Ayobami SAM Ventures</strong> is physically verified at <strong>37/39 Balogun West, Molake House, Lagos Island</strong>.
              </p>
              <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#D4AF37]/30 space-y-1.5 text-xs text-gray-800">
                <div className="flex items-center gap-2 font-bold text-[#0F2E22]">
                  <span className="w-2 h-2 rounded-full bg-[#52B788]" />
                  <span>100% Genuine Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#0F2E22]">
                  <span className="w-2 h-2 rounded-full bg-[#52B788]" />
                  <span>Available 24/7 for Inquiries</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#0F2E22]">
                  <span className="w-2 h-2 rounded-full bg-[#52B788]" />
                  <span>Direct Retail & Wholesale Quotations</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsTrustModalOpen(false);
                  handleWhatsApp();
                }}
                className="w-full py-3 bg-[#0F2E22] hover:bg-[#1B4332] text-white text-xs font-bold rounded-xl"
              >
                Chat Directly on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
