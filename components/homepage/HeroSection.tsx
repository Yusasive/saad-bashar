export default function HeroSection() {
  return (
    <div className="bg-container bg-black/35">
      {" "}
      <div className=" mx-6 lg:mx-12 py-6 mt-20">
        <div className="flex flex-row justify-between text-[#CDCDCD] text-[28px] font-normal font-mori">
          <p>Hi, I am Saad Bashar</p>
          <p>
            <span className="text-[#34C759]"> • </span> I am available for new
            projects
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
    </div>
  );
}
