"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// Assuming FaFigma might be needed based on previous context, keep import if used by Marquee internally
// import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import Marquee from "../homepage/Marquee"; // Verify path
import {
  Photoshop,
  Framer,
  Sketch,
  AfterEffects,
  Audition,
  Premiere,
} from "../SvgLogo"; // Verify path

export default function PreFooter() {
  // --- Data rows as provided by you ---
  const row1 = [
    { text: "User Interface" },
    { text: "Responsive Design" },
    { text: "Interaction Design" },
    { text: "Usability Testing" },
    { text: "Wireframing" },
  ];

  const row2 = [
    // Ensure icons render correctly in Marquee
    { text: "Illustrator", icon: <DiIllustrator /> },
    { text: "Photoshop", icon: <Photoshop /> },
    { text: "Framer", icon: <Framer /> },
    { text: "Premiere Pro", icon: <Premiere /> },
    { text: "Sketch", icon: <Sketch /> },
    { text: "After Effects", icon: <AfterEffects /> },
    { text: "Audition", icon: <Audition /> },
  ];

  const row3 = [
    { text: "Collaboration" },
    { text: "Communication" },
    { text: "Empathy" },
    { text: "Time Management" },
    { text: "Critical Thinking" },
  ];
  // --- End of data rows ---

  // Scroll-based reveal logic (unchanged)
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    // Outer container (unchanged)
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="py-12 px-6 bg-[#111112]"
    >
      {/* Title section (unchanged) */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl w-fit py-2 mb-4 md:mb-8 font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#9090907c] text-transparent bg-clip-text text-center md:text-left">
          Skill Sets & Stacks
        </h2>
      </motion.div>

      {/* --- Container for Marquees: ADD MASK HERE --- */}
      <motion.div
        className="relative w-full overflow-hidden
                   [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_98%,transparent_100%)]
                   [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_98%,transparent_100%)]"
        // Removed mb-4 md:mb-8 from h2, adjusted padding/margin if needed here or on Marquee items
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
      >
        {/* REMOVED the placeholder div: <div className="pointer-events-none ..."></div> */}

        {/* Marquee Row 1 (unchanged) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <Marquee items={row1} speed="slow" direction="right" />
        </motion.div>

        {/* Marquee Row 2 (unchanged) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Marquee items={row2} speed="slow" direction="left" />
        </motion.div>

        {/* Marquee Row 3 (unchanged) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Marquee items={row3} speed="slow" direction="right" />
        </motion.div>
      </motion.div>
      {/* --- End of Marquee Container --- */}

    </motion.div>
  );
}