import React, { useState, useMemo, useRef } from 'react';
import {
  Shield,
  Package,
  MessageCircle,
  Settings,
  Truck,
  LogOut,
  Shirt,
  Scissors,
  Sparkles,
  Plus,
  Search,
  Trash2,
  Edit3,
  Image as ImageIcon,
  Upload,
  Check,
  X,
  ExternalLink,
  Phone,
  MapPin,
  RefreshCw,
  AlertTriangle,
  ArrowRight,
  Lock,
  Eye,
  EyeOff,
  Key,
} from 'lucide-react';
import { Product, MainSection } from '../types';
import {
  uploadImageToSupabase,
  saveProductToSupabase,
  deleteProductFromSupabase,
  deleteImageFromSupabase,
} from '../lib/supabase';

export interface StoreContactInfo {
  storeName: string;
  tagline: string;
  address: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  whatsappClean: string;
  facebook: string;
  tiktok: string;
  openingHours: string;
  aboutText: string;
}

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onUpdateProducts: (products: Product[]) => void;
  storeInfo: StoreContactInfo;
  onUpdateStoreInfo: (info: StoreContactInfo) => void;
  inquiryCount: number;
}

type AdminTab = 'dashboard' | 'inventory' | 'inquiries' | 'settings' | 'delivery';

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  products,
  onUpdateProducts,
  storeInfo,
  onUpdateStoreInfo,
  inquiryCount,
}) => {
  if (!isOpen) return null;

  // Active tab state
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  // Password Protection (Passcode: 2006)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('asv_admin_auth') === 'true';
    } catch {
      return false;
    }
  });
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === '2006') {
      setIsAuthenticated(true);
      setPasscodeError(false);
      try {
        sessionStorage.setItem('asv_admin_auth', 'true');
      } catch {}
    } else {
      setPasscodeError(true);
    }
  };

  const handleExitAndLock = () => {
    try {
      sessionStorage.removeItem('asv_admin_auth');
    } catch {}
    setIsAuthenticated(false);
    setPasscode('');
    setPasscodeError(false);
    onClose();
  };

  // Inventory tab sub-states
  const [inventorySection, setInventorySection] = useState<MainSection | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Editing product modal / dialog state
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [managingImagesProduct, setManagingImagesProduct] = useState<Product | null>(null);
  const [newImageUrl, setNewImageUrl] = useState('');

  // Contact / Store info form state
  const [contactForm, setContactForm] = useState<StoreContactInfo>(storeInfo);
  const [savedNotice, setSavedNotice] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  // New product form state
  const [newProductForm, setNewProductForm] = useState<Partial<Product>>({
    name: '',
    mainSection: 'cloths',
    category: 'Hollandada Real Wax',
    categorySlug: 'ankara',
    description: '',
    availableStock: 50,
    minimumOrder: 1,
    unitLabel: 'yards',
    image: '',
    galleryImages: [],
    inStock: true,
    isWholesaleAvailable: true,
    badge: 'WHOLESALE & RETAIL',
    wholesaleNote: 'Size ranges 30 to 45 available. Custom shoe boxes provided.',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryFileInputRef = useRef<HTMLInputElement>(null);

  // Counts
  const clothsCount = useMemo(
    () => products.filter((p) => p.mainSection === 'cloths').length,
    [products]
  );
  const shoesCount = useMemo(
    () => products.filter((p) => p.mainSection === 'shoes').length,
    [products]
  );
  const machinesCount = useMemo(
    () => products.filter((p) => p.mainSection === 'tailoring-machine').length,
    [products]
  );

  // Filtered inventory list
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSec = inventorySection === 'all' || p.mainSection === inventorySection;
      const q = searchQuery.toLowerCase().trim();
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchSec && matchQ;
    });
  }, [products, inventorySection, searchQuery]);

  // Handle store contact update
  const handleSaveContactInfo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanWhatsApp = contactForm.whatsapp.replace(/[^0-9]/g, '');
    const formatted = {
      ...contactForm,
      whatsappClean: cleanWhatsApp.startsWith('0') ? '234' + cleanWhatsApp.slice(1) : cleanWhatsApp,
    };
    onUpdateStoreInfo(formatted);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  // Handle single product deletion (Syncs to Supabase)
  const handleDeleteProduct = async (productId: string, productName: string) => {
    if (window.confirm(`Are you sure you want to delete "${productName}" from the store inventory?`)) {
      const updated = products.filter((p) => p.id !== productId);
      onUpdateProducts(updated);
      try {
        await deleteProductFromSupabase(productId);
      } catch (err) {
        console.warn('Notice: Cloud deletion error:', err);
      }
    }
  };

  // Handle product edit save (Syncs to Supabase)
  const handleSaveEditedProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    const updated = products.map((p) => (p.id === editingProduct.id ? editingProduct : p));
    onUpdateProducts(updated);
    setEditingProduct(null);
    try {
      await saveProductToSupabase(editingProduct);
    } catch (err) {
      console.warn('Notice: Cloud update error:', err);
    }
  };

  // Handle creating new product (Syncs to Supabase)
  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductForm.name || !newProductForm.description) {
      alert('Please fill out the product name and description.');
      return;
    }

    const defaultImg =
      newProductForm.image ||
      (newProductForm.mainSection === 'cloths'
        ? '/images/lsw_IMG-20260927-WA0239.jpg'
        : newProductForm.mainSection === 'shoes'
        ? '/images/lsw_IMG-20260927-WA0047.jpg'
        : '/images/tt_images_14.jpg');

    const newProd: Product = {
      id: `prod-custom-${Date.now()}`,
      sku: `#0190${Math.floor(100 + Math.random() * 900)}`,
      name: newProductForm.name!,
      mainSection: newProductForm.mainSection as MainSection,
      category: newProductForm.category || 'General',
      categorySlug: newProductForm.categorySlug || 'general',
      description: newProductForm.description!,
      availableStock: newProductForm.availableStock || 20,
      minimumOrder: newProductForm.minimumOrder || 1,
      unitLabel: newProductForm.unitLabel || 'pieces',
      image: defaultImg,
      galleryImages: newProductForm.galleryImages && newProductForm.galleryImages.length > 0 ? newProductForm.galleryImages : [defaultImg],
      inStock: newProductForm.inStock ?? true,
      isWholesaleAvailable: true,
      badge: 'WHOLESALE & RETAIL',
      wholesaleNote:
        newProductForm.mainSection === 'shoes'
          ? 'Size ranges 30 to 45 available. Custom shoe boxes provided.'
          : 'Wholesale bundles and direct dispatch available.',
      isFeatured: false,
      rating: 5.0,
      reviewCount: 1,
    };

    onUpdateProducts([newProd, ...products]);
    setIsAddProductOpen(false);
    setNewProductForm({
      name: '',
      mainSection: 'cloths',
      category: 'Hollandada Real Wax',
      categorySlug: 'ankara',
      description: '',
      availableStock: 50,
      minimumOrder: 1,
      unitLabel: 'yards',
      image: '',
      galleryImages: [],
      inStock: true,
      isWholesaleAvailable: true,
      badge: 'WHOLESALE & RETAIL',
      wholesaleNote: 'Size ranges 30 to 45 available. Custom shoe boxes provided.',
    });
    setActiveTab('inventory');

    try {
      await saveProductToSupabase(newProd);
    } catch (err) {
      console.warn('Notice: Cloud product creation error:', err);
    }
  };

  // Handle image upload from computer/phone (Uploads to Supabase Storage)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, isNew: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    setUploadStatus('Uploading photo to Supabase Cloud Storage...');

    try {
      const publicUrl = await uploadImageToSupabase(file);
      if (isNew) {
        setNewProductForm((prev) => ({
          ...prev,
          image: publicUrl,
          galleryImages: prev.galleryImages ? [...prev.galleryImages, publicUrl] : [publicUrl],
        }));
      } else if (managingImagesProduct) {
        const updatedGallery = [...(managingImagesProduct.galleryImages || [managingImagesProduct.image]), publicUrl];
        const updatedProd = {
          ...managingImagesProduct,
          galleryImages: updatedGallery,
        };
        setManagingImagesProduct(updatedProd);
        onUpdateProducts(products.map((p) => (p.id === updatedProd.id ? updatedProd : p)));
        await saveProductToSupabase(updatedProd);
      }
      setUploadStatus('Photo uploaded to Supabase successfully!');
      setTimeout(() => setUploadStatus(null), 3500);
    } catch (err: any) {
      console.warn('Supabase upload error, falling back to local preview:', err);
      // Fallback to local DataURL preview if offline
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (isNew) {
          setNewProductForm((prev) => ({
            ...prev,
            image: result,
            galleryImages: prev.galleryImages ? [...prev.galleryImages, result] : [result],
          }));
        } else if (managingImagesProduct) {
          const updatedGallery = [...(managingImagesProduct.galleryImages || [managingImagesProduct.image]), result];
          const updatedProd = {
            ...managingImagesProduct,
            galleryImages: updatedGallery,
          };
          setManagingImagesProduct(updatedProd);
          onUpdateProducts(products.map((p) => (p.id === updatedProd.id ? updatedProd : p)));
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setIsUploadingImage(false);
      if (e.target) e.target.value = '';
    }
  };

  // Add image URL to gallery of managing product
  const handleAddImageUrl = () => {
    if (!managingImagesProduct || !newImageUrl.trim()) return;
    const currentGallery = managingImagesProduct.galleryImages || [managingImagesProduct.image];
    const updatedGallery = [...currentGallery, newImageUrl.trim()];
    const updatedProd = {
      ...managingImagesProduct,
      galleryImages: updatedGallery,
    };
    setManagingImagesProduct(updatedProd);
    onUpdateProducts(products.map((p) => (p.id === updatedProd.id ? updatedProd : p)));
    setNewImageUrl('');
  };

  // Delete image from product gallery
  const handleDeleteImage = (imgToDelete: string) => {
    if (!managingImagesProduct) return;
    const currentGallery = managingImagesProduct.galleryImages || [managingImagesProduct.image];
    if (currentGallery.length <= 1) {
      alert('A product must have at least one image. Please add another image before deleting this one.');
      return;
    }
    const updatedGallery = currentGallery.filter((img) => img !== imgToDelete);
    const updatedPrimary = managingImagesProduct.image === imgToDelete ? updatedGallery[0] : managingImagesProduct.image;
    const updatedProd = {
      ...managingImagesProduct,
      image: updatedPrimary,
      galleryImages: updatedGallery,
    };
    setManagingImagesProduct(updatedProd);
    onUpdateProducts(products.map((p) => (p.id === updatedProd.id ? updatedProd : p)));
  };

  // Set as primary image
  const handleSetPrimaryImage = (img: string) => {
    if (!managingImagesProduct) return;
    const updatedProd = {
      ...managingImagesProduct,
      image: img,
    };
    setManagingImagesProduct(updatedProd);
    onUpdateProducts(products.map((p) => (p.id === updatedProd.id ? updatedProd : p)));
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="bg-[#FAF8F5] w-full max-w-md rounded-3xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-[#0B2419] p-6 text-center text-white border-b-2 border-[#D4AF37]">
            <div className="w-16 h-16 rounded-2xl bg-[#081C13] border-2 border-[#D4AF37] mx-auto flex items-center justify-center mb-3 shadow-lg">
              <Lock className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[#D4AF37]">
              Admin Security Access
            </h2>
            <p className="text-xs text-stone-300 mt-1">
              Authorized Manager Portal for {storeInfo.storeName}
            </p>
          </div>

          <form onSubmit={handleUnlock} className="p-6 space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                Manager Passcode
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    if (passcodeError) setPasscodeError(false);
                  }}
                  autoFocus
                  placeholder="Enter Passcode"
                  className="w-full pl-10 pr-10 py-3 bg-white border border-stone-300 rounded-xl text-stone-900 font-mono text-center tracking-widest text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {passcodeError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                <span>Incorrect passcode. Please enter the authorized manager code.</span>
              </div>
            )}

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#0B2419] hover:bg-[#143d2c] text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Unlock Portal</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#FAF8F5] w-full max-w-6xl rounded-3xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* ============================================================ */}
        {/* Top Dark Green Banner Matching Screenshot 1 & 2 */}
        {/* ============================================================ */}
        <header className="bg-[#0B2419] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#D4AF37]">
          {/* Left Brand & Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#081C13] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-serif font-black text-xl shadow-xs">
              AS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] bg-black/40 px-2 py-0.5 rounded-md border border-[#D4AF37]/30">
                  ADMIN PORTAL
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Store Manager
                </span>
              </div>
              <h1 className="font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                {storeInfo.storeName}
              </h1>
            </div>
          </div>

          {/* Right Status Pill & Exit Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-500/40 rounded-full text-[11px] text-emerald-300 font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>● Live Supabase Cloud Sync</span>
            </div>

            <button
              onClick={handleExitAndLock}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-[#EAB308] hover:bg-[#FACC15] text-[#0B2419] text-xs font-black rounded-xl transition-all shadow-md cursor-pointer active:scale-95"
            >
              <LogOut className="w-4 h-4 text-[#0B2419]" />
              <span>Exit & Lock Portal</span>
            </button>
          </div>
        </header>

        {/* ============================================================ */}
        {/* Navigation Icon Bar Matching Screenshot 1 & 2 */}
        {/* ============================================================ */}
        <div className="bg-white border-b border-stone-200 px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none shadow-2xs">
          {/* Tab 1: Shield (Dashboard) */}
          <button
            onClick={() => setActiveTab('dashboard')}
            title="Dashboard Overview"
            className={`relative p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
              activeTab === 'dashboard'
                ? 'bg-[#0B2419] text-[#D4AF37] border border-[#D4AF37]/60 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <Shield className="w-5 h-5" />
          </button>

          {/* Tab 2: Package (Products Inventory with badge) */}
          <button
            onClick={() => setActiveTab('inventory')}
            title="Products Inventory"
            className={`relative p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
              activeTab === 'inventory'
                ? 'bg-[#0B2419] text-[#D4AF37] border border-[#D4AF37]/60 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-emerald-700 text-white font-bold text-[9px] px-1.5 py-0.2 rounded-full border border-white">
              {products.length}
            </span>
          </button>

          {/* Tab 3: MessageCircle (WhatsApp Inquiries) */}
          <button
            onClick={() => setActiveTab('inquiries')}
            title="WhatsApp Inquiries & Bag"
            className={`relative p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
              activeTab === 'inquiries'
                ? 'bg-[#0B2419] text-[#D4AF37] border border-[#D4AF37]/60 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            {inquiryCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#0B2419] font-black text-[9px] px-1.5 py-0.2 rounded-full border border-white">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Tab 4: Settings (Contact & Store Info) */}
          <button
            onClick={() => setActiveTab('settings')}
            title="Store Contacts & Information"
            className={`relative p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
              activeTab === 'settings'
                ? 'bg-[#0B2419] text-[#D4AF37] border border-[#D4AF37]/60 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Tab 5: Truck (Delivery Settings) */}
          <button
            onClick={() => setActiveTab('delivery')}
            title="Delivery & Waybill Terms"
            className={`relative p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
              activeTab === 'delivery'
                ? 'bg-[#0B2419] text-[#D4AF37] border border-[#D4AF37]/60 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <Truck className="w-5 h-5" />
          </button>

          <div className="ml-auto text-xs text-stone-500 font-semibold hidden md:block">
            {activeTab === 'dashboard' && 'Portal Overview & Quick Actions'}
            {activeTab === 'inventory' && `Live Inventory (${products.length} Items)`}
            {activeTab === 'inquiries' && 'WhatsApp Orders & Quote Requests'}
            {activeTab === 'settings' && 'Edit Store Contact & WhatsApp Details'}
            {activeTab === 'delivery' && 'Shipping & Logistics Destinations'}
          </div>
        </div>

        {/* ============================================================ */}
        {/* Main Scrollable Content */}
        {/* ============================================================ */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* ============================================================ */}
          {/* TAB 1: DASHBOARD (Matching Screenshot 1) */}
          {/* ============================================================ */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                
                {/* Section 1 Card */}
                <div
                  onClick={() => {
                    setInventorySection('cloths');
                    setActiveTab('inventory');
                  }}
                  className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs hover:border-[#0B2419] transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                      SECTION 1
                    </span>
                    <h3 className="text-xl font-black text-stone-900">
                      {clothsCount} Products
                    </h3>
                    <p className="text-xs text-stone-500">Cloths & Fabrics</p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Shirt className="w-5 h-5" />
                  </div>
                </div>

                {/* Section 2 Card */}
                <div
                  onClick={() => {
                    setInventorySection('shoes');
                    setActiveTab('inventory');
                  }}
                  className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs hover:border-[#0B2419] transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      SECTION 2
                    </span>
                    <h3 className="text-xl font-black text-stone-900">
                      {shoesCount} Products
                    </h3>
                    <p className="text-xs text-stone-500">Shoes & Bags</p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {/* Section 3 Card */}
                <div
                  onClick={() => {
                    setInventorySection('tailoring-machine');
                    setActiveTab('inventory');
                  }}
                  className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs hover:border-[#0B2419] transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                      SECTION 3
                    </span>
                    <h3 className="text-xl font-black text-stone-900">
                      {machinesCount} Products
                    </h3>
                    <p className="text-xs text-stone-500">Tailoring Machines</p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Scissors className="w-5 h-5" />
                  </div>
                </div>

                {/* Cloud Database Card */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                      CLOUD DATABASE
                    </span>
                    <h3 className="text-xl font-black text-stone-900">
                      Firebase Live
                    </h3>
                    <p className="text-xs text-stone-500">Real-time sync to all devices</p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Card */}
              <div
                onClick={() => setActiveTab('inquiries')}
                className="bg-[#0B2419] text-white p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/40 shadow-sm flex items-center justify-between cursor-pointer hover:bg-[#103324] transition-all"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">
                    DIRECT WHATSAPP
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {inquiryCount} Inquiries
                  </h3>
                  <p className="text-xs text-stone-300">Price & Quote Requests</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-[#0B2419] flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
              </div>

              {/* Quick Inventory Actions for Ayobami SAM Ventures */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Quick Inventory Actions for Ayobami SAM Ventures
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Button 1: Add New Fabric / Cloth */}
                  <button
                    onClick={() => {
                      setNewProductForm((prev) => ({
                        ...prev,
                        mainSection: 'cloths',
                        category: 'Hollandada Real Wax',
                        categorySlug: 'ankara',
                        unitLabel: 'yards',
                      }));
                      setIsAddProductOpen(true);
                    }}
                    className="p-4 rounded-xl bg-[#0B2419] hover:bg-[#123827] text-white text-left transition-all cursor-pointer flex items-center gap-3 shadow-xs"
                  >
                    <Shirt className="w-6 h-6 text-emerald-300 shrink-0" />
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm">Add New Fabric / Cloth</h5>
                      <p className="text-[11px] text-stone-300">Ankara, Lace, Senator, Atiku</p>
                    </div>
                  </button>

                  {/* Button 2: Add New Shoes / Bag */}
                  <button
                    onClick={() => {
                      setNewProductForm((prev) => ({
                        ...prev,
                        mainSection: 'shoes',
                        category: 'Matching Shoes & Bags',
                        categorySlug: 'matching-sets',
                        unitLabel: 'sets',
                        name: 'Matching shoes and bags',
                        wholesaleNote: 'Size ranges 30 to 45 available. Custom shoe boxes provided.',
                      }));
                      setIsAddProductOpen(true);
                    }}
                    className="p-4 rounded-xl bg-[#78350F] hover:bg-[#854D0E] text-white text-left transition-all cursor-pointer flex items-center gap-3 shadow-xs"
                  >
                    <Sparkles className="w-6 h-6 text-amber-300 shrink-0" />
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm">Add New Shoes / Bag</h5>
                      <p className="text-[11px] text-amber-200">Loafers, Heels, Matching Sets</p>
                    </div>
                  </button>

                  {/* Button 3: Add Tailoring Machine */}
                  <button
                    onClick={() => {
                      setNewProductForm((prev) => ({
                        ...prev,
                        mainSection: 'tailoring-machine',
                        category: 'Industrial Sewing Machines',
                        categorySlug: 'industrial',
                        unitLabel: 'units',
                      }));
                      setIsAddProductOpen(true);
                    }}
                    className="p-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-left transition-all cursor-pointer flex items-center gap-3 shadow-xs"
                  >
                    <Scissors className="w-6 h-6 text-blue-300 shrink-0" />
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm">Add Tailoring Machine</h5>
                      <p className="text-[11px] text-blue-200">Industrial & Domestic Sewing Machines</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Store Details Card matching Screenshot 1 */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-amber-700 font-serif font-black text-xl shadow-2xs">
                    AS
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900">
                      {storeInfo.storeName}
                    </h4>
                    <p className="text-xs text-stone-500">
                      Premium Fabrics, Bespoke Shoes & Bags, and Tailoring Equipment
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        {storeInfo.address}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        {storeInfo.phone1}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-emerald-700 font-bold">
                        WhatsApp: {storeInfo.whatsapp}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-stretch md:self-auto">
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="flex-1 md:flex-initial px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold rounded-xl border border-stone-300 transition-colors cursor-pointer"
                  >
                    Edit Store Details
                  </button>
                  <a
                    href={`https://wa.me/${storeInfo.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 2: INVENTORY MANAGER (Matching Screenshot 2) */}
          {/* ============================================================ */}
          {activeTab === 'inventory' && (
            <div className="space-y-4 max-w-6xl mx-auto">
              
              {/* Top Controls Row */}
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs">
                  <button
                    onClick={() => setInventorySection('all')}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                      inventorySection === 'all'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    All Sections ({products.length})
                  </button>

                  <button
                    onClick={() => setInventorySection('cloths')}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      inventorySection === 'cloths'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <Shirt className="w-3.5 h-3.5" />
                    <span>Cloths ({clothsCount})</span>
                  </button>

                  <button
                    onClick={() => setInventorySection('shoes')}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      inventorySection === 'shoes'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Shoes ({shoesCount})</span>
                  </button>

                  <button
                    onClick={() => setInventorySection('tailoring-machine')}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      inventorySection === 'tailoring-machine'
                        ? 'bg-[#0B2419] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    <span>Machines ({machinesCount})</span>
                  </button>
                </div>

                {/* Search & Add Product Button */}
                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search items..."
                      className="w-full pl-8 pr-3 py-1.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0B2419]"
                    />
                  </div>

                  <button
                    onClick={() => setIsAddProductOpen(true)}
                    className="px-3.5 py-1.5 bg-[#0B2419] hover:bg-[#123827] text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Product</span>
                  </button>
                </div>
              </div>

              {/* Table Matching Screenshot 2 Header */}
              <div className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50/70 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500 select-none">
                        <th className="py-3 px-4">PHOTO & PRODUCT NAME</th>
                        <th className="py-3 px-3">MAIN SECTION</th>
                        <th className="py-3 px-3">MATERIAL / SPEC</th>
                        <th className="py-3 px-3">STOCK STATUS</th>
                        <th className="py-3 px-3">GALLERY</th>
                        <th className="py-3 px-4 text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-xs">
                      {filteredProducts.map((p) => {
                        const galleryCount = p.galleryImages?.length || (p.image ? 1 : 0);
                        return (
                          <tr key={p.id} className="hover:bg-stone-50/60 transition-colors">
                            {/* Photo & Name */}
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="w-12 h-12 object-cover rounded-xl border border-stone-200 shrink-0 bg-stone-100"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/hero-logo.png';
                                  }}
                                />
                                <div>
                                  <h5 className="font-bold text-stone-900 leading-snug">
                                    {p.name}
                                  </h5>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="font-mono text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                                      {p.sku}
                                    </span>
                                    <span className="text-[11px] text-stone-500 truncate max-w-[160px]">
                                      {p.category}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* Main Section */}
                            <td className="py-3 px-3">
                              <span
                                className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide ${
                                  p.mainSection === 'cloths'
                                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                    : p.mainSection === 'shoes'
                                    ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                    : 'bg-blue-50 text-blue-800 border border-blue-200'
                                }`}
                              >
                                {p.mainSection === 'cloths'
                                  ? 'Cloths & Fabrics'
                                  : p.mainSection === 'shoes'
                                  ? 'Shoes & Bags'
                                  : 'Machines'}
                              </span>
                            </td>

                            {/* Material / Spec */}
                            <td className="py-3 px-3 max-w-[180px]">
                              <p className="text-[11px] text-stone-600 line-clamp-2">
                                {p.description}
                              </p>
                              {p.mainSection === 'shoes' && (
                                <span className="inline-block mt-0.5 text-[10px] font-bold text-amber-800">
                                  Size 30 to 45
                                </span>
                              )}
                            </td>

                            {/* Stock Status */}
                            <td className="py-3 px-3">
                              <button
                                onClick={() => {
                                  const updated = products.map((item) =>
                                    item.id === p.id ? { ...item, inStock: !item.inStock } : item
                                  );
                                  onUpdateProducts(updated);
                                }}
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                                  p.inStock
                                    ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                    : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                                }`}
                              >
                                {p.inStock ? '● In Stock' : '○ Out of Stock'}
                              </button>
                              <div className="text-[10px] text-stone-400 mt-1 font-mono">
                                Stock: {p.availableStock} {p.unitLabel || 'pcs'}
                              </div>
                            </td>

                            {/* Gallery Images */}
                            <td className="py-3 px-3">
                              <button
                                onClick={() => setManagingImagesProduct(p)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-bold rounded-lg border border-stone-300 transition-colors cursor-pointer"
                                title="Add, delete, or view photos"
                              >
                                <ImageIcon className="w-3.5 h-3.5 text-stone-500" />
                                <span>{galleryCount} Photos</span>
                              </button>
                            </td>

                            {/* Actions */}
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => setEditingProduct(p)}
                                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                                  title="Edit Product Details"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => setManagingImagesProduct(p)}
                                  className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 transition-colors cursor-pointer"
                                  title="Manage Images"
                                >
                                  <Upload className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteProduct(p.id, p.name)}
                                  className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                                  title="Delete Product"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-10 text-stone-500 text-xs">
                    No products found matching "{searchQuery}".
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 3: INQUIRIES & ORDERS */}
          {/* ============================================================ */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Live WhatsApp Customer Inquiries
                  </h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    {inquiryCount} active items in bag
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  All customer quote requests and wholesale purchases are instantly compiled and forwarded to your primary WhatsApp desk at <strong>{storeInfo.whatsapp}</strong>.
                </p>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
                  <div className="font-bold text-stone-800 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Connected WhatsApp Phone:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-stone-900 bg-white px-3 py-1.5 rounded-lg border border-stone-300">
                      {storeInfo.whatsapp} ({storeInfo.whatsappClean})
                    </span>
                    <a
                      href={`https://wa.me/${storeInfo.whatsappClean}?text=Hello%20Ayobami%20SAM%20Ventures`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs transition-colors"
                    >
                      Test WhatsApp Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 4: STORE CONTACTS & SETTINGS */}
          {/* ============================================================ */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Store Contact Details & Public Information
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Edit your primary WhatsApp number, calling lines, showroom address, and social links. Changes update across the website instantly.
                  </p>
                </div>

                {savedNotice && (
                  <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Store contact details updated and saved successfully!</span>
                  </div>
                )}

                <form onSubmit={handleSaveContactInfo} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-stone-700 uppercase tracking-wider">
                        Store Name
                      </label>
                      <input
                        type="text"
                        value={contactForm.storeName}
                        onChange={(e) => setContactForm({ ...contactForm, storeName: e.target.value })}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-stone-700 uppercase tracking-wider">
                        Primary WhatsApp Order Line
                      </label>
                      <input
                        type="text"
                        value={contactForm.whatsapp}
                        onChange={(e) => setContactForm({ ...contactForm, whatsapp: e.target.value })}
                        placeholder="e.g. 08033810865"
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                        required
                      />
                      <span className="text-[10px] text-stone-500 block">
                        Used for all direct WhatsApp order buttons and quote inquiries.
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-stone-700 uppercase tracking-wider">
                        Calling Phone 1
                      </label>
                      <input
                        type="text"
                        value={contactForm.phone1}
                        onChange={(e) => setContactForm({ ...contactForm, phone1: e.target.value })}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-mono focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-stone-700 uppercase tracking-wider">
                        Calling Phone 2 (Alternative Line)
                      </label>
                      <input
                        type="text"
                        value={contactForm.phone2}
                        onChange={(e) => setContactForm({ ...contactForm, phone2: e.target.value })}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-mono focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-bold text-stone-700 uppercase tracking-wider">
                      Showroom Physical Address
                    </label>
                    <input
                      type="text"
                      value={contactForm.address}
                      onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-stone-700 uppercase tracking-wider">
                        Facebook Profile URL
                      </label>
                      <input
                        type="text"
                        value={contactForm.facebook}
                        onChange={(e) => setContactForm({ ...contactForm, facebook: e.target.value })}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-mono text-[11px] focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-stone-700 uppercase tracking-wider">
                        TikTok Profile URL
                      </label>
                      <input
                        type="text"
                        value={contactForm.tiktok}
                        onChange={(e) => setContactForm({ ...contactForm, tiktok: e.target.value })}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-mono text-[11px] focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-bold text-stone-700 uppercase tracking-wider">
                      Opening Hours & Availability Note
                    </label>
                    <input
                      type="text"
                      value={contactForm.openingHours}
                      onChange={(e) => setContactForm({ ...contactForm, openingHours: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#0B2419]"
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-3">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#0B2419] hover:bg-[#123827] text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      <span>Save Contact Information</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 5: DELIVERY TERMS */}
          {/* ============================================================ */}
          {activeTab === 'delivery' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Delivery & Logistics Coverage
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Ayobami SAM Ventures operates dispatch across Nigeria directly from Molake House, Balogun West, Lagos Island:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="font-bold text-[#0B2419] flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-emerald-600" />
                      <span>Within Lagos Delivery</span>
                    </div>
                    <p className="text-stone-600">
                      Doorstep dispatch via express dispatch riders or showroom pickup at 37/39 Balogun West, Molake House, Lagos Island.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="font-bold text-[#0B2419] flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-amber-600" />
                      <span>Interstate Waybill Delivery</span>
                    </div>
                    <p className="text-stone-600">
                      Reliable interstate bus park waybill services to Abuja, Port Harcourt, Ibadan, Kano, Benin City, Enugu, and all 36 states across Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* MODAL 1: ADD NEW PRODUCT DIALOG */}
        {/* ============================================================ */}
        {isAddProductOpen && (
          <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 overflow-y-auto">
            <div className="bg-white w-full max-w-xl rounded-3xl p-6 shadow-2xl border border-stone-300 space-y-5 my-6">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Add New Product to Store
                </h3>
                <button
                  onClick={() => setIsAddProductOpen(false)}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
                {/* Department Selection */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider">
                    Main Department
                  </label>
                  <select
                    value={newProductForm.mainSection}
                    onChange={(e) => {
                      const sec = e.target.value as MainSection;
                      setNewProductForm({
                        ...newProductForm,
                        mainSection: sec,
                        name: sec === 'shoes' ? 'Matching shoes and bags' : newProductForm.name,
                        unitLabel: sec === 'cloths' ? 'yards' : sec === 'shoes' ? 'sets' : 'units',
                      });
                    }}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl font-bold text-stone-800"
                  >
                    <option value="cloths">1. Cloths & Fabrics (Ankara, Lace, Senator)</option>
                    <option value="shoes">2. Shoes & Bags (Matching shoes and bags)</option>
                    <option value="tailoring-machine">3. Tailoring Machines & Equipment</option>
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider">
                    Product Title
                  </label>
                  <input
                    type="text"
                    value={newProductForm.name}
                    onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                    placeholder={
                      newProductForm.mainSection === 'shoes'
                        ? 'Matching shoes and bags'
                        : 'e.g. BLISS 020419-A / Swiss Voile Lace'
                    }
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-semibold"
                    required
                  />
                </div>

                {/* Description / Detail */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider">
                    Description & Specifications
                  </label>
                  <textarea
                    rows={2}
                    value={newProductForm.description}
                    onChange={(e) => setNewProductForm({ ...newProductForm, description: e.target.value })}
                    placeholder={
                      newProductForm.mainSection === 'shoes'
                        ? 'Gold & black snake print heel & bag set with crystal buckle'
                        : 'Authentic 100% cotton premium material for bespoke native wear.'
                    }
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                    required
                  />
                </div>

                {/* Image Upload or URL */}
                <div className="space-y-2">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider">
                    Product Image (Upload or URL)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newProductForm.image}
                      onChange={(e) => setNewProductForm({ ...newProductForm, image: e.target.value })}
                      placeholder="/images/... or https://..."
                      className="flex-1 p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-mono text-[11px]"
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) => handleFileUpload(e, true)}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      disabled={isUploadingImage}
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3.5 py-2.5 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 font-bold rounded-xl flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {isUploadingImage ? <RefreshCw className="w-4 h-4 animate-spin text-emerald-700" /> : <Upload className="w-4 h-4" />}
                      <span>{isUploadingImage ? 'Uploading...' : 'Upload'}</span>
                    </button>
                  </div>
                  {uploadStatus && (
                    <div className="p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-[11px] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{uploadStatus}</span>
                    </div>
                  )}
                  {newProductForm.image && (
                    <div className="mt-2 flex items-center gap-2">
                      <img
                        src={newProductForm.image}
                        alt="Preview"
                        className="w-14 h-14 object-cover rounded-xl border border-stone-300"
                      />
                      <span className="text-[11px] text-emerald-700 font-bold">Image loaded successfully</span>
                    </div>
                  )}
                </div>

                {/* Sizing Note if Shoes */}
                {newProductForm.mainSection === 'shoes' && (
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs font-semibold">
                    👟 Sizing standard: <strong>Size 30 to 45</strong> (Euro Sizing).
                  </div>
                )}

                <div className="pt-3 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddProductOpen(false)}
                    className="px-4 py-2 bg-stone-100 text-stone-700 font-bold rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#0B2419] hover:bg-[#123827] text-white font-bold rounded-xl cursor-pointer shadow-xs"
                  >
                    Create Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* MODAL 2: MANAGE IMAGES FOR A PRODUCT */}
        {/* ============================================================ */}
        {managingImagesProduct && (
          <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 overflow-y-auto">
            <div className="bg-white w-full max-w-xl rounded-3xl p-6 shadow-2xl border border-stone-300 space-y-5 my-6">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Manage Product Photos
                  </h3>
                  <p className="text-xs text-stone-500">{managingImagesProduct.name} ({managingImagesProduct.sku})</p>
                </div>
                <button
                  onClick={() => setManagingImagesProduct(null)}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Current Photos Grid */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Current Photos in Gallery
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(managingImagesProduct.galleryImages || [managingImagesProduct.image]).map((img, idx) => {
                    const isPrimary = managingImagesProduct.image === img;
                    return (
                      <div
                        key={idx}
                        className={`relative rounded-xl overflow-hidden border-2 group ${
                          isPrimary ? 'border-[#0B2419] shadow-sm' : 'border-stone-200'
                        }`}
                      >
                        <img
                          src={img}
                          alt="Gallery item"
                          className="w-full h-28 object-cover bg-stone-100"
                        />
                        {isPrimary && (
                          <span className="absolute top-1 left-1 bg-[#0B2419] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                            Primary
                          </span>
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-1">
                          {!isPrimary && (
                            <button
                              type="button"
                              onClick={() => handleSetPrimaryImage(img)}
                              className="px-2 py-1 bg-white text-stone-800 text-[10px] font-bold rounded shadow hover:bg-stone-100"
                              title="Set as Main Thumbnail"
                            >
                              Make Primary
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleDeleteImage(img)}
                            className="p-1 bg-rose-600 text-white rounded hover:bg-rose-700 shadow"
                            title="Delete this image"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Upload or Add New Image */}
              <div className="pt-2 border-t space-y-3">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Add New Photo to this Product
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="Enter image URL (/images/... or https://...)"
                    className="flex-1 p-2 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono text-[11px]"
                  />
                  <button
                    type="button"
                    onClick={handleAddImageUrl}
                    className="px-3 py-2 bg-[#0B2419] text-white font-bold text-xs rounded-xl shadow-xs"
                  >
                    Add URL
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="file"
                    ref={galleryFileInputRef}
                    onChange={(e) => handleFileUpload(e, false)}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    disabled={isUploadingImage}
                    onClick={() => galleryFileInputRef.current?.click()}
                    className="w-full py-2.5 border-2 border-dashed border-stone-300 hover:border-[#0B2419] rounded-xl text-xs font-bold text-stone-700 flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isUploadingImage ? <RefreshCw className="w-4 h-4 animate-spin text-emerald-700" /> : <Upload className="w-4 h-4 text-emerald-700" />}
                    <span>{isUploadingImage ? 'Uploading Photo to Supabase...' : 'Upload New Photo from Device'}</span>
                  </button>
                </div>
                {uploadStatus && (
                  <div className="p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-[11px] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{uploadStatus}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t flex justify-end">
                <button
                  type="button"
                  onClick={() => setManagingImagesProduct(null)}
                  className="px-5 py-2 bg-stone-900 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* MODAL 3: EDIT PRODUCT DETAILS */}
        {/* ============================================================ */}
        {editingProduct && (
          <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 overflow-y-auto">
            <div className="bg-white w-full max-w-xl rounded-3xl p-6 shadow-2xl border border-stone-300 space-y-5 my-6">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Edit Product Details
                </h3>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveEditedProduct} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider">
                    Product Title
                  </label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-semibold"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider">
                    Description & Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="block font-bold text-stone-700 uppercase tracking-wider">
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      value={editingProduct.availableStock}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          availableStock: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-bold text-stone-700 uppercase tracking-wider">
                      Stock Availability
                    </label>
                    <select
                      value={editingProduct.inStock ? 'true' : 'false'}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          inStock: e.target.value === 'true',
                        })
                      }
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl font-bold"
                    >
                      <option value="true">In Stock</option>
                      <option value="false">Out of Stock</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider">
                    Wholesale / Sizing Note
                  </label>
                  <input
                    type="text"
                    value={editingProduct.wholesaleNote || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, wholesaleNote: e.target.value })}
                    placeholder="e.g. Size ranges 30 to 45 available."
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-2 border-t">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 bg-stone-100 text-stone-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#0B2419] hover:bg-[#123827] text-white font-bold rounded-xl shadow-xs"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
