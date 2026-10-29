import React, { useState } from 'react';
import { PRODUCTS, COMPANY } from '../data/products';
import { ArrowUpRight, Check, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ProductShowcase() {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);

  const activeProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008b99] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#008b99]"></span>
              Official Product Lineup
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b2545] tracking-tight font-['Outfit']">
              Listed Surgical Consumables
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-md">
            Supplied in hospital master cartons and clinic packs. All batches strictly conform to CDSCO, Indian Pharmacopoeia, and ISO standards.
          </p>
        </div>

        {/* Product Navigation Pills (Quick Toggle) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {PRODUCTS.map((p) => {
            const isSelected = p.id === selectedProductId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProductId(p.id)}
                className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#0b2545] border-[#0b2545] text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                }`}
              >
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-[#008b99]' : 'text-slate-400'}`}>
                    Product 0{PRODUCTS.indexOf(p) + 1}
                  </p>
                  <p className="text-base font-bold font-['Outfit'] mt-0.5">{p.title}</p>
                </div>
                <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-[#008b99]' : 'text-slate-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Spotlight Editorial View of the Selected Product */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Big Crisp Image Frame */}
            <div className="lg:col-span-5 bg-slate-50 p-8 sm:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="max-h-full max-w-full object-contain drop-shadow-md rounded-lg"
                />
              </div>
            </div>

            {/* Right: Technical Specifications & Features */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded bg-[#e6f6f8] text-[#006c77] text-xs font-bold uppercase tracking-wider">
                  {activeProduct.subtitle}
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0b2545] font-['Outfit']">
                  {activeProduct.title}
                </h3>

                {/* Key Technical Specs Table */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Technical Specifications:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeProduct.specs.map((item, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-center">
                        <span className="text-slate-500 font-medium">{item.label}</span>
                        <span className="text-slate-900 font-bold mt-0.5">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Features List */}
                <div className="pt-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Clinical Standards & Features:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeProduct.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-teal-50 border border-teal-200 text-[#008b99] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct B2B Action Bar */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Yarva%20Surgicals,%20we%20are%20inquiring%20about%20bulk%20rates%20for%20${encodeURIComponent(activeProduct.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#008b99] hover:bg-[#006c77] text-white text-xs font-bold tracking-wide transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire for {activeProduct.title}</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-900 text-slate-800 text-xs font-bold tracking-wide transition-all"
                >
                  <span>Request Full Catalog</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 3-Card Grid Overview for Instant Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((prod, idx) => (
            <div
              key={prod.id}
              onClick={() => setSelectedProductId(prod.id)}
              className={`p-6 rounded-2xl bg-white border cursor-pointer transition-all ${
                prod.id === selectedProductId
                  ? 'border-[#008b99] ring-2 ring-[#008b99]/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="aspect-[4/3] bg-slate-50 rounded-xl p-4 flex items-center justify-center mb-4">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#008b99]">
                0{idx + 1} • {prod.subtitle.split('•')[0]}
              </span>
              <h4 className="text-lg font-bold text-[#0b2545] font-['Outfit'] mt-1">
                {prod.title}
              </h4>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                {prod.features[0]}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#008b99]">
                <span>Inspect Technical Sheet</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
