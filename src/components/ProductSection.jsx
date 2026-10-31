import React, { useState } from 'react';
import { PRODUCTS, COMPANY } from '../data/products';
import { Maximize2, Copy, Check, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductSection({ onSelectProduct, onOpenEnquiryModalWithProduct }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopySpecs = (product) => {
    const text = `${product.name} (${product.subtitle})\n${product.specs.map(s => `• ${s.label}: ${s.value}`).join('\n')}\nCompany: ${COMPANY.name} (${COMPANY.address})`;
    navigator.clipboard.writeText(text);
    setCopiedId(product.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="products" className="relative py-24 px-6 lg:px-10 bg-white scroll-mt-20 overflow-hidden">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#157e93]">
              <span className="w-8 h-px bg-[#157e93]" />
              Product Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01325d] font-['Outfit'] tracking-tight">
              Our Products
            </h2>
            <p className="text-sm text-slate-500 font-medium max-w-md">
              Premium surgical consumables, each meeting Indian Pharmacopoeia and ISO standards.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            className="relative w-full md:w-72"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#157e93] focus:bg-white transition-all duration-200"
            />
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              id={`product-${product.id}`}
              className="group bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(1,50,93,0.08)] transition-all duration-500 flex flex-col scroll-mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >

              {/* Product Image */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 flex items-center justify-center cursor-pointer border-b border-slate-100 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                <span className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm text-slate-500 hover:text-[#157e93] transition-colors border border-slate-200/50" title="View full image">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#157e93]">
                    {product.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#01325d] font-['Outfit'] mt-1 leading-tight">
                    {product.name}
                  </h3>
                </div>

                {/* Specs */}
                <div className="space-y-0 pt-3 border-t border-slate-100">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-slate-50 last:border-0 text-xs">
                      <span className="text-slate-400 font-medium">{item.label}</span>
                      <span className="text-slate-800 font-semibold text-right max-w-[60%] leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 space-y-2.5">
                  <button
                    onClick={() => onOpenEnquiryModalWithProduct(product)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#01325d] hover:bg-[#021e3a] text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopySpecs(product)}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedId === product.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{copiedId === product.id ? 'Copied!' : 'Copy Specs'}</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      title="View full image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
