"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Building, Tags, Mouse } from "@/components/SvgLogo";
import projectData from "@/public/data/product.json";


export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();

  const project = projectData.find((proj) => proj._id === id);

  if (!project)
    return (
      <motion.p
        className="text-white text-center py-52"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Project not found.
      </motion.p>
    );

  const handleMouseClick = () => {
    router.push(`/projects/${project._id}/overview/${project.overview}`);
  };

  return (
    <>
      <motion.div
        className="py-8 bg-[#111112] mt-20 px-6 md:px-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/projects"
          className="text-2xl text-[#F3F3F3] font-normal font-mori"
        >
          ⇽ Back to Projects
        </Link>
      </motion.div>

      <motion.div
        className="p-6 md:p-12 bg-[#111112]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              className="flex justify-between items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Image
                src={project.companyLogo}
                alt={project.subTitle}
                width={102}
                height={72}
                className="object-contain"
              />
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E1E1E] text-[#F3F3F3] text-lg font-semibold px-4 py-3 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {project.buttonWord}
              </motion.a>
            </motion.div>

            <motion.h1
              className="text-[#F3F3F3] text-3xl md:text-5xl font-mori font-semibold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {project.subTitle}
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-4 text-[#F3F3F3] font-semibold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="flex flex-row items-center space-x-2 text-base">
                <span className="mr-1.5">
                  <Clock />
                </span>
                {project.year}
              </p>
              <p className="flex flex-row items-center text-base">
                <span className="mr-2">
                  <Tags />
                </span>
                {project.categories.map((category, index) => (
                  <span key={index} className="flex space-x-2 items-center">
                    {category}
                    {index < project.categories.length - 1 && (
                      <span className="mx-3">
                        <Building />
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </motion.div>

            <motion.div className="space-y-5">
              <Detail label="Users" value={project.users} />
              <Detail label="Timeline" value={project.timeline} />
              <Detail label="Role" value={project.role} />
              <Detail label="Collaborators" value={project.collaborators} />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.subTitle}
              width={724}
              height={543}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center py-8 bg-[#111112]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.button
          onClick={handleMouseClick}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Mouse />
        </motion.button>
      </motion.div>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <motion.p
      className="flex flex-col"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-base text-[#CDCDCD]">{label}</span>
      <span className="text-xl text-[#F3F3F3]">{value}</span>
    </motion.p>
  );
}
