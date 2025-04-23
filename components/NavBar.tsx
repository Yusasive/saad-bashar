"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import FaceLogo from "@/public/images/projects/FaceLogo.png";
import { ArrowUp } from "@/components/SvgLogo"; // Assuming ArrowUp is your desired icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for the arrow rotation
  const arrowVariants = {
    initial: {
      rotate: 0, // Default state (assuming ArrowUp points straight up or slightly up-right)
      transition: { duration: 0.3 }
    },
    hover: {
      rotate: 45, // Rotated state (points more towards the right)
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-4 w-full z-50"
    >
      {/* Main Content Area */}
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
        <div style={{fontWeight: '400'}} className="hidden md:flex items-center space-x-4 lg:space-x-6 text-[#CDCDCD] text-xl font-mori font-[400]">
          {/* Standard Links */}
          {["Projects", "About", "Contact", "Resume"].map((item) => (
            <motion.div key={item} className="hover:text-gray-300">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}

          {/* LinkedIn Link with Rotating Arrow */}
          <motion.a
            href="https://www.linkedin.com/in/saadbashar/"
            target="_blank"
            className="flex flex-row items-center hover:text-gray-300" // Apply hover styling here too
            initial="initial" // Set initial variant state for the link container
            whileHover="hover" // Trigger 'hover' variant state on link hover
          >
            LinkedIn{" "}
            <motion.span
              className="ml-3 inline-block" // Use inline-block for transform to work
              variants={arrowVariants} // Apply the variants to the arrow's wrapper
            >
              <ArrowUp />
            </motion.span>
          </motion.a>

          {/* Book a Call Link with Rotating Arrow */}
          <motion.div // Use motion.div as the hover target for the Link inside
            initial="initial"
            whileHover="hover"
            className="ml-0 lg:ml-[24px]" // Keep margin here or on Link as preferred
          >
            <Link
              target="_blank"
              href="https://cal.com/saadbashar/15min?user=saadbashar"
              className="flex flex-row items-center border border-[#D0D0D0] hover:border-transparent hover:bg-[#161616] px-4 py-3 rounded-lg transition-all duration-500 ease-in-out" // Hover styles on the Link itself
            >
              Book a Call{" "}
              <motion.span
                className="ml-3 inline-block" // Use inline-block for transform to work
                variants={arrowVariants} // Apply the variants to the arrow's wrapper
              >
                <ArrowUp />
              </motion.span>
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

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-[#f3f3f3] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%`, transformOrigin: 'left' }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-[#0F0F0F] border-x border-b border-[#CDCDCD33] py-6 flex flex-col items-center space-y-10 text-[#CDCDCD] text-xl font-mori font-[400] rounded-b-2xl mx-6"
          >
            {["Projects", "About", "Contact", "Resume"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300"
              >
                {item}
              </Link>
            ))}
            {/* Mobile LinkedIn (already had rotation logic, keeping it) */}
            <motion.a
              href="https://www.linkedin.com/in/saadbashar/"
              target="_blank"
              className="flex flex-row items-center "
              initial="initial" // Added for consistency if desired, though hover isn't the primary interaction on mobile
              whileHover="hover" // Can keep for devices that support hover
            >
              <span className="mr-2">LinkedIn{" "}</span>
              <motion.span
                variants={arrowVariants}
                className="inline-block"
              >
                <ArrowUp />
              </motion.span>
            </motion.a>
            {/* Mobile Book a Call */}
             <motion.div // Apply hover logic here too if desired for mobile/tablets
                initial="initial"
                whileHover="hover"
             >
              <Link
                target="_blank"
                href="https://cal.com/saadbashar/15min?user=saadbashar"
                onClick={() => setIsOpen(false)} // Close menu on click
                className="flex flex-row items-center border border-[#D0D0D0] hover:border-transparent hover:bg-[#1E1E1E] px-4 py-3 rounded-lg transition"
              >
                Book a Call{" "}
                <motion.span // Wrap arrow for animation
                    className="ml-3 inline-block"
                    variants={arrowVariants}
                >
                  <ArrowUp />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}