"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Building2, Grid3x3 } from "lucide-react";
import Fallback2D from "@/components/3d/Fallback2D";
import CityPlexus from "@/components/visuals/CityPlexus";
import V0ParticleAnimation from "@/components/visuals/V0ParticleAnimation";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for particles
  const particleY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    // Start showing content after a brief delay (when preloader finishes)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section with city optimization platform introduction"
    >
      {/* Particle Animation - Behind the globe (z-index: -2) */}
      <div className="fixed inset-0 z-[-2]">
        <V0ParticleAnimation onComplete={() => setParticlesReady(true)} />
      </div>

      {/* 3D CityPlexus Background with Parallax (z-index: -1) */}
      <motion.div
        style={{ y: particleY }}
        className="fixed inset-0 z-[-1]"
      >
        <CityPlexus onComplete={() => setParticlesReady(true)} />
      </motion.div>
      
      {/* 2D Fallback for non-WebGL browsers (if CityPlexus fails) */}
      <div className="fixed inset-0 z-[-1]">
        <Fallback2D />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      {/* Content */}
      {showContent && (
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Title with blur-to-focus effect */}
            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="text-5xl md:text-7xl lg:text-[96px] font-bold font-heading"
            >
              <span className="text-gradient">Run Your City Smarter</span>
            </motion.h1>

            {/* Description with delay */}
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  filter: "blur(5px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light"
            >
              Transform complex urban systems into optimized, measurable decisions through a unified scientific decision support platform.
            </motion.p>

            {/* Buttons with scale-up and glow effect */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.34, 1.56, 0.64, 1],
                  },
                },
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  aria-label="Request a personalized demo of our smart city platform"
                >
                  <Link href="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  aria-label="Explore the OW Platform"
                >
                  <Link href="/solutions">
                    <Grid3x3 className="mr-2 w-5 h-5" />
                    Explore the OW Platform
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.6,
                  },
                },
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="w-4 h-4 text-primary" />
                <span>Built for scientific decision-makers</span>
              </div>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <div className="glass rounded-xl px-3 py-1 border border-primary/30">
                <span className="text-xs text-primary font-medium">Enterprise-grade decision intelligence</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Scroll Indicator - Right Side */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="fixed right-8 bottom-1/2 transform translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-light writing-vertical-rl mb-2">
            Explore
          </span>
          <div className="h-32 w-0.5 bg-white/20 rounded-full relative overflow-hidden">
            <motion.div
              style={{
                scaleY: scrollYProgress,
              }}
              className="absolute bottom-0 w-full h-full bg-primary origin-bottom"
            />
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-primary rounded-full mt-2"
          />
        </motion.div>
      )}

      {/* Mobile Scroll Indicator */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 md:hidden"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground font-light">Scroll to discover</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 glass"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
