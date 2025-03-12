import React, { JSX } from "react";

interface MarqueeProps {
  items: { text: string; icon?: JSX.Element }[];
  speed?: "slow" | "medium" | "fast";
  direction?: "left" | "right";
}

const speedMap = {
  slow: "60s",
  medium: "10s",
  fast: "5s",
} as const;

const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = "medium",
  direction = "right",
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 relative w-full">
      <div
        className={`flex w-max space-x-6 ${direction === "right" ? "animate-marquee-right" : "animate-marquee-left"}`}
        style={{ animationDuration: speedMap[speed] }}
      >
        {[...items, ...items, ...items, ...items, ...items].map(
          (item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Marquee;
