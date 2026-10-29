import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenEnquiryModal }) {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 border border-slate-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-Resolution Product Image Viewport */}
        <div className="aspect-square bg-slate-50 p-8 flex items-center justify-center border-b border-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Product Details & Direct Action */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#157e93]">
              {product.subtitle}
            </span>
            <h3 className="text-xl font-bold text-[#012e58] font-['Outfit'] mt-1">
              {product.name}
            </h3>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
            {product.specs.map((item, idx) => (
              <div key={idx} className="flex justify-between py-1 border-b border-slate-50 last:border-0">
                <span className="text-slate-500 font-medium">{item.label}</span>
                <span className="text-slate-900 font-semibold text-right">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                if (onOpenEnquiryModal) onOpenEnquiryModal(product);
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#012e58] hover:bg-[#08213b] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Enquire for this Product</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
