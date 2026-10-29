import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function EmptyTrailer() {
  const [videoUrl, setVideoUrl] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [isConfiguring, setIsConfiguring] = useState(false);

  const handleSetUrl = (e) => {
    e.preventDefault();
    setVideoUrl(customInput);
    setIsConfiguring(false);
  };

  return (
    <section id="trailer" className="py-20 px-6 lg:px-8 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01325d] font-['Outfit']">
            Trailer
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Company Video & Product Trailer
          </p>
        </div>

        {/* Empty Trailer Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-[#01325d] shadow-2xl border border-slate-300 aspect-video flex flex-col items-center justify-center p-6 text-center text-white">
          
          {videoUrl ? (
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
              <div
                onClick={() => setIsConfiguring(true)}
                className="w-20 h-20 rounded-full bg-[#157e93] hover:bg-[#126b7c] flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110 active:scale-95"
                title="Play Trailer"
              >
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </div>

              {/* Clean Empty Trailer Label */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#157e93] bg-white/10 px-3 py-1 rounded-full">
                  Empty Trailer
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
                  Trailer Placeholder
                </h3>
              </div>

              {/* Add video option */}
              <button
                onClick={() => setIsConfiguring(!isConfiguring)}
                className="text-xs text-slate-300 hover:text-white underline underline-offset-4"
              >
                {isConfiguring ? 'Close' : 'Add Video URL'}
              </button>

              {isConfiguring && (
                <form onSubmit={handleSetUrl} className="flex gap-2 w-full pt-2">
                  <input
                    type="url"
                    placeholder="Enter YouTube or MP4 link..."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#157e93] text-white text-xs font-bold"
                  >
                    Save
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
