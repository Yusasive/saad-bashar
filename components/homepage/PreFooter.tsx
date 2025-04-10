"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { DiIllustrator } from "react-icons/di";
import Marquee from "../homepage/Marquee";
import {
  Photoshop,
  Framer,
  Sketch,
  AfterEffects,
  Audition,
  Premiere,
} from "../SvgLogo";

export default function PreFooter() {
  const row1 = [
    { text: "User Interface" },
    { text: "Responsive Design" },
    { text: "Interaction Design" },
    { text: "Usability Testing" },
    { text: "Wireframing" },
  ];

  const row2 = [
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

  // Scroll-based reveal
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
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
      className="pt-6 md:px-12 bg-[#111112]"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl w-fit py-2 font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#9090907c] text-transparent bg-clip-text text-center md:text-left">
          Skill Sets & Stacks
        </h2>
      </motion.div>

      <motion.div
        className="relative w-full overflow-hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
      >
        {/* Left & Right Fading Effect */}
        <div className="pointer-events-none absolute left-0 right-0 inset-0 z-10 bg-gradient-to-r from-[#111112] via-transparent via-95% to-[#111112] to-95%"></div>

        {/* Marquee Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <Marquee items={row1} speed="slow" direction="right" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Marquee items={row2} speed="slow" direction="left" />
        </motion.div>

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
    </motion.div>
  );
}
