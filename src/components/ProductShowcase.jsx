import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { PackageCheck, Filter, Sparkles, Building2, Download, AlertCircle } from 'lucide-react';

export default function ProductShowcase({ onSelectProduct, onAddToQuote, quoteItems }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sterile Surgical Consumables', 'Wound Care & Hospital Dressing', 'Orthopedic & Compression Support'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100/70 text-[#028090] text-xs font-bold uppercase tracking-wider">
              <PackageCheck className="w-4 h-4 text-[#028090]" />
              Official Product Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight font-['Outfit']">
              Featured Hospital-Grade Surgical Consumables
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every batch undergoes strict bio-burden and quality validation. Sourced and packaged under cleanroom conditions, complying with Indian Pharmacopoeia and ISO requirements.
            </p>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0b2545] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat === 'All' ? 'All Products (3)' : cat.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Listed Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isInQuote = quoteItems.some(item => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToQuote={onAddToQuote}
                isInQuote={isInQuote}
              />
            );
          })}
        </div>

        {/* Clinical Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-teal-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-[#028090]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0b2545] font-['Outfit']">
                Need bulk carton pricing for Hospitals or Nursing Homes?
              </h4>
              <p className="text-xs text-slate-600">
                We supply government institutions, private hospital chains, and surgical retailers with tailored GST invoices & batch test certificates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-[#028090] hover:bg-[#006674] text-white text-xs font-bold transition-colors shadow-xs"
            >
              Request Institutional Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
