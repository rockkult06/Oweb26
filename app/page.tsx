"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic imports with loading states
const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
  loading: () => <div className="h-20 bg-black" />,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
  loading: () => <div className="h-64 bg-black" />,
});

const SoundControl = dynamic(() => import("@/components/audio/SoundControl"), {
  ssr: false,
});

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 bg-black" />;
  }

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      {isLoaded && (
        <main id="main-content" className="min-h-screen">
          <SoundControl />
          <Header />
          <Hero />
          <ProofBar />
          <OWLoop />
          <ModulesGrid />
          <PilotTimeline />
          <CaseStudies />
          <SecurityTeaser />
          <CTABand />
          <Footer />
        </main>
      )}
    </>
  );
}
