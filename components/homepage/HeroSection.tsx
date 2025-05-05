// File: @/components/homepage/HeroSection.tsx

"use client";

// Import the Image component from next/image
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

// Import the actual PNG image files
import BC from "@/public/images/brands/BC.png";
import BS from "@/public/images/brands/BS.png";
import MM from "@/public/images/brands/MM.png";
import S from "@/public/images/brands/S.png";
import WT from "@/public/images/brands/WT.png";

import StickyButton from "../HomeButton"; // Ensure path is correct

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const words = ["landing pages", "mobile apps", "web apps", "websites"];
  const [index, setIndex] = useState(0);

  // --- Image Logo Data Setup ---
  const brandImages = [S, WT, BC, BS, MM];
  // *** Create a much longer array for robust marquee looping ***
  // Repeat the original set 6 times, similar to the Marquee component example
  const extendedBrandImages = Array(6).fill(brandImages).flat();


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

  // Define variants for the static logo container and items (Unchanged)
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
    // --- Outer Div (Unchanged) ---
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-container bg-black/35 pt-24 sm:pt-28 relative"
    >
      {/* --- Top Section Structure (Unchanged) --- */}
      <div className="px-6 py-6">
         {/* Intro Text (Unchanged) */}
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

         {/* Animated Title & Description (Unchanged) */}
         <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-[#F3F3F3] mt-4 py-8 md:py-10"
        >
            <h1 className="text-[36px] md:text-5xl lg:text-[58px] w-full leading-[44px] md:leading-[54px] md:w-[80%] font-semibold font-mori">
                 I am a UI/UX and Product Designer, designing compelling{" "}
                 <span className="sm:hidden inline-block"> landing pages, web apps, mobile apps, websites</span>
                 <span className="relative hidden sm:inline-block align-bottom min-h-[1.2em] sm:min-h-[1.2em] md:min-h-[1em] lg:min-h-[.88em] min-w-[150px] md:min-w-[250px]">
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

         {/* Sticky Button Container (Unchanged) */}
         <div className="mt-6 md:mt-0">
             <StickyButton onClick={handleScrollToProjects} />
         </div>
      </div>

      {/* ============================ */}
      {/* === Brands Section START === */}
      {/* ============================ */}
      <div className="space-y-5 mt-24 md:mt-36 px-6 lg:px-12 pb-10 md:pb-16">
        {/* Title (Unchanged) */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[200] text-[#CDCDCD] text-[20px] font-semibold font-mori text-center"
        >
          BRANDS I HAVE WORKED WITH
        </motion.h1>

        {/* --- Static Image Layout (lg and up) --- */}
        {/* Displays logos statically on large screens. Unchanged. */}
        <motion.div
          ref={brandRef} // Ref for scroll animation trigger
          initial="hidden"
          animate={brandControls}
          variants={staticContainerVariants}
          className="hidden lg:flex justify-center gap-6 items-center mx-auto max-w-screen-xl" // Only flex on lg+
        >
          {brandImages.map((imageSrc, i) => ( // Use original short array here
            <motion.div
              key={`static-img-${i}`}
              variants={staticLogoVariants}
              className="flex items-center justify-center w-[300px] h-[100px]"
            >
              <Image
                src={imageSrc}
                alt={`Brand logo ${i + 1}`}
                height={60}
                width={0}
                style={{ width: 'auto', height: '80px', objectFit: 'contain' }}
                priority={i < 3}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* --- Image Marquee Layout (below lg) --- */}
        {/* Displays logos in a marquee on smaller screens with mask effect. */}
        <div
          // Controls visibility (hidden on lg+) and applies mask effect via Tailwind classes
          className="lg:hidden w-full overflow-hidden relative
                     [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
                     [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated container using framer-motion */}
          <motion.div
            className="flex w-max" // Use w-max to allow content to exceed parent width
            animate={{ x: ['0%', '-16.666%'] }} // Animate by 1/6th of the total width (since we repeated 6 times)
            transition={{
              ease: 'linear',
              duration: 30, // Adjust duration for desired speed (longer duration for more items)
              repeat: Infinity,
            }}
          >
            {/* Map over the EXTENDED (6x repeated) image sources */}
            {extendedBrandImages.map((imageSrc, i) => (
              // Wrapper for each image in the marquee
              <div
                key={`marquee-img-${i}`}
                // Use fixed width or padding to ensure consistent spacing
                className="flex-shrink-0 px-4 py-2 mx-3 flex items-center justify-center h-[90px]"
              >
                <Image
                  src={imageSrc}
                  alt={`Brand logo scroll ${i + 1}`} // Changed alt slightly for clarity
                  height={80} // Consistent height for marquee images
                  width={0} // Auto width based on height
                  style={{ width: 'auto', height: '80px', objectFit: 'contain' }}
                  // No loading="lazy" to prevent gaps
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* ============================ */}
      {/* === Brands Section END === */}
      {/* ============================ */}

    </motion.div> // End of Outer Div
  );
}