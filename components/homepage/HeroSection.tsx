import Image from "next/image";
import BC from "@/public/images/brands/BC.png";
import BS from "@/public/images/brands/BS.png";
import MM from "@/public/images/brands/MM.png";
import S from "@/public/images/brands/S.png";
import WT from "@/public/images/brands/WT.png";

export default function HeroSection() {
  return (
    <div className="bg-container bg-black/35">
      {" "}
      <div className="mx-6 lg:mx-12 py-6 mt-20">
        <div className="flex flex-row justify-between text-[#CDCDCD] text-[28px] font-normal font-mori">
          <p>Hi, I am Saad Bashar</p>
          <p className="flex items-center gap-2">
            <span className="text-[#34C759] animate-blink">•</span> I am
            available for new projects
          </p>
        </div>

        <div className="text-[#F3F3F3] w-[90%] py-10">
          <h1 className="text-[58px] font-semibold font-mori ">
            I am a UI/UX and Product Designer, <br /> designing compelling
            landing pages
          </h1>
          <p className="text-2xl font-normal">
            As a Designer with more than 3 years of dedicated experience, I
            create digital experiences that borders on efficiency, aesthetics
            and functionality. One that users would want to look over and over
            again. My portfolio spans a variety of sectors from fintech,
            insurtech, edtech to Saas.
          </p>
        </div>
      </div>
      {/* Brands */}
      <div className="space-y-5 px-6 lg:px-12 mt-60">
        <h1 className="text-xl text-[#CDCDCD] font-semibold font-mori text-center">
          BRANDS I HAVE WORKED WITH
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center">
          {[BC, BS, MM, S, WT].map((img, index) => (
            <Image key={index} src={img} alt="Brands" width={279} height={98} />
          ))}
        </div>
      </div>
    </div>
  );
}
