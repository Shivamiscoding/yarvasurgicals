import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function ContactFooter() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <footer id="address" className="bg-[#01325d] text-white pt-16 pb-12 px-6 lg:px-8 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="w-12 h-12 object-contain rounded-xl bg-white p-1"
              />
              <div>
                <h3 className="text-2xl font-bold tracking-tight font-['Outfit']">
                  YARVA <span className="text-[#157e93]">SURGICALS</span>
                </h3>
                <p className="text-xs text-[#157e93] font-semibold tracking-wider uppercase">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300">
              {COMPANY.business}
            </p>
          </div>

          {/* Address Box */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#157e93]">
              <MapPin className="w-4 h-4 text-[#157e93]" />
              <span>Company Address</span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {COMPANY.address}
            </p>

            <div className="pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#157e93] hover:text-white transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#trailer" className="hover:text-white transition-colors">Trailer</a>
            <a href="#address" className="hover:text-white transition-colors">Address</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
