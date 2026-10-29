import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import { PRODUCTS, COMPANY } from '../data/products';

export default function QuoteModal({ isOpen, onClose, defaultProduct = null }) {
  if (!isOpen) return null;

  const [selectedProduct, setSelectedProduct] = useState(defaultProduct ? defaultProduct.name : PRODUCTS[0].name);
  const [quantity, setQuantity] = useState('50');
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateQuoteText = () => {
    return `Inquiry for ${COMPANY.name}:\nProduct: ${selectedProduct}\nQuantity: ${quantity}\nContact: ${contactInfo}\nNotes: ${notes || 'N/A'}\nDelivery: ${COMPANY.address}`;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateQuoteText());
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(generateQuoteText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95"
      >
        {/* Header */}
        <div className="bg-[#01325d] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-['Outfit']">Request Product Quotation</h3>
            <p className="text-xs text-[#157e93] font-medium">{COMPANY.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#01325d] font-['Outfit']">
                Inquiry Generated
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your quotation request for <strong>{selectedProduct}</strong> ({quantity} units) is ready. You can send it directly or copy it.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleSendWhatsApp}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  onClick={handleCopyQuote}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Inquiry'}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-slate-400 hover:text-slate-600 underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Product *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93] bg-white font-medium"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.subtitle})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Required Quantity (Units / Packs) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 50 packs, 20 rolls, 100 boxes"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93]"
                />
              </div>

              {/* Contact info */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name / Hospital / Phone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Patil / City Hospital / 9822000000"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Requirements (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Urgent delivery to Pune address"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#157e93]"
                />
              </div>

              {/* Location indicator */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Dispatch Location:</span> {COMPANY.address}
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#01325d] hover:bg-[#032f59] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4 text-teal-400" />
                  <span>Generate Quotation</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
