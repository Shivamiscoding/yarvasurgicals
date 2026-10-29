import React, { useState } from 'react';
import { Phone, MapPin, ArrowUpRight, Menu, X } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/yarva-logo.jpg"
              alt="Yarva Surgicals"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#0b2545] font-['Outfit']">
                YARVA <span className="text-[#008b99]">SURGICALS</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Quality • Care • Better Tomorrow
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#products" className="hover:text-[#008b99] transition-colors">
              Products
            </a>
            <a href="#trailer" className="hover:text-[#008b99] transition-colors flex items-center gap-1.5">
              Facility Trailer
              <span className="w-1.5 h-1.5 rounded-full bg-[#008b99]"></span>
            </a>
            <a href="#standards" className="hover:text-[#008b99] transition-colors">
              Standards & ISO
            </a>
            <a href="#contact" className="hover:text-[#008b99] transition-colors">
              Contact & Location
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Yarva%20Surgicals,%20we%20need%20a%20quotation%20for%20surgical%20supplies.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0b2545] hover:bg-[#06172e] text-white text-xs font-bold tracking-wide transition-all shadow-xs"
            >
              <span>Procurement Desk</span>
              <ArrowUpRight className="w-4 h-4 text-[#008b99]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#008b99]"
          >
            Products
          </a>
          <a
            href="#trailer"
            onClick={() => setMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#008b99]"
          >
            Facility Trailer
          </a>
          <a
            href="#standards"
            onClick={() => setMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#008b99]"
          >
            Standards & ISO
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#008b99]"
          >
            Contact & Location
          </a>
          <div className="pt-2 border-t border-slate-100">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center block py-2.5 px-4 rounded-lg bg-[#0b2545] text-white font-bold text-xs"
            >
              Contact Procurement Desk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
