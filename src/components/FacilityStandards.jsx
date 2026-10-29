import React from 'react';
import { ShieldCheck, Award, FileCheck2, CheckCircle2 } from 'lucide-react';

export default function FacilityStandards() {
  const standards = [
    {
      icon: ShieldCheck,
      title: 'ISO 13485:2016 & ISO 9001:2015',
      desc: 'Quality Management Systems audited for medical device packaging, handling, and distribution with zero cross-contamination risks.',
    },
    {
      icon: Award,
      title: 'Indian Pharmacopoeia (I.P.) Grade',
      desc: 'Rigid adherence to national pharmacopoeial criteria: optical clarity, sinking times under 10 seconds, and zero chemical brightening agents.',
    },
    {
      icon: FileCheck2,
      title: 'Batch Inspection & Documentation',
      desc: 'Every dispatch to private hospitals, government tenders, or clinics is backed by verified Batch Numbers, Manufacturing & Expiry Dates, and GST invoices.',
    },
  ];

  return (
    <section id="standards" className="py-20 sm:py-24 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008b99]">
            <span className="w-2 h-2 rounded-full bg-[#008b99]"></span>
            Regulatory Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight font-['Outfit']">
            Engineered for Critical Surgical Environments
          </h2>
          <p className="text-sm text-slate-600">
            Healthcare professionals rely on Yarva Surgicals for uncompromising clinical safety and reliable supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#008b99] mb-6 shadow-2xs">
                    <Icon className="w-6 h-6 text-[#008b99]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b2545] mb-2 font-['Outfit']">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008b99]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
