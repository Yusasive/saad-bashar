"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlternativeMouse } from "./homepage/Iconts";

type StickyButtonProps = {
  onNavigate: (section: string) => void;
};

export default function StickyButton({ onNavigate }: StickyButtonProps) {
  const pathname = usePathname();
  const sections = ["hero", "project", "design", "prefooter"];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (pathname !== "/") return null;

  const handleClick = () => {
    const section = sections[currentIndex];
    onNavigate(section);
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed z-10 bottom-60 left-6 md:left-12 text-[#F3F3F3] text-base font-semibold rounded-lg shadow-lg flex transition-all"
    >
      <span>
        <AlternativeMouse />
      </span>
    </button>
  );
}
