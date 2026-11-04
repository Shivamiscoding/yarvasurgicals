import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function Navbar({ onOpenEnquiryModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between gap-6">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img
                src="/images/yarva-logo.png"
                alt="Yarva Surgicals"
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 1px 4px rgba(1,50,93,0.15))' }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#01325d] font-['Outfit']">
                YARVA<span className="text-[#157e93] ml-1">SURGICALS</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-slate-400 -mt-0.5 hidden sm:block">
                {COMPANY.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Products', href: '#products' },
              { label: 'Showcase', href: '#trailer' },
              { label: 'Contact', href: '#address' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="relative px-4 py-2 text-[13px] font-semibold text-slate-600 hover:text-[#01325d] transition-colors duration-200 rounded-lg hover:bg-slate-50"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-5 space-y-1 shadow-xl animate-fade-in-up">
          {[
            { label: 'Products', href: '#products' },
            { label: 'Showcase', href: '#trailer' },
            { label: 'Contact', href: '#address' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-sm font-semibold text-slate-700 hover:text-[#01325d] hover:bg-slate-50 rounded-xl transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="w-full py-3.5 rounded-xl bg-[#01325d] text-white text-sm font-bold flex items-center justify-center gap-2"
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
