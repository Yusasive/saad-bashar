// File: @/components/homepage/HeroSection.tsx

"use client";

// Removed Image and StaticImageData import as we are using SVGs only now
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
// Removed PNG imports: BC, BS, MM, S, WT
import StickyButton from "../HomeButton"; // Ensure path is correct
// Import your SVG Brand components
import { Brandone, Brandtwo, Brandthree, Brandfour, Brandfive } from "./Brand"; // Adjust path if necessary

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const words = ["landing pages", "mobile apps", "web apps", "websites"];
  const [index, setIndex] = useState(0);

  // --- SVG Logo Data Setup ---
  // Array of the imported SVG Brand components
  const brandComponents = [
    Brandone,
    Brandtwo,
    Brandthree,
    Brandfour,
    Brandfive,
  ];
  // Create duplicated array for seamless marquee
  const duplicatedBrandComponents = [...brandComponents, ...brandComponents];


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  // Scroll animation setup for brand section
  const brandRef = useRef(null);
  const brandInView = useInView(brandRef, { once: true, amount: 0.2 });
  const brandControls = useAnimation();

  useEffect(() => {
    if (brandInView) {
      brandControls.start("visible");
    }
  }, [brandInView, brandControls]);

  const handleScrollToProjects = () => {
    scrollToSection("project");
  };

  // Define variants for the static logo container and items
  const staticContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const staticLogoVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };


  return (
    // --- Outer Div ---
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-container bg-black/35 pt-28 relative"
    >
      {/* --- Top Section Structure (Unchanged) --- */}
      <div className="mx-4 lg:mx-12 py-6">
        {/* Intro Text */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotate: -3 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-row justify-between text-[#CDCDCD] text-[12px] md:text-[20px] lg:text-[28px] gap-2"
        >
          <p className="w-[7rem] md:w-full text-left text-[14px] md:text-[25px]">
            Hi, I am{" "}
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }} >
              Saad Bashar
            </motion.span>
          </p>
          <p className="flex items-center gap-2 justify-end w-full text-[14px] md:text-[25px]">
            <span className="text-[#34C759] animate-blink">•</span> I am
            available for new projects
          </p>
        </motion.div>

        {/* Animated Title & Description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-[#F3F3F3] mt-8 py-8 md:py-10"
        >
           <h1 className="text-[36px] md:text-5xl lg:text-[58px] w-full leading-[44px] md:leading-[54px] md:w-[80%] font-semibold font-mori">
            I am a UI/UX and Product Designer, designing compelling{" "}
            <span className="relative inline-block align-bottom min-h-[1.2em] sm:min-h-[1.2em] md:min-h-[1em] lg:min-h-[.88em] min-w-[150px] md:min-w-[250px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: .5, ease: "easeInOut" }}
                  className="absolute inset-0 whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-[20px] mt-10 w-full md:w-[90%]"
          >
            As a Designer with more than 3 years of dedicated experience, I
            create digital experiences that border on efficiency, aesthetics,
            and functionality—ones that users would want to revisit. My
            portfolio spans a variety of sectors, from fintech, insurtech, and
            edtech to SaaS.
          </motion.p>
        </motion.div>

         {/* Sticky Button Container */}
         <div className="mt-6 md:mt-0">
            <StickyButton onClick={handleScrollToProjects} />
        </div>
      </div>

      {/* --- Brands Section --- */}
      <div className="space-y-5 mt-24 md:mt-36 px-6 lg:px-12 pb-10 md:pb-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[200] text-[#CDCDCD] text-[20px] font-semibold font-mori text-center"
        >
          BRANDS I HAVE WORKED WITH
        </motion.h1>

        {/* --- Static SVG Layout (md and up - Unchanged) --- */}
        <motion.div
          ref={brandRef}
          initial="hidden"
          animate={brandControls} // Controlled by useInView
          variants={staticContainerVariants}
          // Add mx-6 here
          className="hidden md:flex justify-center gap-3 items-center mx-6"
        >
          {brandComponents.map((BrandComponent, i) => (
            <motion.div
              key={`static-svg-${i}`}
              variants={staticLogoVariants}
              className="flex items-center justify-center w-[270px] md:w-[240px] h-[100px]"
            >
              <BrandComponent />
            </motion.div>
          ))}
      </motion.div>

        {/* --- SVG Marquee Layout (below md) --- */}
        <div
          className="md:hidden w-full overflow-hidden relative" // Show only below md
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <motion.div
            className="flex" // Use flex to lay out items horizontally
            animate={{ x: ['0%', '-50%'] }} // Animate position for loop
            transition={{
              ease: 'linear',
              duration: 5, // Adjust duration for desired speed
              repeat: Infinity,
            }}
          >
            {/* Map over the duplicated SVG components */}
            {duplicatedBrandComponents.map((BrandComponent, i) => (
              // Wrapper for each SVG in the marquee for spacing and sizing
              <div
                key={`marquee-svg-${i}`}
                className="flex-shrink-0 px-4 py-2 mx-2 flex items-center justify-center h-[60px]" // Set fixed height, center content
                style={{ width: 'auto' }} // Allow width to adjust based on SVG aspect ratio and height
              >
                {/* Render the SVG component */}
                <BrandComponent
                   className="h-full w-auto" // Make SVG fill the height, width adjusts automatically
                   // Alternatively, pass fixed width/height if needed and supported by SVGs
                   // height={60}
                   // width={162} // Adjust width based on SVG aspect ratio if fixed height
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}