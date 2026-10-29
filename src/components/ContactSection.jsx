import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    phone: '',
    email: '',
    selectedProducts: [],
    volume: 'Monthly Hospital Supply',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleProduct = (name) => {
    setFormData((prev) => {
      const exists = prev.selectedProducts.includes(name);
      return {
        ...prev,
        selectedProducts: exists
          ? prev.selectedProducts.filter((p) => p !== name)
          : [...prev.selectedProducts, name],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapsQuery = encodeURIComponent(
    'H No 1534 Lawale Phata, Balaji Nagar, Pirangut, Mulshi, Pune, Maharashtra 412115'
  );

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#028090] text-xs font-bold uppercase tracking-wider">
            <Building className="w-4 h-4 text-[#028090]" />
            Hospital & Dealer Procurement
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight font-['Outfit']">
            Request an Institutional Quotation or Sample
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Connect directly with our central warehouse team in Pirangut, Pune. We provide tailored rate cards, GST invoices, and fast clinical dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-[#0b2545] font-['Outfit']">
                Yarva Surgicals
              </h3>
              <p className="text-xs text-[#028090] font-semibold uppercase tracking-wider -mt-4">
                Quality • Care • Better Tomorrow
              </p>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100/70 border border-teal-300/60 flex items-center justify-center shrink-0 text-[#028090]">
                  <MapPin className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Central Warehouse & Office:
                  </h4>
                  <p className="text-xs text-slate-700 font-medium mt-1 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#028090] hover:underline mt-1.5"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone & Direct Desk */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100/70 border border-teal-300/60 flex items-center justify-center shrink-0 text-[#028090]">
                  <Phone className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Procurement Hotline:
                  </h4>
                  <p className="text-xs text-slate-700 font-semibold mt-1">
                    {COMPANY_INFO.phone}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Direct line for hospital purchase managers & distributors
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 border border-emerald-300/60 flex items-center justify-center shrink-0 text-emerald-700">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    WhatsApp Desk:
                  </h4>
                  <p className="text-xs text-slate-700 font-medium mt-1">
                    Instant catalog & pricing on WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Yarva%20Surgicals,%20we%20need%20a%20rate%20quote%20for%20our%20hospital/clinic.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 underline mt-1"
                  >
                    Start WhatsApp Chat Now →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100/70 border border-teal-300/60 flex items-center justify-center shrink-0 text-[#028090]">
                  <Mail className="w-5 h-5 text-[#028090]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Official Email:
                  </h4>
                  <p className="text-xs text-slate-700 font-medium mt-1">
                    {COMPANY_INFO.email}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Send tender documents, RFQs & rate inquiries
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                  <Clock className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Dispatch Operations:
                  </h4>
                  <p className="text-xs text-slate-700 mt-1">
                    {COMPANY_INFO.businessHours}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Institutional RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-[#0b2545] font-['Outfit']">
                  Submit Institutional Request For Quotation (RFQ)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your clinic or hospital details to receive official batch rates and tax invoices.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0b2545] font-['Outfit']">
                    Quotation Request Received!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you. Our Pune dispatch team will review your quantities and reach out within 2 hours with our best institutional price quote.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#028090] underline pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Hospital / Clinic / Pharmacy Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Balaji Multi-Speciality Hospital"
                        value={formData.orgName}
                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090] focus:ring-1 focus:ring-[#028090]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Person / Doctor Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090] focus:ring-1 focus:ring-[#028090]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98220 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090] focus:ring-1 focus:ring-[#028090]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Official Email
                      </label>
                      <input
                        type="email"
                        placeholder="procurement@hospital.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090] focus:ring-1 focus:ring-[#028090]"
                      />
                    </div>
                  </div>

                  {/* Products Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Required Consumables:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {PRODUCTS.map((prod) => {
                        const isChecked = formData.selectedProducts.includes(prod.name);
                        return (
                          <button
                            key={prod.id}
                            type="button"
                            onClick={() => toggleProduct(prod.name)}
                            className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              isChecked
                                ? 'bg-teal-50 border-[#028090] text-[#0b2545] font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="truncate">{prod.name}</span>
                              <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${isChecked ? 'bg-[#028090] text-white' : 'border border-slate-300'}`}>
                                {isChecked && '✓'}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Volume / Tier */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Expected Order Tier:
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090] bg-white"
                    >
                      <option value="Sample Pack / Evaluation">Sample Evaluation Pack</option>
                      <option value="Clinic Routine Supply (10-50 packs)">Clinic Routine Supply (10-50 packs)</option>
                      <option value="Monthly Hospital Supply (100-500 packs)">Monthly Hospital Supply (100-500 packs)</option>
                      <option value="Bulk Master Carton / Wholesale (500+ packs)">Bulk Master Carton / Wholesale (500+ packs)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Specific Requirements / Delivery Instructions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify sizes, ply count, sterilization report needs, delivery schedule, etc..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#028090]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0b2545] hover:bg-[#07192f] text-white text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-teal-400" />
                    <span>Submit Request For Quotation</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#028090]" />
                    <span>Your procurement details are kept confidential. Direct GST invoice dispatched.</span>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
