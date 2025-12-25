"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import ProofBar from "@/components/home/ProofBar";
import OWLoop from "@/components/home/OWLoop";
import ModulesGrid from "@/components/home/ModulesGrid";
import PilotTimeline from "@/components/home/PilotTimeline";
import CaseStudies from "@/components/home/CaseStudies";
import SecurityTeaser from "@/components/home/SecurityTeaser";
import CTABand from "@/components/home/CTABand";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SoundControl from "@/components/audio/SoundControl";

const Preloader = dynamic(() => import("@/components/preloader/Preloader"), {
  ssr: false,
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

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
