"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Behance, Email, LinkedIn, Twitter } from "@/components/SvgLogo";
import Nigeria from "@/public/images/projects/nigeria.png";
import { ArrowUp } from "@/components/SvgLogo";

export default function Foooter() {
  return (
    <motion.div
      className="bg-footer bg-black/35"
      initial={{ opacity: 0, y: 50 }} // Start hidden & move up
      animate={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="p-6 md:p-12 border-y border-[#CDCDCD80]">
        <motion.h1
          className="text-[#F3F3F3] text-2xl md:text-5xl font-semibold font-mori"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Build <span className="text-[#8D8D8D]">Something</span> <br />
          Awesome!
        </motion.h1>
        <motion.p
          className="text-[#CDCDCD] text-base font-normal font-mori"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Feel free to reach out to me via any of the following channels
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-row text-base md:text-xl text-[#F3F3F3] font-mori font-normal space-x-6 py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-row items-center bg-[#1E1E1E] rounded-full px-6 py-4"
          >
            Book a 1:1 Call{" "}
            <span className="ml-3">
              <ArrowUp />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-row items-center border border-[#CDCDCD33] rounded-full px-6 py-4"
          >
            Email me{" "}
            <span className="ml-3">
              <ArrowUp />
            </span>
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex flex-row space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
