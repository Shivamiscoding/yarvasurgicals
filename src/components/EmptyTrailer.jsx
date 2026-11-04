import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmptyTrailer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="trailer" className="relative py-24 px-6 lg:px-10 bg-[#f8f6f3] scroll-mt-20 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#157e93]">
            <span className="w-8 h-px bg-[#157e93]" />
            Video Showcase
            <span className="w-8 h-px bg-[#157e93]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01325d] font-['Outfit'] tracking-tight">
            Company Trailer
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Surgical facility walkthrough &amp; product demonstration
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          className="relative max-w-sm sm:max-w-md mx-auto rounded-[32px] overflow-hidden shadow-[0_24px_70px_rgba(1,50,93,0.22)] bg-slate-900 border-4 border-white/80 ring-1 ring-slate-900/10 aspect-[9/16]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Actual video element */}
          <video
            ref={videoRef}
            src="/videos/trailer.mp4"
            poster="/videos/trailer-poster.jpg"
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            controls={playing}
          />

          {/* Overlay play button — hides after play */}
          {!playing && (
            <div
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#01325d]/45 backdrop-blur-[2px] cursor-pointer group transition-colors hover:bg-[#01325d]/35"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 group-hover:bg-white/30 group-hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-300 shadow-2xl">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <p className="mt-5 text-white/90 text-xs font-bold tracking-widest uppercase font-['Outfit']">
                Watch Video
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
