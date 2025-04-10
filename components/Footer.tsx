"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  Behance,
  Email,
  LinkedIn,
  Twitter,
  ArrowUp,
} from "@/components/SvgLogo";
import Nigeria from "@/public/images/projects/nigeria.png";
import { ArrowDown } from "./ImageIcon";

export default function Foooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={footerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className="bg-footer bg-black/35"
    >
      <div className="p-6 md:p-12 border-y border-[#CDCDCD80]">
        <motion.h1
          className="bg-gradient-to-r from-[#F3F3F3] to-[#9090907c] text-transparent bg-clip-text text-2xl md:text-5xl font-semibold font-mori"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let&apos;s Build Something
        </motion.h1>
        <motion.h1
          className="bg-gradient-to-r from-[#F3F3F3] to-[#9090907c] text-transparent bg-clip-text text-2xl md:text-5xl font-semibold font-mori pt-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Awesome!
        </motion.h1>
        <motion.p
          className="text-[#CDCDCD] text-base"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2">
            Feel free to reach out to me via any of the following channels
            <ArrowDown />
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-row text-sm md:text-xl text-[#F3F3F3] font-mori font-normal space-x-6 py-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-row items-center bg-[#1E1E1E] rounded-full px-2 md:px-6 py-2 md:py-4"
          >
            Book a 1:1 Call{" "}
            <span className="ml-3">
              <ArrowUp />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-row items-center border border-[#CDCDCD33] rounded-full px-2 md:px-6 py-2 md:py-4"
          >
            Email me
            <span className="ml-3">
              <ArrowUp />
            </span>
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex flex-row space-x-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/saadbashar/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <LinkedIn />
          </motion.a>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Email />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Twitter />
          </motion.div>
          <motion.a
            href="https://www.behance.net/saadbashar"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Behance />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="flex p-6 md:p-12 items-center justify-left"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center gap-2 text-[#CDCDCD80] text-sm md:text-base font-normal font-mori">
          <span>CRAFTED WITH LOVE IN LAGOS</span>
          <Image
            src={Nigeria}
            alt="Nigeria Flag"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
