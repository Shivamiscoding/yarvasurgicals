import React, { useState } from 'react';
import { Play, Film, Clock, Sparkles, Volume2, Maximize2, Settings, AlertCircle, CheckCircle } from 'lucide-react';

export default function EmptyTrailer() {
  const [videoUrl, setVideoUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [showConfig, setShowConfig] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSaveUrl = (e) => {
    e.preventDefault();
    setVideoUrl(inputUrl);
    setShowConfig(false);
  };

  return (
    <section id="trailer" className="py-16 sm:py-20 bg-[#07192f] text-white relative overflow-hidden border-b border-slate-800 scroll-mt-20">
      
      {/* Background visual accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#028090]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5 text-teal-400" />
            <span>Virtual Plant & Facility Tour</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Yarva Surgicals Manufacturing & Supply Trailer
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience our cleanroom packaging protocols, ETO sterilization validation, and raw material purity standards.
          </p>
        </div>

        {/* The Trailer Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl group">
            
            {/* Top Player Status Bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="ml-2 font-mono text-[11px] text-slate-300">
                  yarva-production-trailer.mp4
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
                  <Clock className="w-3 h-3" /> Duration: 02:30
                </span>
                <button
                  onClick={() => setShowConfig(!showConfig)}
                  className="hover:text-white transition-colors p-1"
                  title="Configure trailer video source"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Video Player Display Screen */}
            <div className="relative aspect-video w-full bg-gradient-to-tr from-[#081e36] via-[#0b2545] to-[#04334f] flex flex-col items-center justify-center p-6 text-center">
              
              {videoUrl ? (
                // If a video URL has been provided, render the embed or video element
                <div className="w-full h-full">
                  {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                    <iframe
                      src={videoUrl.replace('watch?v=', 'embed/')}
                      title="Yarva Surgicals Facility Trailer"
                      className="w-full h-full rounded"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    ></video>
                  )}
                </div>
              ) : (
                // Empty Trailer State (Designed with authentic medical trailer aesthetics)
                <div className="space-y-6 max-w-md">
                  
                  {/* Big Play Button with Ripple */}
                  <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#028090]/20 animate-ping"></div>
                    <div className="absolute -inset-2 rounded-full bg-[#028090]/10"></div>
                    <button
                      onClick={() => setShowConfig(true)}
                      className="relative w-16 h-16 rounded-full bg-[#028090] hover:bg-[#00a896] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                      title="Play official facility trailer"
                    >
                      <Play className="w-7 h-7 text-white ml-1 fill-white" />
                    </button>
                  </div>

                  {/* Trailer Status Notice */}
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      Empty Video Trailer Placeholder
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                      Official Facility Video Coming Soon
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      This trailer slot is reserved for Yarva Surgicals' cleanroom walkthrough, ISO 13485 sterilization process, and warehouse logistics tour.
                    </p>
                  </div>

                  {/* Quick Action to Add Custom URL */}
                  <div>
                    <button
                      onClick={() => setShowConfig(true)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-xs transition-colors border border-white/20"
                    >
                      <Settings className="w-3.5 h-3.5 text-teal-400" />
                      <span>Embed Video Link (YouTube / MP4)</span>
                    </button>
                  </div>

                </div>
              )}

              {/* Bottom Watermark */}
              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Yarva Surgicals • Quality Assurance Dept.</span>
              </div>
            </div>

            {/* Video Config Modal / Drawer */}
            {showConfig && (
              <div className="p-4 bg-slate-950 border-t border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    Embed Trailer Source URL
                  </h4>
                  <button
                    onClick={() => setShowConfig(false)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <form onSubmit={handleSaveUrl} className="flex gap-2">
                  <input
                    type="url"
                    placeholder="Enter YouTube URL or MP4 direct link..."
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#028090] hover:bg-[#00a896] text-white text-xs font-bold transition-colors"
                  >
                    Save Video
                  </button>
                </form>
                <p className="text-[11px] text-slate-400">
                  Tip: You can paste any hospital tour video, YouTube video link, or leave it as the empty trailer placeholder.
                </p>
              </div>
            )}

          </div>

          {/* 3 Facility Pillars Covered in this Trailer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-950 border border-teal-500/40 text-teal-400 text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cleanroom Packaging</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Particulate-controlled folding & sterile pouch packaging.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-950 border border-teal-500/40 text-teal-400 text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">ETO Sterilization</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Ethylene Oxide gas validation for absolute micro-organism elimination.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-950 border border-teal-500/40 text-teal-400 text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">I.P. Grade Testing</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Sink time, absorbency, fluorescence, and bio-compatibility testing.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
