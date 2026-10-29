import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07192f] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="h-14 w-auto object-contain rounded bg-white p-1 border border-slate-700"
              />
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight font-['Outfit']">
                  YARVA <span className="text-[#028090]">SURGICALS</span>
                </span>
                <p className="text-[11px] text-teal-400 font-semibold tracking-wider uppercase">
                  Quality • Care • Better Tomorrow
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Reliable supplier of hospital-grade wound dressing, sterile gauze swabs, absorbent cotton wool I.P., and cotton crepe bandages. Serving medical centers, surgeons, and healthcare distributors across Maharashtra.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-teal-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                ISO 9001:2015 & ISO 13485:2016
              </span>
              <span>•</span>
              <span>I.P. Standards</span>
            </div>
          </div>

          {/* Quick Product Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Featured Surgical Supplies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-teal-300 transition-colors">
                  Absorbent Gauze Swabs (Sterilized 12-Ply)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-teal-300 transition-colors">
                  Absorbent Cotton Wool I.P. (400g / 500g)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-teal-300 transition-colors">
                  Cotton Crepe Bandage (10cm x 4m)
                </a>
              </li>
              <li>
                <a href="#trailer" className="hover:text-teal-300 transition-colors">
                  Production Facility Video Trailer
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-teal-300 transition-colors">
                  Quality & Sterilization Protocols
                </a>
              </li>
            </ul>
          </div>

          {/* Full Address & Direct Reach */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Central Warehouse & Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.email}</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2">
                Central distribution center in Pirangut, Mulshi, Pune, Maharashtra.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Yarva Surgicals. All Rights Reserved. Compliant with CDSCO & Indian Pharmacopoeia norms.
          </div>

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
