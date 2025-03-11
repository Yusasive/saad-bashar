"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return <p className="text-white text-2xl text-center py-72">Loading projects...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6 md:p-12 bg-[#0F0F0F] mt-20">
      <h1 className="text-[#F3F3F3] text-5xl font-semibold font-mori pb-6">
        Projects
      </h1>
      <p className="text-[#F3F3F3] text-[44px] font-normal pt-3 pb-24">
        Creating meaningful connections, crafting intuitive <br /> experiences,
        and driving business success. One Project at a time.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project._id}>
            <div className="rounded-2xl border border-[#CDCDCD33] p-6 space-y-4 pt-8">
              <div className="flex flex-row justify-between">
                <p className="text-4xl text-[#F3F3F3] font-mori">
                  {project.title}
                </p>
                <Link href={`/projects/${project._id}`}>
                  <Image
                    src={Arrow}
                    alt="Arrow"
                    width={23}
                    height={23}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-2xl text-[#CDCDCD] font-semibold font-mori">
                  {project.categories.join(" • ")}
                </p>
                <p className="text-[28px] text-[#CDCDCD] font-semibold font-mori">
                  {project.year}
                </p>
              </div>
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1366}
                  height={713}
                />
              </div>
            </div>
            <div className="py-6">
              <p className="text-[#F3F3F3] text-2xl font-normal">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
