import React from 'react';
import { COMPANY } from '../data/products';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b2545] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="h-12 w-auto object-contain rounded bg-white p-1"
              />
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-['Outfit']">
                  YARVA <span className="text-[#008b99]">SURGICALS</span>
                </span>
                <p className="text-[10px] text-teal-400 font-semibold uppercase tracking-wider">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Distributor of hospital-grade wound care, Indian Pharmacopoeia absorbent cotton, sterile gauze swabs, and cotton crepe compression bandages.
            </p>

            <p className="text-xs text-teal-400 font-medium">
              {COMPANY.iso}
            </p>
          </div>

          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Central Distribution Office
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {COMPANY.address}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Hotline: <strong className="text-white font-semibold">{COMPANY.phone}</strong></p>
              <p>Email: <strong className="text-white font-semibold">{COMPANY.email}</strong></p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
