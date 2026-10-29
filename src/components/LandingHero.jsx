import React, { useState } from 'react';
import { ChevronDown, MapPin, Copy, Check, ExternalLink, MessageSquare, FileText, ArrowRight, Package } from 'lucide-react';
import { COMPANY, PRODUCTS } from '../data/products';

export default function LandingHero({ onOpenQuoteModal, onSelectProduct }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProduct = (productId) => {
    const el = document.getElementById(`product-${productId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.add('ring-4', 'ring-[#157e93]', 'ring-offset-4');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-[#157e93]', 'ring-offset-4');
      }, 2000);
    } else {
      const sec = document.getElementById('products');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 lg:px-12 py-10 bg-white">
      
      {/* Subtle brand glow in background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#157e93]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#01325d]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Main 2-Column Container: Logo on the LEFT, Functional Options on the RIGHT */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto">
        
        {/* LEFT COLUMN: Clean Big Logo (NO duplicate text beneath it!) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
          <div className="relative group w-full max-w-[360px] sm:max-w-[400px]">
            <div className="aspect-square rounded-3xl bg-white p-4 shadow-xl border-2 border-slate-200/90 hover:border-[#157e93]/60 transition-all duration-300 flex items-center justify-center">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            {/* Clean shadow effect */}
            <div className="w-[85%] h-4 mx-auto bg-slate-200/60 blur-md rounded-full mt-2"></div>
          </div>
        </div>

        {/* RIGHT COLUMN: Rich Functional Options */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Header descriptor */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#157e93] text-xs font-bold tracking-wide">
              <Package className="w-3.5 h-3.5 text-[#157e93]" />
              <span>Official Healthcare Platform</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#01325d] tracking-tight font-['Outfit']">
              {COMPANY.business}
            </h1>
          </div>

          {/* Functional Address Card with One-Click Actions */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#157e93] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Registered Facility & Dispatch Address:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-0.5 leading-relaxed">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Address functional buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200/60">
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold shadow-2xs transition-all hover:bg-slate-50"
                title="Copy address to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Copied Address' : 'Copy Address'}</span>
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold shadow-2xs transition-all hover:bg-slate-50"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#157e93]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Primary Functional Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#01325d] hover:bg-[#032f59] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              <FileText className="w-4 h-4 text-teal-300" />
              <span>Request Price Quote</span>
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Hello ${COMPANY.name}, I would like to inquire about your surgical supplies.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={handleScrollDown}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 hover:border-[#157e93] text-[#01325d] hover:text-[#157e93] text-xs sm:text-sm font-bold transition-all bg-white"
            >
              <span>Explore 3 Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Product Jumper Options */}
          <div className="pt-2 space-y-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Quick Product Jumpers:
            </span>
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => handleScrollToProduct(prod.id)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 border border-slate-200 hover:border-[#157e93] text-xs font-semibold text-slate-700 hover:text-[#157e93] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#157e93]"></span>
                  <span>{prod.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 1-Scroll Cue directly to Products Section */}
      <div className="pt-6 pb-2 flex justify-center">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-1 text-slate-400 hover:text-[#157e93] transition-colors cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#157e93]">
            Scroll to Products
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-[#157e93] flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-1.5 rounded-full bg-[#157e93] animate-bounce"></div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#157e93]" />
        </button>
      </div>

    </section>
  );
}
