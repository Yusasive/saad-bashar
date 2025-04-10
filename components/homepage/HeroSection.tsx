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

export default function HeroSection() {
  const words = ["landing pages", "mobile apps", "web apps", "websites"];
  const [index, setIndex] = useState(0);

  // Auto-cycling dynamic words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll animation setup for brand section
  const brandRef = useRef(null);
  const brandInView = useInView(brandRef, { once: true });
  const brandControls = useAnimation();

  useEffect(() => {
    if (brandInView) {
      brandControls.start("visible");
    }
  }, [brandInView, brandControls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-container bg-black/35 pt-28"
    >
      <div className="mx-4 lg:mx-12 py-6">
        {/* Intro Text */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotate: -3 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between text-[#CDCDCD] text-lg lg:text-[28px] font-mori gap-2"
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
            <span className="relative inline-flex items-center min-h-[1em] whitespace-nowrap">
              <AnimatePresence>
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-1.5 md:top-3 left-0 inline-block"
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
            className="text-base md:text-2xl  mt-4 w-[90%]"
          >
            As a Designer with more than 3 years of dedicated experience, I
            create digital experiences that border on efficiency, aesthetics,
            and functionality—ones that users would want to revisit. My
            portfolio spans a variety of sectors, from fintech, insurtech, and
            edtech to SaaS.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll-Triggered Brands Section */}
      <div className="space-y-5 px-6 lg:px-12 mt-10 md:mt-40">
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
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-5 gap-5 justify-center items-center"
        >
          {[BC, BS, MM, S, WT].map((img, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex justify-center"
            >
              <Image
                src={img}
                alt="Brands"
                width={150}
                height={50}
                className="max-w-[120px] md:max-w-[200px] lg:max-w-[279px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
