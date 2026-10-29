import React, { useState } from 'react';
import { MapPin, ExternalLink, Copy, Check, MessageSquare, ArrowUp, FileText } from 'lucide-react';
import { COMPANY } from '../data/products';

export default function ContactFooter({ onOpenQuoteModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <footer id="address" className="bg-[#01325d] text-white pt-16 pb-12 px-6 lg:px-8 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Brand Info & Quick Actions */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="w-14 h-14 object-contain rounded-2xl bg-white p-1"
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

            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              {COMPANY.business}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-white/20"
              >
                <FileText className="w-3.5 h-3.5 text-teal-300" />
                <span>Request Quotation</span>
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Hello ${COMPANY.name}, I would like to inquire about your surgical supplies.`)}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Address Box with Interactive Tools */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#157e93]">
              <MapPin className="w-4 h-4 text-[#157e93]" />
              <span>Registered Company Address</span>
            </div>

            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-semibold">
              {COMPANY.address}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
              <button
                onClick={handleCopyAddress}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-300" />}
                <span>{copied ? 'Address Copied' : 'Copy Address'}</span>
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-[#157e93] hover:bg-[#126b7c] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#trailer" className="hover:text-white transition-colors">Trailer</a>
            <a href="#address" className="hover:text-white transition-colors">Address</a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors ml-2"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
