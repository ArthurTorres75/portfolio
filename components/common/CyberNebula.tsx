import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

interface RotatingPoints {
  rotation: {
    x: number;
    y: number;
  };
}

interface CyberNebulaProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

interface ParticleFieldProps {
  count: number;
  radius: number;
  speed: number;
  color: string;
  size: number;
  pointerTargetRef: React.RefObject<{ x: number; y: number }>;
  interactionStrength: number;
  autoMotion: boolean;
}

function createPositions(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const i3 = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const distance = Math.random() * radius;

    positions[i3] = distance * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = distance * Math.cos(phi) * 0.55;
    positions[i3 + 2] = distance * Math.sin(phi) * Math.sin(theta);
  }

  return positions;
}

function ParticleField({
  count,
  radius,
  speed,
  color,
  size,
  pointerTargetRef,
  interactionStrength,
  autoMotion,
}: ParticleFieldProps): React.JSX.Element {
  const pointsRef = useRef<RotatingPoints | null>(null);
  const [positions] = useState<Float32Array>(() => createPositions(count, radius));
  const pointerInfluenceRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!pointsRef.current) {
      return;
    }

    const t = state.clock.getElapsedTime();
    if (autoMotion) {
      pointerTargetRef.current.x = Math.sin(t * 0.42) * 0.62;
      pointerTargetRef.current.y = Math.cos(t * 0.34) * 0.48;
    }

    pointerInfluenceRef.current.x += (pointerTargetRef.current.x - pointerInfluenceRef.current.x) * 0.07;
    pointerInfluenceRef.current.y += (pointerTargetRef.current.y - pointerInfluenceRef.current.y) * 0.07;

    pointsRef.current.rotation.y =
      t * speed + pointerInfluenceRef.current.x * interactionStrength;
    pointsRef.current.rotation.x =
      Math.sin(t * 0.22) * 0.12 - pointerInfluenceRef.current.y * interactionStrength * 0.65;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

export function CyberNebula({ containerRef }: CyberNebulaProps): React.JSX.Element | null {
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const [isTouchLikeDevice, setIsTouchLikeDevice] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateDeviceMode = (): void => {
      setIsTouchLikeDevice(mediaQuery.matches);
    };

    updateDeviceMode();
    mediaQuery.addEventListener("change", updateDeviceMode);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceMode);
    };
  }, []);

  useEffect(() => {
    if (isTouchLikeDevice) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const handleMouseMove = (event: MouseEvent): void => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      pointerTargetRef.current.x = x;
      pointerTargetRef.current.y = y;
    };

    const handleMouseLeave = (): void => {
      pointerTargetRef.current.x = 0;
      pointerTargetRef.current.y = 0;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, isTouchLikeDevice]);

  if (isTouchLikeDevice) return null;

  return (
    <div className="hero-nebula" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 8], fov: 52 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#01030a", 7, 22]} />

        <ambientLight intensity={0.3} />

        <ParticleField
          count={420}
          radius={7.8}
          speed={0.045}
          color="#22d3ee"
          size={0.03}
          pointerTargetRef={pointerTargetRef}
          interactionStrength={0.12}
          autoMotion={false}
        />

        <ParticleField
          count={260}
          radius={6.1}
          speed={-0.028}
          color="#3b82f6"
          size={0.045}
          pointerTargetRef={pointerTargetRef}
          interactionStrength={0.09}
          autoMotion={false}
        />

        <ParticleField
          count={160}
          radius={4.4}
          speed={0.02}
          color="#a5f3fc"
          size={0.05}
          pointerTargetRef={pointerTargetRef}
          interactionStrength={0.07}
          autoMotion={false}
        />
      </Canvas>
    </div>
  );
}
