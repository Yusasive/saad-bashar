"use client";

import { useRef } from "react"; // Make sure useRef is imported
import HeroSection from "@/components/homepage/HeroSection"; // Correct path?
import ProjectOverview from "@/components/homepage/ProjectOverview"; // Correct path?
import DesignProcess from "@/components/homepage/DesignProcess"; // Correct path?
import PreFooter from "@/components/homepage/PreFooter"; // Correct path?
// No need to import StickyButton here if it's only used inside HeroSection

export default function Home() {
  // 1. Create a ref for the project section wrapper
  const projectRef = useRef<HTMLDivElement>(null);

  // 2. Define the scroll function *inside* the Home component
  const scrollToSection = (section: string) => {
    console.log("scrollToSection called in Home for:", section); // Debug log 1
    if (section === "project" && projectRef.current) {
       console.log("Scrolling to projectRef:", projectRef.current); // Debug log 2
      projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
       console.log("Ref not found or section mismatch:", section, projectRef.current); // Debug log 3
    }
  };

  return (
    <>
      <div>
        {/*
        *   CRUCIAL STEP: Pass the 'scrollToSection' function defined above
        *   as a prop with the EXACT SAME NAME ('scrollToSection')
        *   to the HeroSection component.
        */}
        <HeroSection scrollToSection={scrollToSection} />
      </div>

      {/* 4. Attach the ref to the div wrapping ProjectOverview */}
      <div ref={projectRef} id="project-section"> {/* Optional: Add an ID for easier debugging */}
        <ProjectOverview />
      </div>
      <div>
        <DesignProcess />
      </div>
      <div>
        <PreFooter />
      </div>
    </>
  );
}