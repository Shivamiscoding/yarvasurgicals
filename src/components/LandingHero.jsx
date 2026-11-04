import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '../data/products';
import InteractiveLogo from './InteractiveLogo';
const FloatingObjects3D = lazy(() => import('./FloatingObjects3D'));

export default function LandingHero({ onOpenEnquiryModal }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8f6f3 0%, #f2eff0 40%, #edf3f5 100%)' }}
    >
      {/* Fine dot grid — very subtle, adds depth */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c8d8e0 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />

      {/* Gradient sweeps — soft light from top-right (where 3D objects are) */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(21,126,147,0.06) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 left-0 w-[45%] h-[60%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(1,50,93,0.04) 0%, transparent 70%)' }}
      />

      {/* 3D objects — fills the right half */}
      <Suspense fallback={null}>
        <FloatingObjects3D />
      </Suspense>

      {/* ── Main layout ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-10 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-10rem)]">

            {/* ── LEFT: Logo — Interactive 3D tilt with dynamic sheen & ripples ── */}
            <motion.div
              className="lg:col-span-5 flex flex-col items-center lg:items-start"
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              <InteractiveLogo loaded={loaded} />

              {/* Address — plain text link, no card */}
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 flex items-start gap-2 max-w-[340px] text-slate-400 hover:text-[#157e93] transition-colors duration-200 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <MapPin className="w-3.5 h-3.5 text-[#157e93]/60 group-hover:text-[#157e93] shrink-0 mt-0.5 transition-colors" />
                <span className="text-[11px] font-medium leading-relaxed tracking-wide">
                  {COMPANY.address}
                </span>
              </motion.a>
            </motion.div>

            {/* ── RIGHT: Headline + CTAs ── */}
            <div className="lg:col-span-7 lg:pl-6 space-y-7">

              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={loaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block w-6 h-px bg-[#157e93]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
                  Pune, Maharashtra
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="font-['Outfit'] font-extrabold text-[#01325d] tracking-tight"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 1.06 }}
                initial={{ opacity: 0, y: 24 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Surgical
                <br />
                <span className="text-[#157e93]">&amp; Wound Care Supplies</span>
              </motion.h1>

              {/* Quote */}
              <motion.p
                className="text-slate-500 font-medium leading-relaxed max-w-[380px]"
                style={{ fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Trusted by clinics and hospitals across Maharashtra —
                precision-grade consumables, every time.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap items-center gap-4 pt-1"
                initial={{ opacity: 0, y: 16 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                <button
                  onClick={onOpenEnquiryModal}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#01325d] hover:bg-[#021e3a] text-white text-sm font-bold tracking-wide shadow-[0_8px_30px_rgba(1,50,93,0.22)] hover:shadow-[0_14px_40px_rgba(1,50,93,0.32)] transition-all duration-300 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleScrollDown}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-slate-300/80 hover:border-[#157e93]/50 text-slate-600 hover:text-[#01325d] text-sm font-semibold transition-all duration-300 hover:bg-white/60 cursor-pointer"
                >
                  Explore Products
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="relative z-10 pb-7 flex justify-center"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-slate-400 hover:text-[#157e93] transition-colors cursor-pointer"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-slate-300/80 group-hover:border-[#157e93] flex items-start justify-center p-1.5 transition-colors duration-300">
            <motion.div
              className="w-1 h-2 rounded-full bg-[#157e93]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
