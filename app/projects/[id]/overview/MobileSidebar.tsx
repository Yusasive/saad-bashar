
"use client";

import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

interface Section {
  id: string;
  label: string;
}

interface MobileStepperProps {
  sections: Section[];
}

const MobileStepper: React.FC<MobileStepperProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // State to track completed sections (sections before the active one)
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let potentialActive: string | null = null;
        let maxRatio = 0;

        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            potentialActive = entry.target.id;
          }
        });

        if (potentialActive && potentialActive !== activeSection) {
          setActiveSection(potentialActive);
        } else if (maxRatio === 0 && !entries.some(e => e.isIntersecting) && activeSection !== null) {
          // Optional: Keep last active state or clear it
          // setActiveSection(null);
        }
      },
      {
        rootMargin: "-10% 0px -50% 0px",
        threshold: [0, 0.1, 0.5, 0.9, 1.0]
      }
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) observer.observe(sectionElement);
      else console.warn(`MobileStepper: Element with ID "${section.id}" not found.`);
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) observer.unobserve(sectionElement);
      });
      observer.disconnect();
    };
  }, [sections, activeSection]);

  // --- Effect to Update Completed Sections ---
  useEffect(() => {
    const newCompleted = new Set<string>();
    if (activeSection) {
      const activeIndex = sections.findIndex(s => s.id === activeSection);
      // Mark all sections *before* the active one as completed
      for (let i = 0; i < activeIndex; i++) {
        newCompleted.add(sections[i].id);
      }
    }
    // Only update if the set has actually changed
    if (newCompleted.size !== completedSections.size || ![...newCompleted].every(id => completedSections.has(id))) {
        setCompletedSections(newCompleted);
    }
  }, [activeSection, sections, completedSections]); // Depend on completedSections to prevent loop if set is same

  // --- Smooth Scroll onClick Handler ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        e.preventDefault();
        const stepperHeight = 60; // Estimate height of this stepper component
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = window.pageYOffset + elementPosition - stepperHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        // Manually set active state for immediate feedback (optional, observer will catch up)
        setActiveSection(sectionId);
    }
  };

  return (
    <nav className="block lg:hidden sticky top-[5.2rem] left-0 right-0 bg-[#0f0f0f] py-4 px-2 sm:px-4 z-40 border-b border-gray-700/50 mx-6">
      <div className="flex items-start justify-center w-full">
        {sections.map((section, index) => {
          const isCompleted = completedSections.has(section.id);
          const isActive = activeSection === section.id;

          const isPrevStepCompleted = index > 0 && completedSections.has(sections[index - 1].id);
          const isPrevStepActive = index > 0 && activeSection === sections[index-1].id; // Check if previous step is the active one

          return (
            <div key={section.id} className="relative">
              {index > 0 && (
                <div className={`w-full absolute bottom-8 right-8 -z-10 h-[2px] ${
                  isPrevStepCompleted || isPrevStepActive ? 'bg-[#1E1E1E]' : 'bg-[#CDCDCD]'
                  }`}>
                </div>
              )}

              <a
                href={`#${section.id}`}
                onClick={(e) => handleScroll(e, section.id)}
                className="flex flex-col items-center flex-shrink-0 mx-2 sm:mx-3 cursor-pointer" 
              >
                {/* Circle Indicator */}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isCompleted ? 'bg-gray-700 text-white'
                    : isActive ? 'bg-gray-300'
                    : 'bg-gray-300'
                    }`}
                >
                  {isCompleted ? (
                    <FaCheck className="w-6 h-6 bg-[#1E1E1E] p-[5px] rounded-full text-white" /> 
                  ) : isActive ? (
                    <LuDot className="w-2.5 h-2.5 bg-[#000] p-[5px] rounded-full text-black" /> 
                  ) : (
                    null
                  )}
                </div>

                {/* Label */}
                <span className={`mt-1.5 text-xs text-center whitespace-nowrap ${
                    isActive || isCompleted ? 'text-gray-200 font-medium' : 'text-gray-500'
                    }`}
                >
                  {section.label}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileStepper;