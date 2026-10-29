import React from 'react';
import { ShieldCheck, ChevronDown, Award, Truck, CheckCircle2, ArrowRight, Activity, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Hero({ onExploreClick, onOpenQuoteModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
      {/* Subtle medical grid background */}
      <div className="absolute inset-0 medical-grid-bg opacity-40 pointer-events-none"></div>

      {/* Decorative Brand Accent Glows matching the logo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#028090]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#0b2545]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Narrative & Trust */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#028090] text-xs font-semibold shadow-2xs">
              <Activity className="w-3.5 h-3.5 text-[#028090] animate-pulse" />
              <span>Certified Surgical & Hospital Consumables</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span className="text-slate-600 font-normal">Pune, Maharashtra</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b2545] leading-[1.15]">
              Precision Surgical Consumables for{' '}
              <span className="relative text-[#028090] inline-block">
                Hospitals & Clinics
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#028090]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Sub-copy written with genuine healthcare procurement realism */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <strong className="text-slate-900 font-semibold">Yarva Surgicals</strong> distributes clinical-grade wound dressing, sterile gauze swabs, absorbent cotton wool I.P., and orthopedic bandages designed for operation theatres, emergency care, and healthcare institutions across Maharashtra.
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#028090] shrink-0" />
                <span className="text-xs font-medium text-slate-700">ISO 13485:2016 & ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Award className="w-5 h-5 text-[#028090] shrink-0" />
                <span className="text-xs font-medium text-slate-700">I.P. Pharmacopoeia Grade</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
                <Truck className="w-5 h-5 text-[#028090] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Rapid Dispatch from Pirangut</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#products"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b2545] hover:bg-[#07192f] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all group"
              >
                <span>View Listed Products</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#028090] text-[#028090] hover:bg-[#028090] hover:text-white text-sm font-semibold tracking-wide transition-all shadow-2xs"
              >
                <span>Request Wholesale RFQ</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Yarva%20Surgicals,%20we%20are%20looking%20for%20bulk%20surgical%20supplies.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2.5 rounded-lg border border-emerald-200 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Procurement WhatsApp</span>
              </a>
            </div>

            {/* Micro Location Assurance */}
            <p className="text-xs text-slate-500 pt-1 flex items-center gap-1.5">
              <span>📍 Central Warehouse:</span>
              <span className="font-medium text-slate-700">{COMPANY_INFO.address}</span>
            </p>
          </div>

          {/* Right Column: Interactive Clinical Credibility Showcase */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 space-y-6">
              
              {/* Card Header with Brand Logo */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/yarva-logo.jpg"
                    alt="Yarva Surgicals"
                    className="h-12 w-auto object-contain rounded border border-slate-100"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#0b2545] font-['Outfit']">Yarva Surgicals</h3>
                    <p className="text-[11px] text-teal-700 font-medium">Verified Healthcare Supplier</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Active Supplier
                </span>
              </div>

              {/* Three Featured Products Mini-Preview */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                  <span>Core Surgical Consumables</span>
                  <span className="text-[10px] text-[#028090] font-semibold">1-Scroll Down ↓</span>
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50/50 transition-colors border border-slate-100">
                    <img
                      src="/images/gauze-swabs.jpg"
                      alt="Gauze Swabs"
                      className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#0b2545] truncate">Absorbent Gauze Swabs (Sterilized)</p>
                      <p className="text-[11px] text-slate-500">5cm x 5cm • 12 Ply • ETO Sterilized</p>
                    </div>
                    <span className="text-[10px] bg-teal-100 text-[#028090] font-semibold px-2 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50/50 transition-colors border border-slate-100">
                    <img
                      src="/images/cotton-wool.jpg"
                      alt="Cotton Wool"
                      className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#0b2545] truncate">Absorbent Cotton Wool I.P.</p>
                      <p className="text-[11px] text-slate-500">400g Net • Indian Pharmacopoeia Standard</p>
                    </div>
                    <span className="text-[10px] bg-teal-100 text-[#028090] font-semibold px-2 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50/50 transition-colors border border-slate-100">
                    <img
                      src="/images/crepe-bandage.jpg"
                      alt="Cotton Crepe Bandage"
                      className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#0b2545] truncate">Cotton Crepe Bandage</p>
                      <p className="text-[11px] text-slate-500">10cm x 4m • Airtight Container • Skin Safe</p>
                    </div>
                    <span className="text-[10px] bg-teal-100 text-[#028090] font-semibold px-2 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>
                </div>
              </div>

              {/* Supply Metrics */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-slate-50">
                  <p className="text-lg font-bold text-[#0b2545] font-['Outfit']">100%</p>
                  <p className="text-[11px] text-slate-500">Batch Inspection</p>
                </div>
                <div className="p-2.5 rounded-lg bg-teal-50">
                  <p className="text-lg font-bold text-[#028090] font-['Outfit']">&lt; 24 Hrs</p>
                  <p className="text-[11px] text-slate-500">Pune Hospital Dispatch</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 1-Scroll Interactive Cue directly to the listed products */}
        <div className="pt-10 flex flex-col items-center justify-center">
          <a
            href="#products"
            className="group flex flex-col items-center gap-2 text-xs font-medium text-slate-500 hover:text-[#028090] transition-colors"
          >
            <span className="tracking-wider uppercase text-[11px] font-semibold text-slate-600 group-hover:text-[#028090]">
              Scroll down to explore listed products
            </span>
            <div className="w-8 h-12 rounded-full border-2 border-slate-300 group-hover:border-[#028090] flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-[#028090] animate-bounce"></div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#028090] -mt-1 group-hover:translate-y-0.5 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
}
