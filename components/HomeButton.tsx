"use client";
import { usePathname } from "next/navigation";

export default function StickyButton() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <a href="https://cal.com/saadbashar/15min?user=saadbashar" target="_blank">
      {" "}
      <button className="fixed bottom-32 right-6 md:right-12 bg-[#1E1E1E] hover:bg-[#404040] text-[#F3F3F3] text-base font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-all">
        <span>View Resume</span>
      </button>
    </a>
  );
}
