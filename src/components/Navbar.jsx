import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
          <a href="#" className="flex items-center gap-3.5 shrink-0 group">
            <div className="relative">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="w-11 h-11 object-contain rounded-xl border border-slate-200/80 shadow-sm group-hover:shadow-md transition-shadow duration-300"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#157e93] rounded-full border-2 border-white" />
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

          {/* CTA */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenEnquiryModal}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#01325d] hover:bg-[#021e3a] text-white text-[13px] font-bold transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-300 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiryModal}
              className="px-4 py-2 bg-[#01325d] text-white text-xs font-bold rounded-full"
            >
              Enquire
            </button>
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
