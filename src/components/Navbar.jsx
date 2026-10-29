import React from 'react';
import { COMPANY } from '../data/products';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Name */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/yarva-logo.jpg"
            alt="Yarva Surgicals"
            className="w-10 h-10 object-contain rounded border border-slate-200"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#01325d] font-['Outfit']">
              YARVA <span className="text-[#157e93]">SURGICALS</span>
            </span>
          </div>
        </a>

        {/* Minimal Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-semibold text-slate-700">
          <a
            href="#products"
            className="hover:text-[#157e93] transition-colors"
          >
            Products
          </a>
          <a
            href="#trailer"
            className="hover:text-[#157e93] transition-colors"
          >
            Trailer
          </a>
          <a
            href="#address"
            className="hover:text-[#157e93] transition-colors"
          >
            Address
          </a>
        </nav>

      </div>
    </header>
  );
}
