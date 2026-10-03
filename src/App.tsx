/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, MapPin, Truck, Globe, MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { WhatsAppSettingsModal } from './components/WhatsAppSettingsModal';
import { ConsultationSection } from './components/ConsultationSection';
import { ShowroomInfo } from './components/ShowroomInfo';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCTS, CATEGORY_FILTERS } from './data/products';
import { Product, InquiryItem } from './types';
import { DEFAULT_WHATSAPP_NUMBER, formatDisplayPhone, openWhatsAppChat } from './utils/whatsapp';

export default function App() {
  // WhatsApp merchant configuration (persisted to localStorage)
  const [whatsAppNumber, setWhatsAppNumber] = useState<string>(() => {
    return localStorage.getItem('ayobami_whatsapp_number') || DEFAULT_WHATSAPP_NUMBER;
  });

  // Category filter and search state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Inquiry quote bag state (persisted to localStorage)
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('ayobami_inquiry_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  // Sync inquiry items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ayobami_inquiry_bag', JSON.stringify(inquiryItems));
    } catch (e) {
      console.error('Failed to sync inquiry bag to localStorage', e);
    }
  }, [inquiryItems]);

  // Handle updating WhatsApp Number
  const handleSaveWhatsAppNumber = (newNumber: string) => {
    setWhatsAppNumber(newNumber);
    localStorage.setItem('ayobami_whatsapp_number', newNumber);
  };

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Add / Update item in inquiry bag
  const handleAddToInquiry = (
    product: Product,
    options: Record<string, string> = {},
    quantity: number = 1,
    note: string = ''
  ) => {
    setInquiryItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          product,
          selectedOptions: Object.keys(options).length > 0 ? options : updated[existingIndex].selectedOptions,
          quantity: quantity > 0 ? quantity : updated[existingIndex].quantity,
          customNote: note || updated[existingIndex].customNote,
        };
        return updated;
      } else {
        const defaultOptions: Record<string, string> = { ...options };
        if (Object.keys(defaultOptions).length === 0) {
          product.availableOptions.forEach((opt) => {
            if (opt.choices.length > 0) defaultOptions[opt.label] = opt.choices[0];
          });
        }
        return [
          ...prev,
          {
            product,
            selectedOptions: defaultOptions,
            quantity,
            customNote: note,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setInquiryItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setInquiryItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearBag = () => {
    setInquiryItems([]);
  };

  const isProductInBag = (productId: string) => {
    return inquiryItems.some((item) => item.product.id === productId);
  };

  const totalInquiryItemsCount = inquiryItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* Top Bar Header */}
      <Header
        whatsAppNumber={whatsAppNumber}
        inquiryItemCount={totalInquiryItemsCount}
        onOpenInquiryDrawer={() => setIsInquiryDrawerOpen(true)}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
        onSelectCategory={handleCategoryChange}
      />

      {/* Hero Section */}
      <Hero
        whatsAppNumber={whatsAppNumber}
        onSelectCategory={handleCategoryChange}
      />

      {/* Main Showroom Catalog Section */}
      <main id="catalog" className="flex-1 py-12 sm:py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Heading with Wide, High-Legibility Text */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-stone-200">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-900">
                <MapPin className="w-3.5 h-3.5" />
                <span>Ayobami SAM Venture Catalog · Molake House Balogun</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Clothing Materials, Shoes & Tailor Machines
              </h2>
              <p className="text-sm sm:text-base text-stone-600 max-w-2xl font-normal leading-relaxed">
                Wholesale and retail supplies. No fixed retail amounts online—inquire directly on WhatsApp for daily Balogun market rates, yardage cuts, and volume discounts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 self-start md:self-auto">
              <span className="text-xs text-stone-600 bg-stone-100 px-3.5 py-2 rounded-xl border border-stone-200 font-mono">
                WhatsApp Desk: <strong className="text-stone-900">{formatDisplayPhone(whatsAppNumber)}</strong>
              </span>
            </div>
          </div>

          {/* Interactive Filter Bar & Instant Search */}
          <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center justify-between">
            {/* Segmented Filter Control */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl overflow-x-auto">
              {CATEGORY_FILTERS.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Swiss lace, Senator wool, shoes, machines..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-stone-800 shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Metrics */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600 pt-1">
            <span>
              Showing <strong className="font-bold text-stone-900">{filteredProducts.length}</strong> items in Balogun stock
              {selectedCategory !== 'all' && (
                <span> under <strong className="text-stone-900 font-bold">{selectedCategory}</strong></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<strong className="text-stone-900 font-bold">{searchQuery}</strong>&rdquo;</span>
              )}
            </span>

            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs sm:text-sm text-amber-900 hover:text-amber-950 font-bold cursor-pointer underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Product Grid: 3-column desktop baseline with Jumia-style cards */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  whatsAppNumber={whatsAppNumber}
                  onOpenDetails={(p) => setActiveModalProduct(p)}
                  onAddToInquiry={(p) => handleAddToInquiry(p)}
                  isInInquiryBag={isProductInBag(product.id)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-16 text-center bg-white rounded-3xl border border-stone-200 p-8 space-y-4 max-w-lg mx-auto">
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <Search className="w-7 h-7 stroke-1" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Item Not Found in Current View
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  We have extensive fabric rolls, lace bales, shoes, and machine models in our Balogun warehouse that may not be displayed here.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-xs sm:text-sm font-bold text-stone-800 rounded-xl transition-colors cursor-pointer"
                >
                  Show All Products
                </button>
                <button
                  onClick={() => {
                    openWhatsAppChat(
                      whatsAppNumber,
                      `Hello Ayobami SAM Venture! I am looking for "${searchQuery}" at your Balogun shop. Do you have it in stock?`
                    );
                  }}
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-xs sm:text-sm font-bold text-white rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Consultation & Custom Order Section */}
      <ConsultationSection whatsAppNumber={whatsAppNumber} />

      {/* Showroom & Balogun West Guarantees */}
      <ShowroomInfo whatsAppNumber={whatsAppNumber} />

      {/* Footer */}
      <Footer
        whatsAppNumber={whatsAppNumber}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
        onSelectCategory={handleCategoryChange}
      />

      {/* Product Detail Modal (PDP) with Jumia-Style Carousel & Wide Text */}
      <ProductModal
        product={activeModalProduct}
        isOpen={Boolean(activeModalProduct)}
        onClose={() => setActiveModalProduct(null)}
        whatsAppNumber={whatsAppNumber}
        onAddToInquiry={(product, options, quantity, note) => {
          handleAddToInquiry(product, options, quantity, note);
        }}
        isInInquiryBag={activeModalProduct ? isProductInBag(activeModalProduct.id) : false}
      />

      {/* Multi-Item Inquiry Bag Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        items={inquiryItems}
        whatsAppNumber={whatsAppNumber}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
        onBrowseCategory={handleCategoryChange}
      />

      {/* WhatsApp Showroom Settings Modal */}
      <WhatsAppSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        currentNumber={whatsAppNumber}
        onSaveNumber={handleSaveWhatsAppNumber}
      />

      {/* Non-intrusive Floating WhatsApp Quick Desk */}
      <FloatingWhatsApp whatsAppNumber={whatsAppNumber} />
    </div>
  );
}
