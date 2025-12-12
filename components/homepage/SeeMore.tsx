import Image from "next/image";
import { ArrowRight } from "lucide-react";

const seeAlsoItems = [
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742047243/Frame_228_1_uya5qe.svg",
    category: "UI/UX • Fintech",
    year: "2024",
    title: "Doshup Savings and Investment Mobile Application Casestudy",
    link: "/projects/2/overview/two",
  },
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742047462/macbook-16-pro-mockup-on-concrete-background-front-view_1_fkpvqx.png",
    category: "UI/UX • Insurtech",
    year: "2024",
    title: "Insurance Committee Dashboard Casestudy",
    link: "/projects/3/overview/three",
  },
];

const seeAlsoItemsTwo = [
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742046915/Frame_228_scgmuw.svg",
    category: "UI/UX • Proptech",
    year: "2024",
    title: "BFICS - Digitizing Fire Inspection and Certification Processes",
    link: "/projects/1",
  },
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742047462/macbook-16-pro-mockup-on-concrete-background-front-view_1_fkpvqx.png",
    category: "UI/UX • Insurtech",
    year: "2024",
    title: "Insurance Committee Dashboard Casestudy",
    link: "/projects/3/overview/three",
  },
];

const seeAlsoItemsThree = [
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742046915/Frame_228_scgmuw.svg",
    category: "UI/UX • Proptech",
    year: "2024",
    title: "BFICS - Digitizing Fire Inspection and Certification Processes",
    link: "/projects/1",
  },
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1742047243/Frame_228_1_uya5qe.svg",
    category: "UI/UX • Fintech",
    year: "2024",
    title: "Doshup Savings and Investment Mobile Application Casestudy",
    link: "/projects/2/overview/two",
  },
];



const SeeAlso = () => {
  return (
    <div className="space-y-4 mx-6">
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
            <div className="sm:flex-1">
              <p className="text-[11px] sm:text-base  text-[#CDCDCD]">
                {item.category} • {item.year}
              </p>
              <h3 className="text-[#F3F3F3] font-medium text-[12px] sm:text-lg md:text-2xl">
                {item.title}
              </h3>
            </div>
            <ArrowRight className="text-[#F3F3F3] text-xl sm:text-2xl font-semibold" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SeeAlso;


export const SeeAlsoTwo = () => {
  return (
    <div className="space-y-4 mx-6">
      <h2 className="text-[#F3F3F3] text-[32px] font-semibold">See also</h2>
      <div className="space-y-3">
        {seeAlsoItemsTwo.map((item, index) => (
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
            <div className="sm:flex-1">
              <p className="text-[11px] sm:text-base  text-[#CDCDCD]">
                {item.category} • {item.year}
              </p>
              <h3 className="text-[#F3F3F3] font-medium text-[12px] sm:text-lg md:text-2xl">
                {item.title}
              </h3>
            </div>
            <ArrowRight className="text-[#F3F3F3] text-xl sm:text-2xl font-semibold" />
          </a>
        ))}
      </div>
    </div>
  );
};


export const SeeAlsoThree = () => {
  return (
    <div className="space-y-4 mx-6">
      <h2 className="text-[#F3F3F3] text-[32px] font-semibold">See also</h2>
      <div className="space-y-3">
        {seeAlsoItemsThree.map((item, index) => (
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
            <div className="sm:flex-1">
              <p className="text-[11px] sm:text-base  text-[#CDCDCD]">
                {item.category} • {item.year}
              </p>
              <h3 className="text-[#F3F3F3] font-medium text-[12px] sm:text-lg md:text-2xl">
                {item.title}
              </h3>
            </div>
            <ArrowRight className="text-[#F3F3F3] text-xl sm:text-2xl font-semibold" />
          </a>
        ))}
      </div>
    </div>
  );
};