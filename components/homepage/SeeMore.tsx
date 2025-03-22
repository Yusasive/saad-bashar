import Image from "next/image";
import { ArrowRight } from "lucide-react";

const seeAlsoItems = [
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742046915/Frame_228_scgmuw.svg",
    category: "UI/UX • Insurtech",
    year: "2024",
    title:
      "Accessing Data on Insured Buildings and Buildings Under Construction",
    link: "projects/1",
  },
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742047243/Frame_228_1_uya5qe.svg",
    category: "UI/UX • Insurtech",
    year: "2024",
    title: "Doshup Savings and Investment Mobile Application Casestudy",
    link: "/projects/2",
  },
];

const SeeAlso = () => {
  return (
    <div className="space-y-4 mx-8 my-6 -z-10">
      <h2 className="text-[#F3F3F3] text-[32px] font-semibold">See also</h2>
      <div className="space-y-3">
        {seeAlsoItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center gap-4  p-4 border rounded-xl border-[#2C2C2C]  transition"
          >
            <div className="w-32 h-20 relative overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.title}
                width={333}
                height={78}
                className="rounded-xl"
              />
            </div>
            <div className="flex-1">
              <p className="text-base  text-[#CDCDCD]">
                {item.category} • {item.year}
              </p>
              <h3 className="text-[#F3F3F3] font-medium text-2xl">
                {item.title}
              </h3>
            </div>
            <ArrowRight className="text-[#F3F3F3] text-2xl font-semibold" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SeeAlso;
