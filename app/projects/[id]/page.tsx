"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Building, Tags } from "@/components/SvgLogo";
import { BackArrow } from "@/components/homepage/Iconts";
import StickyButton from "@/components/HomeButton";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";
// import { SecondImgProject } from "@/components/HomeButton";
import SecImg from "../../../public/secprojectimg.svg";
interface Project {
  _id: string;
  title: string;
  subTitle: string;
  year: number;
  image: string;
  companyLogo: string;
  website: string;
  buttonWord: string;
  overview: string;
  users: string;
  timeline: string;
  role: string;
  collaborators: string;
  categories: string[];
}

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchWithTimeout("/data/product.json", {
          timeout: 8000,
          retries: 2,
        });
        const data: Project[] = await res.json();
        const found = data.find((proj) => proj._id === id);
        setProject(found ?? null);
        if (!found) {
          setError("Project not found");
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load project. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <motion.div
        className="min-h-screen bg-[#111112] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white text-xl">Loading project...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="min-h-screen bg-[#111112] flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-4">
          <p className="text-red-500 text-xl">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#34C759] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2FB04A] transition-colors"
          >
            Retry
          </button>
        </div>
      </motion.div>
    );
  }

  if (!project) {
    return (
      <motion.div
        className="min-h-screen bg-[#111112] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-4">
          <p className="text-white text-xl">Project not found.</p>
          <Link
            href="/projects"
            className="text-[#34C759] hover:underline"
          >
            Back to Projects
          </Link>
        </div>
      </motion.div>
    );
  }

  const handleMouseClick = () => {
    if (project?._id === "2") {
      router.push(
        "https://www.behance.net/gallery/213097111/Student-Savings-Investment-Mobile-Application"
      );
      return;
    }
    router.push(`/projects/${project._id}/overview/${project.overview}`);
  };

  return (
    <>
      <motion.div
        className="py-8 bg-[#111112] px-6 flex justify-start"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/projects"
          className="flex flex-row items-center text-center text-[16px] md:text-2xl text-[#F3F3F3] font-normal font-mori mt-28"
        >
          <BackArrow /> <span className="ml-6">Back to Projects</span>
        </Link>
      </motion.div>

      <motion.div
        className="p-6 py-14 bg-[#111112]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
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
              className="flex items-center justify-between -mt-12"
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
                // target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E1E1E] text-[#F3F3F3] text-lg font-semibold px-4 py-3 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {project.buttonWord}
              </motion.a>
            </motion.div>

            <motion.h1
              className="text-[#F3F3F3] text-3xl md:text-5xl font-mori font-semibold md:leading-[50px] lg:leading-[64px]"
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
                <span className="mr-1.5">
                  <Tags />
                </span>
                {project.categories.map((category, index) => (
                  <span key={index} className="flex gap-2 items-center">
                    {category}
                    {index < project.categories.length - 1 && (
                      <span className="ml-3">
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
        {project._id === "2" && (
          <div className="text-white mt-24 md:mt-36">
            <p className="text-[15px] md:text-[20px] w-full md:w-[85%] lg:w-[70%]">
              Doshup, from the word &apos;Dosh&apos; a British slang originating
              from the ancient 1950&apos;s which implies money and
              &apos;Up&apos; the increasing upward trajectory we envisioned for
              our users. It is a student savings mobile solution meant to cater
              for the needs of higher education students. It has been identified
              that higher institution students are{" "}
              <span className="text-[#12E47F]">
                the category of people who have the highest propensity of
                crashing into financial crises after leaving school.
              </span>{" "}
              Hence, the need for a long term savings platform to help salvage
              this situation.
            </p>
            <div className="flex flex-col items-center justify-center w-full h-auto mt-6">
              {/* <SecondImgProject /> */}
              <Image
                src={SecImg}
                alt="Description of Doshup screens"
                width={1515}
                height={810}
              />
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        className="flex items-center justify-center py-8 bg-[#111112]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* <motion.button>      */}
        <StickyButton onClick={handleMouseClick} />
        {/* </motion.button> */}
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
      <span className="text-[18px] md:text-xl text-[#F3F3F3]">{value}</span>
    </motion.p>
  );
}
