import React from 'react';
import { ArrowDown, ShieldCheck, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden surgical-grid min-h-[calc(100vh-80px)] flex flex-col justify-between">
      
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 w-full flex-1 flex flex-col justify-center">
        
        <div className="max-w-4xl space-y-8">
          
          {/* Subtle Location & Compliance Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#008b99]"></span>
            <span>Hospital Supplier</span>
            <span className="text-slate-400">/</span>
            <span className="flex items-center gap-1 text-slate-800">
              <MapPin className="w-3.5 h-3.5 text-[#008b99]" />
              Pirangut, Mulshi, Pune
            </span>
          </div>

          {/* Bold Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0b2545] tracking-tight leading-[1.08] font-['Outfit']">
            Certified Surgical <br className="hidden sm:inline" />
            Consumables for{' '}
            <span className="text-[#008b99] underline decoration-[#008b99]/30 underline-offset-8">
              Hospitals & Clinics.
            </span>
          </h1>

          {/* Clinical Copy */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
            <strong className="text-slate-900 font-semibold">{COMPANY.name}</strong> delivers pharmaceutical-grade wound dressings, Indian Pharmacopoeia absorbent cotton, sterile swabs, and compression bandages to medical institutions across Maharashtra.
          </p>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#0b2545] hover:bg-[#06172e] text-white font-bold text-sm tracking-wide transition-all shadow-md group"
            >
              <span>Explore Listed Products</span>
              <ArrowDown className="w-4 h-4 text-[#008b99] group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-300 hover:border-[#0b2545] text-slate-800 hover:text-[#0b2545] font-bold text-sm tracking-wide transition-all bg-white"
            >
              <span>Request Wholesale Price List</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Clean Compliance Badges */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#008b99] shrink-0" />
              <span>ISO 9001:2015 & ISO 13485:2016</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#008b99] shrink-0" />
              <span>Indian Pharmacopoeia (I.P.) Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#008b99] shrink-0" />
              <span>Ethylene Oxide (ETO) Sterilization</span>
            </div>
          </div>

        </div>

      </div>

      {/* 1-Scroll Visual Prompt at the bottom of the viewport */}
      <div className="border-t border-slate-200 bg-slate-50 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Scroll 1 time for product specifications</span>
          </div>

          <button
            onClick={scrollToProducts}
            className="flex items-center gap-2 text-xs font-bold text-[#008b99] hover:text-[#0b2545] transition-colors"
          >
            <span>View 3 Core Products</span>
            <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </button>
        </div>
      </div>

    </section>
  );
}
