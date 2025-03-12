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
}

export default function ProjectOverview() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/posts"); 
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6 md:p-12 bg-[#0F0F0F]">
      <h1 className="text-[#F3F3F3] text-3xl md:text-5xl font-semibold font-mori pb-6">
        Projects
      </h1>

      {/* Loading and Error Handling */}
      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Projects List */}
      {!loading && !error && projects.length > 0 && (
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl border border-[#CDCDCD33] p-6 space-y-4 pt-8"
            >
              <div className="flex flex-row justify-between">
                <p className="text-2xl md:text-4xl text-[#F3F3F3] font-mori">
                  {project.title}
                </p>
                <p>
                  <Image src={Arrow} alt="Arrow" width={23} height={23} />
                </p>
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
              <div>
                <Image
                  src={project.image} // Ensure your API provides a valid image URL
                  alt={project.title}
                  width={1366}
                  height={713}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center py-8">
        <Link href="/projects">
          <button className="text-[#F3F3F3] text-sm md:text-xl font-normal font-mori border border-[#D0D0D0] rounded-lg px-6 py-4">
            View More ↗
          </button>
        </Link>
      </div>
    </div>
  );
}
