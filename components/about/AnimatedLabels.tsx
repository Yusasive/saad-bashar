'use client'

import { useState, useEffect } from "react";
// Add AnimatePresence to your import
import { motion, AnimatePresence } from "framer-motion";
import { Mobile, Interface, Arrow } from "./Icon";
import { IoMdPerson } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
// import { Userexperience } from "./Icon";
import { RiPagesLine } from "react-icons/ri";

export default function LabelAnimation() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const labels = [
    // ... your labels array remains the same
    {
      icon: <RiPagesLine />,
      text: "landing pages",
      color: "bg-[#2F4234] text-[#34C759]",
      x: isMobile ? -50 : -200,
      y: isMobile ? -50 : -100,
      rotate: isMobile ? -20 : -44,
    },
    {
      icon: <TbWorld />,
      text: "web apps",
      color: "bg-[#412D2B] text-[#FF3B30]",
      x: isMobile ? 50 : 110,
      y: isMobile ? -50 : -90,
      rotate: isMobile ? 20 : 38,
    },
    {
      icon: <Interface />,
      text: "user interface",
      color: "bg-[#47412C] text-[#FFCC00]",
      x: isMobile ? -50 : -100,
      y: isMobile ? 50 : 90,
      rotate: isMobile ? 15 : 10,
    },
    {
      icon: <Mobile />,
      text: "mobile apps",
      color: "bg-[#36293D] text-[#AF52DE]",
      x: isMobile ? 50 : 200,
      y: isMobile ? 50 : 110,
      rotate: isMobile ? -15 : -30,
    },
  ];

  return (
    <div className="relative bg-[] flex justify-center items-center w-full md:h-[570px] h-[400px]">
      {/* SVG Background */}
      <motion.svg
        // ... props remain the same
        className="absolute"
        width={isMobile ? "370" : "754"}
        height={isMobile ? "290" : "572"}
        viewBox="0 0 754 572"
        initial={{ rotate: 0, x: isMobile ? 10 : 30 }}
        animate={{
          rotate: expanded ? -10 : 0,
          x: expanded ? (isMobile ? 30 : 60) : isMobile ? 30 : 60,
          y: expanded ? (isMobile ? 10 : 20) : isMobile ? 10 : 20,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ... svg content remains the same */}
         <rect
          x="41.5348"
          y="56.9037"
          width="538"
          height="364"
          rx="6"
          stroke="white"
          strokeWidth="4"
        />
        <rect
          x="53.6871"
          y="103.865"
          width="514"
          height="305"
          rx="6"
          stroke="white"
          strokeWidth="4"
        />
        <circle
          cx="60.9091"
          cy="79.8411"
          r="8.33125"
          stroke="white"
          strokeWidth="1.9375"
        />
        <circle
          cx="82.6093"
          cy="79.7708"
          r="8.33125"
          stroke="white"
          strokeWidth="1.9375"
        />
        <circle
          cx="104.309"
          cy="79.7005"
          r="8.33125"
          stroke="white"
          strokeWidth="1.9375"
        />
      </motion.svg>

      {/* Animated Labels */}
      {labels.map((label, index) => (
        <motion.div
          key={index}
          // ... props remain the same
          className={`flex items-center justify-center gap-2 absolute rounded-lg w-[372px] shadow-lg ${label.color}
            md:text-[44px] font-semibold`} // Smaller font for mobile
          initial={{ scale: 0.5, opacity: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            scale: expanded ? 1 : 0.5,
            opacity: expanded ? 1 : 0,
            x: expanded ? label.x : 0,
            y: expanded ? label.y : 0,
            rotate: expanded ? label.rotate : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <span className="text-[44px]">{label.icon}</span>
          <span>{label.text}</span>
        </motion.div>
      ))}

      {/* --- User Experience Divs --- */}
      {/* Use AnimatePresence to manage the transition */}
      <AnimatePresence mode="wait">
        {expanded ? (
          // Show the FIRST div when expanded is true
          <motion.div
            key="simple-ux" // Unique key for AnimatePresence
            className="absolute px-2 md:px-6 md:py-3 rounded-lg shadow-lg text-[#007AFF] md:text-[44px] font-semibold bg-[#3C4C5C] z-10"
            initial={{ opacity: 0, scale: 1.0 }} // Start faded out, at non-expanded scale
            animate={{ opacity: 1, scale: 0.6 }} // Fade in, animate to expanded scale (0.6)
            exit={{ opacity: 0, scale: 1.0 }} // Fade out, animate back to non-expanded scale (1.0)
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <span className="flex items-center z-40">
              <span className="mr-2 ">
                <span className="text-[44px]">
                  <IoMdPerson />
                </span>
              </span>{" "}
              user experience
            </span>
          </motion.div>
        ) : (
          // Show the SECOND div when expanded is false (initial state)
          <motion.div
            key="complex-ux" // Unique key for AnimatePresence
            className="absolute px-2 md:px-6 md:py-3 rounded-lg shadow-lg text-[#007AFF] md:text-[44px] font-semibold z-10" // Removed bg-[] - add a background if needed
            initial={{ opacity: 0, scale: 0.6 }} // Start faded out, at expanded scale
            animate={{ opacity: 1, scale: 1.0 }} // Fade in, animate to non-expanded scale (1.0)
            exit={{ opacity: 0, scale: 0.6 }} // Fade out, animate back to expanded scale (0.6)
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative">
              {/* The layered spans */}
              <span className="flex items-center rounded-lg px-1 absolute rotate-6 bg-red-500 top-2 left-0 right-0 z-0 opacity-50 ">
                 <span className="mr-2">
                   <span className="text-[44px] text-transparent "> <IoMdPerson /></span>
                 </span>{" "}
                 <span className="text-transparent">user experience</span>
              </span>
              <span className="flex items-center rounded-lg px-1 absolute -rotate-6 bg-[#47412C] top-2 left-0 right-0 z-0 opacity-50 ">
                 <span className="mr-2">
                   <span className="text-[44px] text-transparent"> <IoMdPerson /></span>
                 </span>{" "}
                 <span className="text-transparent">user experience</span>
              </span>
              <span className="flex items-center rounded-lg px-1 absolute -rotate-12 bg-[#36293D] top-2 left-0 right-0 z-0 opacity-50 ">
                 <span className="mr-2">
                   <span className="text-[44px] text-transparent"> <IoMdPerson /></span>
                 </span>{" "}
                 <span className="text-transparent">user experience</span>
              </span>
              {/* The main visible span */}
              <span className="flex items-center relative z-50 bg-[#3C4C5C] w-full rounded-lg px-1 py-2"> {/* Added bg color */}
                <span className="mr-2">
                  <span className="text-[44px]"> <IoMdPerson /></span>
                </span>{" "}
                user experience
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- End User Experience Divs --- */}


      {/* "Saad Bashar" Label */}
      <motion.div
        // ... props remain the same
        className="absolute px-6 py-3 rounded-lg shadow-lg text-[#CDCDCD] md:text-[22px] text-[16px] font-semibold"
        initial={{ rotate: 0, x: 30 }}
        animate={{
          rotate: expanded ? 15 : 0,
          x: expanded ? (isMobile ? 40 : 180) : isMobile ? 40 : 180,
          y: expanded ? (isMobile ? 100 : 170) : isMobile ? 100 : 170,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="flex items-center">
          <span className="mr-2 ">
            <Arrow />
          </span>
          <span className="border border-[#CDCDCD] px-1"> Saad Bashar</span>
        </span>
      </motion.div>
    </div>
  );
}