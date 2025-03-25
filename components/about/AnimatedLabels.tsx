"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mobile, Webs, Experience, Interface, Landing, Arrow } from "./Icon";

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
    {
      icon: <Landing />,
      text: "landing pages",
      color: "bg-[#2F4234] text-[#34C759]",
      x: isMobile ? -50 : -110,
      y: isMobile ? -50 : -90,
      rotate: isMobile ? -20 : -40,
    },
    {
      icon: <Webs />,
      text: "web apps",
      color: "bg-[#412D2B] text-[#FF3B30]",
      x: isMobile ? 50 : 110,
      y: isMobile ? -50 : -90,
      rotate: isMobile ? 20 : 40,
    },
    {
      icon: <Interface />,
      text: "user interface",
      color: "bg-[#47412C] text-[#FFCC00]",
      x: isMobile ? -50 : -100,
      y: isMobile ? 50 : 110,
      rotate: isMobile ? 15 : 30,
    },
    {
      icon: <Mobile />,
      text: "mobile apps",
      color: "bg-[#36293D] text-[#AF52DE]",
      x: isMobile ? 50 : 110,
      y: isMobile ? 50 : 110,
      rotate: isMobile ? -15 : -30,
    },
  ];

  return (
    <div className="relative flex justify-center items-center w-full md:h-[570px] h-[400px]">
      {/* SVG Background */}
      <motion.svg
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
          className={`flex items-center absolute px-2 md:px-6 md:py-3 rounded-lg shadow-lg ${label.color} 
            md:text-[44px] text-lg font-semibold`} // Smaller font for mobile
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
          <span className="text-lg">{label.icon}</span> {label.text}
        </motion.div>
      ))}

      {/* "user experience" Label (Main) */}
      <motion.div
        className="absolute px-2 md:px-6 md:py-3 rounded-lg shadow-lg text-[#007AFF] md:text-[44px] text-lg font-semibold bg-[#3C4C5C] z-10"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: expanded ? 0.6 : 1.0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="flex items-center">
          <span className="mr-2 ">
            <span className="text-lg ">
              {" "}
              <Experience />
            </span>
          </span>{" "}
          user experience
        </span>
      </motion.div>

      {/* "Saad Bashar" Label */}
      <motion.div
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
