export default function Hero1() {
  return (
    <div className="bg-hero1 px-6 md:px-12 pb-16">
      <div className="flex flex-col-reverse md:flex-row py-6 md:space-x-8">
        {/* Left Section: Placeholder Box (Image/Content) */}
        <div className="md:w-[60%] h-[200px] sm:h-[300px] md:h-auto bg-[#16161799] border border-[#CDCDCD33] rounded-2xl"></div>

        {/* Right Section: Text Content */}
        <div className="text-lg text-justify mb-6 md:mb-0  md:text-2xl font-normal text-[#CDCDCD] space-y-6 sm:space-y-10 md:w-[40%] border border-[#CDCDCD33] p-6 rounded-2xl">
          <p>
            With my unique journey, story, and experience, I partner with
            dynamic founders to reshape the perception of technology and
            revolutionize tomorrow.
          </p>
          <p>
            My design philosophy prioritizes empathy, aligning user needs with
            business objectives to drive meaningful solutions. I excel in
            leveraging my expertise and design skills in a new context, crafting
            innovative designs that deliver lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
}
