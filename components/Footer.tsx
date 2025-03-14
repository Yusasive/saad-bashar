import Image from "next/image";
import { Behance, Email, LinkedIn, Twitter } from "@/components/SvgLogo";
import Nigeria from "@/public/images/projects/nigeria.png";

export default function Foooter() {
  return (
    <div className="bg-footer bg-black/35 ">
      <div className="p-6 md:p-12 border-y border-[#CDCDCD80]">
        <h1 className="text-[#F3F3F3] text-2xl md:text-5xl font-semibold font-mori">
          Let's Build <span className="text-[#8D8D8D]">Something</span> <br />{" "}
          Awesome!
        </h1>
        <p className="text-[#CDCDCD] text-base font-normal font-mori">
          Feel free to reach out to me via any of the following channels
        </p>
        <div className="text-base md:text-xl text-[#F3F3F3] font-mori font-normal space-x-6 py-10">
          <button className="bg-[#1E1E1E] rounded-full px-6 py-4">
            Book a 1:1 Call ↗
          </button>
          <button className="border border-[#CDCDCD33] rounded-full px-6 py-4">
            Email me ↗
          </button>
        </div>

        <div className="flex flex-row space-x-2">
          <LinkedIn /> <Email /> <Twitter /> <Behance />
        </div>
      </div>

      <div className="flex p-6 md:p-12 items-center justify-left">
        <div className="flex items-center gap-2 text-[#CDCDCD80] text-sm md:text-base font-normal font-mori">
          <span>CRAFTED WITH LOVE IN LAGOS</span>
          <Image
            src={Nigeria}
            alt="Nigeria Flag"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}
