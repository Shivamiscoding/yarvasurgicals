import React from 'react';
import { X, ShieldCheck, CheckCircle2, MessageCircle, Plus, FileText, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ProductModal({ product, onClose, onAddToQuote, isInQuote }) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Yarva Surgicals, I am requesting technical specifications and quotation for "${product.name}". Kindly share current batch test report.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#0b2545] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <div>
              <h3 className="text-base font-bold font-['Outfit']">{product.name}</h3>
              <p className="text-[11px] text-teal-300">{product.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image Box */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center justify-center aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Quick Specs summary */}
            <div className="space-y-3">
              <span className="inline-block px-2.5 py-1 text-xs font-bold bg-teal-100 text-[#028090] rounded">
                {product.badge}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.shortDesc}
              </p>

              <div className="space-y-1.5 pt-2">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Quality Certifications:</p>
                {product.certifications.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#028090]" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider border-b border-slate-200 pb-1.5">
              Technical & Packaging Specifications
            </h4>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden text-xs">
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(product.specs).map(([label, val], idx) => (
                    <tr key={idx} className="border-b border-slate-200/60 last:border-0 hover:bg-white transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-slate-600 w-1/3 bg-slate-100/50">{label}</td>
                      <td className="px-4 py-2.5 text-slate-900 font-medium">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Clinical Advantages */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider">
              Clinical Usage & Highlights:
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {product.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="text-[#028090] font-bold">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onAddToQuote(product, 1);
            }}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#0b2545] hover:bg-[#07192f] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            {isInQuote ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span>{isInQuote ? 'Already in Quote Tray (+1)' : 'Add to RFQ Tray'}</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fast WhatsApp Inquiry</span>
          </a>
        </div>

      </div>
    </div>
  );
}
