"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface SidebarProps {
  sections: { id: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // --- logActive helper REMOVED ---

    const observer = new IntersectionObserver(
      (entries) => {
        let potentialActive: string | null = null;
        let maxRatio = 0;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              potentialActive = entry.target.id;
            }
          }
        });

        // If the most visible section changed, update the state directly
        if (potentialActive !== activeSection) {
          // --- Call setActiveSection directly ---
          setActiveSection(potentialActive);
          // console.log(`Setting active: ${potentialActive}`); // You can still log here if needed
        }
        // Optional: Handle case where nothing is intersecting if needed
        // else if (maxRatio === 0 && activeSection !== null && !entries.some(e => e.isIntersecting)) {
        //   setActiveSection(null); // Example: clear active state
        // }

      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) observer.observe(sectionElement);
      else console.warn(`Sidebar: Element with ID "${section.id}" not found.`);
    });

    return () => {
       sections.forEach((section) => {
         const sectionElement = document.getElementById(section.id);
         if (sectionElement) observer.unobserve(sectionElement);
       });
       observer.disconnect();
    };
  }, [sections, activeSection]); // Keep activeSection dependency

  // ... rest of the component (return statement) remains the same ...

  return (
    <aside className="w-[360px] flex-shrink pr-20 pl-6 bg-[#111112] sticky top-0 self-start py-32 z-30 h-screen rounded-br-xl mb-10">
      <nav className="flex flex-col justify-start space-y-10">
        <h1 className="text-xl font-semibold text-[#F3F3F3] pl-2">Overview</h1>
        <ul className="space-y-5">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`px-2 py-1 rounded transition-all duration-200 flex gap-1 justify-start ${
                  activeSection === section.id
                    ? "text-[#F3F3F3] font-semibold text-xl"
                    : "text-[#CDCDCD] hover:text-[#E0E0E0] font-normal text-xl"
                }`}
                onClick={(e) => {
                    const targetElement = document.getElementById(section.id);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }}
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