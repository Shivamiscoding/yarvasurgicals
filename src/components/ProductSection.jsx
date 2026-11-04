import React, { useState, useRef, useCallback, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Sound — always on, no toggle ─── */
class SoundManager {
  constructor() {
    this.ctx = null;
    this.lastPlayTime = 0;
  }
  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx?.state === 'suspended') this.ctx.resume();
  }
  playTick() {
    this.init();
    if (!this.ctx) return;
    const now = Date.now();
    if (now - this.lastPlayTime < 65) return;
    this.lastPlayTime = now;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(640, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.022);
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.026);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.026);
    } catch (_) {}
  }
}
const soundManager = new SoundManager();

/* ─── Product Detail Modal ─── */
function ProductDetailModal({ product, onClose, onOpenEnquiry }) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [activeVariant, setActiveVariant] = useState(
    product.variantDetails ? product.variantDetails[0].name : null
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 bg-white rounded-[28px] overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 28, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 28, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 aspect-[16/9] flex items-center justify-center p-8">
          <img
            key={activeImage}
            src={activeImage}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-all duration-300"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Variant pills switch on image */}
          {product.variantDetails && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-1.5 py-1 rounded-full shadow-md border border-slate-200/80 flex items-center gap-1">
              {product.variantDetails.map((v) => (
                <button
                  key={v.name}
                  onClick={() => {
                    setActiveImage(v.image);
                    setActiveVariant(v.name);
                  }}
                  className={`text-xs font-bold px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                    activeVariant === v.name
                      ? 'bg-[#01325d] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-7 sm:p-9 space-y-7">
          {/* Name */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#01325d] font-['Outfit'] leading-tight mb-1">
              {product.name}
            </h3>
          </div>

          {/* ─ Category ─ */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
              Category
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#01325d] bg-[#edf6f8] px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#157e93]" />
              {product.category}
            </span>
          </div>

          {/* ─ Variants (if any) ─ */}
          {product.variants && (
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
                Variants
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant, i) =>
                  product.variantDetails ? (
                    <button
                      key={i}
                      onClick={() => {
                        const vd = product.variantDetails.find(
                          (d) => d.name.toLowerCase() === variant.toLowerCase()
                        );
                        if (vd) {
                          setActiveImage(vd.image);
                          setActiveVariant(vd.name);
                        }
                      }}
                      className={`inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                        activeVariant === variant
                          ? 'bg-[#01325d] text-white border-[#01325d]'
                          : 'bg-slate-50 text-[#01325d] border-[#01325d]/20 hover:border-[#01325d]/50'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          activeVariant === variant ? 'bg-teal-300' : 'bg-[#157e93]'
                        }`}
                      />
                      {variant}
                    </button>
                  ) : (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-50 text-[#01325d] border border-[#01325d]/20"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#157e93]" />
                      {variant}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {/* ─ Description ─ */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
              Description
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* ─ Common Applications ─ */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
              Common Applications
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {product.applications.map((app, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#157e93] shrink-0" />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          {/* ─ Sizes / Pack Sizes ─ */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
              {product.sizesLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, i) => (
                <span
                  key={i}
                  className="text-xs font-bold text-[#01325d] border border-[#01325d]/20 bg-slate-50 px-3.5 py-1.5 rounded-full"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* ─ Enquiry Action ─ */}
          {onOpenEnquiry && (
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry(product);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#01325d] text-white text-xs font-semibold hover:bg-[#022442] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Quotation for {product.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Gallery ─── */
export default function ProductSection({ onOpenEnquiryModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProduct, setModalProduct] = useState(null);
  const count = PRODUCTS.length;
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const triggerSound = useCallback(() => {
    soundManager.init();
    soundManager.playTick();
  }, []);

  const goTo = useCallback(
    (newIndex) => {
      const target = (newIndex + count) % count;
      setActiveIndex(target);
      triggerSound();
    },
    [count, triggerSound]
  );

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1);
      if (e.key === 'ArrowRight') goTo(activeIndex + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, goTo]);

  // Drag / swipe
  const handleDragStart = (e) => {
    soundManager.init();
    isDragging.current = true;
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  };
  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? activeIndex + 1 : activeIndex - 1);
  };

  // Wheel / trackpad
  const lastWheelTime = useRef(0);
  const handleWheel = (e) => {
    soundManager.init();
    const now = Date.now();
    if (now - lastWheelTime.current < 300) return;
    if (Math.abs(e.deltaX) > 25 || Math.abs(e.deltaY) > 40) {
      lastWheelTime.current = now;
      goTo(activeIndex + ((e.deltaX || e.deltaY) > 0 ? 1 : -1));
    }
  };

  // Offset wrapping: always show cards in correct positions
  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  return (
    <section
      id="products"
      onWheel={handleWheel}
      className="relative pt-12 pb-10 bg-white scroll-mt-20 overflow-hidden select-none"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 48%, rgba(21,126,147,0.04) 0%, transparent 80%)',
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#157e93]">
            <span className="w-6 h-px bg-[#157e93]" />
            Product Range
          </span>
          <h2 className="font-['Outfit'] font-extrabold text-[#01325d] tracking-tight text-3xl sm:text-4xl">
            Our Catalogue
          </h2>
        </div>
      </div>

      {/* 3D Stage */}
      <div
        className="relative w-full h-[470px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: 1200 }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {PRODUCTS.map((product, idx) => {
          const offset = getOffset(idx);
          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          const x = offset * 320;
          const z = isCenter ? 30 : -80;
          const rotateY = offset * -16;
          const scale = isCenter ? 1.05 : absOffset === 1 ? 0.88 : 0.74;
          const opacity = isCenter ? 1 : absOffset === 1 ? 0.58 : absOffset === 2 ? 0.3 : 0;

          return (
            <motion.div
              key={product.id}
              className="absolute w-[280px] sm:w-[305px] rounded-[26px] overflow-hidden bg-white flex flex-col"
              animate={{
                x,
                z,
                rotateY,
                scale,
                opacity,
                y: isCenter ? [0, -6, 0] : 0,
              }}
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 32 },
                z: { type: 'spring', stiffness: 300, damping: 32 },
                rotateY: { type: 'spring', stiffness: 300, damping: 32 },
                scale: { type: 'spring', stiffness: 300, damping: 32 },
                opacity: { duration: 0.22 },
                y: isCenter
                  ? { repeat: Infinity, duration: 3.6, ease: 'easeInOut' }
                  : { duration: 0.3 },
              }}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: isCenter
                  ? '0 0 0 2.5px #01325d, 0 24px 64px rgba(1,50,93,0.20)'
                  : '0 6px 22px rgba(1,50,93,0.07)',
                zIndex: 10 - absOffset,
                cursor: 'pointer',
              }}
              onClick={() => {
                if (isCenter) setModalProduct(product);
                else goTo(idx);
              }}
            >
              {/* Image area */}
              <div
                className="relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100/80 border-b border-slate-100"
                style={{ height: 220, padding: '1.5rem' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain pointer-events-none"
                  draggable={false}
                />
                {isCenter && (
                  <span
                    className="absolute bottom-3 right-3 text-[9px] font-bold uppercase tracking-wider"
                    style={{
                      color: '#157e93',
                      background: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(21,126,147,0.2)',
                      padding: '3px 9px',
                      borderRadius: 999,
                    }}
                  >
                    Tap to expand
                  </span>
                )}
              </div>

              {/* Card body — name + description */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-['Outfit'] font-bold text-[#01325d] text-base leading-snug">
                    {product.name}
                  </h3>
                  {product.variantBadge && (
                    <span className="shrink-0 text-[9px] font-bold text-[#157e93] bg-[#edf6f8] px-2 py-0.5 rounded-full border border-[#157e93]/20">
                      {product.variantBadge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-auto pt-3 flex items-center gap-1 text-[11px] font-bold text-[#157e93]"
                  >
                    View details <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2.5 mt-2">
        <div className="flex items-center gap-5">
          <button
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous product"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-[#01325d] hover:border-[#01325d]/40 hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2 items-center">
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.name}`}
                style={{ transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
                className={`rounded-full cursor-pointer ${
                  i === activeIndex
                    ? 'w-7 h-2 bg-[#01325d]'
                    : 'w-2 h-2 bg-slate-200 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next product"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-[#01325d] hover:border-[#01325d]/40 hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
          {activeIndex + 1} of {count} &nbsp;·&nbsp; Drag or use arrows
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProduct && (
          <ProductDetailModal
            product={modalProduct}
            onClose={() => setModalProduct(null)}
            onOpenEnquiry={onOpenEnquiryModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
