export default function Hero1() {
  return (
    <div className="bg-hero1 px-6  md:px-12 mt-20">
      <div>
        <h1 className="text-[#F3F3F3] text-2xl  md:text-5xl lg:text-[58px] font-medium leading-tight py-8 sm:py-12">
          My secrets blaze like fireworks, <br className="hidden sm:block" />{" "}
          illuminating the sky!
        </h1>
      </div>

      <div className="flex flex-col md:flex-row py-6 md:space-x-8">
        <div className="text-lg md:text-2xl text-justify font-normal text-[#CDCDCD] space-y-6 sm:space-y-10 md:w-[45%] border border-[#CDCDCD33] p-6 rounded-2xl">
          <p>
            In the beautiful city of Lagos, Nigeria, my design journey started
            when my curiosity was sparked while seeing texts remixed with
            pictures on Facebook in my early teens. Then, I picked up Picasa
            (now Google Photos), which happened to be the closest software I
            believed I could use to make such designs. If this was a book,
            consider this part as the preface.
          </p>
          <p>
            A decade down the line, I am nurturing an interesting career in
            design, cracking puzzles, pixelating possibilities, and crafting
            creative chaos.
          </p>
        </div>

        <div className="md:w-[55%] h-[200px]  md:h-auto border bg-[#16161799] border-[#CDCDCD33] rounded-2xl mt-6 md:mt-0"></div>
      </div>
    </div>
  );
}
