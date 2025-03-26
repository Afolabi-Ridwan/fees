import AccordionItem from "./AccordionItem";
import aboutSectionImg from "/assets/image/gambardella.png";
import brochureBg from "/assets/image/frame-bg.png";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import { aboutSectionData } from "../../../provider/data";

const AboutSection = () => {

  const [openItemId, setOpenItemId] = useState<number>(aboutSectionData[0].id);

  return (
    <section id="about-section" className="aboutSection py-20 lg:px-20 md:px-10 px-6 w-[100%]">
      <p className="header">About</p>
      <h1 className="text-[29px] max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6 text-center">
        The FEES Leadership Academy
      </h1>
      <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px]">
        Discover the nitty gritty, the perks of the Academy
      </p>

      <div className="md:mt-16 mt-8 flex justify-between max-md:flex-col-reverse outline-none select-none">
        <div className="md:w-[48%]">
          <ul>
            {aboutSectionData.map((item) => (
              <AccordionItem
                key={item.id}
                header={item.header}
                text={item.text}
                icon={item.icon}
                id={item.id}
                isOpen={openItemId === item.id}
                setOpenItem={setOpenItemId} 
              />
            ))}
          </ul>
        </div>
        <div className="md:w-[48%]">
          <img src={aboutSectionImg} loading="lazy" alt="aboutSectionImg" className="w-[100%] max-md:mb-14" />
        </div>
      </div>

      <div className="xl:w-[1000px] xl:h-[130px] md:w-[80%] md:h-[100%] w-[100%] h-[100%] md:py-8 relative flex max-md:flex-col justify-between items-center mt-12">
        <img src={brochureBg} loading="lazy" alt="brochureBg" className="absolute w-[100%] h-[100%] object-cover object-left-top rounded-[10px]" />
        <div className="text-white md:w-[40%] w-[100%] z-4 md:pl-6 px-4 max-md:pt-6">
          <h1 className="md:text-[20px] text-[25px]">Explore Further</h1>
          <p className="md:text-[13px] text-[15px]">
            For detailed information on the curriculum, key learning elements, and outcomes, download our Academy Brochure below.
          </p>
        </div>
        <div className="max-md:w-[100%] md:pr-6 px-4 max-md:pb-6 z-6">
          <Button text="Download Brochure" bgType="whiteBg" style="sm:w-[200px] w-full max-md:mt-[30px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
