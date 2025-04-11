"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUp } from "@/components/SvgLogo";
import Link from "next/link";
import projectData from "@/public/data/product.json";

interface Project {
  _id: string;
  title: string;
  categories: string[];
  year: number;
  image: string;
  description: string;
}

export default function ProjectOverview() {
  const [projects] = useState<Project[]>(projectData);

  return (
    <motion.div
      className="p-6 md:p-12 bg-[#0F0F0F] mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-[#F3F3F3] text-3xl md:text-5xl font-semibold font-mori py-2 md:py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Projects
      </motion.h1>
      <motion.p
        className="text-[#F3F3F3] text-2xl md:text-[44px] font-normal pt-3 pb-12 md:pb-24 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Creating meaningful connections, crafting intuitive <br /> experiences,
        and driving business success. One Project at a time.
      </motion.p>

      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={`/projects/${project._id}`}>
              <motion.div
                className="rounded-2xl border border-[#CDCDCD33] p-6 space-y-4 pt-8"
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex flex-row items-center justify-between">
                  <p className="text-xl md:text-4xl text-[#F3F3F3] font-normal">
                    {project.title}
                  </p>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ArrowUp />
                  </motion.div>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-lg md:text-2xl text-[#CDCDCD] font-semibold font-mori">
                    {project.categories.join(" • ")}
                  </p>
                  <p className="text-lg md:text-[28px] text-[#CDCDCD] font-semibold font-mori">
                    {project.year}
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1366}
                    height={713}
                    priority
                    className="w-full"
                  />
                </motion.div>
              </motion.div>
            </Link>

            <motion.div
              className="py-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-[#F3F3F3] text-base md:text-2xl font-normal w-[75%]">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
