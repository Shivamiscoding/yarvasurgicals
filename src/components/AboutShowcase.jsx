import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

export default function AboutShowcase() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <section id="about" className="scroll-mt-20 overflow-hidden bg-white">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#157e93]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 lg:py-28">

        {/* Section label — centered above */}
        <motion.div {...fadeUp(0)} className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#157e93]">
            <span className="h-px w-8 bg-[#157e93]" aria-hidden="true" />
            Yarva Surgicals
            <span className="h-px w-8 bg-[#157e93]" aria-hidden="true" />
          </span>
          <h2 className="font-['Outfit'] text-4xl font-extrabold tracking-tight text-[#01325d] sm:text-5xl">
            About Us
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* ── Video column ── */}
          <motion.div {...fadeUp(0.08)} className="mx-auto w-full max-w-[340px] lg:mx-0">
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-slate-900 shadow-[0_24px_60px_rgba(1,50,93,0.16)] ring-1 ring-[#01325d]/10">
              <video
                ref={videoRef}
                src="/videos/trailer.mp4"
                poster="/videos/trailer-poster.jpg"
                className="h-full w-full object-cover"
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                controls={playing}
              />
              {!playing && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play Yarva Surgicals video"
                  className="group absolute inset-0 flex flex-col items-center justify-center bg-[#01325d]/30 transition-colors hover:bg-[#01325d]/20"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/15 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Play className="ml-1 h-6 w-6 fill-white text-white" />
                  </span>
                  <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                    Watch Video
                  </span>
                </button>
              )}
            </div>
          </motion.div>

          {/* ── Text column ── */}
          <div className="flex flex-col justify-center">

            {/* Paragraphs — staggered */}
            <div className="space-y-5">
              <motion.p {...fadeUp(0.12)} className="text-sm font-semibold leading-7 text-[#01325d] sm:text-[15px]">
                YARVA SURGICALS is a healthcare-focused company committed to providing quality surgical supplies and essential medical products that support healthcare professionals in delivering reliable patient care.
              </motion.p>
              <motion.p {...fadeUp(0.18)} className="text-sm leading-7 text-slate-500 sm:text-[15px]">
                We aim to build a trusted presence in the healthcare industry by offering carefully selected products, maintaining a strong focus on quality, and developing lasting relationships with hospitals, clinics, pharmacies, distributors and healthcare professionals.
              </motion.p>
              <motion.p {...fadeUp(0.24)} className="text-sm leading-7 text-slate-500 sm:text-[15px]">
                At Yarva Surgicals, we believe that quality healthcare begins with dependable medical essentials. Guided by our commitment to quality, care and continuous improvement, we strive to make essential surgical and healthcare products accessible to those who need them.
              </motion.p>
            </div>

            {/* Vision / Mission */}
            <motion.div {...fadeUp(0.3)} className="mt-10 grid gap-0 divide-y divide-slate-100 border-y border-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="py-6 sm:pr-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">Our Vision</p>
                <p className="text-sm leading-6 text-[#01325d]">
                  To contribute to a healthier tomorrow by supporting access to essential healthcare supplies.
                </p>
              </div>
              <div className="py-6 sm:pl-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">Our Mission</p>
                <p className="text-sm leading-6 text-[#01325d]">
                  To develop trusted relationships with healthcare providers and channel partners through responsive service product transparency and a consistent focus on quality
                </p>
              </div>
            </motion.div>

            {/* Commitment tagline */}
            <motion.div {...fadeUp(0.36)} className="mt-8 flex items-start gap-4">
              <span className="mt-0.5 shrink-0 h-5 w-[2px] rounded-full bg-[#157e93]" aria-hidden="true" />
              <p className="font-['Outfit'] text-base font-bold leading-6 text-[#01325d] sm:text-[17px]">
                Our commitment is simple – Quality Care, Better Tomorrow.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#157e93]/30 to-transparent" />
    </section>
  );
}
