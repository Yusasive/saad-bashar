"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FaceLogo from "@/public/images/projects/FaceLogo.png";
import { ArrowUp } from "@/components/SvgLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 92.5;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className=" fixed top-6 w-full z-50"
    >
      <div className="mx-6 lg:mx-12 bg-[#19191933] backdrop-blur-lg pb-4 pt-1 flex border-b border-[#CDCDCD33] justify-between items-center">
        {/* Logo with hover effect */}
        <motion.div
          whileHover={{ rotate: 10 }}
          className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
        >
          <Link href="/">
            <Image
              src={FaceLogo}
              alt="Profile"
              className="rounded-full object-cover"
              width={66}
              height={66}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-16 text-[#CDCDCD] text-xl font-mori font-semibold">
          {["Projects", "About", "Contact"].map((item) => (
            <motion.div key={item} className="hover:text-gray-300">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}
          <motion.a
            href="https://www.linkedin.com/in/saadbashar/"
            target="_blank"
            className="flex flex-row items-center "
          >
            LinkedIn{" "}
            <span className="ml-3">
              <ArrowUp />
            </span>
          </motion.a>
          <motion.div>
            <Link
              target="_blank"
              href="https://cal.com/saadbashar/15min?user=saadbashar"
              className="flex flex-row items-center border border-[#D0D0D0] hover:border-[#1E1E1E] px-4 py-3 rounded-lg transition"
            >
              Book a Call{" "}
              <span className="ml-3">
                <ArrowUp />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[1px] bg-[#f3f3f3] fixed -mt-[1px] left-6 md:left-12 mr-6 md:mr-10 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-80 py-6 flex flex-col items-center space-y-4 text-[#CDCDCD] text-xl font-mori font-semibold"
          >
            {["Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
