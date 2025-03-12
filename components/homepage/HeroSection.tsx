import Image from "next/image";
import BC from "@/public/images/brands/BC.png";
import BS from "@/public/images/brands/BS.png";
import MM from "@/public/images/brands/MM.png";
import S from "@/public/images/brands/S.png";
import WT from "@/public/images/brands/WT.png";

export default function HeroSection() {
  return (
    <div className="bg-container bg-black/35 mt-28">
      <div className="mx-4  lg:mx-12 py-6 ">
        <div className="flex flex-col md:flex-row justify-between text-[#CDCDCD] text-lg  lg:text-[28px] font-normal font-mori gap-2">
          <p className="text-center md:text-left">Hi, I am Saad Bashar</p>
          <p className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-[#34C759] animate-blink">•</span> I am
            available for new projects
          </p>
        </div>

        <div className="text-[#F3F3F3] w-full sm:w-[90%] py-8 sm:py-10">
          <h1 className="text-3xl md:text-5xl lg:text-[58px] font-semibold font-mori leading-tight">
            I am a UI/UX and Product Designer,{" "}
            <br className="hidden sm:block" />
            designing compelling landing pages
          </h1>
          <p className="text-base md:text-2xl font-normal mt-4">
            As a Designer with more than 3 years of dedicated experience, I
            create digital experiences that border on efficiency, aesthetics,
            and functionality—ones that users would want to revisit. My
            portfolio spans a variety of sectors, from fintech, insurtech, and
            edtech to SaaS.
          </p>
        </div>
      </div>

      <div className="space-y-5 px-6 lg:px-12 mt-20 sm:mt-40">
        <h1 className="text-lg  text-[#CDCDCD] font-semibold font-mori text-center">
          BRANDS I HAVE WORKED WITH
        </h1>
        <div className="grid grid-cols-2  md:grid-cols-5 gap-5 justify-center items-center">
          {[BC, BS, MM, S, WT].map((img, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={img}
                alt="Brands"
                width={150}
                height={50}
                className="max-w-[120px]  md:max-w-[200px] lg:max-w-[279px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
