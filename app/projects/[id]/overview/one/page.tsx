"use client";

import Sidebar from "../Sidebar";
import {
  FifthImage,
  SixthImage,
  SevenThImage,
  NinthImage,
  TenthImage,
  ElevethImage,
  TwelvethImage,
  EightImage,
} from "@/components/SvgLogo";
import Image from "next/image";
import SeeMore from "@/components/homepage/SeeMore";
import MobileStepper from "../MobileSidebar";
import Firstimage from '@/public/projects/firstimage.png'
import Secondimage from '@/public/projects/secondImage.png'
import Thirdimage from '@/public/projects/thirdImage.png'
import Fourthimage from '@/public/projects/fourthImage.png'

import Fourtheenimage from '@/public/projects/Fourtheenimage.png'
import Thirtheenimage from '@/public/projects/Thirtheenimage.png'
// import { SeventhImage } from "@/components/PageThreeIcons";
import One from '@/public/projects/one.png'
import Two from '@/public/projects/second.png'
import Third from '@/public/projects/third.png'
import Fouth from '@/public/projects/fourth.png'
import Fifth from '@/public/projects/fifth.png'
import Sixth from '@/public/projects/sixth.png'
import Seventh from '@/public/projects/seventh.png'


export default function Home() {
  // const [projects] = useState<Project[]>(projectData);
  const sections = [
    { id: "background", label: "Background" },
    { id: "approach", label: "Approach" },
    { id: "reflection", label: "Reflection" },
    { id: "conclusion", label: "Conclusion" },
  ];

  return (
    <>
      {" "}
      <div className="relative min-h-screen bg-[#0f0f0f]">
        
        <MobileStepper sections={sections} />
        <div className="flex bg-[#0f0f0f]">
          <Sidebar sections={sections} />

          <main className="p-6 text-white bg-[#0f0f0f] min-h-screen pt-32 w-full">
            <section
              id="background"
              className="mb-16 space-y-8 flex flex-col justify-center"
            >
              <h2 className="text-xs text-[#34C759] bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
                BACKGROUND
              </h2>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                The Challenge: A Fragmented System
              </h1>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                The fire service sector in Nigeria faces significant
                inefficiencies, a lack of transparency, and jurisdictional
                disputes between federal and state organizations. These issues
                impact the safety of citizens and the regulatory framework of fire
                safety.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Our goal was not just to digitize the fire inspection process but
                to address these critical issues within the safety system. We
                needed to build a solution that supports both administrative needs
                and operational challenges in a sensitive industry.
              </p>

              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                The Solution: Introducing BFICS
              </h1>

              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                The BFICS, an acronym for Buildings Fire and Insurance
                Certificates System. The platform addresses the complexities and
                inefficiencies identified above. The solution was designed to:
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • Schedule Inspections: Allow fire organizations to efficiently
                schedule and manage inspections of buildings.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD]  ">
                • Fire Certification Management: Track and issue fire
                certifications and insurance documentation for compliant
                buildings.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • Provide Transparency: Ensure clear and easily accessible records
                for both federal and state agencies, improving accountability. •
                Enforce Compliance: Issue fines for buildings that fail to meet
                fire safety regulations.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • Provide Transparency: Ensure clear and easily accessible records
                for both federal and state agencies, improving accountability.
              </p>
              <div className="flex flex-col gap-6 w-full mx-auto">
                <Image
                    src={Firstimage}
                    alt=""
                    width={869}
                  />
              </div>
            </section>

            <section
              id="approach"
              className="mb-16 space-y-8 flex flex-col justify-center"
            >
              <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
                APPROACH
              </h2>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Our Approach: Research, Design, and Iteration
              </h1>
              <h2 className="text-[32px] font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                In-Depth User and Industry Research
              </h2>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Our first step was to conduct extensive research to understand the
                operational challenges of fire service organizations. This
                included visiting several fire stations across different regions
                to gain insight into the scope of their work and the hurdles they
                face. Key takeaways included:
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • Jurisdictional Conflicts: The lack of clear boundaries in
                authority between federal and state fire service organizations was
                hindering smooth operations.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • Historical Record Gaps: Many records were either lost or stored
                manually, making it difficult to track past inspections and
                certifications.
              </p>
              <h2 className="text-[32px] font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Defining the Information Architecture
              </h2>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Armed with insights from our research, we created an information
                architecture tailored to the unique needs of the fire service
                organizations. This architecture was designed to streamline
                operations and improve data organization.
              </p>
              <div className="flex flex-col gap-6 w-full mx-auto">
                <Image
                  src={Secondimage}
                  alt=""
                  width={869}
                />
                <Image
                  src={Thirdimage}
                  alt=""
                  width={869}
                />
                <Image
                src={Fourthimage}
                alt=""
                width={869}
                />
              </div>
              <div className="col-span-2 hidden lg:grid grid-cols-1 xl:grid-cols-2 gap-4">
                <FifthImage />
                <SixthImage />
                <SevenThImage />
                <EightImage />
                <NinthImage />
                <TenthImage />
                <ElevethImage />
                <TwelvethImage/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
                <Image src={One} alt="" className="w-full"/>
                <Image src={Two} alt="" className="w-full"/>
                <Image src={Third} alt="" className="w-full"/>
                <Image src={Fouth} alt="" className="w-full"/>
                <Image src={One} alt="" className="w-full"/>
                <Image src={Fifth} alt="" className="w-full"/>
                <Image src={Sixth} alt="" className="w-full"/>
                <Image src={Seventh} alt="" className="w-full"/>
              </div>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Crafting the Dashboard: A Key Tool for Fire Service Officers
              </h1>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Our first draft of the system dashboard focused on key metrics for
                efficient tracking and decision-making:
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • <strong>Key Metrics Boxes:</strong> The dashboard displays four
                key performance indicators—number of fire certificates issued,
                number of insurance certificates issued, upcoming inspections, and
                net revenue from transactional flows.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                •<strong> Activity Feeds:</strong> To address the historical
                record issue, we implemented activity feeds that track every
                action performed by officers. This allows higher-level officers to
                monitor and review all activities within their jurisdictions,
                ensuring complete transparency and accountability.
              </p>
              <Image src={Thirtheenimage} alt=""/>
              <Image src={Fourtheenimage} alt=""/>
              {/* <FourteenImage /> */}
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Crafting the Dashboard: A Key Tool for Fire Service Officers
              </h1>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Our first draft of the system dashboard focused on key metrics for
                efficient tracking and decision-making:
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • Key Metrics Boxes: The dashboard displays four key performance
                indicators—number of fire certificates issued, number of insurance
                certificates issued, upcoming inspections, and net revenue from
                transactional flows.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                • Activity Feeds: To address the historical record issue, we
                implemented activity feeds that track every action performed by
                officers. This allows higher-level officers to monitor and review
                all activities within their jurisdictions, ensuring complete
                transparency and accountability.
              </p>
              <div>
                <p className="text-[#CDCDCD] text-[20px] md:text-2xl font-semibold">
                  Onbaording Screens
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391507/Enter_New_Password_kbdyfg.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                    className="w-full h-auto"
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
                <p className="text-[#CDCDCD] text-[20px] md:text-2xl font-semibold">
                  Insurance Screens
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742397081/Insurance_ewtfyx.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391500/Details_g4rknb.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391484/Insurance_Certificates_jtvahd.png"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                </div>
              </div>
              <div>
                <p className="text-[#CDCDCD] text-[20px] md:text-2xl font-semibold">
                  Fire Processes Screens
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391498/Generate_Fire_Certificate_oveasx.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391498/Report_Fire_Incident_hirh2v.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                </div>
              </div>
              <div>
                <p className="text-[#CDCDCD] text-[20px] md:text-2xl font-semibold">
                  Inspection Screens
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742397647/Inspection_3_cxpfjh.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742397635/Schedule_Inspection_1_eqocvo.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742397635/Check_Building_Status_4_z9mqou.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                </div>
              </div>
              <div>
                <p className="text-[#CDCDCD] text-[20px] md:text-2xl font-semibold">
                  Inspection Tracking Screens
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742397635/Inspection_4_z2mgvo.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742397635/Check_Building_Status_4_z9mqou.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                  <Image
                    src="https://res.cloudinary.com/ddxssowqb/image/upload/v1742391491/Inspection_2_wr4lqb.svg"
                    alt="Projects"
                    width={339.98}
                    height={241.8}
                  />
                </div>
              </div>
            </section>

            <section
              id="reflection"
              className="mb-16 flex flex-col space-y-8 justify-center"
            >
              <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
                REFLECTION
              </h2>
              <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Reflections and Takeaways: A Journey of Growth
              </h1>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                1. <strong> The Importance of Fieldwork:</strong> I learned that a
                designer&apos;s role goes beyond just creating wireframes;
                understanding the real-world context is crucial for designing
                effective solutions. Without interacting with the actual users, we
                might miss key pain points or misinterpret the needs.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                2. <strong>Collaboration is Key: </strong> Working with a diverse
                team of over a dozen professionals helped me appreciate the power
                of teamwork. It became evident that even the most conventional
                processes could be improved through thoughtful digital solutions.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                3. <strong>Ongoing Impact:</strong> The BFICS platform is
                currently being implemented across fire service organizations in
                Nigeria, offering a promising future for improved fire safety
                practices nationwide.
              </p>
            </section>

            <section
              id="conclusion"
              className="mb-16 space-y-8 flex flex-col justify-center"
            >
              <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
                CONCLUSION
              </h2>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Conclusion: The Future of Fire Safety in Nigeria
              </h1>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Our solution—BFICS—has provided a much-needed overhaul of the fire
                inspection and certification process, tackling inefficiencies
                while ensuring accountability. As the implementation phase
                progresses, we are excited to see the positive impact this system
                will have on fire safety and building insurance compliance across
                Nigeria.
              </p>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Thanks for reading!
              </h1>
            </section>
          </main>
        </div>
      </div>
      {/* See Also section */}
      <div className="bg-[#0f0f0f] pb-10"><SeeMore /></div>
    </>
  );
}
