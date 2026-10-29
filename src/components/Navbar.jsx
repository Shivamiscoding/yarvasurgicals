import React, { useState } from 'react';
import { Menu, X, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function Navbar({ onOpenEnquiryModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/yarva-logo.jpg"
            alt="Yarva Surgicals"
            className="w-11 h-11 object-contain rounded-xl border border-slate-200 shadow-2xs"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#01325d] font-['Outfit']">
              YARVA <span className="text-[#157e93]">SURGICALS</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 -mt-1 hidden sm:block">
              {COMPANY.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a
            href="#products"
            className="hover:text-[#157e93] transition-colors flex items-center gap-1.5"
          >
            <span>Products</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-slate-100 text-[#157e93]">3</span>
          </a>
          <a
            href="#trailer"
            className="hover:text-[#157e93] transition-colors"
          >
            Trailer
          </a>
          <a
            href="#address"
            className="hover:text-[#157e93] transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-[#157e93]" />
            <span>Address</span>
          </a>
        </nav>

        {/* Functional "Enquire Now" Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenEnquiryModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#01325d] hover:bg-[#032f59] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenEnquiryModal}
            className="px-3 py-1.5 bg-[#01325d] text-white text-xs font-bold rounded-lg"
          >
            Enquire
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 shadow-lg">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#157e93]"
          >
            Products (3 Listed)
          </a>
          <a
            href="#trailer"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#157e93]"
          >
            Trailer
          </a>
          <a
            href="#address"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#157e93]"
          >
            Address (Pirangut, Pune)
          </a>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="w-full py-3 rounded-xl bg-[#01325d] text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-teal-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
