import React, { useState } from 'react';
import { MessageCircle, Scissors, Wrench, Sparkles, Send, MapPin, Truck } from 'lucide-react';
import { buildConsultationWhatsAppMessage, formatDisplayPhone, openWhatsAppChat } from '../utils/whatsapp';

interface ConsultationSectionProps {
  whatsAppNumber: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ whatsAppNumber }) => {
  const [service, setService] = useState('Aso-Ebi & Bulk Nigerian Fabric Supply');
  const [details, setDetails] = useState('');
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Lagos, Nigeria');

  const services = [
    {
      title: 'Aso-Ebi & Bulk Nigerian Fabric Supply',
      desc: 'Swiss voile lace, polished Guinea brocade & Senator cashmere for weddings and ceremonies.',
      icon: Scissors,
    },
    {
      title: 'Tailor Machines & Workshop Equipment Setup',
      desc: 'Lockstitch, overlocks, cutting machines and generators advice for fashion studios.',
      icon: Wrench,
    },
    {
      title: 'Matching shoes and bags',
      desc: 'Matching shoes and bags to suit your event.',
      icon: Sparkles,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.trim()) {
      alert('Please provide details about your materials, shoes, or machine order.');
      return;
    }

    const msg = buildConsultationWhatsAppMessage(service, details, clientName, phone, location);
    openWhatsAppChat(whatsAppNumber, msg);
  };

  return (
    <section id="consultation" className="py-16 sm:py-20 bg-stone-100/70 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-wider font-bold text-amber-900">
            Ayobami SAM Venture · Balogun West Wholesale & Retail Desk
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Order Inquiries, Aso-Ebi Sourcing & Machine Consultation
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Planning a wedding Aso-Ebi, equipping your fashion atelier with industrial sewing machines, or ordering bespoke Nigerian footwear? Chat directly with Ayobami SAM Venture via WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-md p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Service Selection Cards */}
            <div className="space-y-2.5">
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800">
                1. What do you need?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {services.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = service === item.title;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setService(item.title)}
                      className={`p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                          : 'border-stone-200 bg-stone-50/70 hover:bg-stone-100 text-stone-800'
                      }`}
                    >
                      <div className="space-y-2">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-300' : 'text-stone-700'}`} />
                        <h4 className="font-bold text-xs sm:text-sm leading-snug">{item.title}</h4>
                      </div>
                      <p className={`text-xs mt-2 line-clamp-2 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Client Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Alhaja Balogun / Engr. Emeka"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0803 123 4567 or +44 / +1"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Delivery City / State / Country
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Ikeja Lagos / Abuja / London UK / Houston US"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white"
                />
              </div>
            </div>

            {/* Details Textarea */}
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800">
                2. Order Details & Sizing / Quantity
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                required
                placeholder="Describe your inquiry: e.g. 'I need 10 pieces of Royal Emerald Swiss Voile Lace for a wedding in Ibadan' or 'Need quotation for 2 industrial lockstitch machines and 1 overlock delivered to our fashion shop in Port Harcourt'."
                className="w-full text-xs sm:text-sm p-3.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white leading-relaxed"
              />
            </div>

            {/* Direct WhatsApp Submission */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-stone-600 font-medium">
                Store WhatsApp: <strong className="font-mono text-stone-900">{formatDisplayPhone(whatsAppNumber)}</strong> (37/39 Balogun West)
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Submit to WhatsApp (Ayobami SAM Venture)</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
