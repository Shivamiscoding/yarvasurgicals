import React from 'react';
import { MapPin, ExternalLink, ArrowUp, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function ContactFooter({ onOpenEnquiryModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <footer id="address" className="bg-[#012e58] text-white pt-16 pb-12 px-6 lg:px-12 border-t border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Brand Info & Action */}
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center">
                <img
                  src="/images/yarva-logo.jpg"
                  alt="Yarva Surgicals"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight font-['Outfit'] text-white">
                  YARVA <span className="text-[#157e93]">SURGICALS</span>
                </h3>
                <p className="text-[11px] font-mono text-teal-300 font-semibold tracking-wider uppercase">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-normal">
              Direct supplier and distributor of hospital-grade wound dressings, absorbent cotton wool, and orthopedic compression bandages based in Pune, Maharashtra.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenEnquiryModal}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-teal-300" />
              </button>
            </div>
          </div>

          {/* Registered Address Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-300">
              <MapPin className="w-4 h-4 text-teal-300" />
              <span>Registered Facility &amp; Dispatch Address</span>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm sm:text-base text-slate-100 hover:text-teal-200 leading-relaxed font-semibold block transition-colors underline-offset-4 hover:underline"
              title="Click to open location in Google Maps"
            >
              {COMPANY.address}
            </a>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Mulshi Taluka, Pune District</span>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-white transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#products" className="hover:text-white transition-colors">[01] Products</a>
            <a href="#trailer" className="hover:text-white transition-colors">[02] Trailer</a>
            <a href="#address" className="hover:text-white transition-colors">[03] Address</a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors ml-3 cursor-pointer"
              title="Back to top"
            >
              <span>TOP ↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
