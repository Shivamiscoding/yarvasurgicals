import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function InteractiveLogo({ loaded = true }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Mouse coordinate motion values (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 18, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Tilt rotations
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  // Magnetic displacement
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  // Dynamic light sheen position
  const sheenX = useTransform(smoothX, [-0.5, 0.5], [15, 85]);
  const sheenY = useTransform(smoothY, [-0.5, 0.5], [15, 85]);

  // Outer ring parallax
  const ringRotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const ringRotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev.slice(-3), { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative w-full max-w-[320px] sm:max-w-[360px] cursor-pointer select-none group perspective-[1000px]"
      style={{ perspective: 1000 }}
    >
      {/* ── Background concentric halo rings with parallax ── */}
      <motion.div
        className="absolute -inset-10 pointer-events-none flex items-center justify-center"
        style={{
          rotateX: ringRotateX,
          rotateY: ringRotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          className="w-[calc(100%+5rem)] h-[calc(100%+5rem)]"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          {/* Outer dotted rotating ring */}
          <motion.circle
            cx="200"
            cy="200"
            r="175"
            stroke="#157e93"
            strokeWidth="0.8"
            strokeDasharray="4 14"
            opacity={isHovered ? 0.35 : 0.18}
            animate={{ rotate: 360 }}
            transition={{
              duration: isHovered ? 25 : 55,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ transformOrigin: '200px 200px' }}
          />

          {/* Inner counter-rotating ring */}
          <motion.circle
            cx="200"
            cy="200"
            r="142"
            stroke="#01325d"
            strokeWidth="0.6"
            strokeDasharray="2 16"
            opacity={isHovered ? 0.25 : 0.12}
            animate={{ rotate: -360 }}
            transition={{
              duration: isHovered ? 30 : 65,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ transformOrigin: '200px 200px' }}
          />

          {/* Pulse orbit ring active on hover */}
          {isHovered && (
            <motion.circle
              cx="200"
              cy="200"
              r="115"
              stroke="#157e93"
              strokeWidth="1.2"
              strokeDasharray="6 20"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '200px 200px' }}
            />
          )}
        </svg>
      </motion.div>

      {/* ── Soft radial ambient light matching page ── */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500"
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.85 : 0.45,
        }}
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(21,126,147,0.12) 0%, rgba(255,255,255,0.6) 45%, transparent 75%)',
        }}
      />

      {/* ── Interactive 3D Tilt Card Container ── */}
      <motion.div
        className="relative w-full aspect-square flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      >
        {/* Dynamic Light Sheen / Glare layer following cursor */}
        <motion.div
          className="absolute inset-2 rounded-full pointer-events-none z-20 mix-blend-overlay opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            background: useTransform(
              [sheenX, sheenY],
              ([x, y]) =>
                `radial-gradient(circle 120px at ${x}% ${y}%, rgba(255,255,255,0.7) 0%, transparent 80%)`
            ),
          }}
        />

        {/* The Transparent Logo Image with 3D Depth */}
        <motion.img
          src="/images/yarva-logo.png"
          alt="Yarva Surgicals"
          className="relative w-full h-auto object-contain select-none z-10"
          style={{
            transform: 'translateZ(24px)',
            filter: isHovered
              ? 'drop-shadow(0 16px 36px rgba(1,50,93,0.18)) drop-shadow(0 0 12px rgba(21,126,147,0.22))'
              : 'drop-shadow(0 8px 24px rgba(1,50,93,0.10))',
            transition: 'filter 0.3s ease',
          }}
          initial={{ scale: 0.93, opacity: 0, y: 12 }}
          animate={loaded ? { scale: 1, opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Interactive Click Ripple Waves */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none border-2 border-[#157e93] z-30"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ width: 0, height: 0, opacity: 0.7 }}
            animate={{ width: 280, height: 280, opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          />
        ))}

        {/* Interactive Floating Pulse Dots on Emblem Cross */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#157e93] pointer-events-none z-20"
          style={{ top: '38%', left: '42%', transform: 'translateZ(35px)' }}
          animate={{
            scale: isHovered ? [1, 1.8, 1] : [1, 1.3, 1],
            opacity: isHovered ? [0.4, 0.9, 0.4] : [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </div>
  );
}

