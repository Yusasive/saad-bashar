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

export default function ProjectOverview() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("data/product.json");
        if (!res.ok) throw new Error("Failed to load projects");
        const data: Project[] = await res.json();
        setProjects(data.slice(0, 2));
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
      className="p-6 md:p-12 bg-[#0F0F0F]"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[#F3F3F3] text-3xl md:text-5xl font-semibold font-mori pb-6"
      >
        Projects
      </motion.h1>

      {loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400"
        >
          Loading...
        </motion.p>
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-red-500"
        >
          {error}
        </motion.p>
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
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="rounded-2xl border border-[#CDCDCD33] p-6 space-y-4 pt-8"
            >
              <div className="flex flex-row justify-between">
                <p className="text-2xl md:text-4xl text-[#F3F3F3] font-mori">
                  {project.title}
                </p>
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15, transition: { duration: 0.2 } }}
                >
                  <Image src={Arrow} alt="Arrow" width={23} height={23} />
                </motion.div>
              </div>

              <div className="flex flex-row justify-between">
                <p className="text-lg md:text-2xl text-[#CDCDCD] font-semibold font-mori space-x-1">
                  {project.categories.map((cat, index) => (
                    <span key={index}>
                      {cat} {index < project.categories.length - 1 && "•"}
                    </span>
                  ))}
                </p>
                <p className="text-xl md:text-[28px] text-[#CDCDCD] font-semibold font-mori">
                  {project.year}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1366}
                  height={713}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        className="flex justify-center items-center py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link href="/projects">
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-row items-center text-[#F3F3F3] text-sm md:text-xl font-normal font-mori border border-[#D0D0D0] rounded-lg px-6 py-4"
          >
            View More{" "}
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.2,
              }}
              className="ml-2"
            >
              <ArrowUp />
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
