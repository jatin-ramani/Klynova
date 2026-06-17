"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/** Main refractive glass object — a torus knot. */
function GlassKnot() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.x += delta * 0.1;
    m.rotation.y += delta * 0.16;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1} position={[1.7, 0.1, 0]}>
      <mesh ref={mesh} scale={1.15}>
        <torusKnotGeometry args={[0.9, 0.3, 220, 32]} />
        <MeshTransmissionMaterial
          samples={6}
          resolution={512}
          transmission={1}
          thickness={1.1}
          roughness={0.05}
          ior={1.46}
          chromaticAberration={0.8}
          anisotropy={0.3}
          distortion={0.35}
          distortionScale={0.4}
          temporalDistortion={0.12}
          color="#c4bcff"
          attenuationColor="#8a7bff"
          attenuationDistance={2.2}
        />
      </mesh>
    </Float>
  );
}

/** Small reflective accent gems (cheap material — no transmission pass). */
function Gem({
  position,
  geo,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  geo: "ico" | "octa" | "dodeca";
  color: string;
  scale: number;
  speed: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.3 * speed;
      mesh.current.rotation.y += delta * 0.4 * speed;
    }
  });
  return (
    <Float speed={2 * speed} rotationIntensity={1} floatIntensity={1.6} position={position}>
      <mesh ref={mesh} scale={scale}>
        {geo === "ico" && <icosahedronGeometry args={[1, 0]} />}
        {geo === "octa" && <octahedronGeometry args={[1, 0]} />}
        {geo === "dodeca" && <dodecahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0.08}
          envMapIntensity={1.6}
        />
      </mesh>
    </Float>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.4, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.25, 0.05);
  });
  return <group ref={group}>{children}</group>;
}

export default function GlassScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.7]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#7B6EF6" />
      <directionalLight position={[-5, -2, 3]} intensity={1.6} color="#4FC3C3" />
      <pointLight position={[0, 0, 4]} intensity={2} color="#ffffff" />

      <Rig>
        <GlassKnot />
        <Gem position={[0.1, 1.5, 0.6]} geo="ico" color="#7B6EF6" scale={0.34} speed={1.2} />
        <Gem position={[3.0, -1.2, -0.4]} geo="octa" color="#4FC3C3" scale={0.42} speed={0.9} />
        <Gem position={[2.6, 1.4, -0.8]} geo="dodeca" color="#A099FF" scale={0.26} speed={1.5} />
      </Rig>

      <Environment resolution={256}>
        <Lightformer intensity={2.4} position={[0, 3, 4]} scale={[9, 2, 1]} color="#7B6EF6" />
        <Lightformer intensity={2} position={[-4, -2, 3]} scale={[6, 2, 1]} color="#4FC3C3" />
        <Lightformer intensity={1.6} position={[4, 2, -3]} scale={[6, 3, 1]} color="#A099FF" />
        <Lightformer intensity={1.2} position={[0, -3, 2]} scale={[8, 2, 1]} color="#ffffff" />
      </Environment>
    </Canvas>
  );
}
