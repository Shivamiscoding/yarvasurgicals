import React from 'react';
import { Building2, MapPin, CheckCircle2, Target, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function AboutCompany() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100/70 text-[#028090] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#028090]" />
              About Yarva Surgicals
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight font-['Outfit']">
              Driven by Quality, Guided by Care for a Better Tomorrow
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Based in <strong className="text-slate-900">Pirangut, Mulshi, Pune</strong>, Yarva Surgicals is an established healthcare supplier committed to elevating surgical wound care, hospital consumables, and orthopedic compression standards.
              </p>
              <p>
                We recognize that inside an operation theatre or trauma bay, medical consumables aren't just materials—they are critical lines of defense against infection, fluid loss, and post-operative complications.
              </p>
              <p>
                That is why we partner with ISO 9001 and ISO 13485 accredited manufacturers like Varenya Medicot, ensuring every roll of absorbent cotton wool, each pack of sterile gauze swabs, and all crepe bandages adhere to Indian Pharmacopoeia norms.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Shield className="w-5 h-5 text-[#028090] mb-2" />
                <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider">Clinical Integrity</h4>
                <p className="text-[11px] text-slate-500 mt-1">Zero compromise on bio-burden limits and sterility testing.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-[#028090] mb-2" />
                <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider">Institutional Reliability</h4>
                <p className="text-[11px] text-slate-500 mt-1">Seamless rate contracts and dependable standing orders.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Target className="w-5 h-5 text-[#028090] mb-2" />
                <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider">Fast Dispatch</h4>
                <p className="text-[11px] text-slate-500 mt-1">Strategic Pune location ensuring prompt delivery across Western MH.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Physical Facility & Location Profile */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <img
                  src="/images/yarva-logo.jpg"
                  alt="Yarva Surgicals"
                  className="h-14 w-auto object-contain rounded-md border border-slate-100"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#0b2545] font-['Outfit']">Yarva Surgicals</h3>
                  <p className="text-xs text-teal-700 font-medium">Quality • Care • Better Tomorrow</p>
                </div>
              </div>

              {/* Verified Physical Location */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#028090]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Registered Operations Office:</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-1.5 border border-slate-100">
                  <p className="font-semibold text-slate-800">Why Pirangut Hub Matters:</p>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Located along the Pirangut-Mulshi arterial corridor, our dispatch unit provides rapid access to Pune's major hospital clusters in Kothrud, Deccan Gymkhana, Hinjewadi, and Pimpri-Chinchwad.
                  </p>
                </div>
              </div>

              {/* Quick Checklist */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                {COMPANY_INFO.certifications.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#0b2545] hover:bg-[#07192f] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Contact Procurement Team
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
