import AccordionItem from "./AccordionItem"
import aboutSectionImg from "/assets/image/gambardella.png"
import brochureBg from "/assets/image/frame-bg.png"
import mapPinIcon from "/assets/icons/MapPinArea.png"
import pathIcon from "/assets/icons/Path.png"
import chartLineIcon from "/assets/icons/ChartLineUp.png"
import Button from "../../../components/Button/Button"
import { useState } from "react"


const AboutSection = () => {
  const items = [
    {
      header: "Welcome Home, Leaders",
      text: `The FEES Leadership Academy is beyond a programme- it’s a community committed to grooming 
        leaders with authentic impact. Leadership is more than the title, it is legacy and purpose. 
        This is what stands us out as we are dedicated to developing 
        leaders who lead effectively, evoke change and create significant and lasting impact.`,
      icon: mapPinIcon, id: 1
    },
    {
      header: "Two Tracks, Tailored to Your Stage",
      text: `The FEES Leadership Academy is beyond a programme- it’s a community committed to grooming 
        leaders with authentic impact. Leadership is more than the title, it is legacy and purpose. 
        This is what stands us out as we are dedicated to developing 
        leaders who lead effectively, evoke change and create significant and lasting impact.`,
      icon: pathIcon, id: 2
    },
    {
      header: "A Unique Approach to Leadership Growth",
      text: `The FEES Leadership Academy is beyond a programme- it’s a community committed to grooming 
        leaders with authentic impact. Leadership is more than the title, it is legacy and purpose. 
        This is what stands us out as we are dedicated to developing 
        leaders who lead effectively, evoke change and create significant and lasting impact.`,
      icon: chartLineIcon, id: 3
    },

  ]

  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const accordionItemHandler = (id: number) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className='aboutSection py-20 lg:px-20 md:px-10  px-6 w-[100%]'>
      <p className="header">About</p>
      <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6 text-center">The FEES Leadership Academy</h1>
      <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px]">Discover the nitty gritty, the perks of the Academy</p>

      <div className="md:mt-16 mt-8 flex justify-between max-md:flex-col-reverse outline-none select-none">
        <div className="md:w-[48%]">
          <ul className="">
            {items.map(item =>
              <AccordionItem
                header={item.header}
                text={item.text}
                icon={item.icon} id={item.id}
                isOpen={openItemId === item.id}
                toggleItem={() => accordionItemHandler(item.id)}
                key={item.id}
              />)}
          </ul>
        </div>
        <div className="md:w-[48%]">
          <img src={aboutSectionImg} alt="aboutSectionImg" className="w-[100%] max-md:mb-14" />
        </div>
      </div>

      <div className={"md:w-[85%] w-[100%] h-[100%]  md:py-8 relative flex max-md:flex-col justify-between items-center mt-12 "}>
        <img src={brochureBg} alt="brochureBg" className="absolute w-[100%] h-[100%] object-cover object-left-top rounded-[10px]" />
        <div className="text-white md:w-[40%] w-[100%] z-4 md:pl-6 px-4 max-md:pt-6">
          <h1 className="md:text-[20px] text-[25px]">Explore Further</h1>

          <p className="md:text-[13px] text-[15px]">For detailed information on the curvriculum,
            key learning elements, and outcomes, download our
            Academy Brochure below.</p>
        </div>
        <div className="max-md:w-[100%] md:pr-6 px-4 max-md:pb-6">
          <Button text="Download Brochure" style="bg-white border-none" width="sm:w-[200px]  max-md:mt-[30px] text-deepBlue" textColorOnHover="" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection 