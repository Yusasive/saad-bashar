"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
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
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0; // Use 100% for full range
      // Adjust if you deliberately want it shorter, e.g., * 98 for a small gap
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation in case the page loads scrolled down
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-4 w-full z-50"
    >
      {/* Main Content Area - ADD 'relative' */}
      <div className={`relative mx-6 backdrop-blur-lg pb-4 pt-1 flex justify-between items-center ${isOpen ? 'bg-[#0F0F0F] border-t border-x border-[#CDCDCD33] rounded-2xl p-4 pt-4' : 'border-b border-[#CDCDCD33]'}`}>
        {/* Logo */}
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
        <div className="hidden md:flex items-center space-x-10 lg:space-x-16 text-[#CDCDCD] text-xl font-mori font-semibold">
         {/* ... links ... */}
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
              className="flex flex-row items-center border border-[#D0D0D0] hover:border-transparent hover:bg-[#161616] px-4 py-3 rounded-lg transition-all duration-500 ease-in-out"
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
          {isOpen ? <X size={28} /> : <HiOutlineMenuAlt4 size={28} />}
        </motion.button>

        {/* Scroll Progress Bar - MOVED INSIDE the content div */}
        {/* Positioned absolutely relative to the content div */}
        <motion.div
          // NOTE: Position relative to the content div's bottom/left
          // The border-b is visually part of the content div, so bottom-0 sits right on it.
          // Adjust with bottom-[-1px] if needed to sit below the border visually.
          className="absolute bottom-0 left-0 h-[1px] bg-[#f3f3f3] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%`, transformOrigin: 'left' }}
        />
      </div> {/* End of content div */}


      {/* Mobile Menu (stays outside the main content div) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // Align mobile menu margin too
            className="fixed top-20 left-0 right-0 bg-[#0F0F0F] border-x border-b border-[#CDCDCD33] py-6 flex flex-col items-center space-y-10 text-[#CDCDCD] text-xl font-mori font-semibold rounded-b-2xl mx-6"
          >
           {/* ... mobile links ... */}
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
                className="flex flex-row items-center border border-[#D0D0D0] hover:border-transparent hover:bg-[#161616] px-4 py-3 rounded-lg transition"
              >
                Book a Call{" "}
                <span className="ml-3">
                  <ArrowUp />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}