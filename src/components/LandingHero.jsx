import React from 'react';
import { ChevronDown, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function LandingHero({ onOpenEnquiryModal }) {
  const handleScrollDown = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 lg:px-12 py-8 lg:py-12 bg-white">
      
      {/* Subtle brand glow in background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#157e93]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#01325d]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Main 2-Column Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">
        
        {/* LEFT COLUMN: Logo (taken slightly up) + Address right below it */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-4 -mt-4 lg:-mt-8">
          
          {/* Logo Card */}
          <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
            <div className="aspect-square rounded-3xl bg-white p-4 shadow-xl border-2 border-slate-200/90 hover:border-[#157e93]/60 transition-all duration-300 flex items-center justify-center">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            {/* Subtle soft drop shadow */}
            <div className="w-[85%] h-3 mx-auto bg-slate-200/60 blur-md rounded-full mt-1.5"></div>
          </div>

          {/* Clickable Address directly at the bottom of the logo (opens Google Maps) */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-2.5 p-3 rounded-2xl hover:bg-slate-50 border border-slate-200/80 hover:border-[#157e93]/50 transition-all max-w-[380px] w-full text-left"
            title="Click to open location in Google Maps"
          >
            <MapPin className="w-4 h-4 text-[#157e93] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed group-hover:text-[#157e93] transition-colors underline-offset-2 group-hover:underline">
              {COMPANY.address}
            </span>
          </a>

        </div>

        {/* RIGHT COLUMN: Where all that was -> Clean headline & "Enquire Now" option */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#01325d] tracking-tight font-['Outfit'] leading-[1.15]">
              Surgical Instruments &amp; Medical Supplies
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-xl">
              High-grade absorbent cotton, crepe bandages, and sterilized gauze swabs by Yarva Surgicals.
            </p>
          </div>

          {/* Enquire Now Option & Explore Products */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenEnquiryModal}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#01325d] hover:bg-[#032f59] text-white text-sm sm:text-base font-bold tracking-wide shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleScrollDown}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-slate-200 hover:border-[#157e93] text-slate-700 hover:text-[#157e93] text-sm font-bold transition-all bg-white hover:bg-slate-50 cursor-pointer"
            >
              <span>Explore Products ↓</span>
            </button>
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
