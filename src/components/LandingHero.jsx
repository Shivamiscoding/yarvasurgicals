import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function LandingHero({ onOpenEnquiryModal }) {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <section className="relative bg-white border-b border-slate-200">
      
      {/* Top subtle institutional strip */}
      <div className="border-b border-slate-100 bg-slate-50/60 py-2 px-6 lg:px-12 text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#157e93]"></span>
          <span className="font-semibold text-slate-700">YARVA SURGICALS</span>
          <span className="text-slate-300">•</span>
          <span>ESTD. PUNE, MAHARASHTRA</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-slate-500">
          <span>SURGICAL CONSUMABLES</span>
          <span className="text-slate-300">•</span>
          <span>PIRANGUT CENTRAL DISPATCH</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Logo (taken slightly up) + Clean Address below it */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-4">
            
            {/* Logo Presentation Frame */}
            <div className="w-full max-w-[360px] sm:max-w-[390px] rounded-2xl bg-white p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square w-full flex items-center justify-center bg-white">
                <img
                  src="/images/yarva-logo.jpg"
                  alt="Yarva Surgicals"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Clickable Address directly at bottom of logo (opens Google Maps) */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group block w-full max-w-[360px] sm:max-w-[390px] p-4 rounded-xl bg-slate-50/90 border border-slate-200 hover:border-[#157e93] hover:bg-white transition-all text-left"
              title="Click to view location in Google Maps"
            >
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-lg bg-white border border-slate-200 text-[#157e93] shrink-0 group-hover:bg-[#157e93] group-hover:text-white transition-colors mt-0.5">
                  <MapPin className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#012e58] leading-relaxed transition-colors">
                    {COMPANY.address}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#157e93] mt-2 uppercase tracking-wider">
                    <span>Open in Google Maps</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

          </div>

          {/* RIGHT COLUMN: Authentic Editorial Presentation & Enquire Now Option */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pt-4">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#157e93]/10 text-[#157e93] text-xs font-bold tracking-wider uppercase font-mono">
                <span>● Direct Distribution</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#012e58] tracking-tight font-['Outfit'] leading-[1.1]">
                Surgical Instruments <br />
                <span className="text-[#157e93]">&amp; Medical Supplies</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Hospital-grade sterile wound care, absorbent cotton wool I.P., and orthopedic compression bandages supplied from our central facility in Pirangut, Pune.
              </p>
            </div>

            {/* Enquire Now and Secondary Navigation */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenEnquiryModal}
                className="px-8 py-4 rounded-xl bg-[#012e58] hover:bg-[#08213b] text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-sm hover:shadow flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#products"
                onClick={handleScrollDown}
                className="px-6 py-4 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-bold text-sm transition-all bg-white hover:bg-slate-50"
              >
                Explore 3 Listed Products ↓
              </a>
            </div>

            {/* Structured Product Catalog Summary Bar */}
            <div className="pt-6 border-t border-slate-200">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-3">
                Core Supply Range [Available on 1 Scroll Below]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono text-[#157e93] font-bold block">01 / DRESSING</span>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">Absorbent Cotton Wool I.P.</p>
                  <p className="text-[11px] text-slate-500">400g Net • Indian Pharmacopoeia</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono text-[#157e93] font-bold block">02 / ORTHOPEDIC</span>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">Cotton Crepe Bandage</p>
                  <p className="text-[11px] text-slate-500">10cm x 4m • Firm Compression</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono text-[#157e93] font-bold block">03 / STERILE</span>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">Absorbent Gauze Swabs</p>
                  <p className="text-[11px] text-slate-500">5cm x 5cm x 12 Ply • ETO Sterilized</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
