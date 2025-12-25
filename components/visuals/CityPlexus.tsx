"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface CityPlexusProps {
  onComplete?: () => void;
}

// Node component for the plexus network
function PlexusNodes({ nodes }: { nodes: Array<[number, number, number]> }) {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const positions = useMemo(() => new Float32Array(nodes.flat()), [nodes]);

  return (
    <points ref={pointsRef as any}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={nodes.length}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.1}
        color="#64FFDA"
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Edge connections between nearby nodes
function PlexusEdges({ nodes }: { nodes: Array<[number, number, number]> }) {
  const edges: Array<[[number, number, number], [number, number, number]]> =
    [];

  // Connect nearby nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const dz = nodes[i][2] - nodes[j][2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < 3) {
        edges.push([nodes[i], nodes[j]]);
      }
    }
  }

  return (
    <group>
      {edges.map((edge, idx) => (
        <Line
          key={idx}
          points={edge}
          color="#57CBFF"
          lineWidth={0.5}
          opacity={0.3}
          transparent
        />
      ))}
    </group>
  );
}

// Main CityPlexus component
function CityPlexusScene({ onComplete }: CityPlexusProps) {
  const [nodes] = useState(() => {
    const nodeCount =
      typeof window !== "undefined" && window.innerWidth < 768 ? 50 : 200;
    const nodes: Array<[number, number, number]> = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
      ]);
    }
    return nodes;
  });

  useEffect(() => {
    if (onComplete) {
      setTimeout(onComplete, 1000);
    }
  }, [onComplete]);

  const gridHelper = useMemo(() => {
    const helper = new THREE.GridHelper(20, 20, "#57CBFF", "#57CBFF");
    helper.position.set(0, 0, -5);
    return helper;
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive object={gridHelper} />
      <PlexusNodes nodes={nodes} />
      <PlexusEdges nodes={nodes} />
    </Canvas>
  );
}

export default function CityPlexus({ onComplete }: CityPlexusProps) {
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check WebGL support
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setWebglSupported(false);
    }
  }, []);

  // Reduced motion check
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!mounted || !webglSupported || prefersReducedMotion) {
    return null; // Fallback2D will handle the visualization
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <CityPlexusScene onComplete={onComplete} />
    </div>
  );
}

