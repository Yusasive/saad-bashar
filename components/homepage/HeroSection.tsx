// File: @/components/homepage/HeroSection.tsx

"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import BC from "@/public/images/brands/BC.png";
import BS from "@/public/images/brands/BS.png";
import MM from "@/public/images/brands/MM.png";
import S from "@/public/images/brands/S.png";
import WT from "@/public/images/brands/WT.png";
import StickyButton from "../HomeButton"; // Ensure path is correct

// --- Added: Define props interface ---
interface HeroSectionProps {
  scrollToSection: (section: string) => void; // Expecting the scroll function
}

// --- Modified: Accept scrollToSection as a prop ---
export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const words = ["landing pages", "mobile apps", "web apps", "websites"];
  const [index, setIndex] = useState(0);

  // Auto-cycling dynamic words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]); // Removed words from dependency array as it's constant

  // Scroll animation setup for brand section
  const brandRef = useRef(null);
  const brandInView = useInView(brandRef, { once: true });
  const brandControls = useAnimation();

  useEffect(() => {
    if (brandInView) {
      brandControls.start("visible");
    }
  }, [brandInView, brandControls]);

  // --- Added: Handler function to call the passed prop ---
  const handleScrollToProjects = () => {
    scrollToSection("project"); // Call the function passed from Home
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-container bg-black/35 pt-28 relative" // Added relative if StickyButton needs it
    >
      <div className="mx-4 lg:mx-12 py-6">
        {/* Intro Text */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotate: -3 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between text-[#CDCDCD] text-lg lg:text-[28px] gap-2"
        >
          <p className="text-center md:text-left">
            Hi, I am{" "}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.5,
              }}
            >
              Saad Bashar
            </motion.span>
          </p>
          <p className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-[#34C759] animate-blink">•</span> I am
            available for new projects
          </p>
        </motion.div>

        {/* Animated Title & Description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-[#F3F3F3]  py-8 md:py-10"
        >
          <h1 className="text-xl md:text-5xl lg:text-[58px] w-[90%] font-semibold font-mori leading-tight">
            I am a UI/UX and Product Designer, designing compelling{" "}
            {/* Using relative parent and min-height for better word alignment */}
            <span className="relative inline-block align-bottom min-h-[1em] min-w-[150px] md:min-w-[250px]">
              <AnimatePresence mode="wait"> {/* Use mode="wait" for cleaner transition */}
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }} // Slightly faster transition
                  className="absolute inset-0 whitespace-nowrap" // Use inset-0 to fill the span
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
            className="text-base md:text-2xl mt-4 w-[90%]" // Keep consistent mt-4 or adjust based on h1 line wrap
          >
            As a Designer with more than 3 years of dedicated experience, I
            create digital experiences that border on efficiency, aesthetics,
            and functionality—ones that users would want to revisit. My
            portfolio spans a variety of sectors, from fintech, insurtech, and
            edtech to SaaS.
          </motion.p>
        </motion.div>

        {/* --- Modified: Pass the handler to StickyButton --- */}
        <div>
            <StickyButton onClick={handleScrollToProjects} />
        </div>
      </div>

      {/* Scroll-Triggered Brands Section */}
      {/* Added pb-10 or pb-16 for bottom spacing */}
      <div className="space-y-5 px-6 lg:px-12 pb-10 md:pb-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg text-[#CDCDCD] font-semibold font-mori text-center"
        >
          BRANDS I HAVE WORKED WITH
        </motion.h1>

        <motion.div
          ref={brandRef}
          initial="hidden"
          animate={brandControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 }, // Added slight delay for children
            },
          }}
          className="flex justify-between items-center overflow-y-hidden overflow-x md:overflow-x-hidden"
        >
          {[BC, BS, MM, S, WT].map((img, i) => ( // Use different variable 'i' for key if 'index' is used elsewhere
            <motion.div
              key={i} // Use index 'i' from map
              variants={{
                hidden: { opacity: 0, y: 10, scale: 1.8 },
                visible: { opacity: 1, y: 0, scale: .95 },
              }}
              whileHover={{ rotate: 3 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex justify-center gap-6" // Ensures image is centered if grid cell is larger
            >
              <Image
                src={img}
                alt={`Brand logo ${i + 1}`} // More descriptive alt text
                width={270} // Consider adjusting if needed based on design
                height={98} // Consider adjusting if needed based on design
                style={{ objectFit: 'cover' }} // Ensure aspect ratio is maintained
                // className="max-w-[120px] md:max-w-[150px] lg:max-w-[270px]" // Adjusted max-widths and added h-auto
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}