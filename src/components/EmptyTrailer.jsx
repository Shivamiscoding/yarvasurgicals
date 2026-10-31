import React, { useState } from 'react';
import { Play, Settings, RefreshCw, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmptyTrailer() {
  const [videoUrl, setVideoUrl] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSetUrl = (e) => {
    e.preventDefault();
    setVideoUrl(customInput);
    setIsConfiguring(false);
    setIsPlaying(true);
  };

  const handleResetTrailer = () => {
    setVideoUrl('');
    setCustomInput('');
    setIsPlaying(false);
    setIsConfiguring(false);
  };

  return (
    <section id="trailer" className="relative py-24 px-6 lg:px-10 bg-[#f8f6f3] scroll-mt-20 overflow-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#01325d]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#157e93]">
              <span className="w-8 h-px bg-[#157e93]" />
              Video Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01325d] font-['Outfit'] tracking-tight">
              Company Trailer
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Surgical facility walkthrough &amp; product demonstration
            </p>
          </motion.div>

          {/* Config Buttons */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setIsConfiguring(!isConfiguring)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-[#01325d] text-xs font-semibold transition-all duration-200 flex items-center gap-2 bg-white/80 hover:bg-white"
            >
              <Settings className="w-3.5 h-3.5 text-[#157e93]" />
              <span>{videoUrl ? 'Edit URL' : 'Set Video URL'}</span>
            </button>

            {videoUrl && (
              <button
                onClick={handleResetTrailer}
                className="px-3 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-red-500 text-xs font-semibold transition-colors flex items-center gap-1.5 bg-white/80"
                title="Reset"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* URL Config Bar */}
        {isConfiguring && (
          <motion.div
            className="mb-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSetUrl} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <LinkIcon className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  required
                  placeholder="Paste YouTube embed URL or MP4 link..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#157e93] transition-all"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#01325d] text-white text-xs font-bold hover:bg-[#021e3a] transition-all shadow-sm"
                >
                  Save Video
                </button>
                <button
                  type="button"
                  onClick={() => setIsConfiguring(false)}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Video Frame */}
        <motion.div
          className="relative rounded-[28px] overflow-hidden bg-[#01325d] shadow-[0_30px_80px_rgba(1,50,93,0.15)] border border-slate-200/30 aspect-video"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {videoUrl && isPlaying ? (
            <div className="w-full h-full">
              {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                <iframe
                  src={videoUrl.replace('watch?v=', 'embed/')}
                  title="Yarva Surgicals Trailer"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-6 p-8 text-center text-white relative">

              {/* Decorative concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full border border-white/5 animate-pulse-gentle" />
                <div className="absolute w-64 h-64 rounded-full border border-white/[0.03]" />
                <div className="absolute w-80 h-80 rounded-full border border-white/[0.02]" />
              </div>

              {/* Play Button */}
              <button
                onClick={() => {
                  if (videoUrl) {
                    setIsPlaying(true);
                  } else {
                    setIsConfiguring(true);
                  }
                }}
                className="relative z-10 w-20 h-20 rounded-full bg-[#157e93] hover:bg-[#1a9bb5] flex items-center justify-center cursor-pointer shadow-[0_8px_30px_rgba(21,126,147,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
                title="Play Trailer"
              >
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </button>

              <div className="relative z-10 space-y-2">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93] bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                  Trailer
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white/90">
                  Company Video
                </h3>
              </div>

              <button
                onClick={() => setIsConfiguring(true)}
                className="relative z-10 text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                Attach video URL to get started
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
