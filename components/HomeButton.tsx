"use client";

import { AlternativeMouse } from "./homepage/Iconts";

type StickyButtonProps = {
  onClick?: () => void;
};

export default function StickyButton({ onClick }: StickyButtonProps) {
  return (
    <div
      onClick={onClick}
      className="z-10 bottom left-6 md:left-12 text-[#F3F3F3] text-base font-semibold rounded-lg shadow-lg flex transition-all cursor-pointer"
    >
      <span>
        <AlternativeMouse />
      </span>
    </div>
  );
}
