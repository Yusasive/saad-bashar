"use client";

import { useRef } from "react";
import HeroSection from "@/components/homepage/HeroSection";
import ProjectOverview from "@/components/homepage/ProjectOverview";
import DesignProcess from "@/components/homepage/DesignProcess";
import PreFooter from "@/components/homepage/PreFooter";
import StickyButton from "@/components/HomeButton";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null!);
  const projectRef = useRef<HTMLDivElement>(null!);
  const designRef = useRef<HTMLDivElement>(null!);
  const preFooterRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (section: string) => {
    const sections: Record<string, React.RefObject<HTMLDivElement>> = {
      hero: heroRef,
      project: projectRef,
      design: designRef,
      prefooter: preFooterRef,
    };

    const ref = sections[section];
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={projectRef}>
        <ProjectOverview />
      </div>
      <div ref={designRef}>
        <DesignProcess />
      </div>
      <div ref={preFooterRef}>
        <PreFooter />
      </div>
      <StickyButton onNavigate={scrollToSection} />
    </>
  );
}
