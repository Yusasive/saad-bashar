"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import coolicon from "@/public/icons/coolicon.png";
import Vector from "@/public/icons/Vector.png";

interface Project {
  _id: string;
  title: string;
  categories: string[];
  year: number;
  image: string;
  users: string;
  timeline: string;
  role: string;
  collaborators: string;
  description: string;
  companyLogo: string;
  website: string;
}

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (loading)
    return (
      <p className="text-white text-2xl text-center py-72">
        Loading project...
      </p>
    );
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (!project)
    return <p className="text-white text-center py-52">Project not found.</p>;

  return (
    <>
      <div className="py-8 bg-[#111112] mt-20 px-6 md:px-12">
        <Link
          href="/projects"
          className="text-2xl text-[#F3F3F3] font-normal font-mori"
        >
          ⇽ Back to Projects
        </Link>
      </div>
      <div className="p-6 md:p-12 bg-[#111112]">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-center">
              <Image
                src={project.companyLogo}
                alt={project.title}
                width={102}
                height={72}
                className="object-contain"
              />
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E1E1E] text-[#F3F3F3] text-lg font-semibold px-4 py-3 rounded-lg"
              >
                View Website
              </a>
            </div>

            <h1 className="text-[#F3F3F3] text-3xl md:text-5xl font-mori font-semibold">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-[#F3F3F3] font-semibold">
              <p className="flex space-x-2 text-base">
                <Image src={Vector} alt="Vector" width={16.67} height={16.67} />{" "}
                {project.year}
              </p>
              <p className="flex space-x-2 text-base">
                {" "}
                <Image
                  src={coolicon}
                  alt="coolicon"
                  width={15.76}
                  height={15.76}
                />
                {project.categories.join(" • ")}
              </p>
            </div>

            <div className="space-y-5">
              <Detail label="Users" value={project.users} />
              <Detail label="Timeline" value={project.timeline} />
              <Detail label="Role" value={project.role} />
              <Detail label="Collaborators" value={project.collaborators} />
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full md:w-1/2">
            <Image
              src={project.image}
              alt={project.title}
              width={724}
              height={543}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex flex-col">
      <span className="text-base text-[#CDCDCD]">{label}</span>
      <span className="text-xl text-[#F3F3F3]">{value}</span>
    </p>
  );
}
