import React, { useState } from 'react';
import { PRODUCTS, COMPANY } from '../data/products';
import { Maximize2, Copy, Check, Search, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductSection({ onSelectProduct, onOpenEnquiryModalWithProduct }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopySpecs = (product) => {
    const text = `${product.name} (${product.subtitle})\n${product.specs.map(s => `• ${s.label}: ${s.value}`).join('\n')}\nSupplier: ${COMPANY.name} (${COMPANY.address})`;
    navigator.clipboard.writeText(text);
    setCopiedId(product.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCatalogCode = (id) => {
    switch (id) {
      case 'cotton-wool': return 'YS-CW400';
      case 'crepe-bandage': return 'YS-CB104';
      case 'gauze-swabs': return 'YS-GS5512';
      default: return 'YS-MED';
    }
  };

  return (
    <section id="products" className="py-20 px-6 lg:px-12 bg-slate-50/70 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#157e93]">
              <span>[ 01 ] CATALOG DIRECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#012e58] font-['Outfit'] tracking-tight">
              Hospital Consumables &amp; Supplies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
              Standard-compliant surgical dressings and compression materials distributed by Yarva Surgicals across Maharashtra.
            </p>
          </div>

          {/* Quick Finder Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#157e93] focus:ring-1 focus:ring-[#157e93] transition-all"
            />
            {searchQuery && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400">
                {filteredProducts.length} match(es)
              </span>
            )}
          </div>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              id={`product-${product.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group overflow-hidden scroll-mt-24"
            >
              
              {/* Product Card Top Metadata */}
              <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-50/50">
                <span className="font-semibold text-slate-600">{getCatalogCode(product.id)}</span>
                <span>ITEM 0{index + 1} / 03</span>
              </div>

              {/* Product Image Frame */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square bg-slate-50 p-6 flex items-center justify-center cursor-pointer border-b border-slate-100 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <span
                  className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-white/95 text-slate-700 text-[11px] font-semibold rounded-lg shadow-xs border border-slate-200 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity"
                  title="Click to view full image"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#157e93]" />
                  <span>Inspect</span>
                </span>
              </div>

              {/* Product Info & Specifications */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#157e93]">
                    {product.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#012e58] font-['Outfit'] mt-1">
                    {product.name}
                  </h3>
                </div>

                {/* Structured Technical Specs Table */}
                <div className="border border-slate-100 rounded-xl overflow-hidden text-xs divide-y divide-slate-100 bg-slate-50/60">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center px-3.5 py-2">
                      <span className="text-slate-500 font-medium">{item.label}</span>
                      <span className="text-slate-900 font-semibold text-right max-w-[65%]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions Bar */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquiryModalWithProduct(product)}
                    className="w-full py-3 px-4 rounded-xl bg-[#012e58] hover:bg-[#08213b] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Enquire for this Product</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopySpecs(product)}
                      className="flex-1 py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedId === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Specs</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-2 px-3.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      title="Inspect full image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>Full View</span>
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
