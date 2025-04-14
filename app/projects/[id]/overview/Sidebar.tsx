"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface SidebarProps {
  sections: { id: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6  } 
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="w-64 h- bg-[#111112] absolute top-0 left-0 py-32 z-50">
      <nav className="space-y-10 p-4">
        <h1 className="text-xl font-semibold text-[#F3F3F3] pl-2">Overview</h1>
        <ul className="space-y-5">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`block px-2 py-1 rounded ${
                  activeSection === section.id
                    ? "text-[#F3F3F3] font-semibold  text-xl"
                    : "text-[#CDCDCD] font-normal  text-xl"
                }`}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
