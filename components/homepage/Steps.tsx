type StepProps = {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  position: string;
  textPosition: string;
};

const Step: React.FC<StepProps> = ({
  title,
  description,
  icon,
  position,
  textPosition,
}) => {
  return (
    <>
      {/* Step Icon & Title */}
      <div
        className={`absolute ${position} flex  items-center `}
      >
        <div className="flex items-center justify-center w-[24px] h-[24px] md:w-[140px] md:h-[101px]">
          {icon}
        </div>
        <h3 className="flex items-center text-sm md:text-4xl text-[#F3F3F3] mt-2 md:mt-0">
          {title}
        </h3>
      </div>

      {/* Step Description */}
      <div
        className={`absolute ${textPosition} text-center w-[80%] md:w-[60%]`}
      >
        <p className="text-[#CDCDCD] text-sm md:text-2xl leading-snug md:leading-normal">
          {description}
        </p>
      </div>
    </>
  );
};

export default Step;
