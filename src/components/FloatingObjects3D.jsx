import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/*
 * 3D surgical-themed objects for the Yarva Surgicals landing page.
 * Procedural geometries with zero network dependencies (0ms instant mount).
 */

const NAVY = '#01325d';
const TEAL = '#157e93';
const TEAL_LIGHT = '#1a9bb5';

/* ─── Bandage Roll: Cylindrical roll with inner core ─── */
function BandageRoll({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 + 0.5;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={1} floatingRange={[-0.12, 0.12]}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Outer cotton roll */}
        <mesh castShadow>
          <cylinderGeometry args={[0.28, 0.28, 0.38, 32]} />
          <meshStandardMaterial
            color="#faf6f0"
            roughness={0.8}
            metalness={0.02}
          />
        </mesh>
        {/* Inner hollow core */}
        <mesh position={[0, 0.001, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.385, 24]} />
          <meshStandardMaterial
            color="#d8cebf"
            roughness={0.9}
            metalness={0}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── Medical Cross: Extruded plus shape ─── */
function MedicalCross({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  const crossShape = useMemo(() => {
    const shape = new THREE.Shape();
    const w = 0.13;
    const l = 0.38;
    shape.moveTo(-w, l);
    shape.lineTo(w, l);
    shape.lineTo(w, w);
    shape.lineTo(l, w);
    shape.lineTo(l, -w);
    shape.lineTo(w, -w);
    shape.lineTo(w, -l);
    shape.lineTo(-w, -l);
    shape.lineTo(-w, -w);
    shape.lineTo(-l, -w);
    shape.lineTo(-l, w);
    shape.lineTo(-w, w);
    shape.closePath();
    return shape;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.12 + 0.05;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.18, 0.18]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <extrudeGeometry args={[crossShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.035, bevelSize: 0.025, bevelSegments: 4 }]} />
        <meshStandardMaterial
          color={TEAL}
          roughness={0.22}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
}

/* ─── Pill Capsule: Navy and white polished capsule ─── */
function PillCapsule({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.3 + 0.6;
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.35} floatIntensity={1.3} floatingRange={[-0.12, 0.12]}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Top half — navy */}
        <mesh position={[0, 0.22, 0]} castShadow>
          <capsuleGeometry args={[0.15, 0.24, 16, 24]} />
          <meshStandardMaterial
            color={NAVY}
            roughness={0.2}
            metalness={0.15}
          />
        </mesh>
        {/* Bottom half — white */}
        <mesh position={[0, -0.22, 0]} castShadow>
          <capsuleGeometry args={[0.15, 0.24, 16, 24]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.25}
            metalness={0.05}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── Cotton Ball: Slightly distorted soft icosahedron ─── */
function CottonBall({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.7) * 0.03;
      meshRef.current.scale.set(s * scale, s * scale, s * scale);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>
      <mesh ref={meshRef} position={position} castShadow>
        <icosahedronGeometry args={[0.36, 3]} />
        <meshStandardMaterial
          color="#fdfbf7"
          roughness={0.92}
          metalness={0}
          flatShading
        />
      </mesh>
    </Float>
  );
}

/* ─── Gauze Pad: Flat rounded surgical swab with subtle grid ─── */
function GauzePad({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.2 + 0.3;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2} floatingRange={[-0.15, 0.15]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <boxGeometry args={[0.62, 0.07, 0.62, 1, 1, 1]} />
        <meshStandardMaterial
          color="#f4f0ea"
          roughness={0.75}
          metalness={0.02}
        />
      </mesh>
      {/* Grid lines on surface */}
      <mesh position={[position[0], position[1] + 0.04, position[2]]} scale={scale} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshStandardMaterial
          color={TEAL}
          opacity={0.08}
          transparent
          roughness={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/* ─── Glass Sphere: Translucent glowing teal orb ─── */
function GlassSphere({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.7} floatingRange={[-0.08, 0.08]}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color={TEAL}
          roughness={0.12}
          metalness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

/* ─── Scalpel Blade: Precision surgical blade ─── */
function ScalpelBlade({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  const bladeShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.52, 0.09);
    shape.quadraticCurveTo(0.58, 0, 0.52, -0.09);
    shape.lineTo(0, 0);
    return shape;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + 0.3;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.1} floatingRange={[-0.15, 0.15]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <extrudeGeometry args={[bladeShape, { depth: 0.016, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.004, bevelSegments: 3 }]} />
        <meshStandardMaterial
          color="#d2ceca"
          roughness={0.08}
          metalness={0.92}
        />
      </mesh>
    </Float>
  );
}

/* ═══════════════════════════════════════════
 *  MAIN 3D SCENE — Instant procedural lighting
 * ═══════════════════════════════════════════ */
function Scene({ isMobile }) {
  return (
    <>
      {/* ── Studio Lights: Instant render, 0ms network delay ── */}
      <ambientLight intensity={0.7} />
      <hemisphereLight skyColor="#edf6f9" groundColor="#01325d" intensity={0.55} />
      <directionalLight
        position={[6, 9, 6]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 5, -2]} intensity={0.65} color="#c8e8f0" />
      <directionalLight position={[0, -3, 3]} intensity={0.35} color={TEAL_LIGHT} />
      <pointLight position={[0, 2, 4]} intensity={0.4} color={TEAL_LIGHT} />

      {/* ── 3D Objects ── */}
      {isMobile ? (
        /* Mobile layout — balanced framing keeping all objects visible within the phone viewport */
        <>
          {/* Top-right next to logo (exact position loved by user) */}
          <MedicalCross position={[1.2, 2.3, -0.5]} scale={0.65} />

          {/* Top-left: pill capsule balancing the cross at top-left of logo */}
          <PillCapsule position={[-1.15, 2.1, -0.4]} scale={0.75} />

          {/* Mid-right: bandage roll floating next to right side of AY logo */}
          <BandageRoll position={[1.15, 0.45, -0.4]} scale={0.7} />

          {/* Mid-left: soft cotton ball floating next to left side of AY logo */}
          <CottonBall position={[-1.15, 0.45, -0.5]} scale={0.75} />

          {/* Lower-right: glowing teal glass orb between logo and address */}
          <GlassSphere position={[1.05, -0.65, -0.1]} scale={0.75} />

          {/* Lower-left: sterile gauze pad beside address */}
          <GauzePad position={[-1.0, -0.85, -0.5]} scale={0.65} />

          {/* Lower-right: precision metallic scalpel blade beside headline */}
          <ScalpelBlade position={[0.9, -1.8, -0.6]} scale={0.8} />
        </>
      ) : (
        /* Desktop layout — positioned across the right-half canvas */
        <>
          {/* Top area */}
          <BandageRoll position={[1.2, 1.8, -1]} scale={0.85} />
          <MedicalCross position={[-0.2, 2.2, -0.5]} scale={0.65} />

          {/* Mid */}
          <CottonBall position={[2.0, 0.2, -0.8]} scale={0.75} />
          <GlassSphere position={[0.8, 0.6, 0.3]} scale={1.1} />

          {/* Lower area */}
          <PillCapsule position={[1.8, -1.2, -0.3]} scale={0.8} />
          <GauzePad position={[0.4, -1.6, -1]} scale={0.7} />

          {/* Accents */}
          <GlassSphere position={[2.4, -0.4, -1.2]} scale={0.65} />
          <ScalpelBlade position={[1.0, -0.2, -1.5]} scale={0.9} />
        </>
      )}

      {/* Soft contact shadows */}
      <ContactShadows
        position={[0, -2.8, 0]}
        opacity={0.15}
        scale={12}
        blur={2.5}
        far={4}
        color={NAVY}
      />
    </>
  );
}

/* ─── Canvas Wrapper ─── */
export default function FloatingObjects3D() {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full lg:left-auto lg:right-0 lg:w-[58%] pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, isMobile ? 6.5 : 6], fov: isMobile ? 50 : 45, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}

