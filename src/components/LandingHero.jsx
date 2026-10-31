import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY } from '../data/products';
const FloatingObjects3D = lazy(() => import('./FloatingObjects3D'));

/*
 * FlippingLogoCard — auto-flips between the company logo (front)
 * and a medical-themed brand visual (back) on a timed loop.
 * Uses CSS 3D perspective transforms for a real card-flip effect.
 */
function FlippingLogoCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto-flip every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full aspect-square cursor-pointer group"
      style={{ perspective: '1200px' }}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* ─── FRONT: Company Logo ─── */}
        <div
          className="absolute inset-0 rounded-[28px] bg-white p-5 shadow-[0_20px_60px_rgba(1,50,93,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-white/80 flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="/images/yarva-logo.jpg"
            alt="Yarva Surgicals"
            className="w-full h-full object-contain rounded-[20px]"
          />
        </div>

        {/* ─── BACK: Medical brand visual ─── */}
        <div
          className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#01325d] to-[#024a8a] p-8 shadow-[0_20px_60px_rgba(1,50,93,0.15),0_1px_3px_rgba(0,0,0,0.06)] border border-[#01325d]/50 flex flex-col items-center justify-center gap-6 text-white overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Decorative cross watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
            <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
              <rect x="95" y="0" width="70" height="260" rx="8" fill="white" />
              <rect x="0" y="95" width="260" height="70" rx="8" fill="white" />
            </svg>
          </div>

          {/* Concentric rings decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[200px] h-[200px] rounded-full border border-white/[0.06]" />
            <div className="absolute w-[260px] h-[260px] rounded-full border border-white/[0.04]" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-white/[0.02]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            {/* Heartbeat line SVG */}
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="opacity-50">
              <path
                d="M0 12 L15 12 L22 4 L30 20 L38 6 L44 16 L50 12 L80 12"
                stroke="#157e93"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex items-center gap-2">
              <img
                src="/images/yarva-logo.jpg"
                alt="Yarva Surgicals"
                className="w-10 h-10 rounded-lg object-contain bg-white p-0.5"
              />
              <div className="text-left">
                <div className="text-lg font-extrabold font-['Outfit'] tracking-tight leading-tight">
                  YARVA
                </div>
                <div className="text-[10px] text-[#157e93] font-bold tracking-[0.15em] uppercase -mt-0.5">
                  SURGICALS
                </div>
              </div>
            </div>

            <div className="w-12 h-px bg-white/20" />

            <p className="text-[11px] text-slate-300 font-medium leading-relaxed max-w-[200px]">
              {COMPANY.tagline}
            </p>

            <p className="text-[10px] text-[#157e93] font-bold tracking-[0.1em] uppercase">
              {COMPANY.business}
            </p>
          </div>

          {/* Teal glow accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#157e93]/20 rounded-full blur-[60px] pointer-events-none" />
        </div>
      </motion.div>

      {/* Flip hint */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-semibold text-slate-400 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Click to flip
      </div>
    </div>
  );
}


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

      {/* 3D floating surgical objects */}
      <Suspense fallback={null}>
        <FloatingObjects3D />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* LEFT: Flipping Logo Card */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Flipping card container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              {/* Ambient glow behind card */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#157e93]/10 to-[#01325d]/5 rounded-[40px] blur-2xl opacity-60" />

              {/* The flipping logo card */}
              <FlippingLogoCard />

              {/* Soft ground shadow */}
              <div className="w-[75%] h-4 mx-auto bg-slate-400/10 blur-xl rounded-full mt-6" />
            </div>

            {/* Address link below logo */}
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 flex items-start gap-2.5 px-4 py-3 rounded-2xl bg-white/60 hover:bg-white border border-slate-200/60 hover:border-[#157e93]/30 transition-all duration-300 max-w-[360px] w-full"
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

            {/* Main headline */}
            <motion.h1
              className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-[#01325d] tracking-tight font-['Outfit'] leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              High-grade absorbent cotton, crepe bandages, and sterilized gauze swabs — crafted with precision by Yarva Surgicals, Pune.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
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

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="relative z-10 pb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
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
