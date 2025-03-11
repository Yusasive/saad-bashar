import React from "react";

const DesignProcess = () => {
  return (
    <div className="relative bg-black text-white py-16 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-300 mb-12">
        My Design Process
      </h2>

      {/* SVG Dashed Path */}
      <svg
        viewBox="0 0 500 800"
        className="absolute left-1/2 transform -translate-x-1/2 w-[80%] h-[800px]"
      >
        <path
          d="M250 50 C 450 200, 50 250, 250 400 S 450 600, 250 750"
          stroke="white"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="12,12"
        />
      </svg>

      {/* Steps with text inside the curve */}
      <Step
        title="Research"
        description="Discovery Mode Activated! Uncovering user insights, industry trends, and creative opportunities."
        icon="🔍"
        color="bg-red-500"
        position="top-12 left-[75%]"
        textPosition="top-20 left-1/2 -translate-x-1/2"
      />
      <Step
        title="Define"
        description="The Blueprint Begins! Outlining objectives, identifying challenges, and establishing the foundation."
        icon="⚙️"
        color="bg-orange-500"
        position="top-[38%] left-[20%]"
        textPosition="top-[46%] left-1/2 -translate-x-1/2"
      />
      <Step
        title="Design"
        description="Bringing Ideas to Life! Designing, prototyping, and testing solutions to meet user needs."
        icon="✏️"
        color="bg-blue-500"
        position="top-[62%] left-[75%]"
        textPosition="top-[68%] left-1/2 -translate-x-1/2"
      />
      <Step
        title="Reiterate"
        description="Polishing the Gem! Iterating on user feedback, refining the design, and ensuring a seamless experience."
        icon="🔄"
        color="bg-purple-500"
        position="top-[88%] left-[20%]"
        textPosition="top-[94%] left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

type StepProps = {
  title: string;
  description: string;
  icon: string;
  color: string;
  position: string;
  textPosition: string;
};

const Step: React.FC<StepProps> = ({
  title,
  description,
  icon,
  color,
  position,
  textPosition,
}) => {
  return (
    <>
      {/* Step Icon - Outside Curve */}
      <div className={`absolute ${position} flex items-center`}>
        <div
          className={`flex items-center justify-center ${color} w-12 h-12 rounded-full`}
        >
          <span className="text-xl">{icon}</span>
        </div>
      </div>

      {/* Step Text - Inside Curve */}
      <div
        className={`absolute ${textPosition} text-gray-300 text-center w-[60%]`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </>
  );
};

export default DesignProcess;
