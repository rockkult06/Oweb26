"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ParticleExplosionProps {
  onComplete?: () => void;
}

// Color coding for particles
const PARTICLE_COLORS = {
  traffic: 0x3a86ff, // Blue - Traffic data
  energy: 0x64ffda, // Teal - Energy efficiency
  density: 0xff6b6b, // Orange/Red - Density data
  general: 0xffffff, // White - General city data
};

export default function ParticleExplosion({ onComplete }: ParticleExplosionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const explosionStartedRef = useRef(false);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isMobileRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    isMobileRef.current = window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    // Check if WebGL is available
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      // WebGL not supported - return null, parent will show 2D fallback
      if (onComplete) setTimeout(onComplete, 1000);
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particle system - Adjust count based on device
    const particleCount = isMobileRef.current ? 1500 : 5000; // 30% on mobile
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const types = new Uint8Array(particleCount); // Store particle type

    // Initialize particles at center (Big Bang starting point)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Start all particles at origin
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;

      // Random velocity for explosion
      const speed = Math.random() * 2 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      velocities[i3] = speed * Math.sin(phi) * Math.cos(theta);
      velocities[i3 + 1] = speed * Math.sin(phi) * Math.sin(theta);
      velocities[i3 + 2] = speed * Math.cos(phi);

      // Assign particle type and color based on type
      const typeRand = Math.random();
      let type: keyof typeof PARTICLE_COLORS;
      let color: THREE.Color;

      if (typeRand < 0.25) {
        type = "traffic";
        color = new THREE.Color(PARTICLE_COLORS.traffic);
      } else if (typeRand < 0.5) {
        type = "energy";
        color = new THREE.Color(PARTICLE_COLORS.energy);
      } else if (typeRand < 0.75) {
        type = "density";
        color = new THREE.Color(PARTICLE_COLORS.density);
      } else {
        type = "general";
        color = new THREE.Color(PARTICLE_COLORS.general);
      }

      types[i] = Object.keys(PARTICLE_COLORS).indexOf(type);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Random size
      sizes[i] = Math.random() * 2 + 1;
    }

    // Geometry and material
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      timeRef.current += 0.016; // ~60fps

      if (!explosionStartedRef.current && timeRef.current > 0.1) {
        explosionStartedRef.current = true;
      }

      const positions = particles.geometry.attributes.position.array as Float32Array;
      const particleCount = positions.length / 3;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        if (explosionStartedRef.current) {
          // Apply velocity
          positions[i3] += velocities[i3];
          positions[i3 + 1] += velocities[i3 + 1];
          positions[i3 + 2] += velocities[i3 + 2];

          // Mouse interaction - particles slightly move towards mouse
          const mouseInfluence = 0.02;
          const dx = mouseRef.current.x * 20 - positions[i3];
          const dy = mouseRef.current.y * 20 - positions[i3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0 && dist < 50) {
            positions[i3] += (dx / dist) * mouseInfluence;
            positions[i3 + 1] += (dy / dist) * mouseInfluence;
          }

          // Add slight damping and wave motion (data flow feeling)
          const distance = Math.sqrt(
            positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2
          );

          // Wave effect (cloud-like motion) - different patterns for different types
          const type = types[i];
          const waveSpeed = [0.5, 0.7, 0.6, 0.4][type];
          const waveAmplitude = [0.1, 0.15, 0.12, 0.08][type];

          const waveX = Math.sin(timeRef.current * waveSpeed + distance * 0.1) * waveAmplitude;
          const waveY = Math.cos(timeRef.current * (waveSpeed + 0.2) + distance * 0.1) * waveAmplitude;
          const waveZ = Math.sin(timeRef.current * (waveSpeed - 0.1) + distance * 0.1) * waveAmplitude;

          positions[i3] += waveX;
          positions[i3 + 1] += waveY;
          positions[i3 + 2] += waveZ;

          // Slow down over time
          velocities[i3] *= 0.99;
          velocities[i3 + 1] *= 0.99;
          velocities[i3 + 2] *= 0.99;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Rotate camera slightly for dynamic feel
      camera.position.x = Math.sin(timeRef.current * 0.1) * 2;
      camera.position.y = Math.cos(timeRef.current * 0.15) * 2;
      camera.lookAt(0, 0, 0);

      rendererRef.current.render(sceneRef.current, cameraRef.current);

      // Call onComplete after explosion settles
      if (explosionStartedRef.current && timeRef.current > 2 && onComplete) {
        onComplete();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      isMobileRef.current = window.innerWidth < 768;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && rendererRef.current) {
        try {
          containerRef.current.removeChild(rendererRef.current.domElement);
        } catch (e) {
          // Element already removed
        }
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [mounted, onComplete]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-label="Interactive city data visualization with flowing particles"
    />
  );
}
