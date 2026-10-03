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

/**
 * Builds a 2-sentence WhatsApp order message containing:
 * Sentence 1: Hello, I would like to place an order.
 * Sentence 2: Category, Code, Order Type, Size (if shoes), Delivery Destination (Within Lagos / Other States).
 */
export function buildSingleProductWhatsAppMessage(
  product: Product,
  options: Record<string, string> = {},
  quantity: number = 1,
  customerNote: string = '',
  orderType: 'Retail' | 'Wholesale' = 'Retail',
  destination: string = 'Within Lagos',
  size?: string
): string {
  const shoeSize = size || options['Size'] || '';
  let sentence2 = `Category: ${product.category}, Code: ${product.sku}, Order Type: ${orderType}`;

  if (shoeSize) {
    sentence2 += `, Size: ${shoeSize}`;
  }

  if (destination) {
    sentence2 += `, Delivery Destination: ${destination}`;
  }

  sentence2 += `.`;

  return `Hello, I would like to place an order.\n${sentence2}`;
}

export function buildMultiItemWhatsAppMessage(
  items: InquiryItem[],
  customerName?: string,
  city?: string,
  generalNote?: string,
  orderType: 'Retail' | 'Wholesale' = 'Retail'
): string {
  let message = `Hello, I would like to place an order.\n`;
  message += `Order Type: ${orderType}, Total Items: ${items.length}.\n\n`;

  items.forEach((item, index) => {
    message += `Item ${index + 1} - Category: ${item.product.category}, Code: ${item.product.sku}${
      item.selectedSize ? `, Size: ${item.selectedSize}` : ''
    }, Qty: ${item.quantity}.\n`;
  });

  if (city) {
    message += `Delivery Destination: ${city}.\n`;
  }

  return message.trim();
}

export function buildConsultationWhatsAppMessage(
  service: string,
  details: string,
  clientName?: string,
  phone?: string,
  location?: string
): string {
  let message = `Hello, I would like to place an order.\n`;
  message += `Category: ${service}, Location: ${location || 'Within Lagos'}.\n`;
  if (details) message += `Note: ${details}`;
  return message.trim();
}

export function getWhatsAppUrl(phoneNumber: string, text: string): string {
  const cleanPhone = sanitizePhoneNumber(phoneNumber);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppChat(phoneNumber: string, text: string): void {
  const url = getWhatsAppUrl(phoneNumber, text);
  window.open(url, '_blank', 'noopener,noreferrer');
}
