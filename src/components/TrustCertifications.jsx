import React from 'react';
import { ShieldCheck, Award, Microscope, FileCheck, CheckCircle2, Stethoscope, Factory, Truck } from 'lucide-react';

export default function TrustCertifications() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'ISO 13485:2016 Certified',
      description: 'Manufactured and packed under global medical device quality standards ensuring comprehensive bio-safety and batch traceability.',
    },
    {
      icon: Award,
      title: 'Indian Pharmacopoeia (I.P.)',
      description: 'Strict adherence to I.P. monographs for sinking time, absorbency value, chemical neutrality, and zero fluorescent optical brighteners.',
    },
    {
      icon: Microscope,
      title: 'Validated ETO Sterilization',
      description: 'Ethylene Oxide cycle parameters are monitored with dual chemical indicators (Brown in steam / EO indicator) for confirmed microbial kill.',
    },
    {
      icon: FileCheck,
      title: 'Full Batch Documentation',
      description: 'Every dispatch is accompanied by Certificate of Analysis (COA), test reports, and GST compliant tax invoices for seamless hospital audits.',
    },
  ];

  return (
    <section id="standards" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#028090] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#028090]" />
            Regulatory & Quality Assurance
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight font-['Outfit']">
            Engineered for Operating Theatres & Critical Patient Care
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Healthcare professionals cannot compromise on sterile integrity. We maintain strict protocols at every stage from raw fiber selection to final sealing.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#028090]/50 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center mb-5 text-[#028090]">
                    <Icon className="w-6 h-6 text-[#028090]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b2545] mb-2 font-['Outfit']">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#028090]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Hospital Audited Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Commitment Stat Strip */}
        <div className="mt-12 bg-gradient-to-r from-[#0b2545] via-[#0d3461] to-[#0b2545] rounded-2xl p-6 sm:p-8 text-white shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
            <div className="pt-3 md:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-['Outfit']">100%</p>
              <p className="text-xs text-slate-300 mt-1">Absorbent Bleached Cotton</p>
            </div>
            <div className="pt-3 md:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-['Outfit']">0%</p>
              <p className="text-xs text-slate-300 mt-1">Harmful Optical Brighteners</p>
            </div>
            <div className="pt-3 md:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-['Outfit']">12 Ply</p>
              <p className="text-xs text-slate-300 mt-1">High-Exudate Gauze Weave</p>
            </div>
            <div className="pt-3 md:pt-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-['Outfit']">24/7</p>
              <p className="text-xs text-slate-300 mt-1">Emergency Hospital Dispatch</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
