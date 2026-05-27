import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DoubleSide, Vector2 } from "three";
import type { Mesh, ShaderMaterial } from "three";

interface WaterPlaneProps {
  isVisible: boolean;
}

interface WaterSurface3DProps {
  isVisible?: boolean;
}

function WaterPlane({ isVisible }: WaterPlaneProps): React.JSX.Element {
  const [isTouchLikeDevice, setIsTouchLikeDevice] = useState(false);
  const meshRef = useRef<Mesh | null>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const uniformsRef = useRef({
    uTime: { value: 0 },
    uWaveAmp: { value: 0.18 },
    uWaveFreq: { value: 2.4 },
    uWaveSpeed: { value: 0.95 },
    uMouse: { value: new Vector2(0, 0) },
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none)");
    const updateDeviceMode = (): void => {
      setIsTouchLikeDevice(mediaQuery.matches);
    };

    updateDeviceMode();
    mediaQuery.addEventListener("change", updateDeviceMode);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceMode);
    };
  }, []);

  useFrame((state, delta) => {
    if (!materialRef.current || !meshRef.current) {
      return;
    }

    materialRef.current.uniforms.uTime.value += delta;
    const pointer = state.pointer;
    const elapsed = state.clock.getElapsedTime();
    const mouse = materialRef.current.uniforms.uMouse.value as Vector2;
    const autoActive = isTouchLikeDevice && isVisible;
    const targetX = autoActive ? Math.sin(elapsed * 0.55) * 0.78 : pointer.x;
    const targetY = autoActive ? Math.cos(elapsed * 0.42) * 0.58 : pointer.y;

    mouse.x += (targetX - mouse.x) * 0.065;
    mouse.y += (targetY - mouse.y) * 0.065;

    meshRef.current.rotation.x = -Math.PI / 2.2;
    meshRef.current.rotation.z = Math.sin(materialRef.current.uniforms.uTime.value * 0.13) * 0.025;
  });

  return (
    <mesh ref={meshRef} position={[0, -0.25, 0]}>
      <planeGeometry args={[8.4, 8.4, 180, 180]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniformsRef.current}
        transparent
        side={DoubleSide}
        vertexShader={`
          uniform float uTime;
          uniform float uWaveAmp;
          uniform float uWaveFreq;
          uniform float uWaveSpeed;
          uniform vec2 uMouse;
          varying vec2 vUv;
          varying float vWave;
          varying float vMouseInfluence;

          void main() {
            vUv = uv;
            vec3 pos = position;
            float waveX = sin((pos.x * uWaveFreq) + (uTime * uWaveSpeed));
            float waveY = cos((pos.y * (uWaveFreq * 0.9)) + (uTime * (uWaveSpeed * 1.15)));
            float wave = (waveX + waveY) * 0.5;

            vec2 mouseUv = vec2((uMouse.x + 1.0) * 0.5, (uMouse.y + 1.0) * 0.5);
            float distToMouse = distance(vUv, mouseUv);
            float influence = 1.0 - smoothstep(0.0, 0.52, distToMouse);
            float ripple = sin((distToMouse * 34.0) - (uTime * 3.3)) * influence;

            pos.z += (wave * uWaveAmp) + (ripple * 0.09);
            vWave = wave;
            vMouseInfluence = influence;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          varying float vWave;
          varying float vMouseInfluence;

          void main() {
            vec3 deep = vec3(0.01, 0.10, 0.22);
            vec3 mid = vec3(0.02, 0.34, 0.56);
            vec3 foam = vec3(0.55, 0.92, 1.0);

            float band = smoothstep(0.1, 0.95, vUv.y);
            float waveMask = smoothstep(0.05, 0.42, abs(vWave));
            float glowMask = smoothstep(0.08, 0.75, vMouseInfluence);
            vec3 base = mix(deep, mid, band);
            vec3 color = mix(base, foam, waveMask * 0.38);
            color = mix(color, foam, glowMask * 0.12);

            vec2 centered = vUv - 0.5;
            float vignette = 1.0 - smoothstep(0.22, 0.52, length(centered));
            float alpha = 0.44 * vignette;
            gl_FragColor = vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
}

export function WaterSurface3D({ isVisible = true }: WaterSurface3DProps): React.JSX.Element | null {
  const isMobile =
    typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches;

  if (isMobile) return null;

  return (
    <div className="about-water-3d" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        frameloop={isVisible ? "always" : "demand"}
        camera={{ position: [0, 1.25, 2.75], fov: 47 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[1.5, 2.2, 1.2]} intensity={0.95} color="#9ce6ff" />
        <WaterPlane isVisible={isVisible} />
      </Canvas>
    </div>
  );
}