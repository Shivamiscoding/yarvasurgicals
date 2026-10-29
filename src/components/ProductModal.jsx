import React from 'react';
import { X } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Product Image */}
        <div className="aspect-square bg-slate-50 p-8 flex items-center justify-center border-b border-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#157e93]">
              {product.subtitle}
            </span>
            <h3 className="text-xl font-bold text-[#01325d] font-['Outfit'] mt-1">
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
        </div>

      </div>
    </div>
  );
}

