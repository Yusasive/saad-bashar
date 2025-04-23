type StepProps = {
  title: string;
  descriptionstyle: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  position: string;
  textPosition: string;
};

const Step: React.FC<StepProps> = ({
  title,
  description,
  descriptionstyle,
  icon,
  position,
  textPosition,
}) => {
  return (
    <>
      <div
        className={`absolute ${position} flex items-center flex-wrap`}
      >
        <div className="flex items-center justify-center processIcon">
          {icon}
        </div>
        <h3 className="flex items-center text-[11px] sm:text-sm md:text-[30px] lg:text-4xl text-[#F3F3F3] mt-2 md:mt-0">
          {title}
        </h3>
      </div>

      <div
        className={`absolute ${textPosition} min-w-min -ml-1 sm:-ml-0 text-left w-[68%] sm:w-[80%] md:w-[60%] lg:w-[80%] xl:w-[60%]`}
      >
        <p className={`text-[#CDCDCD] ${descriptionstyle} mt-1 sm:-mt- text-[11px] sm:text-sm md:text-2xl leading-snug md:leading-normal`}>
          {description}
        </p>
      </div>
    </>
  );
};

export default Step;
