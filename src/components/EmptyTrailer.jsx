import React, { useState } from 'react';
import { Play, Settings, RefreshCw, Check, Link as LinkIcon } from 'lucide-react';

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
    <section id="trailer" className="py-20 px-6 lg:px-8 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#157e93]">
              Video Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01325d] font-['Outfit']">
              Company Trailer
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Surgical facility walkthrough & product demonstration
            </p>
          </div>

          {/* Functional Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsConfiguring(!isConfiguring)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-[#01325d] text-xs font-semibold transition-colors flex items-center gap-1.5 bg-slate-50"
            >
              <Settings className="w-3.5 h-3.5 text-[#157e93]" />
              <span>{videoUrl ? 'Edit URL' : 'Set Video URL'}</span>
            </button>

            {videoUrl && (
              <button
                onClick={handleResetTrailer}
                className="px-3 py-2 rounded-xl border border-slate-200 text-slate-500 hover:text-red-600 text-xs font-semibold transition-colors flex items-center gap-1"
                title="Reset to empty trailer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Configuration Bar */}
        {isConfiguring && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 animate-in fade-in">
            <form onSubmit={handleSetUrl} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  required
                  placeholder="Paste YouTube embed URL or MP4 link..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#157e93]"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#01325d] text-white text-xs font-bold hover:bg-[#032f59] transition-colors"
                >
                  Save Video
                </button>
                <button
                  type="button"
                  onClick={() => setIsConfiguring(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 text-xs font-semibold hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Empty Trailer Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-[#01325d] shadow-2xl border-2 border-slate-200 aspect-video flex flex-col items-center justify-center p-6 text-center text-white">
          
          {videoUrl && isPlaying ? (
            <div className="w-full h-full">
              {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                <iframe
                  src={videoUrl.replace('watch?v=', 'embed/')}
                  title="Yarva Surgicals Trailer"
                  className="w-full h-full rounded-2xl"
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
            <div className="flex flex-col items-center justify-center space-y-5 max-w-md">
              {/* Play Button Icon */}
              <button
                onClick={() => {
                  if (videoUrl) {
                    setIsPlaying(true);
                  } else {
                    setIsConfiguring(true);
                  }
                }}
                className="w-20 h-20 rounded-full bg-[#157e93] hover:bg-[#126b7c] flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110 active:scale-95"
                title="Play Trailer"
              >
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </button>

              {/* Clean Empty Trailer Label */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#157e93] bg-white/10 px-3 py-1 rounded-full">
                  Empty Trailer Placeholder
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
                  Trailer Player
                </h3>
              </div>

              {/* Trigger URL Config */}
              <button
                onClick={() => setIsConfiguring(true)}
                className="text-xs text-slate-300 hover:text-white underline underline-offset-4"
              >
                Click to attach video URL
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
