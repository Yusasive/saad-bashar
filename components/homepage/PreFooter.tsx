import Marquee from "../homepage/Marquee";

export default function PreFooter() {
  const row1 = [
    { text: "User Interface" },
    { text: "Responsive Design" },
    { text: "Interaction Design" },
    { text: "Usability Testing" },
    { text: "Wireframing" },
  ];

  const row2 = [
    { text: "Photoshop", icon: "/icons/photoshop.svg" },
    { text: "Framer", icon: "/icons/framer.svg" },
    { text: "Premiere Pro", icon: "/icons/premiere.svg" },
    { text: "Sketch", icon: "/icons/sketch.svg" },
    { text: "After Effects", icon: "/icons/aftereffects.svg" },
  ];

  const row3 = [
    { text: "Collaboration" },
    { text: "Communication" },
    { text: "Empathy" },
    { text: "Time Management" },
    { text: "Critical Thinking" },
  ];

  return (
    <div className="text-[#111112] pt-6">
      {" "}
      <div>
        <Marquee items={row1} speed="slow" direction="right" />
        <Marquee items={row2} speed="slow" direction="left" />
        <Marquee items={row3} speed="slow" direction="right" />
      </div>
    </div>
  );
}
