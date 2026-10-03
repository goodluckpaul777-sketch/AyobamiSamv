import React, { useState } from 'react';
import { X, Phone, Check, RefreshCw, MessageSquare, ExternalLink, HelpCircle } from 'lucide-react';
import { sanitizePhoneNumber, formatDisplayPhone, getWhatsAppUrl } from '../utils/whatsapp';

interface WhatsAppSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSaveNumber: (newNumber: string) => void;
}

export const WhatsAppSettingsModal: React.FC<WhatsAppSettingsModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSaveNumber,
}) => {
  const [phoneInput, setPhoneInput] = useState(currentNumber);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = sanitizePhoneNumber(phoneInput);
    if (cleaned.length < 7) {
      alert('Please enter a valid phone number with country code (e.g. 2348031234567).');
      return;
    }
    onSaveNumber(cleaned);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleTestChat = () => {
    const cleaned = sanitizePhoneNumber(phoneInput);
    const testUrl = getWhatsAppUrl(
      cleaned,
      'Hello Atelier & Stitch! This is a test connection to verify your WhatsApp showroom line.'
    );
    window.open(testUrl, '_blank', 'noopener,noreferrer');
  };

  // QR Code URL via reliable Google Chart API or standard QR service
  const qrTargetUrl = getWhatsAppUrl(
    sanitizePhoneNumber(phoneInput),
    'Hello Atelier & Stitch! I am connecting to your showroom via the website QR code.'
  );
  const qrCodeImgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    qrTargetUrl
  )}&margin=10`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 text-base">Ayobami SAM Venture WhatsApp Desk</h3>
              <p className="text-xs text-stone-500">37/39 Balogun West, Molake House, Lagos Showroom Line</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              All product inquiries, quote requests, and tailor consultations are routed directly to this WhatsApp
              number. You can input any international WhatsApp number with country code.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                WhatsApp Phone Number (with Country Code)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="e.g. 2348039876543 or +234 803 987 6543"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
                />
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Current formatted display: <strong className="font-mono text-stone-800">{formatDisplayPhone(phoneInput)}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" /> Saved Successfully!
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" /> Save Active Number
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleTestChat}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
              >
                <MessageSquare className="w-4 h-4" /> Test WhatsApp Connection <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </form>

          {/* Quick QR Code for Mobile Scanning */}
          <div className="pt-4 border-t border-stone-200">
            <h4 className="text-xs font-semibold text-stone-700 mb-2">Scan with Phone to Chat on WhatsApp</h4>
            <div className="flex items-center gap-4 bg-stone-50 p-3 rounded-xl border border-stone-200">
              <div className="w-20 h-20 bg-white p-1 rounded-lg border border-stone-200 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={qrCodeImgSrc}
                  alt="WhatsApp Chat QR Code"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to text if QR server is unreachable
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-xs text-stone-600 space-y-1">
                <p className="font-medium text-stone-900">Direct Showroom Access</p>
                <p>Scan this QR code with any smartphone camera to launch WhatsApp immediately.</p>
                <p className="text-[11px] text-stone-500 font-mono">{formatDisplayPhone(phoneInput)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
