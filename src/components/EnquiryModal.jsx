import React, { useState, useEffect, useRef } from 'react';
import { X, Check, MailCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';

/* ─────────────────────────────────────────────────────────────────────────────
   Recipient Email
   All form submissions are delivered directly to this email address.
───────────────────────────────────────────────────────────────────────────── */
const TARGET_EMAIL = 'shivammaurya2208200@gmail.com';

export default function EnquiryModal({ isOpen, onClose, defaultProduct = null }) {
  const firstInputRef = useRef(null);

  const initialForm = {
    name: '',
    phone: '',
    email: '',
    organization: '',
    product: defaultProduct?.name || PRODUCTS[0]?.name || '',
    message: '',
  };

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'needs_activation' | 'error'
  const [validationError, setValidationError] = useState('');

  // Reset and focus on modal open
  useEffect(() => {
    if (isOpen) {
      setForm({
        ...initialForm,
        product: defaultProduct?.name || PRODUCTS[0]?.name || '',
      });
      setStatus('idle');
      setValidationError('');
      const timer = setTimeout(() => firstInputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen, defaultProduct]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const handleClose = () => {
    setForm(initialForm);
    setStatus('idle');
    setValidationError('');
    onClose();
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setValidationError('Please enter your name and phone number.');
      return;
    }

    setStatus('submitting');
    setValidationError('');

    // Uses local Vite proxy on localhost to avoid browser CORS blocks;
    // Uses direct URL on production domains.
    const isLocal =
      typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    const endpoint = isLocal
      ? `/api/formsubmit/ajax/${TARGET_EMAIL}`
      : `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Customer Name': form.name,
          'Phone Number': form.phone,
          'Email Address': form.email || 'Not specified',
          'Hospital / Clinic / Store': form.organization || 'Not specified',
          'Product Requested': form.product,
          'Requirement Details': form.message || 'General catalogue quotation request',
          _subject: `New Product Enquiry from ${form.name} — Yarva Surgicals`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));

      // FormSubmit requires a 1-time activation link on first submission to a new email
      if (data.message && data.message.toLowerCase().includes('activate')) {
        setStatus('needs_activation');
      } else if (response.ok || data.success === 'true' || data.success === true) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Soft, calm backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden my-auto"
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 sm:px-8 pt-7 pb-4 border-b border-slate-100 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#01325d] font-['Outfit'] tracking-tight">
                Request Product Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tell us your requirement. We’ll get back with availability and pricing.
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-8 py-6">
            {/* 1. SUCCESS STATE */}
            {status === 'success' && (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-[#01325d] font-['Outfit']">
                    Enquiry Sent Successfully
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-800">{form.name}</span>. Your enquiry for{' '}
                    <span className="font-semibold text-[#01325d]">{form.product}</span> has been received. Our team will contact you at{' '}
                    <span className="font-semibold text-slate-800">{form.phone}</span> shortly.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-lg bg-[#01325d] text-white text-xs font-semibold hover:bg-[#022442] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            {/* 2. FIRST-TIME ACTIVATION NOTICE */}
            {status === 'needs_activation' && (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <MailCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#01325d] font-['Outfit']">
                    1-Time Email Activation Required
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    FormSubmit has sent an activation email to{' '}
                    <strong className="text-slate-800">{TARGET_EMAIL}</strong>.
                  </p>
                </div>
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-left text-xs text-amber-900 space-y-1.5">
                  <p className="font-semibold">Next step:</p>
                  <ol className="list-decimal list-inside space-y-1 text-[11px] text-amber-800 leading-relaxed">
                    <li>
                      Open your Gmail at <strong>{TARGET_EMAIL}</strong>.
                    </li>
                    <li>
                      Check your <strong>Spam / Junk folder</strong> (or Promotions tab) for an email with subject{' '}
                      <em>"Action Required: Activate FormSubmit"</em>.
                    </li>
                    <li>
                      Click the green <strong>"Activate Form"</strong> button inside that email.
                    </li>
                  </ol>
                  <p className="text-[11px] text-amber-800 pt-1">
                    Once clicked, this 1-time setup is complete forever, and all future customer clicks will instantly arrive in your inbox.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-lg bg-[#01325d] text-white text-xs font-semibold hover:bg-[#022442] transition-colors cursor-pointer"
                  >
                    Got It
                  </button>
                </div>
              </div>
            )}

            {/* 3. FORM INPUTS (IDLE / SUBMITTING / ERROR) */}
            {status !== 'success' && status !== 'needs_activation' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Kumar"
                      value={form.name}
                      onChange={handleChange('name')}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#01325d] focus:ring-1 focus:ring-[#01325d] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#01325d] focus:ring-1 focus:ring-[#01325d] transition-all"
                    />
                  </div>
                </div>

                {/* Email & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="doctor@hospital.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#01325d] focus:ring-1 focus:ring-[#01325d] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Hospital / Clinic / Store
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apollo Clinic, Pune"
                      value={form.organization}
                      onChange={handleChange('organization')}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#01325d] focus:ring-1 focus:ring-[#01325d] transition-all"
                    />
                  </div>
                </div>

                {/* Product of Interest */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Product of Interest
                  </label>
                  <select
                    value={form.product}
                    onChange={handleChange('product')}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-[#01325d] focus:ring-1 focus:ring-[#01325d] transition-all cursor-pointer"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name}
                      </option>
                    ))}
                    <option value="Multiple Products / Bulk Hospital Order">
                      Multiple Products / Bulk Hospital Order
                    </option>
                  </select>
                </div>

                {/* Requirement / Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Quantity &amp; Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Approximate quantity, pack sizes, or preferred delivery timeframe..."
                    value={form.message}
                    onChange={handleChange('message')}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#01325d] focus:ring-1 focus:ring-[#01325d] resize-none transition-all"
                  />
                </div>

                {/* Validation Error */}
                {validationError && (
                  <p className="text-xs text-red-600 font-medium">
                    {validationError}
                  </p>
                )}

                {/* Submission Error Banner */}
                {status === 'error' && (
                  <p className="text-xs text-red-600 font-medium bg-red-50 p-2.5 rounded-lg border border-red-200">
                    Unable to submit right now. Please check your connection and try again.
                  </p>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-4 bg-[#01325d] hover:bg-[#022442] active:bg-[#011a30] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending enquiry...</span>
                      </>
                    ) : (
                      <span>Send Enquiry</span>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Your enquiry will be sent directly to our procurement desk.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
