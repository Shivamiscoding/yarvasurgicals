import React, { useState } from 'react';
import { Play, Film, Clock, Settings, Check } from 'lucide-react';

export default function EmptyTrailer() {
  const [videoUrl, setVideoUrl] = useState('');
  const [showConfig, setShowConfig] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setVideoUrl(inputUrl);
    setShowConfig(false);
  };

  return (
    <section id="trailer" className="py-20 sm:py-28 bg-[#06172e] text-white border-b border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[#008b99] text-xs font-bold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5" />
            <span>Manufacturing & Facility Tour</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Yarva Surgicals Facility Trailer
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive look at our cleanroom packaging lines, ETO sterilization chambers, and physical testing protocols.
          </p>
        </div>

        {/* Widescreen Cinematic Player Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
            
            {/* Top Minimal Bar */}
            <div className="px-5 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                <span className="font-mono text-[11px] text-slate-300">
                  yarva-cleanroom-trailer.mp4
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-mono text-slate-400">
                  4K UHD • 02:40 MIN
                </span>
                <button
                  onClick={() => setShowConfig(!showConfig)}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Configure video link"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Cinematic Canvas (Empty Trailer) */}
            <div className="relative aspect-video w-full bg-gradient-to-b from-[#0b2545] to-[#06172e] flex flex-col items-center justify-center p-6 text-center">
              
              {videoUrl ? (
                <div className="w-full h-full">
                  {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                    <iframe
                      src={videoUrl.replace('watch?v=', 'embed/')}
                      title="Yarva Surgicals Video"
                      className="w-full h-full rounded"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
                  )}
                </div>
              ) : (
                <div className="space-y-6 max-w-md">
                  
                  {/* Minimal Play Icon */}
                  <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-[#008b99]/30 animate-pulse"></div>
                    <button
                      onClick={() => setShowConfig(true)}
                      className="w-16 h-16 rounded-full bg-[#008b99] hover:bg-[#00a8b5] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg"
                      title="Play official trailer"
                    >
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </button>
                  </div>

                  {/* Empty Trailer Label */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-[#008b99] font-bold">
                      Trailer Placeholder
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                      Official Facility Video Coming Soon
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      This space is reserved for Yarva Surgicals' cleanroom walkthrough, ETO sterilization chamber demonstration, and Pirangut dispatch operations.
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => setShowConfig(true)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-200 transition-colors border border-white/10"
                    >
                      <span>Embed Video URL (YouTube / MP4)</span>
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* Embed Config Bar */}
            {showConfig && (
              <form onSubmit={handleSave} className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
                <input
                  type="url"
                  placeholder="Paste YouTube or MP4 video link..."
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#008b99]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#008b99] text-white text-xs font-bold rounded-lg hover:bg-[#00a8b5] transition-colors"
                >
                  Save URL
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfig(false)}
                  className="px-3 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
              </form>
            )}

          </div>

          {/* Under Trailer: Three Manufacturing Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs text-slate-400">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-white uppercase tracking-wider block mb-1">
                1. Cleanroom Packing
              </span>
              <span>Sterile peel-open pouches sealed under dust-free particle limits.</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-white uppercase tracking-wider block mb-1">
                2. Gas Sterilization
              </span>
              <span>Validated Ethylene Oxide (ETO) cycles with dual chemical strips.</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-white uppercase tracking-wider block mb-1">
                3. I.P. Monograph Testing
              </span>
              <span>Sink time, absorbency, fluorescence, and bio-burden tests.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
