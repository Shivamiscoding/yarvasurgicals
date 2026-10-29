import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { COMPANY, PRODUCTS } from '../data/products';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    facility: '',
    phone: '',
    product: PRODUCTS[0].title,
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Inquiry - Yarva Surgicals*%0A*Facility:* ${form.facility || 'Healthcare Facility'}%0A*Contact:* ${form.name || 'Purchasing Team'}%0A*Phone:* ${form.phone || 'N/A'}%0A*Product:* ${form.product}%0A*Notes:* ${form.notes || 'Wholesale rate request'}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank');
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008b99]">
            <span className="w-2 h-2 rounded-full bg-[#008b99]"></span>
            Contact & Central Distribution Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b2545] tracking-tight font-['Outfit']">
            Supply Inquiries & Hospital Contracts
          </h2>
          <p className="text-sm text-slate-600">
            Reach our central distribution office in Pirangut, Pune. We dispatch across Pune, Pimpri-Chinchwad, and Western Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Company Information & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-extrabold text-[#0b2545] font-['Outfit']">
                  {COMPANY.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#008b99] mt-0.5">
                  {COMPANY.tagline}
                </p>
              </div>

              {/* Address */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#008b99] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Central Warehouse & Registered Office:
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-1 leading-relaxed">
                    {COMPANY.address}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#008b99] hover:underline mt-2"
                  >
                    <span>View Location on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#008b99] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Procurement Desk:
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-1">
                    {COMPANY.phone}
                  </p>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#008b99] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Email:
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-1">
                    {COMPANY.email}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Operational Hours:
                  </h4>
                  <p className="text-xs text-slate-700 mt-1">
                    {COMPANY.hours}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean B2B Price & Sample Request Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-md">
              
              <h3 className="text-xl font-bold text-[#0b2545] font-['Outfit'] mb-1">
                Request Rate Card & Evaluation Samples
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Receive batch pricing, GST invoices, and delivery schedules for your healthcare facility.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#008b99] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0b2545] font-['Outfit']">
                    Inquiry Transmitted
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you. Our Pune warehouse representative will get back to you with the official rate card and sample availability.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                    >
                      Connect on WhatsApp
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Hospital / Pharmacy / Clinic Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Balaji Hospital"
                        value={form.facility}
                        onChange={(e) => setForm({ ...form, facility: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#008b99]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. K. Sharma / Purchase In-Charge"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#008b99]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Contact Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98220 00000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#008b99]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Consumable of Interest
                      </label>
                      <select
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#008b99] bg-white"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option value="All Three Products (Mixed Bulk)">
                          All Three Products (Mixed Bulk Order)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Estimated Quantity & Specifications
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify required carton count, delivery urgency, or sample requests..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#008b99]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-lg bg-[#0b2545] hover:bg-[#06172e] text-white font-bold transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#008b99]" />
                      <span>Submit Official Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="flex-1 py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
