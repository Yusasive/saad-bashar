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
        className={`absolute ${textPosition} min-w-min -ml-1 text-left w-[50%] sm:w-[50%] md:w-[60%] lg:w-[75%] xl:w-[60%]`}
      >
        <p className={`text-[#CDCDCD] ${descriptionstyle} text-[10px] sm:text-sm md:text-2xl leading-snug md:leading-normal`}>
          {description}
        </p>
      </div>
    </>
  );
};

export default Step;
