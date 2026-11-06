import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="about" className="scroll-mt-20 overflow-hidden bg-[#f8fafb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ══ LEFT — layered video collage ══ */}
          <motion.div
            className="relative mx-auto w-full max-w-[400px] lg:mx-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Teal offset block — decorative depth layer behind the video */}
            <div
              className="absolute -bottom-5 -left-5 h-[88%] w-[78%] rounded-3xl bg-[#157e93]/12"
              aria-hidden="true"
            />

            {/* Navy dot-grid accent — top-right corner */}
            <div
              className="absolute -right-4 -top-4 grid grid-cols-4 gap-[6px]"
              aria-hidden="true"
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#01325d]/18" />
              ))}
            </div>

            {/* Video card */}
            <div className="relative z-10 aspect-[9/16] overflow-hidden rounded-3xl bg-slate-900 shadow-[0_20px_56px_rgba(1,50,93,0.18)] ring-1 ring-[#01325d]/10">
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

          {/* ══ RIGHT — text content ══ */}
          <div className="flex flex-col">

            {/* Label */}
            <motion.div
              className="mb-3 flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="h-px w-8 bg-[#157e93]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#157e93]">
                Yarva Surgicals
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-['Outfit'] text-5xl font-extrabold leading-tight tracking-tight text-[#157e93] sm:text-6xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            >
              About Us
            </motion.h2>

            {/* Body paragraphs */}
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            >
              <p className="text-[15px] font-semibold leading-7 text-[#01325d]">
                YARVA SURGICALS is a healthcare-focused company committed to providing quality surgical supplies and essential medical products that support healthcare professionals in delivering reliable patient care.
              </p>
              <p className="text-[15px] leading-7 text-slate-500">
                We aim to build a trusted presence in the healthcare industry by offering carefully selected products, maintaining a strong focus on quality, and developing lasting relationships with hospitals, clinics, pharmacies, distributors and healthcare professionals.
              </p>
              <p className="text-[15px] leading-7 text-slate-500">
                At Yarva Surgicals, we believe that quality healthcare begins with dependable medical essentials. Guided by our commitment to quality, care and continuous improvement, we strive to make essential surgical and healthcare products accessible to those who need them.
              </p>
            </motion.div>

            {/* Vision / Mission — side by side cards */}
            <motion.div
              className="mt-9 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            >
              <div className="rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-slate-100">
                <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
                  Our Vision
                </span>
                <p className="text-sm leading-6 text-[#01325d]">
                  To contribute to a healthier tomorrow by supporting access to essential healthcare supplies.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-slate-100">
                <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
                  Our Mission
                </span>
                <p className="text-sm leading-6 text-[#01325d]">
                  To develop trusted relationships with healthcare providers and channel partners through responsive service and a consistent focus on quality.
                </p>
              </div>
            </motion.div>

            {/* Commitment tagline */}
            <motion.p
              className="mt-7 font-['Outfit'] text-[17px] font-bold leading-6 text-[#01325d]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
            >
              <span className="mr-2 inline-block h-4 w-[2px] translate-y-[2px] rounded-full bg-[#157e93]" aria-hidden="true" />
              Our commitment is simple – Quality, Care, Better Tomorrow.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
