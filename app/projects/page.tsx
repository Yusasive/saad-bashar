"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { ArrowUp } from "@/components/SvgLogo";
import Arrow from "@/public/images/projects/Vector.png";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  categories: string[];
  year: number;
  image: string;
  description: string;
}

export default function ProjectOverview() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/product.json");
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

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 } // Zoom in on hover (adjust value as needed)
  };
  
  const arrowVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 45 } // Rotate on hover (adjust value as needed)
  };

  // Define a transition for smoothness
const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <motion.div
      className="p-6 pb-10 bg-[#0F0F0F]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-[#F3F3F3] text-[32px] md:text-5xl font-semibold font-mori py-2 mt-20 md:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Projects
      </motion.h1>
      <motion.p
        className="text-[#F3F3F3] text-2xl md:text-[44px] leading-[24px] md:leading-[60px] font-[400] pt-3 pb-12 md:pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Creating meaningful connections, crafting intuitive experiences,
        and driving business success. One Project at a time.
      </motion.p>

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
              className="block group"
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
              <p className="text-white text-[12px] sm:text-[16px] md:text-[24px] mt-4">{project.description}</p>
            </Link>
          ))}
        </motion.div>
    </motion.div>
  );
}
