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
    <section id="about" className="scroll-mt-20 overflow-hidden bg-white px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          className="order-2 mx-auto w-full max-w-[390px] lg:order-1"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_18px_50px_rgba(1,50,93,0.18)] ring-1 ring-[#01325d]/10">
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
                className="group absolute inset-0 flex flex-col items-center justify-center bg-[#01325d]/35 transition-colors hover:bg-[#01325d]/25"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/20 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105">
                  <Play className="ml-1 h-6 w-6 fill-white text-white" />
                </span>
                <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white">Watch Video</span>
              </button>
            )}
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#157e93]">
            <span className="h-px w-8 bg-[#157e93]" aria-hidden="true" />
            Yarva Surgicals
          </div>
          <h2 className="font-['Outfit'] text-4xl font-extrabold tracking-tight text-[#01325d] sm:text-5xl">About Us</h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-7">
            <p className="font-semibold text-[#01325d]">
              YARVA SURGICALS is a healthcare-focused company committed to providing quality surgical supplies and essential medical products that support healthcare professionals in delivering reliable patient care.
            </p>
            <p>
              We aim to build a trusted presence in the healthcare industry by offering carefully selected products, maintaining a strong focus on quality, and developing lasting relationships with hospitals, clinics, pharmacies, distributors and healthcare professionals.
            </p>
            <p>
              At Yarva Surgicals, we believe that quality healthcare begins with dependable medical essentials. Guided by our commitment to quality, care and continuous improvement, we strive to make essential surgical and healthcare products accessible to those who need them.
            </p>
          </div>

          <div className="mt-7 grid gap-5 border-t border-slate-200 pt-5 sm:grid-cols-2 sm:gap-6">
            <div>
              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#157e93]">Our Vision</h3>
              <p className="text-sm leading-6 text-[#01325d]">
                To contribute to a healthier tomorrow by supporting access to essential healthcare supplies.
              </p>
            </div>
            <div className="sm:border-l sm:border-slate-200 sm:pl-6">
              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#157e93]">Our Mission</h3>
              <p className="text-sm leading-6 text-[#01325d]">
                To develop trusted relationships with healthcare providers and channel partners through responsive service product transparency and a consistent focus on quality
              </p>
            </div>
          </div>

          <p className="mt-6 border-l-2 border-[#157e93] pl-4 font-['Outfit'] text-base font-bold leading-6 text-[#01325d] sm:text-lg">
            Our commitment is simple – Quality Care, Better Tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
