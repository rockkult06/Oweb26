"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SoundControl from "@/components/audio/SoundControl";

// Dynamic imports for all Framer Motion components
const Preloader = dynamic(() => import("@/components/preloader/Preloader"), {
  ssr: false,
});

const Hero = dynamic(() => import("@/components/home/Hero"), {
  ssr: false,
});

const ProofBar = dynamic(() => import("@/components/home/ProofBar"), {
  ssr: false,
});

const OWLoop = dynamic(() => import("@/components/home/OWLoop"), {
  ssr: false,
});

const ModulesGrid = dynamic(() => import("@/components/home/ModulesGrid"), {
  ssr: false,
});

const PilotTimeline = dynamic(() => import("@/components/home/PilotTimeline"), {
  ssr: false,
});

const CaseStudies = dynamic(() => import("@/components/home/CaseStudies"), {
  ssr: false,
});

const SecurityTeaser = dynamic(() => import("@/components/home/SecurityTeaser"), {
  ssr: false,
});

const CTABand = dynamic(() => import("@/components/home/CTABand"), {
  ssr: false,
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <Preloader onComplete={() => setIsLoaded(true)} />
      </Suspense>
      {isLoaded && (
        <main id="main-content" className="min-h-screen">
          <SoundControl />
          <Header />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Hero />
            <ProofBar />
            <OWLoop />
            <ModulesGrid />
            <PilotTimeline />
            <CaseStudies />
            <SecurityTeaser />
            <CTABand />
          </Suspense>
          <Footer />
        </main>
      )}
    </>
  );
}
