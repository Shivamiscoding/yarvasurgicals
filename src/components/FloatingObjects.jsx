import React from 'react';

/*
 * Floating surgical-themed CSS objects that animate alongside the hero.
 * Each shape is a pure CSS/SVG illustration — no external images.
 * Organic staggered timings to feel hand-crafted.
 */

/* --- Bandage Roll: rounded rectangle with stripe lines --- */
function BandageRoll({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-16 h-10 rounded-[10px] bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-[0_8px_30px_rgba(1,50,93,0.12)] border border-slate-200/60 overflow-hidden">
        {/* Fabric weave lines */}
        <div className="absolute inset-0 flex flex-col justify-evenly px-1.5">
          <div className="h-[1px] bg-[#157e93]/15 rounded-full" />
          <div className="h-[1px] bg-[#157e93]/10 rounded-full" />
          <div className="h-[1px] bg-[#157e93]/15 rounded-full" />
          <div className="h-[1px] bg-[#157e93]/10 rounded-full" />
          <div className="h-[1px] bg-[#157e93]/15 rounded-full" />
        </div>
        {/* Roll edge highlight */}
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-slate-200/50 to-transparent rounded-r-[10px]" />
      </div>
      {/* Subtle shadow underneath */}
      <div className="absolute -bottom-2 left-2 right-2 h-3 bg-slate-300/20 blur-md rounded-full" />
    </div>
  );
}

/* --- Cotton Ball: soft circular organic shape --- */
function CottonBall({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white via-slate-50 to-stone-100 shadow-[0_6px_24px_rgba(1,50,93,0.10)] border border-slate-200/40">
        {/* Fibrous texture dots */}
        <div className="absolute inset-2 flex flex-wrap gap-1 items-center justify-center opacity-30">
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="w-0.5 h-0.5 rounded-full bg-slate-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <div className="w-0.5 h-0.5 rounded-full bg-slate-300" />
          <div className="w-1 h-1 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

/* --- Medical Cross: the universal medical + symbol --- */
function MedicalCross({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-10 h-10 relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-full bg-gradient-to-b from-[#157e93] to-[#0e6577] rounded-[3px] shadow-[0_4px_16px_rgba(21,126,147,0.25)]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-3 w-full bg-gradient-to-r from-[#157e93] to-[#0e6577] rounded-[3px] shadow-[0_4px_16px_rgba(21,126,147,0.25)]" />
      </div>
    </div>
  );
}

/* --- Gauze Pad: square with woven grid pattern --- */
function GauzePad({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-white to-slate-50 shadow-[0_6px_20px_rgba(1,50,93,0.08)] border border-slate-200/50 overflow-hidden">
        {/* Grid pattern */}
        <svg className="w-full h-full opacity-20" viewBox="0 0 48 48">
          {[6, 12, 18, 24, 30, 36, 42].map((pos) => (
            <React.Fragment key={pos}>
              <line x1={pos} y1="0" x2={pos} y2="48" stroke="#157e93" strokeWidth="0.5" />
              <line x1="0" y1={pos} x2="48" y2={pos} stroke="#157e93" strokeWidth="0.5" />
            </React.Fragment>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* --- Pill Capsule: elongated rounded shape --- */
function PillCapsule({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-6 h-14 rounded-full overflow-hidden shadow-[0_6px_20px_rgba(1,50,93,0.12)] border border-slate-200/40">
        <div className="w-full h-1/2 bg-gradient-to-b from-[#01325d] to-[#024a8a]" />
        <div className="w-full h-1/2 bg-gradient-to-b from-white to-slate-100" />
      </div>
    </div>
  );
}

/* --- Heartbeat Line: SVG pulse line --- */
function HeartbeatLine({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="opacity-30">
        <path
          d="M0 20 L20 20 L30 8 L40 32 L50 12 L60 28 L70 20 L120 20"
          stroke="#157e93"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="200"
          style={{ animation: 'heartbeat-line 3s linear infinite' }}
        />
      </svg>
    </div>
  );
}

/* --- Small Ring: metallic surgical ring --- */
function SurgicalRing({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-8 h-8 rounded-full border-[3px] border-slate-300 shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-gradient-to-br from-slate-100 to-white">
        <div className="absolute inset-1 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

/* --- Main Export: all floating objects positioned absolutely --- */
export default function FloatingObjects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top-right cluster */}
      <div className="absolute top-[12%] right-[8%] animate-float-gentle" style={{ animationDelay: '0s' }}>
        <BandageRoll />
      </div>

      <div className="absolute top-[8%] right-[22%] animate-float-slow" style={{ animationDelay: '1.2s' }}>
        <MedicalCross className="opacity-70" />
      </div>

      {/* Mid-right */}
      <div className="absolute top-[45%] right-[5%] animate-float-drift" style={{ animationDelay: '0.8s' }}>
        <CottonBall />
      </div>

      <div className="absolute top-[55%] right-[18%] animate-float-orbit" style={{ animationDelay: '2s' }}>
        <GauzePad className="opacity-60" />
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-[18%] right-[12%] animate-float-slow" style={{ animationDelay: '0.5s' }}>
        <PillCapsule />
      </div>

      <div className="absolute bottom-[25%] right-[28%] animate-float-gentle" style={{ animationDelay: '1.8s' }}>
        <SurgicalRing className="opacity-50" />
      </div>

      {/* Left side scattered (fewer, more subtle) */}
      <div className="absolute top-[22%] left-[3%] animate-float-orbit opacity-40 hidden lg:block" style={{ animationDelay: '3s' }}>
        <SurgicalRing />
      </div>

      <div className="absolute bottom-[12%] left-[8%] animate-float-drift opacity-30 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <CottonBall />
      </div>

      {/* Heartbeat line in the mid-area */}
      <div className="absolute top-[35%] right-[35%] animate-pulse-gentle hidden lg:block" style={{ animationDelay: '0.3s' }}>
        <HeartbeatLine />
      </div>
    </div>
  );
}

