import React, { useState } from 'react';
import { Play, Settings, RefreshCw, Film, Video, ExternalLink } from 'lucide-react';

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
    <section id="trailer" className="py-20 px-6 lg:px-12 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#157e93]">
              [ 02 ] COMPANY TRAILER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#012e58] font-['Outfit'] tracking-tight">
              Facility &amp; Supply Video Reel
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
              Official video trailer showcasing product packaging, quality standards, and dispatch operations from Pirangut, Pune.
            </p>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsConfiguring(!isConfiguring)}
              className="px-3.5 py-2 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5 text-[#157e93]" />
              <span>{videoUrl ? 'Edit Source' : 'Set Video URL'}</span>
            </button>

            {videoUrl && (
              <button
                onClick={handleResetTrailer}
                className="px-3 py-2 rounded-lg border border-slate-300 text-slate-500 hover:text-red-600 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                title="Reset to empty trailer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Configuration Drawer */}
        {isConfiguring && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 animate-in fade-in">
            <form onSubmit={handleSetUrl} className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                required
                placeholder="Paste YouTube embed URL or direct video link (MP4)..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#157e93]"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#012e58] hover:bg-[#08213b] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Save &amp; Play
                </button>
                <button
                  type="button"
                  onClick={() => setIsConfiguring(false)}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-600 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Video Player Frame */}
        <div className="rounded-2xl overflow-hidden bg-[#07192f] border border-slate-800 shadow-xl">
          
          {/* Player Top Utility Line */}
          <div className="px-4 py-2.5 bg-[#031120] border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>REC</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-medium">YARVA_SURGICALS_FACILITY_REEL.MP4</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-teal-400">HD 1080P</span>
              <span className="text-slate-500">00:00 / 02:30</span>
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative aspect-video w-full bg-gradient-to-tr from-[#021324] via-[#071c33] to-[#04243f] flex items-center justify-center p-6 text-center text-white">
            
            {videoUrl && isPlaying ? (
              <div className="w-full h-full">
                {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                  <iframe
                    src={videoUrl.replace('watch?v=', 'embed/')}
                    title="Yarva Surgicals Trailer"
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
              <div className="space-y-6 max-w-md">
                
                {/* Play Trigger */}
                <button
                  onClick={() => {
                    if (videoUrl) {
                      setIsPlaying(true);
                    } else {
                      setIsConfiguring(true);
                    }
                  }}
                  className="w-18 h-18 rounded-full bg-[#157e93] hover:bg-[#126b7c] flex items-center justify-center mx-auto shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer group"
                  title="Play video trailer"
                >
                  <Play className="w-7 h-7 text-white ml-1 fill-white group-hover:scale-110 transition-transform" />
                </button>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-teal-400 bg-teal-950/70 border border-teal-800/60 px-3 py-1 rounded-full">
                    Empty Video Trailer Slot
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                    Company Video Trailer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Reserved for Yarva Surgicals production walkthrough and warehouse dispatch demonstration.
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => setIsConfiguring(true)}
                    className="text-xs text-teal-300 hover:text-white underline underline-offset-4 cursor-pointer font-medium"
                  >
                    Click to attach YouTube or MP4 link →
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Video Timeline Chapters Footer */}
          <div className="px-6 py-4 bg-[#031120] border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
            <div>
              <span className="text-[10px] font-mono text-teal-400 block font-bold">SEGMENT 01</span>
              <span className="text-slate-200 font-medium">Cleanroom Packaging</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-teal-400 block font-bold">SEGMENT 02</span>
              <span className="text-slate-200 font-medium">I.P. Standards &amp; Sterilization</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-teal-400 block font-bold">SEGMENT 03</span>
              <span className="text-slate-200 font-medium">Pirangut Warehouse Dispatch</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
