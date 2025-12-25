"use client";

import { useEffect, useRef, useState } from "react";

// Advanced Particle System with Gradient Flows
function AdvancedParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particleCount = 150;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      targetX: number;
      targetY: number;
    }> = [];

    // Create particles with gradient colors
    const colors = ["#64FFDA", "#57CBFF", "#4ECDC4", "#3A86FF"];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
      });
    }

    // Gradient flow points (create flowing movement)
    const flowPoints: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    for (let i = 0; i < 5; i++) {
      flowPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let time = 0;

    function animate() {
      if (!ctx || !canvas) return;

      // Clear with fade effect
      ctx.fillStyle = "rgba(10, 25, 47, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Update flow points
      flowPoints.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });

      // Update particles
      particles.forEach((particle, i) => {
        // Attract to nearest flow point
        let nearestPoint = flowPoints[0];
        let minDist = Infinity;
        flowPoints.forEach((point) => {
          const dx = point.x - particle.x;
          const dy = point.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) {
            minDist = dist;
            nearestPoint = point;
          }
        });

        // Smooth movement towards flow point
        const dx = nearestPoint.x - particle.x;
        const dy = nearestPoint.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          particle.vx += (dx / dist) * 0.01;
          particle.vy += (dy / dist) * 0.01;
        }

        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.save();
            const opacity = (1 - dist / 150) * 0.2;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = "#64FFDA";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}

// Main Component
export default function CityPulseScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reduced motion check
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full bg-background" />
    );
  }

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 w-full h-full bg-background" />
    );
  }

  return <AdvancedParticleBackground />;
}
