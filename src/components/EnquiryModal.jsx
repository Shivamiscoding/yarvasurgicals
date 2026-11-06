import React, { useState, useEffect, useRef } from 'react';
import { X, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';

/* ─────────────────────────────────────────────────────────────────────────────
   🔧 WEB3FORMS ACCESS KEY
   Submissions are sent directly to shivammaurya2208200@gmail.com
───────────────────────────────────────────────────────────────────────────── */
const WEB3FORMS_ACCESS_KEY = '12b8a0ae-8fd1-447e-a3e5-225d33526b50';

/* ── Validation ─────────────────────────────────────────────────────────── */
const DISPOSABLE = [
  'mailinator.com','guerrillamail.com','trashmail.com','tempmail.com',
  'throwam.com','yopmail.com','fakeinbox.com','spamgourmet.com',
  'maildrop.cc','dispostable.com','discard.email','filzmail.com',
];
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

const validate = {
  name: (v) => (!v.trim() ? 'Name is required' : v.trim().length < 2 ? 'Enter a valid name' : ''),
  phone: (v) => {
    if (!v.trim()) return 'Phone is required';
    const d = v.trim().replace(/^\+91[\s\-]?/, '').replace(/[\s\-().]/g, '');
    if (!/^\d+$/.test(d)) return 'Digits only';
    if (d.length < 10) return `Too short — ${d.length}/10 digits`;
    if (d.length > 10) return `Too long — ${d.length}/10 digits`;
    return '';
  },
  email: (v) => {
    if (!v || !v.trim()) return '';
    if (!EMAIL_RE.test(v.trim())) return 'Invalid email';
    if (DISPOSABLE.includes(v.trim().split('@')[1]?.toLowerCase())) return 'Use a real email';
    return '';
  },
  products: (arr) => (arr.length === 0 ? 'Select at least one product' : ''),
};

const ALL_PRODUCTS = [
  ...PRODUCTS.map((p) => p.name),
  'Multiple Products / Bulk Order',
];

export default function EnquiryModal({ isOpen, onClose, defaultProduct = null }) {
  const nameRef = useRef(null);

  const blank = { name: '', phone: '', email: '', message: '', products: [] };
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const pre = defaultProduct?.name ? [defaultProduct.name] : [];
    setForm({ ...blank, products: pre });
    setErrors({});
    setTouched({});
    setStatus('idle');
    setErrorMessage('');
    const t = setTimeout(() => nameRef.current?.focus(), 160);
    return () => clearTimeout(t);
  }, [isOpen, defaultProduct]);

  useEffect(() => {
    if (!isOpen) return;
    const fn = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen]);

  const touch = (field) => setTouched((p) => ({ ...p, [field]: true }));
  const err = (field, val) => setErrors((p) => ({ ...p, [field]: validate[field]?.(val) ?? '' }));

  const handleChange = (field) => (e) => {
    const v = e.target.value;
    setForm((p) => ({ ...p, [field]: v }));
    if (touched[field]) err(field, v);
  };

  const handleBlur = (field) => () => {
    touch(field);
    err(field, form[field]);
  };

  const toggleProduct = (name) => {
    setForm((prev) => {
      const has = prev.products.includes(name);
      const next = has ? prev.products.filter((p) => p !== name) : [...prev.products, name];
      if (touched.products) setErrors((e) => ({ ...e, products: validate.products(next) }));
      return { ...prev, products: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, products: true });
    const errs = {
      name: validate.name(form.name),
      phone: validate.phone(form.phone),
      email: validate.email(form.email),
      products: validate.products(form.products),
    };
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Product Enquiry from ${form.name.trim()} — Yarva Surgicals`,
        from_name: 'Yarva Surgicals Website',
        name: form.name.trim(),
        phone: form.phone.trim(),
        products_requested: form.products.join(', '),
        requirements: form.message.trim() || 'General quotation inquiry',
      };

      // Only include email if user actually entered one to avoid triggering Web3Forms invalid email validator
      if (form.email && form.email.trim()) {
        payload.email = form.email.trim();
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && (data.success === true || data.success === 'true')) {
        setStatus('success');
      } else {
        setErrorMessage(data.message || 'Submission could not be completed. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network connection error. Please try again.');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal shell */}
        <motion.div
          className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex my-auto"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── LEFT — Brand panel ── */}
          <div className="hidden sm:flex flex-col justify-between w-56 shrink-0 bg-[#01325d] p-7 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.04]" />
            <div className="absolute bottom-6 -left-10 w-36 h-36 rounded-full bg-[#157e93]/20" />

            <div className="relative z-10">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93] mb-5">
                Yarva Surgicals
              </span>
              <h2 className="font-['Outfit'] text-2xl font-extrabold text-white leading-tight">
                Request a Product Enquiry
              </h2>
              <p className="mt-3 text-xs text-white/50 leading-relaxed">
                Fill in your details and select the products you need. We'll get back to you with availability and pricing.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <div className="h-px w-10 bg-[#157e93]/60 mb-4" />
              <p className="text-[11px] text-white/40 leading-relaxed">
                Quality • Care • Better Tomorrow
              </p>
            </div>
          </div>

          {/* ── RIGHT — Form panel ── */}
          <div className="flex-1 bg-white">
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-100">
              <p className="font-['Outfit'] text-base font-bold text-[#01325d] sm:hidden">Product Enquiry</p>
              <p className="font-['Outfit'] text-sm font-semibold text-[#01325d] hidden sm:block">Your Details</p>
              <button
                onClick={onClose}
                aria-label="Close"
                className="ml-auto rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 py-5">
              {/* SUCCESS */}
              {status === 'success' && (
                <div className="py-10 flex flex-col items-center gap-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#157e93]/10 flex items-center justify-center">
                    <Check className="w-7 h-7 text-[#157e93] stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] text-lg font-bold text-[#01325d]">Enquiry Sent!</h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed max-w-xs mx-auto">
                      Thanks, <strong className="text-slate-700">{form.name}</strong>. We've received your enquiry for{' '}
                      <strong className="text-[#01325d]">{form.products.join(', ')}</strong>.
                      Our team will reach you at <strong className="text-slate-700">{form.phone}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-1 px-7 py-2.5 rounded-xl bg-[#01325d] text-white text-sm font-semibold hover:bg-[#022442] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}

              {/* FORM */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <FormField label="Full Name" error={errors.name} required>
                      <input
                        ref={nameRef}
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        onBlur={handleBlur('name')}
                        autoComplete="name"
                        className={inp(!!errors.name)}
                      />
                    </FormField>
                    <FormField label="Phone Number" error={errors.phone} required>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        autoComplete="tel"
                        className={inp(!!errors.phone)}
                      />
                    </FormField>
                  </div>

                  {/* Email */}
                  <FormField label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                      autoComplete="email"
                      className={inp(!!errors.email)}
                    />
                  </FormField>

                  {/* Product chips */}
                  <FormField label="Products of Interest" error={errors.products} required>
                    <div className="flex flex-wrap gap-2 pt-0.5 max-h-36 overflow-y-auto pr-1">
                      {ALL_PRODUCTS.map((name) => {
                        const selected = form.products.includes(name);
                        return (
                          <button
                            key={name}
                            type="button"
                            onClick={() => toggleProduct(name)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer
                              ${
                                selected
                                  ? 'bg-[#01325d] border-[#01325d] text-white shadow-xs'
                                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#157e93] hover:text-[#157e93]'
                              }`}
                          >
                            {selected && <Check className="w-3 h-3 stroke-[2.5]" />}
                            {name}
                          </button>
                        );
                      })}
                    </div>
                  </FormField>

                  {/* Message */}
                  <FormField label="Requirements">
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={handleChange('message')}
                      className={inp(false) + ' resize-none'}
                    />
                  </FormField>

                  {/* Error state fallback */}
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                      <p className="flex items-center gap-1.5 text-xs text-red-700 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errorMessage || 'Failed to send enquiry. Please try again.'}
                      </p>
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 rounded-xl bg-[#01325d] hover:bg-[#022442] text-white text-sm font-semibold transition-colors disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending enquiry…
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ── Sub-components ────────────────────────────────────────────────────── */
function FormField({ label, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
        {label}
        {required && <span className="ml-0.5 text-[#157e93]"> *</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[11px] text-red-500 font-medium">
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function inp(hasError) {
  return `w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xl text-slate-800
    focus:outline-none focus:bg-white transition-all
    ${
      hasError
        ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-300'
        : 'border-slate-200 focus:border-[#157e93] focus:ring-1 focus:ring-[#157e93]/25'
    }`;
}
