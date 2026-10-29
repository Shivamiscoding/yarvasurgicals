import React from 'react';
import { PRODUCTS } from '../data/products';
import { Maximize2 } from 'lucide-react';

export default function ProductSection({ onSelectProduct }) {
  return (
    <section id="products" className="py-20 px-6 lg:px-8 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01325d] font-['Outfit']">
            Listed Products
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Medical & surgical consumables by Yarva Surgicals
          </p>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              
              {/* Product Image Box */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square bg-slate-100/50 p-6 flex items-center justify-center cursor-pointer border-b border-slate-100 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-3 right-3 p-2 bg-white/90 rounded-lg shadow-xs text-slate-600 hover:text-[#157e93] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Product Info */}
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
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-slate-50 last:border-0">
                      <span className="text-slate-500 font-medium">{item.label}</span>
                      <span className="text-slate-800 font-semibold text-right max-w-[65%]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Image Action */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-[#157e93] text-[#01325d] hover:text-[#157e93] text-xs font-bold transition-colors"
                >
                  View Product Image
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
