import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-white px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="inline-flex items-center gap-3 text-3xl font-extrabold tracking-tight text-[#01325d] sm:text-4xl">
            <span className="h-px w-8 bg-[#157e93]" aria-hidden="true" />
            About Us
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              YARVA SURGICALS is a healthcare-focused company committed to providing quality surgical supplies and essential medical products that support healthcare professionals in delivering reliable patient care.
            </p>
            <p>
              We aim to build a trusted presence in the healthcare industry by offering carefully selected products, maintaining a strong focus on quality, and developing lasting relationships with hospitals, clinics, pharmacies, distributors and healthcare professionals.
            </p>
            <p>
              At Yarva Surgicals, we believe that quality healthcare begins with dependable medical essentials. Guided by our commitment to quality, care and continuous improvement, we strive to make essential surgical and healthcare products accessible to those who need them.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200/80 bg-[#f8f6f3] p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#157e93]">Our vision</h3>
            <p className="mt-3 text-base leading-7 text-[#01325d] sm:text-lg">
              To contribute to a healthier tomorrow by supporting access to essential healthcare supplies.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200/80 bg-[#f8f6f3] p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#157e93]">Our mission</h3>
            <p className="mt-3 text-base leading-7 text-[#01325d] sm:text-lg">
              To develop trusted relationships with healthcare providers and channel partners through responsive service product transparency and a consistent focus on quality
            </p>
          </article>
        </div>

        <p className="mt-9 text-center font-['Outfit'] text-lg font-bold text-[#01325d] sm:text-xl">
          Our commitment is simple – Quality Care, Better Tomorrow.
        </p>
      </div>
    </section>
  );
}
