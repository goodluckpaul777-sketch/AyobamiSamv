/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowLeft, Filter, Phone, MapPin, Truck, Globe, Scissors, Sparkles, Wrench, MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreePillarsSection } from './components/ThreePillarsSection';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { ReviewsSection } from './components/ReviewsSection';
import { ShowroomInfo } from './components/ShowroomInfo';
import { ConsultationSection } from './components/ConsultationSection';
import { InquiryDrawer } from './components/InquiryDrawer';
import { EndSection } from './components/EndSection';
import { WhatsAppSettingsModal } from './components/WhatsAppSettingsModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Pagination } from './components/Pagination';
import { AdminPortalModal, StoreContactInfo } from './components/AdminPortalModal';
import { PRODUCTS, STORE_INFO, MAIN_SECTIONS } from './data/products';
import { Product, InquiryItem, MainSection } from './types';
import { openWhatsAppChat } from './utils/whatsapp';

const ITEMS_PER_PAGE = 15;

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'catalog' | 'about' | 'contact'>('home');
  const [activeSection, setActiveSection] = useState<MainSection | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Products state with localStorage persistence
  const [productsList, setProductsList] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('asv_products_custom');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return PRODUCTS;
  });

  const handleUpdateProducts = (updated: Product[]) => {
    setProductsList(updated);
    try {
      localStorage.setItem('asv_products_custom', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Store information state with localStorage persistence
  const [storeInfo, setStoreInfo] = useState<StoreContactInfo>(() => {
    try {
      const saved = localStorage.getItem('asv_store_info');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {}
    return STORE_INFO;
  });

  const handleUpdateStoreInfo = (info: StoreContactInfo) => {
    setStoreInfo(info);
    try {
      localStorage.setItem('asv_store_info', JSON.stringify(info));
    } catch (e) {
      console.error(e);
    }
  };

  // Inquiry quote bag state
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('asv_inquiry_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('asv_inquiry_bag', JSON.stringify(inquiryItems));
    } catch (e) {
      console.error(e);
    }
  }, [inquiryItems]);

  // Counts for Category Pills (Screenshot 4)
  const clothsCount = useMemo(() => productsList.filter((p) => p.mainSection === 'cloths').length, [productsList]);
  const shoesCount = useMemo(() => productsList.filter((p) => p.mainSection === 'shoes').length, [productsList]);
  const machinesCount = useMemo(() => productsList.filter((p) => p.mainSection === 'tailoring-machine').length, [productsList]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return productsList.filter((p) => {
      const matchesSection = activeSection === 'all' || p.mainSection === activeSection;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);

      return matchesSection && matchesSearch;
    });
  }, [productsList, activeSection, searchQuery]);

  // Reset pagination to first page when section, query or tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeSection, searchQuery, activeTab]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleAddToInquiry = (product: Product, quantity: number = 1) => {
    setInquiryItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: quantity > 0 ? quantity : updated[existingIndex].quantity,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity: Math.max(product.minimumOrder || 1, quantity),
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

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18] font-sans antialiased flex flex-col selection:bg-[#D4AF37] selection:text-[#0F2E22] pb-24">
      
      {/* Header matching Screenshot 1 & 2 */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        inquiryItemCount={totalInquiryItemsCount}
        onOpenInquiryBag={() => setIsInquiryDrawerOpen(true)}
        onOpenAdmin={() => setIsAdminPortalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section (Matching Screenshot 2) */}
            <Hero
              onSelectSection={(sec) => {
                setActiveSection(sec);
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreAll={() => {
                setActiveSection('all');
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onContactClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Department Cards Section (Matching Screenshot 1) */}
            <ThreePillarsSection
              selectedSection={activeSection}
              onSelectSection={(sec) => {
                setActiveSection(sec);
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Catalog Search & Filter Section (Matching Screenshot 4) */}
            <section id="collection-grid" className="py-12 sm:py-16 bg-[#FAF8F5]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                
                {/* Search Bar (Matching Screenshot 4) */}
                <div className="max-w-2xl mx-auto flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Design Code (e.g. 019004-1)..."
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0F2E22]"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => {}}
                    className="px-5 py-3 bg-[#0B2419] hover:bg-[#123827] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </button>
                </div>

                {/* Section Titles (Matching Screenshot 4) */}
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block">
                    AUTHENTIC LAGOS INVENTORY
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2E22] tracking-tight">
                    FEATURED COLLECTIONS
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 font-normal">
                    Explore top-selling Cloths, Handcrafted Shoes, and Tailoring Machines ready for immediate dispatch.
                  </p>
                </div>

                {/* Category Pills (Matching Screenshot 4) */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs sm:text-sm">
                  <button
                    onClick={() => setActiveSection('all')}
                    className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeSection === 'all'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Items ({PRODUCTS.length})
                  </button>

                  <button
                    onClick={() => setActiveSection('cloths')}
                    className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      activeSection === 'cloths'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Cloths ({clothsCount})</span>
                  </button>

                  <button
                    onClick={() => setActiveSection('shoes')}
                    className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      activeSection === 'shoes'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Shoes ({shoesCount})</span>
                  </button>

                  <button
                    onClick={() => setActiveSection('tailoring-machine')}
                    className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      activeSection === 'tailoring-machine'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Machines ({machinesCount})</span>
                  </button>
                </div>

                {/* Search query feedback */}
                {searchQuery && (
                  <div className="flex items-center justify-between bg-stone-100 px-4 py-2 rounded-xl text-xs text-gray-700">
                    <span>
                      Found <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'item' : 'items'} matching "<strong>{searchQuery}</strong>"
                    </span>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="font-bold text-[#0B2419] hover:underline cursor-pointer"
                    >
                      Clear Search
                    </button>
                  </div>
                )}

                {/* Product Grid - Splitted into two rows with ample space (Requirement #5) */}
                {filteredProducts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                      {paginatedProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onOpenDetails={(p) => setActiveModalProduct(p)}
                          onAddToInquiry={(p, q) => handleAddToInquiry(p, q)}
                          isInInquiryBag={isProductInBag(product.id)}
                        />
                      ))}
                    </div>

                    {/* 15-item Pagination with Next & Previous */}
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalItems={filteredProducts.length}
                      itemsPerPage={ITEMS_PER_PAGE}
                      onPageChange={setCurrentPage}
                      scrollTargetId="collection-grid"
                    />
                  </>
                ) : (
                  <div className="text-center py-12 bg-white rounded-3xl border border-gray-200 p-8 space-y-3">
                    <p className="font-serif font-bold text-lg text-gray-800">
                      No products matched "{searchQuery}"
                    </p>
                    <p className="text-xs text-gray-500 max-w-md mx-auto">
                      Try searching with item codes like <strong>#019001-1</strong>, <strong>#019008-1</strong>, or keywords like <strong>Ankara</strong>, <strong>Lace</strong>, <strong>Loafers</strong>, or <strong>Peacock Iron</strong>.
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-5 py-2.5 bg-[#0B2419] text-white text-xs font-bold rounded-xl"
                    >
                      Show All Items
                    </button>
                  </div>
                )}

              </div>
            </section>

            {/* Customer Testimonials */}
            <ReviewsSection />

            {/* End Section (Matching Screenshot 3) */}
            <EndSection
              onBrowseDepartments={() => {
                setActiveSection('all');
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {/* Catalog Dedicated View */}
        {activeTab === 'catalog' && (
          <section id="catalog-grid" className="py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Balogun West Store Catalogue
                  </span>
                  <h1 className="font-serif text-3xl font-black text-[#0F2E22]">
                    {activeSection === 'all'
                      ? 'All Showroom Products'
                      : activeSection === 'cloths'
                      ? 'Cloths & Fabrics Department'
                      : activeSection === 'shoes'
                      ? 'Shoes & Bags Department'
                      : 'Tailoring Machines Department'}
                  </h1>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl self-start"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Home</span>
                </button>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                {['all', 'cloths', 'shoes', 'tailoring-machine'].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setActiveSection(sec as MainSection | 'all')}
                    className={`px-4 py-2 rounded-xl font-bold capitalize transition-all cursor-pointer ${
                      activeSection === sec
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {sec === 'all'
                      ? 'All Items'
                      : sec === 'cloths'
                      ? 'Cloths & Fabrics'
                      : sec === 'shoes'
                      ? 'Shoes & Bags'
                      : 'Tailoring Machines'}
                  </button>
                ))}
              </div>

              {/* Product Grid - Splitted into two rows with ample space (Requirement #5) */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenDetails={(p) => setActiveModalProduct(p)}
                    onAddToInquiry={(p, q) => handleAddToInquiry(p, q)}
                    isInInquiryBag={isProductInBag(product.id)}
                  />
                ))}
              </div>

              {/* 15-item Pagination with Next & Previous */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredProducts.length}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={setCurrentPage}
                scrollTargetId="catalog-grid"
              />

              {/* End Section */}
              <EndSection
                onBrowseDepartments={() => {
                  setActiveSection('all');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          </section>
        )}

        {/* About View */}
        {activeTab === 'about' && (
          <div className="py-12">
            <ShowroomInfo whatsAppNumber={storeInfo.whatsappClean} />
          </div>
        )}

        {/* Contact View */}
        {activeTab === 'contact' && (
          <div className="py-12">
            <ConsultationSection whatsAppNumber={storeInfo.whatsappClean} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        whatsAppNumber={storeInfo.whatsappClean}
        onOpenSettingsModal={() => setIsAdminPortalOpen(true)}
        onSelectCategory={(sec) => {
          if (sec === 'materials' || sec === 'clothes') {
            setActiveSection('cloths');
          } else if (sec === 'shoes') {
            setActiveSection('shoes');
          } else {
            setActiveSection('tailoring-machine');
          }
          setActiveTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Jumia-Style Product Detail Modal (Photos) */}
      <ProductModal
        product={activeModalProduct}
        isOpen={Boolean(activeModalProduct)}
        onClose={() => setActiveModalProduct(null)}
        onAddToInquiry={(product, options, quantity, note) => {
          handleAddToInquiry(product, quantity);
        }}
        isInInquiryBag={activeModalProduct ? isProductInBag(activeModalProduct.id) : false}
      />

      {/* Quote Bag Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        items={inquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
        onBrowseCategory={(cat) => {
          setActiveSection(cat);
          setActiveTab('catalog');
        }}
      />

      {/* WhatsApp Showroom Settings Modal */}
      <WhatsAppSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        currentNumber={storeInfo.whatsappClean}
        onSaveNumber={(num) => {
          handleUpdateStoreInfo({
            ...storeInfo,
            whatsapp: num,
            whatsappClean: num,
          });
        }}
      />

      {/* Admin Portal Modal Matching User Screenshots 1 & 2 */}
      <AdminPortalModal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
        products={productsList}
        onUpdateProducts={handleUpdateProducts}
        storeInfo={storeInfo}
        onUpdateStoreInfo={handleUpdateStoreInfo}
        inquiryCount={totalInquiryItemsCount}
      />

      {/* Floating Bottom Dock (Matching Screenshot 3) */}
      <FloatingWhatsApp whatsAppNumber={storeInfo.whatsappClean} />
    </div>
  );
}
