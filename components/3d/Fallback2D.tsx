"use client";

import { useEffect, useRef, useState } from "react";

interface Fallback2DProps {
  onComplete?: () => void;
}

export default function Fallback2D({ onComplete }: Fallback2DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if WebGL is available - only show fallback if not
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setShouldRender(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldRender) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    // Create particles with color coding
    const colors = ["#3A86FF", "#64FFDA", "#FF6B6B", "#FFFFFF"]; // traffic, energy, density, general
    const particleCount = window.innerWidth < 768 ? 50 : 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "#0A192F";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.6;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    if (onComplete) {
      setTimeout(onComplete, 1000);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onComplete, shouldRender]);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-label="City data visualization fallback"
    />
  );
}
