import React, { useState } from 'react';
import { MessageCircle, MapPin, Settings, Globe, Truck, Phone, ExternalLink, FileText, ShieldCheck } from 'lucide-react';
import {
  SECONDARY_PHONE_NUMBER,
  FACEBOOK_URL,
  TIKTOK_URL,
} from '../utils/whatsapp';
import { TermsAndPrivacyModal } from './TermsAndPrivacyModal';

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
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);

  const handleChat = () => {
    window.open(
      `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
        'Hello, I would like to place an order.\nPlease let me know how to proceed with my purchase.'
      )}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Brand & Location */}
            <div className="md:col-span-6 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ayobami SAM Ventures
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
                37/39 Balogun West, Molake House, Lagos, Nigeria. Retail & wholesale Nigerian clothing materials, Swiss lace, Senator fabrics, matching shoes & bags, and industrial tailoring machines.
              </p>

              <div className="space-y-2 text-xs text-stone-300 pt-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=37%2F39+Balogun+West+Molake+House+Lagos+Island+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Molake House, 37/39 Balogun West, Lagos Island (Open in Maps)</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Calls: <a href="tel:08033810865" className="hover:text-white underline font-mono">08033810865</a> / <a href="tel:09150996348" className="hover:text-white underline font-mono">09150996348</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Delivery: Within Lagos & Other States across Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Available 24/7 for Inquiries & Orders</span>
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

            {/* Terms of Service & Privacy Policy Scrollable Section (As Requested) */}
            <div className="md:col-span-6 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-100">
                Store Terms & Privacy Policy
              </h4>
              <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700 space-y-2.5 text-xs text-stone-300 leading-relaxed">
                <p>
                  <strong>Delivery Destinations:</strong> We deliver strictly <strong>Within Lagos</strong> (doorstep delivery or showroom pickup) and to <strong>Other States</strong> across Nigeria via trusted waybill logistics.
                </p>
                <p>
                  <strong>Shoe Sizing:</strong> Matching shoes & bags are supplied in standard European sizes <strong>(Size 30 to 45)</strong>.
                </p>
                <p>
                  <strong>Privacy:</strong> We respect your confidentiality. Customer phone numbers and orders sent via WhatsApp are never sold or shared with any third party.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  onClick={() => setLegalModal('terms')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer border border-stone-700"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Terms of Service</span>
                </button>

                <button
                  onClick={() => setLegalModal('privacy')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer border border-stone-700"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Privacy Policy</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenSettingsModal}
                  className="inline-flex items-center gap-2 text-[11px] text-stone-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Configure WhatsApp Number</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <p>© {new Date().getFullYear()} Ayobami SAM Ventures. 37/39 Balogun West, Molake House, Lagos, Nigeria.</p>
            <div className="flex items-center gap-3 text-xs">
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-stone-300 transition-colors cursor-pointer underline"
              >
                Terms of Service
              </button>
              <span>·</span>
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-stone-300 transition-colors cursor-pointer underline"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <span>Wholesale & Retail</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms of Service & Privacy Policy Modal */}
      {legalModal && (
        <TermsAndPrivacyModal
          type={legalModal}
          isOpen={Boolean(legalModal)}
          onClose={() => setLegalModal(null)}
        />
      )}
    </>
  );
};
