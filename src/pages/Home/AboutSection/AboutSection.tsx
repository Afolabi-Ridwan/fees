import AccordionItem from "./AccordionItem"
import aboutSectionImg from "/assets/image/gambardella.png"
import mapPinIcon from "/assets/icons/MapPinArea.png"
import pathIcon from "/assets/icons/Path.png"
import chartLineIcon from "/assets/icons/ChartLineUp.png"


const AboutSection = () => {
  return (
    <div className='aboutSection py-20 md:px-20 px-6 w-[100%]'>
      <p className="header">About</p>
      <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6 text-center">The FEES Leadership Academy</h1>
      <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px]">Discover the nitty gritty, the perks of the Academy</p>

      <div className="mt-16 flex justify-between max-md:flex-col-reverse">
        <div className="md:w-[48%]">
          <ul className="">
            <AccordionItem
              header="Welcome Home, Leaders"
              text="The FEES Leadership Academy is beyond a programme- it’s a community committed to grooming 
                leaders with authentic impact. Leadership is more than the title, it is legacy and purpose. 
                This is what stands us out as we are dedicated to developing 
                leaders who lead effectively, evoke change and create significant and lasting impact."
              icon={mapPinIcon} id={1}/>
            <AccordionItem
              header="Two Tracks, Tailored to Your Stage"
              icon={pathIcon} id={2}/>

            <AccordionItem
              header="A Unique Approach to Leadership Growth"
              icon={chartLineIcon} id={3}/>
          </ul>
        </div>
        <div className="md:w-[48%]">
          <img src={aboutSectionImg} alt="aboutSectionImg" className="w-[100%] max-md:mb-14" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection