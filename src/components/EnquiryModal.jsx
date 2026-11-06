import React, { useState, useEffect, useRef } from 'react';
import { X, Check, AlertCircle, ArrowUpRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';

/* ─────────────────────────────────────────────────────────────────────────────
   🔧 DESTINATION CONTACTS
───────────────────────────────────────────────────────────────────────────── */
const TARGET_EMAIL = 'yarvasurgical26@gmail.com';
const WHATSAPP_NUMBER = '918265096707';

function WhatsAppIcon({ className = 'w-4 h-4 fill-current' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ── Validation ─────────────────────────────────────────────────────────── */
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
    if (!EMAIL_RE.test(v.trim())) return 'Invalid email address';
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
  const [status, setStatus] = useState('idle'); // 'idle' | 'whatsapp_opened' | 'email_sent'
  const [actionUrl, setActionUrl] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const initialProduct = defaultProduct?.name || PRODUCTS[0]?.name || 'Absorbent Cotton Roll';
    setForm({ ...blank, products: [initialProduct] });
    setErrors({});
    setTouched({});
    setStatus('idle');
    setActionUrl('');
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

  const checkValidation = () => {
    setTouched({ name: true, phone: true, email: true, products: true });
    const errs = {
      name: validate.name(form.name),
      phone: validate.phone(form.phone),
      email: validate.email(form.email),
      products: validate.products(form.products),
    };
    setErrors(errs);
    return !Object.values(errs).some(Boolean);
  };

  /* ── 1. SEND VIA WHATSAPP ──────────────────────────────────────────────── */
  const handleWhatsApp = () => {
    if (!checkValidation()) return;

    const lines = [
      `*New Product Enquiry — Yarva Surgicals*`,
      ``,
      `*Customer:* ${form.name.trim()}`,
      `*Phone:* ${form.phone.trim()}`,
      form.email && form.email.trim() ? `*Email:* ${form.email.trim()}` : null,
      ``,
      `*Products Requested:*`,
      ...form.products.map((p) => `• ${p}`),
      ``,
      `*Requirements:* ${form.message && form.message.trim() ? form.message.trim() : 'General quotation inquiry'}`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    setActionUrl(waUrl);
    setStatus('whatsapp_opened');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  /* ── 2. SEND VIA EMAIL ─────────────────────────────────────────────────── */
  const handleEmail = () => {
    if (!checkValidation()) return;

    const subject = `Product Enquiry from ${form.name.trim()} — Yarva Surgicals`;
    const bodyLines = [
      `Hello Yarva Surgicals Team,`,
      ``,
      `I would like to request product availability and pricing for:`,
      ``,
      `Customer Name: ${form.name.trim()}`,
      `Phone Number: ${form.phone.trim()}`,
      `Email Address: ${form.email.trim() || 'Not specified'}`,
      ``,
      `Products Requested:`,
      ...form.products.map((p) => `  - ${p}`),
      ``,
      `Requirements / Notes:`,
      `${form.message.trim() || 'General quotation inquiry'}`,
      ``,
      `Thank you,`,
      `${form.name.trim()}`,
    ];

    const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    setActionUrl(mailtoUrl);
    setStatus('email_sent');

    // Also trigger direct FormSubmit ajax in the background if possible
    fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        Name: form.name,
        Phone: form.phone,
        Email: form.email || 'Not provided',
        Products: form.products.join(', '),
        Message: form.message || 'General quotation inquiry',
        _subject: subject,
      }),
    }).catch(() => {});

    // Open user's email client / Gmail with full details pre-filled
    window.location.href = mailtoUrl;
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
                Connect directly with our procurement desk via WhatsApp or send your enquiry directly by email.
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
              {/* SUCCESS — WHATSAPP OPENED */}
              {status === 'whatsapp_opened' && (
                <div className="py-8 flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                    <WhatsAppIcon className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] text-xl font-bold text-[#01325d]">
                      Enquiry Prepared!
                    </h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed max-w-sm mx-auto">
                      WhatsApp has been launched with your enquiry for{' '}
                      <strong className="text-[#01325d]">{form.products.join(', ')}</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 max-w-sm w-full space-y-1">
                    <p className="font-semibold text-slate-700">Didn't open automatically?</p>
                    <p className="text-[11px] text-slate-500">
                      If popups were blocked by your browser, tap the button below:
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-xs mt-1">
                    <a
                      href={actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Open WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={onClose}
                      className="py-2.5 px-5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

              {/* SUCCESS — EMAIL SENT / OPENED */}
              {status === 'email_sent' && (
                <div className="py-8 flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#01325d]/10 text-[#01325d] flex items-center justify-center">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] text-xl font-bold text-[#01325d]">
                      Enquiry Ready to Send!
                    </h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed max-w-sm mx-auto">
                      Your enquiry for <strong className="text-[#01325d]">{form.products.join(', ')}</strong> is addressed to{' '}
                      <strong className="text-slate-800">{TARGET_EMAIL}</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 max-w-sm w-full space-y-1">
                    <p className="font-semibold text-slate-700">Sent via your email client</p>
                    <p className="text-[11px] text-slate-500">
                      Your mail app opened with all requirement details pre-filled.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-xs mt-1">
                    <a
                      href={actionUrl}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#01325d] hover:bg-[#022442] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Open in Mail App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={onClose}
                      className="py-2.5 px-5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

              {/* FORM */}
              {status === 'idle' && (
                <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-4">
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
                        placeholder="Dr. / Purchase Manager"
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
                        placeholder="+91 98765 43210"
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
                      placeholder="hospital@example.com"
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
                  <FormField label="Requirements / Notes">
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="Pack sizes, approximate quantity, delivery location..."
                      className={inp(false) + ' resize-none'}
                    />
                  </FormField>

                  {/* BOTH ACTION BUTTONS: WhatsApp + Email */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] active:bg-[#189b4b] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleEmail}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#01325d] hover:bg-[#022442] active:bg-[#011a30] text-white text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-0.5">
                    WhatsApp to +91 8265096707 • Email to {TARGET_EMAIL}
                  </p>
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
