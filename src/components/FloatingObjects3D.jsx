import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/*
 * 3D surgical-themed objects for the Yarva Surgicals landing page.
 * Each object is a procedural geometry with premium materials — 
 * no external models needed. Organic float animations via drei's <Float>.
 */

const NAVY = '#01325d';
const TEAL = '#157e93';
const TEAL_LIGHT = '#1a9bb5';

/* ─── Bandage Roll: Cylindrical roll with fabric-like material ─── */
function BandageRoll({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 + 0.5;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={1} floatingRange={[-0.12, 0.12]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <cylinderGeometry args={[0.26, 0.26, 0.35, 32]} />
        <meshStandardMaterial
          color="#f6f2ec"
          roughness={0.8}
          metalness={0.02}
          envMapIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

/* ─── Medical Cross: Extruded plus shape ─── */
function MedicalCross({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  const crossShape = useMemo(() => {
    const shape = new THREE.Shape();
    const w = 0.12; // half-width of arm
    const l = 0.35; // half-length of arm
    // Draw cross path
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
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <extrudeGeometry args={[crossShape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 4 }]} />
        <meshStandardMaterial
          color={TEAL}
          roughness={0.25}
          metalness={0.6}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

/* ─── Pill Capsule: Two hemispheres joined ─── */
function PillCapsule({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.3 + 0.5;
      groupRef.current.rotation.x += 0.004;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5} floatingRange={[-0.12, 0.12]}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Top half — navy */}
        <mesh position={[0, 0.22, 0]} castShadow>
          <capsuleGeometry args={[0.14, 0.22, 16, 24]} />
          <meshStandardMaterial
            color={NAVY}
            roughness={0.3}
            metalness={0.15}
            envMapIntensity={0.8}
          />
        </mesh>
        {/* Bottom half — white */}
        <mesh position={[0, -0.22, 0]} castShadow>
          <capsuleGeometry args={[0.14, 0.22, 16, 24]} />
          <meshStandardMaterial
            color="#f8f5f0"
            roughness={0.4}
            metalness={0.05}
            envMapIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── Cotton Ball: Slightly distorted sphere with soft material ─── */
function CottonBall({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.7) * 0.03;
      meshRef.current.scale.set(s * scale, s * scale, s * scale);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>
      <mesh ref={meshRef} position={position} castShadow>
        <icosahedronGeometry args={[0.35, 3]} />
        <meshStandardMaterial
          color="#faf8f5"
          roughness={0.95}
          metalness={0}
          envMapIntensity={0.2}
          flatShading
        />
      </mesh>
    </Float>
  );
}

/* ─── Gauze Pad: Flat rounded box with subtle grid ─── */
function GauzePad({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.2;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.3} floatingRange={[-0.18, 0.18]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <boxGeometry args={[0.6, 0.06, 0.6, 1, 1, 1]} />
        <meshStandardMaterial
          color="#f0ece7"
          roughness={0.8}
          metalness={0.02}
          envMapIntensity={0.3}
        />
      </mesh>
      {/* Grid lines on surface */}
      <mesh position={[position[0], position[1] + 0.035, position[2]]} scale={scale} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.58, 0.58]} />
        <meshStandardMaterial
          color={TEAL}
          opacity={0.06}
          transparent
          roughness={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/* ─── Surgical Ring: Metallic torus ─── */
function SurgicalRing({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.5;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.7} floatIntensity={0.9} floatingRange={[-0.1, 0.1]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <torusGeometry args={[0.2, 0.04, 20, 48]} />
        <meshStandardMaterial
          color="#d4d0cc"
          roughness={0.15}
          metalness={0.9}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

/* ─── Glass Sphere: Translucent orb with refraction ─── */
function GlassSphere({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.6} floatingRange={[-0.08, 0.08]}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshPhysicalMaterial
          color={TEAL}
          roughness={0.05}
          metalness={0.1}
          transmission={0.92}
          thickness={0.5}
          envMapIntensity={1}
          ior={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

/* ─── Scalpel Blade: Thin metallic wedge ─── */
function ScalpelBlade({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  const bladeShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.5, 0.08);
    shape.quadraticCurveTo(0.55, 0, 0.5, -0.08);
    shape.lineTo(0, 0);
    return shape;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + 0.3;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.1} floatingRange={[-0.15, 0.15]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <extrudeGeometry args={[bladeShape, { depth: 0.015, bevelEnabled: true, bevelThickness: 0.005, bevelSize: 0.003, bevelSegments: 3 }]} />
        <meshStandardMaterial
          color="#c8c4c0"
          roughness={0.08}
          metalness={0.95}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}


/* ═══════════════════════════════════════════
 *  MAIN 3D SCENE — exported for LandingHero
 * ═══════════════════════════════════════════ */
function Scene({ isMobile }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 4, -2]} intensity={0.4} color="#c8e8f0" />
      <pointLight position={[0, 3, 4]} intensity={0.3} color={TEAL_LIGHT} />

      {/* 3D Objects */}
      {isMobile ? (
        /* Mobile layout — balanced framing keeping all objects visible within the phone viewport */
        <>
          {/* Top-right next to logo (exact position loved by user) */}
          <MedicalCross position={[1.35, 2.35, -0.6]} scale={0.55} />

          {/* Top-left: soft cotton ball mirroring the cross on the left */}
          <CottonBall position={[-0.85, 2.15, -0.6]} scale={0.6} />

          {/* Mid-left: pill capsule floating near left curve of AY logo */}
          <PillCapsule position={[-0.85, 0.75, -0.3]} scale={0.62} />

          {/* Mid-right: bandage roll floating near right edge of AY logo */}
          <BandageRoll position={[0.85, 0.55, -0.4]} scale={0.6} />

          {/* Lower-right: glowing translucent teal glass orb between logo and address */}
          <GlassSphere position={[0.78, -0.35, 0.1]} scale={0.7} />

          {/* Lower-left: sterile gauze pad floating beside address / eyebrow */}
          <GauzePad position={[-0.8, -1.05, -0.5]} scale={0.55} />

          {/* Lower-right: precision scalpel blade floating beside headline */}
          <ScalpelBlade position={[0.75, -1.75, -0.7]} scale={0.75} />
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

      {/* Soft contact shadows on a ground plane */}
      <ContactShadows
        position={[0, -2.8, 0]}
        opacity={0.15}
        scale={12}
        blur={2.5}
        far={4}
        color={NAVY}
      />

      {/* Environment for reflections */}
      <Environment preset="city" environmentIntensity={0.4} />
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
        <Suspense fallback={null}>
          <Scene isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}

