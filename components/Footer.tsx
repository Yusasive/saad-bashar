"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  Behance,
  Email,
  LinkedIn,
  Twitter,
  ArrowUp, // Assuming this is your SVG icon component
} from "@/components/SvgLogo"; // Adjust path if needed
import Nigeria from "@/public/images/projects/nigeria.png";
import { ArrowDown } from "./ImageIcon"; // Adjust path if needed

// --- Define variants for the arrow rotation ---
const arrowVariants = {
  initial: {
    rotate: 0, // Default state (arrow points up/diagonal)
    transition: { duration: 0.3 }
  },
  hover: {
    rotate: 45, // Rotated state (arrow points right). Adjust if needed (e.g., 45 for diagonal)
    transition: { duration: 0.3 }
  }
};

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
      className="bg-footer bg-black/35 pt-[40px] px-6"
    >
      <div className="py-10 border-t border-[#CDCDCD80]">
         <motion.h1
          className=" w-fit py-2 font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#9090907c] text-transparent bg-clip-text text-2xl md:text-5xl font-mori"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let&lsquo;s Build Something
        </motion.h1>
        <motion.h1
          className="w-fit py-2 font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#9090907c] text-transparent bg-clip-text text-2xl md:text-5xl font-mori pt-2"
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
            <span className="hidden sm:block"><ArrowDown /></span>
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-start sm:items-center flex-col sm:flex-row text-sm md:text-xl text-[#F3F3F3] font-mori font-normal gap-4 sm:gap-6 py-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Button 1: Book a Call */}
          <motion.button
            initial="initial" // Set initial state for children variants
            whileHover="hover" // Trigger 'hover' state for children variants
            className="w-[165px] md:w-[220px] flex justify-center flex-row items-center bg-[#1E1E1E] rounded-full px-2 md:px-6 py-4 md:py-4 hover:bg-transparent hover:border border-[#CDCDCD33] transition"
          >
            {/* Text */}
            <span className="mr-2">Book a 1:1 Call</span>
            <motion.span
              variants={arrowVariants}
              className="inline-block" 
            >
              <ArrowUp />
            </motion.span>
          </motion.button>

          {/* Button 2: Email me */}
          <motion.button
            initial="initial" // Set initial state for children variants
            whileHover="hover" // Trigger 'hover' state for children variants
            className="w-[135px] md:w-[175px] flex flex-row justify-center items-center border border-[#CDCDCD33] rounded-full px-2 md:px-6 py-4 md:py-4 hover:border-transparent hover:bg-[#1E1E1E]"
          >
            {/* Text */}
            <span className="mr-2">Email me</span> {/* Add margin if needed */}
            {/* Arrow Wrapper - Apply variants here */}
            <motion.span
              variants={arrowVariants}
              className="inline-block" // Use inline-block for transform
            >
              <ArrowUp />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        {/* ... (rest of your social icons code) ... */}
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
          
            transition={{ type: "spring", stiffness: 300 }}
          >
            <LinkedIn />
          </motion.a>
          <motion.div>
            <Email />
          </motion.div>
          <motion.a
            href=""
            target="_blank"
          >
            <Twitter />
          </motion.a>
          <motion.a
            href="https://www.behance.net/saadbashar"
            target="_blank"
          
          >
            <Behance />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      {/* ... (rest of your footer bottom code) ... */}
       <motion.div
        className="flex py-5 items-center justify-left"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="border-t pt-8 border-[#CDCDCD80] w-full flex items-center gap-2 text-[#CDCDCD80] text-sm md:text-base font-normal font-mori">
          <span>CRAFTED WITH LOVE IN LAGOS</span>
          <Image
            src={Nigeria}
            alt="Nigeria Flag"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
          <span>© {new Date().getFullYear()}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}