import React, { useState } from 'react';
import { PRODUCTS, COMPANY } from '../data/products';
import { Maximize2, Copy, Check, Search, ArrowRight } from 'lucide-react';

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
    <section id="products" className="py-20 px-6 lg:px-8 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Search / Filter functionality */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#157e93]">
              Catalog Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01325d] font-['Outfit']">
              Listed Products (3)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Absorbent cotton, crepe bandages, and sterile gauze swabs by Yarva Surgicals
            </p>
          </div>

          {/* Functional Search / Quick Finder */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search listed products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#157e93]"
            />
          </div>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-${product.id}`}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group scroll-mt-24"
            >
              
              {/* Product Image Box with Zoom Action */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square bg-slate-100/60 p-6 flex items-center justify-center cursor-pointer border-b border-slate-100 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-3.5 right-3.5 p-2 bg-white/95 rounded-xl shadow-xs text-slate-600 hover:text-[#157e93] transition-colors border border-slate-200/60" title="Inspect full image">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Product Info & Specs */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#157e93]">
                    {product.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#01325d] font-['Outfit'] mt-0.5">
                    {product.name}
                  </h3>
                </div>

                {/* Specs List taken strictly from packaging */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-slate-50 last:border-0">
                      <span className="text-slate-500 font-medium">{item.label}:</span>
                      <span className="text-slate-900 font-semibold text-right max-w-[65%]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: Enquire Now & View */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => onOpenEnquiryModalWithProduct(product)}
                    className="w-full py-3 px-4 rounded-xl bg-[#01325d] hover:bg-[#032f59] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopySpecs(product)}
                      className="flex-1 py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedId === product.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{copiedId === product.id ? 'Specs Copied' : 'Copy Specs'}</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-2 px-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      title="Inspect full image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>View</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
