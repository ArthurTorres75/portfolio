import type React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

interface RotatingPoints {
  rotation: {
    x: number;
    y: number;
  };
}

interface ParticleFieldProps {
  count: number;
  radius: number;
  speed: number;
  color: string;
  size: number;
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
}: ParticleFieldProps): React.JSX.Element {
  const pointsRef = useRef<RotatingPoints | null>(null);
  const [positions] = useState<Float32Array>(() => createPositions(count, radius));

  useFrame((state) => {
    if (!pointsRef.current) {
      return;
    }

    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * speed;
    pointsRef.current.rotation.x = Math.sin(t * 0.22) * 0.12;
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

export function CyberNebula(): React.JSX.Element {
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
          count={620}
          radius={7.8}
          speed={0.045}
          color="#22d3ee"
          size={0.03}
        />

        <ParticleField
          count={380}
          radius={6.1}
          speed={-0.028}
          color="#3b82f6"
          size={0.045}
        />

        <ParticleField
          count={220}
          radius={4.4}
          speed={0.02}
          color="#a5f3fc"
          size={0.05}
        />
      </Canvas>
    </div>
  );
}
