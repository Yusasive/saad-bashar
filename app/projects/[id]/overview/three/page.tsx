"use client";

import Sidebar from "../Sidebar";
import {
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
  FifthImage,
  SixthImage,
  SeventhImage,
  EightImage,
} from "@/components/PageThreeIcons";
import SeeMore from "@/components/homepage/SeeMore";
import MobileStepper from "../MobileSidebar";

export default function Home() {
  const sections = [
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "conclusion", label: "Conlusion" },
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
              id="challenge"
              className="mb-16 space-y-8 flex flex-col justify-center"
            >
              <h2 className="text-xs text-[#34C759] bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
                CHALLENGE
              </h2>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                The Challenge: Access to Real-Time Building Insurance Data
              </h1>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                The National Committee faced a pressing issue: they needed a
                digital solution that would give committee members quick and
                reliable access to real-time data on buildings, including those
                under construction, with respect to insurance status. The main
                challenges were:
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                <strong>Real-Time Data:</strong> Accessing up-to-date insurance
                statistics and statuses for buildings across various regions.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                <strong> Geographic Complexity:</strong> The need to consider
                geographic distinctions and zoning in order to understand
                building coverage in different areas.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                <strong> Compliance Tracking:</strong> Verifying insurance
                status for buildings under construction to ensure regulatory
                compliance.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                With only one week to develop a solution, it was clear that
                efficiency, clarity, and real-time data were key priorities.
              </p>
            </section>

            <section
              id="solution"
              className="mb-16 space-y-8 flex flex-col justify-center"
            >
              <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
                SOLUTION
              </h2>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                A Dynamic Dashboard for Real-Time Data & Geographic Insights
              </h1>
              <div className="flex flex-row justify-end space-x-6">
                <FirstImage />
              </div>

              <p className="text-4xl text-[#CDCDCD] ">
                Understanding User Needs through Collaboration
              </p>
              <div>
                <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                  Working within a tight deadline, I collaborated closely with
                  the tech team to brainstorm and identify the key metrics that
                  would be most valuable for the committee members. These
                  included:
                </p>
                <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                  <strong> • Total Number of Buildings</strong>
                </p>
                <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                  <strong>• Insurance Statistics</strong>
                </p>
                <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                  <strong> • Insurance Penetration Rate</strong>
                </p>
              </div>
              <div className="flex flex-row space-x-6">
                <SecondImage />
              </div>
              <div className="flex flex-row space-x-6">
                <ThirdImage />
              </div>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] font-semibold ">
                Introducing Geographic Relevance: Dynamic Map Integration
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                To add another layer of functionality, we introduced a dynamic
                map as a central feature of the dashboard. This map provides:
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Geographic Context <br />
                Analytical Insights
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                This map was designed to give the committee members a
                comprehensive, visual representation of insurance coverage
                across Nigeria, helping them make informed decisions.
              </p>
              <div className="flex flex-row space-x-6">
                <FourthImage />
              </div>
              <p className="text-3xl text-[#CDCDCD] ">
                Enhancing User Interaction: Verifying and Regularizing Building
                Insurance
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Beyond visualizing data, we designed a feature that allowed
                committee members to:
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                <strong>• Verify Insurance Status:</strong> Users can quickly
                check the insurance status of buildings using a unique
                identifier for each building.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                <strong>• Regularize Coverage:</strong> For buildings under
                construction, committee members can facilitate the process of
                verifying and regularizing insurance to ensure compliance.
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                This functionality ensures that even new buildings, which may
                not yet be fully constructed, are not left out of the system and
                can be easily tracked for compliance.
              </p>

              <div className="flex flex-row space-x-6 justify-end">
                <FifthImage />
              </div>
              <div className="flex flex-row space-x-6">
                <SixthImage />
              </div>
              <div className="flex flex-row space-x-6 justify-end">
                <SeventhImage />
              </div>
              <div className="flex flex-row space-x-6">
                <EightImage />
              </div>
            </section>

            <section
              id="conclusion"
              className="mb-16 space-y-8 flex flex-col justify-center"
            >
              <h2 className="text-xs text-[#34C759] font-normal bg-[#34C75933] w-fit border border-[#34C759] p-2 rounded text-left mt-2">
                CONCLUSION
              </h2>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Conclusion: Key Learnings and Valuable Takeaways
              </h1>
              <p className="text-4xl text-[#CDCDCD] ">
                The Power of Cross-Functional Collaboration
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                Though I was the sole designer on the project, this experience
                reinforced the importance of teamwork. The success of the
                dashboard was not only due to my design work but also the input
                and expertise from other team members. It was a reminder that
                collaboration, even when time is tight, plays a crucial role in
                the effectiveness of any solution.
              </p>
              <p className="text-4xl text-[#CDCDCD] ">
                The Impact of &quot;Problem Shared is a Problem Solved&quot;
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                A surprising moment of support came when a designer friend
                shared a highly useful resource with me that helped expedite the
                design process. I casually mentioned the challenge I was facing,
                and he unexpectedly came through with exactly what I needed.
                This taught me the value of being open about challenges with
                peers. Often, a solution comes from the most unexpected sources.
              </p>
              <p className="text-4xl text-[#CDCDCD] ">
                Final Thoughts: Success in the Face of a Tight Deadline
              </p>
              <p className="text-[20px] md:text-2xl text-[#CDCDCD] ">
                This project, completed in just one week, demonstrates how
                collaboration, user-focused design, and quick thinking can lead
                to impactful solutions even under pressure. The final product, a
                dynamic and user-friendly dashboard was successfully presented
                to the committee, where it received positive feedback for
                further review and implementation.
              </p>
              <h1 className="text-[28px] md:text-5xl font-semibold bg-gradient-to-r from-[#F3F3F3] to-[#434242] text-transparent bg-clip-text">
                Thanks for reading!
              </h1>
            </section>
          </main>
        </div>
      </div>
      <div className="bg-[#0f0f0f] pb-10">
        <SeeMore />
      </div>
    </>
  );
}
