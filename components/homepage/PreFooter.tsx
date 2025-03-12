import { DiIllustrator } from "react-icons/di";
import Marquee from "../homepage/Marquee";
import {
  Photoshop,
  Framer,
  Sketch,
  AfterEffects,
  Audition,
  Premiere,
} from "../SvgLogo";

export default function PreFooter() {
  const row1 = [
    { text: "User Interface" },
    { text: "Responsive Design" },
    { text: "Interaction Design" },
    { text: "Usability Testing" },
    { text: "Wireframing" },
  ];

  const row2 = [
    { text: "Illustrator", icon: <DiIllustrator /> },
    { text: "Photoshop", icon: <Photoshop /> },
    { text: "Framer", icon: <Framer /> },
    { text: "Premiere Pro", icon: <Premiere /> },
    { text: "Sketch", icon: <Sketch /> },
    { text: "After Effects", icon: <AfterEffects /> },
    { text: "Audition", icon: <Audition /> },
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
