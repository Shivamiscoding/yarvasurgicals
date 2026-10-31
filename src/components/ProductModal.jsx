import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-[28px] max-w-xl w-full overflow-hidden shadow-2xl relative"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-sm hover:bg-slate-100 text-slate-600 transition-colors shadow-sm border border-slate-200/50"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100/50 p-10 flex items-center justify-center border-b border-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Info */}
          <div className="p-7 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#157e93]">
                {product.subtitle}
              </span>
              <h3 className="text-xl font-bold text-[#01325d] font-['Outfit'] mt-1">
                {product.name}
              </h3>
            </div>

            <div className="space-y-0 pt-3 border-t border-slate-100">
              {product.specs.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-slate-50 last:border-0 text-xs">
                  <span className="text-slate-400 font-medium">{item.label}</span>
                  <span className="text-slate-800 font-semibold text-right max-w-[65%]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
