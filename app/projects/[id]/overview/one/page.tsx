import Sidebar from "../Sidebar";
import {
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
  FifthImage,
  SixthImage,
  SevenThImage,
  EightImage,
  NinthImage,
  TenthImage,
  ElevethImage,
  TwelvethImage,
} from "@/components/SvgLogo";
import Image from "next/image";
import { ThirtheenImage, FourteenImage } from "@/components/ImageIcon";

export default function Home() {
  const sections = [
    { id: "background", label: "Background" },
    { id: "approach", label: "Approach" },
    { id: "reflection", label: "Reflection" },
    { id: "conclusion", label: "Conclusion" },
  ];

  return (
    <div className="flex">
      <Sidebar sections={sections} />

      <main className="ml-64 p-8 text-white bg-black min-h-screen pt-32">
        <section
          id="background"
          className="mb-16 space-y-8 flex flex-col justify-center"
        >
          <h2 className="text-xs text-[#34C759] bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
            BACKGROUND
          </h2>
          <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
            The Challenge: A Fragmented System
          </h1>
          <p className="text-2xl text-[#CDCDCD] ">
            The fire service sector in Nigeria faces significant inefficiencies,
            a lack of transparency, and jurisdictional disputes between federal
            and state organizations. These issues impact the safety of citizens
            and the regulatory framework of fire safety.
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            Our goal was not just to digitize the fire inspection process but to
            address these critical issues within the safety system. We needed to
            build a solution that supports both administrative needs and
            operational challenges in a sensitive industry.
          </p>

          <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
            The Solution: Introducing BFICS
          </h1>

          <p className="text-2xl text-[#CDCDCD] ">
            The BFICS, an acronym for Buildings Fire and Insurance Certificates
            System. The platform addresses the complexities and inefficiencies
            identified above. The solution was designed to:
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • Schedule Inspections: Allow fire organizations to efficiently
            schedule and manage inspections of buildings.
          </p>
          <p className="text-2xl text-[#CDCDCD]  ">
            • Fire Certification Management: Track and issue fire certifications
            and insurance documentation for compliant buildings.
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • Provide Transparency: Ensure clear and easily accessible records
            for both federal and state agencies, improving accountability. •
            Enforce Compliance: Issue fines for buildings that fail to meet fire
            safety regulations.
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • Provide Transparency: Ensure clear and easily accessible records
            for both federal and state agencies, improving accountability.
          </p>
          <FirstImage />
        </section>

        <section
          id="approach"
          className="mb-16 space-y-8 flex flex-col justify-center"
        >
          <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
            APPROACH
          </h2>
          <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
            Our Approach: Research, Design, and Iteration
          </h1>
          <h2 className="text-[32px] font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
            In-Depth User and Industry Research
          </h2>
          <p className="text-2xl text-[#CDCDCD] ">
            Our first step was to conduct extensive research to understand the
            operational challenges of fire service organizations. This included
            visiting several fire stations across different regions to gain
            insight into the scope of their work and the hurdles they face. Key
            takeaways included:
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • Jurisdictional Conflicts: The lack of clear boundaries in
            authority between federal and state fire service organizations was
            hindering smooth operations.
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • Historical Record Gaps: Many records were either lost or stored
            manually, making it difficult to track past inspections and
            certifications.
          </p>
          <h2 className="text-[32px] font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
            Defining the Information Architecture
          </h2>
          <p className="text-2xl text-[#CDCDCD] ">
            Armed with insights from our research, we created an information
            architecture tailored to the unique needs of the fire service
            organizations. This architecture was designed to streamline
            operations and improve data organization.
          </p>
          <SecondImage /> <ThirdImage /> <FourthImage />
          <div className="flex flex-row space-x-6">
            <FifthImage />
            <SixthImage />
          </div>
          <div className="flex flex-row space-x-6">
            <SevenThImage />
            <ElevethImage />
          </div>
          <div className="flex flex-row space-x-6">
            <NinthImage />
            <TenthImage />
          </div>
          <div className="flex flex-row space-x-6">
            <ElevethImage />
            <TwelvethImage />
          </div>
          <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
            Crafting the Dashboard: A Key Tool for Fire Service Officers
          </h1>
          <p className="text-2xl text-[#CDCDCD] ">
            Our first draft of the system dashboard focused on key metrics for
            efficient tracking and decision-making:
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • <strong>Key Metrics Boxes:</strong> The dashboard displays four
            key performance indicators—number of fire certificates issued,
            number of insurance certificates issued, upcoming inspections, and
            net revenue from transactional flows.
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            •<strong> Activity Feeds:</strong> To address the historical record
            issue, we implemented activity feeds that track every action
            performed by officers. This allows higher-level officers to monitor
            and review all activities within their jurisdictions, ensuring
            complete transparency and accountability.
          </p>
          <ThirtheenImage />
          <FourteenImage />
          <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
            Crafting the Dashboard: A Key Tool for Fire Service Officers
          </h1>
          <p className="text-2xl text-[#CDCDCD] ">
            Our first draft of the system dashboard focused on key metrics for
            efficient tracking and decision-making:
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • Key Metrics Boxes: The dashboard displays four key performance
            indicators—number of fire certificates issued, number of insurance
            certificates issued, upcoming inspections, and net revenue from
            transactional flows.
          </p>
          <p className="text-2xl text-[#CDCDCD] ">
            • Activity Feeds: To address the historical record issue, we
            implemented activity feeds that track every action performed by
            officers. This allows higher-level officers to monitor and review
            all activities within their jurisdictions, ensuring complete
            transparency and accountability.
          </p>
          <div>
            <p className="text-[#CDCDCD] text-2xl font-semibold">
              Onbaording Screens
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <Image
                src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391507/Enter_New_Password_kbdyfg.svg"
                alt="Projects"
                width={339.98}
                height={241.8}
              />
              <Image
                src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391511/Forgot_Password_qczlup.svg"
                alt="Projects"
                width={339.98}
                height={241.8}
              />
              <Image
                src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391511/Gold_1_1_ze4eyi.svg"
                alt="Projects"
                width={339.98}
                height={241.8}
              />
            </div>
          </div>
          <div>
            <p className="text-[#CDCDCD] text-2xl font-semibold">
              Onbaording Screens
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <Image
                src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391507/Enter_New_Password_kbdyfg.svg"
                alt="Projects"
                width={339.98}
                height={241.8}
              />
              <Image
                src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391511/Forgot_Password_qczlup.svg"
                alt="Projects"
                width={339.98}
                height={241.8}
              />
              <Image
                src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391511/Gold_1_1_ze4eyi.svg"
                alt="Projects"
                width={339.98}
                height={241.8}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Image src="" alt="" />
            <Image src="" alt="" />
            <Image src="" alt="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Image src="" alt="" />
            <Image src="" alt="" />
            <Image src="" alt="" />
          </div>
        </section>

        <section
          id="reflection"
          className="mb-16 h-screen flex flex-col justify-center"
        >
          <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
            REFLECTION
          </h2>
          <p className="text-2xl text-[#CDCDCD] "></p>
          <p className="text-2xl text-[#CDCDCD] "></p>
          <p className="text-2xl text-[#CDCDCD] "></p>
        </section>

        <section
          id="conclusion"
          className="mb-16 h-screen flex flex-col justify-center"
        >
          <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
            CONCLUSION
          </h2>
          <p className="text-gray-300 mt-4">
            The BFICS platform is now a key tool in streamlining fire
            inspections and improving fire safety compliance...
          </p>
        </section>
      </main>
    </div>
  );
}
