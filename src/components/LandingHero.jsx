import React from 'react';
import { ChevronDown } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function LandingHero() {
  const handleScrollDown = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-between px-6 py-12 bg-white text-center">
      
      {/* Subtle ambient brand color gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#157e93]/10 to-[#01325d]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div></div>

      {/* Big Central Logo & Brand Presentation */}
      <div className="flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto">
        
        {/* Massive Central Logo */}
        <div className="relative group">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl bg-white p-3 shadow-xl border border-slate-200/80 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <img
              src="/images/yarva-logo.jpg"
              alt="Yarva Surgicals Logo"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Company Title & Slogan */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#01325d] font-['Outfit']">
            YARVA <span className="text-[#157e93]">SURGICALS</span>
          </h1>

          <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-[#157e93]">
            {COMPANY.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {COMPANY.business}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={handleScrollDown}
            className="px-8 py-3.5 rounded-full bg-[#01325d] hover:bg-[#032f59] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            Explore Products
          </button>
        </div>

      </div>

      {/* 1-Scroll Cue to Listed Products */}
      <div className="pt-8">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#157e93] transition-colors"
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-[#157e93]">
            Scroll to Products
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 group-hover:border-[#157e93] flex items-start justify-center p-1 transition-colors">
            <div className="w-1.5 h-2 rounded-full bg-[#157e93] animate-bounce"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#157e93] animate-pulse" />
        </button>
      </div>

    </section>
  );
}
