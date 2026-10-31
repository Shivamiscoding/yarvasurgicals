import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, FileText, User, Phone, Mail, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, COMPANY } from '../data/products';

export default function EnquiryModal({ isOpen, onClose, defaultProduct = null }) {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-[28px] max-w-lg w-full overflow-hidden shadow-2xl relative"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="bg-[#01325d] text-white px-7 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#157e93] flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-['Outfit']">Enquire Now</h3>
                <p className="text-[11px] text-[#157e93] font-semibold tracking-wide">{COMPANY.name}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-7 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-5">
                <motion.div
                  className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h4 className="text-xl font-bold text-[#01325d] font-['Outfit']">
                  Thank You, {name}!
                </h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Your enquiry for <strong className="text-slate-700">{enquiryFor}</strong> has been received. Our team will contact you at <strong className="text-slate-700">{phone}</strong> / <strong className="text-slate-700">{email}</strong> shortly.
                </p>
                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-xl bg-[#01325d] hover:bg-[#021e3a] text-white text-sm font-bold transition-all shadow-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#157e93]" />
                    <span>Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:border-[#157e93] focus:bg-white focus:ring-1 focus:ring-[#157e93]/20 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#157e93]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:border-[#157e93] focus:bg-white focus:ring-1 focus:ring-[#157e93]/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#157e93]" />
                    <span>Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:border-[#157e93] focus:bg-white focus:ring-1 focus:ring-[#157e93]/20 transition-all"
                  />
                </div>

                {/* Enquiry For */}
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#157e93]" />
                    <span>Enquiry For *</span>
                  </label>
                  <select
                    value={enquiryFor}
                    onChange={(e) => setEnquiryFor(e.target.value)}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:border-[#157e93] font-medium transition-all"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name} ({prod.subtitle})
                      </option>
                    ))}
                    <option value="General Surgical Instruments & Consumables">
                      General Surgical Instruments &amp; Consumables
                    </option>
                    <option value="Bulk Hospital Supply Order">
                      Bulk Hospital Supply Order
                    </option>
                    <option value="Other Requirements">
                      Other Requirements
                    </option>
                  </select>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#01325d] hover:bg-[#021e3a] text-white text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(1,50,93,0.2)] hover:shadow-[0_8px_30px_rgba(1,50,93,0.3)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-teal-300" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
