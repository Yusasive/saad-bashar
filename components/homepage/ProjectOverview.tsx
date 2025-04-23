"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Arrow from "@/public/images/projects/Vector.png";
import { ArrowUp } from "@/components/SvgLogo";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  categories: string[];
  year: number;
  image: string;
}

// Define variants for children animations
// (Keep these as they are)
const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 } // Zoom in on hover (adjust value as needed)
};

const arrowVariant2 = {
  initial: {
    rotate: 0, // Default state (assuming ArrowUp points straight up or slightly up-right)
    transition: { duration: 0.3 }
  },
  hover: {
    rotate: 45, // Rotated state (points more towards the right)
    transition: { duration: 0.3 }
  }
};

const arrowVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 45 } // Rotate on hover (adjust value as needed)
};

// Define a transition for smoothness
const transition = { duration: 0.3, ease: "easeInOut" };

export default function ProjectOverview() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/product.json"); // Use absolute path from public folder if needed
        if (!res.ok) throw new Error("Failed to load projects");
        const data: Project[] = await res.json();
        setProjects(data.slice(0, 3));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 pt-2 bg-[#0F0F0F]"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[#F3F3F3] text-3xl md:text-5xl font-semibold font-mori pt-16 md:pt-10 pb-4"
      >
        Projects
      </motion.h1>

      {/* Loading and Error States */}
      {loading && (
        <motion.p /* ... */ className="text-gray-400">Loading...</motion.p>
      )}
      {error && (
        <motion.p /* ... */ className="text-red-500">{error}</motion.p>
      )}

      {!loading && !error && projects.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="space-y-8"
        >
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project._id}`}
              className="block group sticky top-28"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="rest"
                whileHover="hover"
                animate="visible"
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="rounded-2xl border border-[#CDCDCD33] p-6 space-y-4 pt-8 bg-[#0F0F0F] overflow-hidden" // Keep overflow-hidden here
              >
                 <div className="flex flex-row justify-between items-center mb-4">
                   <p className="text-2xl md:text-4xl text-[#F3F3F3]">
                     {project.title}
                   </p>
                   <motion.div
                     variants={arrowVariants}
                     transition={transition}
                   >
                     <Image src={Arrow} alt="Arrow" width={23} height={23} className="block" />
                   </motion.div>
                 </div>

                 <div className="flex flex-row justify-between mb-4">
                    <p className="text-lg md:text-2xl text-[#CDCDCD] font-semibold font-mori space-x-1">
                     {project.categories.map((cat, index) => (
                       <span
                         key={index}
                         className="inline-flex items-center space-x-1"
                       >
                         <span>{cat}</span>
                         {index < project.categories.length - 1 && (
                           <span className="text-[#CDCDCD73]">•</span>
                         )}
                       </span>
                     ))}
                   </p>
                   <p className="text-xl md:text-[28px] text-[#CDCDCD] font-semibold font-mori">
                     {project.year}
                   </p>
                 </div>
                 
                 <div className="overflow-hidden rounded-[24px]"> {/* Keep these */}
                   <motion.div
                     variants={imageVariants}
                     transition={transition}
                   >
                     <Image
                       src={project.image}
                       alt={project.title}
                       width={1366}
                       height={713}
                       className="w-full block transform" 
                     />
                   </motion.div>
                 </div>

              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}

      {/* View More Button */}
      <motion.div
        className="flex justify-center items-center py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link href="/projects">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex flex-row items-center text-[#F3F3F3] text-sm md:text-xl border border-[#D0D0D0] hover:border-transparent hover:bg-[#161616] rounded-lg px-6 py-4 transition-all duration-500 ease-in-out"
          >
            View More
            <motion.span
             variants={arrowVariant2} 
              initial={{ y: 0 }} className="ml-2">
              <ArrowUp />
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}