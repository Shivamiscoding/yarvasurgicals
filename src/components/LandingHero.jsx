import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '../data/products';
import FloatingObjects from './FloatingObjects';

export default function LandingHero({ onOpenEnquiryModal }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden bg-[#f8f6f3]">

      {/* Subtle warm gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0eded] pointer-events-none" />

      {/* Noise texture for premium feel */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Very subtle large glow shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#157e93]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#01325d]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating surgical objects animation */}
      <FloatingObjects />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* LEFT: Logo showcase (half-page visual) */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Large logo container with premium card treatment */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              {/* Ambient glow behind card */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#157e93]/10 to-[#01325d]/5 rounded-[40px] blur-2xl opacity-60" />

              {/* Logo card */}
              <motion.div
                className="relative aspect-square rounded-[28px] bg-white p-5 shadow-[0_20px_60px_rgba(1,50,93,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-white/80 flex items-center justify-center backdrop-blur-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={loaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src="/images/yarva-logo.jpg"
                  alt="Yarva Surgicals"
                  className="w-full h-full object-contain rounded-[20px]"
                />
              </motion.div>

              {/* Soft ground shadow */}
              <div className="w-[75%] h-4 mx-auto bg-slate-400/10 blur-xl rounded-full mt-3" />
            </div>

            {/* Address link below logo */}
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex items-start gap-2.5 px-4 py-3 rounded-2xl bg-white/60 hover:bg-white border border-slate-200/60 hover:border-[#157e93]/30 transition-all duration-300 max-w-[360px] w-full"
              title="Open in Google Maps"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MapPin className="w-4 h-4 text-[#157e93] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-600 font-medium leading-relaxed group-hover:text-[#01325d] transition-colors">
                {COMPANY.address}
              </span>
            </motion.a>
          </motion.div>

          {/* RIGHT: Headline + CTAs */}
          <div className="lg:col-span-7 space-y-8 lg:pl-4">

            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={loaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#157e93]/8 border border-[#157e93]/15 text-[11px] font-bold uppercase tracking-[0.15em] text-[#157e93]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#157e93] animate-pulse-gentle" />
                ISO 9001:2015 • ISO 13485:2016 Certified
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-[#01325d] tracking-tight font-['Outfit'] leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Surgical Instruments
              <br />
              <span className="text-[#157e93]">&amp; Medical Supplies</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-sm sm:text-base text-slate-500 font-medium max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              High-grade absorbent cotton, crepe bandages, and sterilized gauze swabs — crafted with precision by Yarva Surgicals, Pune.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <button
                onClick={onOpenEnquiryModal}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#01325d] hover:bg-[#021e3a] text-white text-sm sm:text-base font-bold tracking-wide shadow-[0_8px_30px_rgba(1,50,93,0.25)] hover:shadow-[0_12px_40px_rgba(1,50,93,0.35)] transition-all duration-300 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollDown}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border-2 border-slate-200 hover:border-[#157e93]/40 text-slate-700 hover:text-[#01325d] text-sm font-bold transition-all duration-300 bg-white/60 hover:bg-white cursor-pointer"
              >
                Explore Products
              </button>
            </motion.div>

            {/* Stats strip — inspired by reference design */}
            <motion.div
              className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              {[
                { label: 'Products listed', value: '3' },
                { label: 'ISO Standards', value: '2' },
                { label: 'Based in', value: 'Pune' },
              ].map(({ label, value }, i) => (
                <div key={label} className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400 font-medium">{label}</span>
                  <span className="text-lg sm:text-xl font-extrabold text-[#01325d] font-['Outfit']">{value}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="relative z-10 pb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-slate-400 hover:text-[#157e93] transition-colors cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-slate-300 group-hover:border-[#157e93] flex items-start justify-center p-1.5 transition-colors duration-300">
            <motion.div
              className="w-1 h-2 rounded-full bg-[#157e93]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </motion.div>

    </section>
  );
}
