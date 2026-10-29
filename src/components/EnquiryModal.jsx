import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, FileText, User, Phone, Mail, HelpCircle } from 'lucide-react';
import { PRODUCTS, COMPANY } from '../data/products';

export default function EnquiryModal({ isOpen, onClose, defaultProduct = null }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryFor, setEnquiryFor] = useState(defaultProduct ? defaultProduct.name : PRODUCTS[0].name);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setEnquiryFor(defaultProduct.name);
    }
  }, [defaultProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setEnquiryFor(PRODUCTS[0].name);
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="bg-[#01325d] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#157e93] flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Outfit']">Enquire Now</h3>
              <p className="text-xs text-[#157e93] font-medium">{COMPANY.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#01325d] font-['Outfit']">
                Thank You, {name}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your enquiry for <strong>{enquiryFor}</strong> has been received. Our team will contact you at <strong>{phone}</strong> / <strong>{email}</strong> shortly.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#01325d] hover:bg-[#032f59] text-white text-xs font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#157e93]" />
                  <span>Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93] focus:ring-1 focus:ring-[#157e93] transition-all"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#157e93]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93] focus:ring-1 focus:ring-[#157e93] transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#157e93]" />
                  <span>Email *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93] focus:ring-1 focus:ring-[#157e93] transition-all"
                />
              </div>

              {/* Enquiry For Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#157e93]" />
                  <span>Enquiry For *</span>
                </label>
                <select
                  value={enquiryFor}
                  onChange={(e) => setEnquiryFor(e.target.value)}
                  className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93] bg-white font-medium"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name} ({prod.subtitle})
                    </option>
                  ))}
                  <option value="General Surgical Instruments & Consumables">
                    General Surgical Instruments & Consumables
                  </option>
                  <option value="Bulk Hospital Supply Order">
                    Bulk Hospital Supply Order
                  </option>
                  <option value="Other Requirements">
                    Other Requirements
                  </option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#01325d] hover:bg-[#032f59] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-teal-300" />
                  <span>Submit Enquiry</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
