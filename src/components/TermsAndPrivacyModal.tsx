import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface TermsAndPrivacyModalProps {
  type: 'terms' | 'privacy';
  isOpen: boolean;
  onClose: () => void;
}

export const TermsAndPrivacyModal: React.FC<TermsAndPrivacyModalProps> = ({
  type,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] shadow-2xl border border-gray-200 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0F2E22] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'terms' ? (
              <FileText className="w-5 h-5 text-[#D4AF37]" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            )}
            <h3 className="font-serif font-black text-lg text-white">
              {type === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {type === 'terms' ? (
            <>
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#D4AF37]/30 space-y-2">
                <span className="font-bold text-[#0F2E22] block text-sm">
                  {STORE_INFO.storeName} — Official Store Terms
                </span>
                <p className="text-gray-600 text-xs">
                  Physical Showroom: 37/39 Balogun West, Molake House, Lagos Island, Nigeria.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    1. Ordering & Payment Confirmation
                  </h4>
                  <p className="pl-5 text-gray-600">
                    All retail cuts and wholesale bales (Ankara, Swiss Voile Lace, Senator suiting, shoes & bags, tailoring machines) are confirmed directly via our verified WhatsApp line (<strong>08033810865</strong>). Orders are processed immediately upon mutual agreement and confirmation.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    2. Delivery Destinations (Within Lagos & Other States)
                  </h4>
                  <p className="pl-5 text-gray-600">
                    We deliver <strong>Within Lagos</strong> (same-day or scheduled doorstep dispatch/pickup) and to <strong>Other States</strong> across Nigeria via trusted interstate transport and waybill parks from Lagos Island. Waybill receipts and driver tracking details are shared promptly on WhatsApp.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    3. In-Person Inspection & Physical Showroom
                  </h4>
                  <p className="pl-5 text-gray-600">
                    Customers and their representatives are welcome to visit our physical storefront at <strong>37/39 Balogun West, Molake House, Lagos</strong> to physically inspect fabric quality, verify shoe sizes, and test sewing machines before dispatch.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    4. Shoe Sizing & Exchanges
                  </h4>
                  <p className="pl-5 text-gray-600">
                    Shoes and matching bags are supplied in standard European sizing (Sizes 30 – 45). Please specify your accurate shoe size when placing your order. Size exchanges are supported if reported promptly upon receipt in original, unworn condition.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    5. Tailoring Machines Warranty
                  </h4>
                  <p className="pl-5 text-gray-600">
                    Industrial sewing machines and Peacock heavy-duty pressing equipment include workshop warranty and technical setup guidance from our Balogun workshop.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#D4AF37]/30 space-y-2">
                <span className="font-bold text-[#0F2E22] block text-sm">
                  Customer Privacy & Data Protection Policy
                </span>
                <p className="text-gray-600 text-xs">
                  We treat your contact and order details with the utmost confidentiality.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    1. Information We Collect
                  </h4>
                  <p className="pl-5 text-gray-600">
                    When you order via our website or WhatsApp, we only receive the essential information needed to fulfill your purchase: your requested item code, category, order type, destination (Within Lagos or Other States), shoe size, and phone number.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    2. No Third-Party Selling or Sharing
                  </h4>
                  <p className="pl-5 text-gray-600">
                    Your personal information and phone numbers are strictly used for your order dispatch and communication. We never sell, rent, or distribute customer details to third-party marketing companies.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    3. Secure WhatsApp Communications
                  </h4>
                  <p className="pl-5 text-gray-600">
                    Customer conversations, invoices, and waybill receipts are communicated through official WhatsApp end-to-end encrypted messaging directly with our business management.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0F2E22] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    4. Questions & Store Inquiries
                  </h4>
                  <p className="pl-5 text-gray-600">
                    For any questions regarding your data or our policies, reach out directly to our management at <strong>08033810865</strong> or visit us at <strong>37/39 Balogun West, Molake House, Lagos</strong>.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0F2E22] hover:bg-[#1B4332] text-white text-xs font-bold rounded-xl cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
