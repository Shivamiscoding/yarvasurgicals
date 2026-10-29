import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Menu, X, FileText, MessageSquareQuote } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Navbar({ quoteCount, onOpenQuoteModal, onOpenContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      {/* Top Clinical Utility Bar */}
      <div className="bg-[#0b2545] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-teal-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-teal-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              ISO 9001:2015 & ISO 13485:2016 Certified
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Pirangut, Mulshi, Pune - 412115
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yarva%20Surgicals,%20I%20need%20a%20quotation%20for%20surgical%20supplies.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-teal-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Procurement Desk: <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline-block text-slate-400">|</span>
            <span className="hidden sm:inline-block text-slate-300">
              GST Registered
            </span>
          </div>
        </div>
      </div>

      {/* Main Brand Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Company Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/yarva-logo.jpg"
              alt="Yarva Surgicals Logo"
              className="h-14 w-auto object-contain rounded-md shadow-xs border border-slate-100 transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tight text-[#0b2545] font-['Outfit']">
                YARVA <span className="text-[#028090]">SURGICALS</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 flex items-center gap-1">
                <span className="text-[#028090]">●</span> Quality <span className="text-[#028090]">●</span> Care <span className="text-[#028090]">●</span> Better Tomorrow
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-700">
            <a
              href="#products"
              className="hover:text-[#028090] transition-colors py-2 border-b-2 border-transparent hover:border-[#028090]"
            >
              Surgical Products
            </a>
            <a
              href="#trailer"
              className="hover:text-[#028090] transition-colors py-2 border-b-2 border-transparent hover:border-[#028090] flex items-center gap-1.5"
            >
              Facility Trailer
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-100 text-[#028090] font-semibold">New</span>
            </a>
            <a
              href="#standards"
              className="hover:text-[#028090] transition-colors py-2 border-b-2 border-transparent hover:border-[#028090]"
            >
              Quality & Certifications
            </a>
            <a
              href="#about"
              className="hover:text-[#028090] transition-colors py-2 border-b-2 border-transparent hover:border-[#028090]"
            >
              About Company
            </a>
            <a
              href="#contact"
              className="hover:text-[#028090] transition-colors py-2 border-b-2 border-transparent hover:border-[#028090]"
            >
              Contact & Location
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Wholesale Quote Trailer Cart Button */}
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:text-[#0b2545] hover:border-[#028090] bg-slate-50 hover:bg-white text-xs font-semibold transition-all shadow-xs"
              title="View your RFQ items"
            >
              <FileText className="w-4 h-4 text-[#028090]" />
              <span>Quote Tray</span>
              {quoteCount > 0 ? (
                <span className="bg-[#028090] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {quoteCount}
                </span>
              ) : (
                <span className="bg-slate-200 text-slate-600 text-[10px] rounded-full px-1.5 py-0.2">
                  0
                </span>
              )}
            </button>

            {/* Request Wholesale Quote Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0b2545] hover:bg-[#07192f] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all"
            >
              <MessageSquareQuote className="w-4 h-4 text-teal-400" />
              <span>Request Quote</span>
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="p-2 text-slate-700 relative rounded-md border border-slate-200"
            >
              <FileText className="w-5 h-5 text-[#028090]" />
              {quoteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#028090] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {quoteCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#028090]"
          >
            Surgical Products
          </a>
          <a
            href="#trailer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#028090]"
          >
            Facility Trailer (Video)
          </a>
          <a
            href="#standards"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#028090]"
          >
            Quality & Certifications
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#028090]"
          >
            About Yarva Surgicals
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#028090]"
          >
            Contact & Location
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-[#0b2545] text-white font-medium text-sm"
            >
              Request Bulk Quotation
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yarva%20Surgicals,%20I%20am%20inquiring%20about%20hospital%20supplies.`}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              Direct WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
