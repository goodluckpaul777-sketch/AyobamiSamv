import { InquiryItem, Product } from '../types';

export const DEFAULT_WHATSAPP_NUMBER = '2348033810865'; // 08033810865 in international format
export const SECONDARY_PHONE_NUMBER = '09150996348';
export const DEFAULT_BUSINESS_NAME = 'Ayobami SAM Venture';
export const SHOP_LOCATION = '37/39 Balogun West, Molake House, Lagos, Nigeria';
export const FACEBOOK_URL = 'https://www.facebook.com/share/1BeLmWzV8P/';
export const TIKTOK_URL = 'https://tiktok.com/@ayobami.samuel31';

export function sanitizePhoneNumber(input: string): string {
  // Strip everything except digits
  let cleaned = input.replace(/\D/g, '');
  // If starts with 0 and 11 digits (e.g. Nigerian format 080..., 070..., 090...), replace leading 0 with 234
  if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = '234' + cleaned.slice(1);
  }
  return cleaned;
}

export function formatDisplayPhone(raw: string): string {
  const clean = sanitizePhoneNumber(raw);
  if (clean.length > 10) {
    return `+${clean.slice(0, 3)} ${clean.slice(3, 6)} ${clean.slice(6, 9)} ${clean.slice(9)}`;
  }
  return `+${clean}`;
}

export function buildSingleProductWhatsAppMessage(
  product: Product,
  options: Record<string, string>,
  quantity: number = 1,
  customerNote: string = '',
  orderType: 'Retail' | 'Wholesale' = 'Retail',
  destination: string = ''
): string {
  const optionsText = Object.entries(options)
    .filter(([_, v]) => Boolean(v))
    .map(([key, val]) => `• ${key}: ${val}`)
    .join('\n');

  let message = `Hello *Ayobami SAM Venture*! 👋\n`;
  message += `I am contacting your shop at 37/39 Balogun West, Molake House regarding:\n\n`;
  message += `📦 *Product:* ${product.name}\n`;
  message += `🏷️ *Category:* ${product.category.toUpperCase()} (${product.subcategory})\n`;
  message += `🔖 *Code / SKU:* ${product.sku}\n`;
  message += `💼 *Order Type:* ${orderType} Order\n`;
  message += `🔢 *Quantity Requested:* ${quantity} ${product.category === 'materials' ? 'yard(s) / bundle(s)' : 'unit(s)'}\n`;

  if (destination) {
    message += `📍 *Delivery Destination:* ${destination} (Nigeria / International)\n`;
  }

  if (optionsText) {
    message += `\n*Selected Options:*\n${optionsText}\n`;
  }

  if (customerNote && customerNote.trim()) {
    message += `\n*Client Note / Custom Spec:*\n"${customerNote.trim()}"\n`;
  }

  message += `\nPlease let me know your best wholesale/retail quotation and dispatch timeline from Molake House, Balogun. Thank you!`;

  return message;
}

export function buildMultiItemWhatsAppMessage(
  items: InquiryItem[],
  customerName?: string,
  city?: string,
  generalNote?: string,
  orderType: 'Retail' | 'Wholesale' = 'Retail'
): string {
  let message = `Hello *Ayobami SAM Venture* (Balogun Lagos)! 👋\n`;
  message += `I would like to request a quotation (${orderType}) for the following items:\n\n`;

  items.forEach((item, index) => {
    message += `*Item ${index + 1}: ${item.product.name}*\n`;
    message += `• Code: ${item.product.sku}\n`;
    message += `• Quantity: ${item.quantity}\n`;
    
    const opts = Object.entries(item.selectedOptions)
      .map(([k, v]) => `${k}: ${v}`)
      .join(', ');
    if (opts) {
      message += `• Details: ${opts}\n`;
    }
    if (item.customNote) {
      message += `• Note: ${item.customNote}\n`;
    }
    message += `\n`;
  });

  if (customerName) {
    message += `👤 *Customer Name:* ${customerName}\n`;
  }
  if (city) {
    message += `📍 *Delivery Location:* ${city} (State / Country)\n`;
  }
  if (generalNote) {
    message += `📝 *Order Note:* ${generalNote}\n`;
  }

  message += `\nPlease provide your best price quote and delivery arrangements. Thank you!`;

  return message;
}

export function buildConsultationWhatsAppMessage(
  service: string,
  details: string,
  clientName?: string,
  phone?: string,
  location?: string
): string {
  let message = `Hello *Ayobami SAM Venture*! 👋\n`;
  message += `I would like to inquire about:\n`;
  message += `📌 *Inquiry Topic:* ${service}\n\n`;
  message += `*Details:*\n${details}\n\n`;
  if (clientName) message += `*Name:* ${clientName}\n`;
  if (phone) message += `*Phone / WhatsApp:* ${phone}\n`;
  if (location) message += `*Destination / Location:* ${location}\n`;
  message += `\nLooking forward to doing business with your Balogun store!`;
  return message;
}

export function getWhatsAppUrl(phoneNumber: string, text: string): string {
  const cleanPhone = sanitizePhoneNumber(phoneNumber);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppChat(phoneNumber: string, text: string): void {
  const url = getWhatsAppUrl(phoneNumber, text);
  window.open(url, '_blank', 'noopener,noreferrer');
}
