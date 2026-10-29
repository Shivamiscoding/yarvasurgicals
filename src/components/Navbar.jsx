import React, { useState } from 'react';
import { Menu, X, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function Navbar({ onOpenEnquiryModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      
      {/* Top Institutional Line */}
      <div className="bg-[#012e58] text-white text-[11px] font-mono py-1.5 px-6 lg:px-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-teal-300">CENTRAL DISPATCH:</span>
            <span className="text-slate-300 hidden sm:inline">PIRANGUT, MULSHI, PUNE - 412115</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span>OFFICIAL SUPPLIER PLATFORM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Crest & Corporate Title */}
        <a href="#" className="flex items-center gap-3.5 shrink-0 group">
          <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-200 shadow-2xs flex items-center justify-center">
            <img
              src="/images/yarva-logo.jpg"
              alt="Yarva Surgicals"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#012e58] font-['Outfit'] group-hover:text-[#157e93] transition-colors">
              YARVA <span className="text-[#157e93]">SURGICALS</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-slate-400">
              {COMPANY.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-semibold tracking-wider uppercase text-slate-600">
          <a
            href="#products"
            className="hover:text-[#157e93] transition-colors py-1 flex items-center gap-1.5"
          >
            <span>[01] Products</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-100 text-[#157e93] font-bold">3</span>
          </a>
          <a
            href="#trailer"
            className="hover:text-[#157e93] transition-colors py-1"
          >
            [02] Trailer
          </a>
          <a
            href="#address"
            className="hover:text-[#157e93] transition-colors py-1 flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-[#157e93]" />
            <span>[03] Address</span>
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenEnquiryModal}
            className="px-5 py-2.5 rounded-xl bg-[#012e58] hover:bg-[#08213b] text-white text-xs font-bold transition-all shadow-2xs hover:shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenEnquiryModal}
            className="px-3 py-1.5 bg-[#012e58] text-white text-xs font-bold rounded-lg"
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
            [01] Products (3 Listed)
          </a>
          <a
            href="#trailer"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#157e93]"
          >
            [02] Company Trailer
          </a>
          <a
            href="#address"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#157e93]"
          >
            [03] Address &amp; Location
          </a>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="w-full py-3 rounded-xl bg-[#012e58] text-white text-xs font-bold flex items-center justify-center gap-2"
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
