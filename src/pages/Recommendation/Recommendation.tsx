import HeaderOnQuizSection from "../../components/HeaderOnQuizSection/HeaderOnQuizSection";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import Button from "../../components/Button/Button";
import nogticeBg from "../../../public/assets/image/book.jpeg"
import spiralPattern from "../../../public/assets/image/Vector 14.png"
import spiralPatternOne from "../../../public/assets/image/Vector 15.png"
import TrackOptions from "./TrackOptions";

const Recommendation = () => {

  const [activeTrack, setActiveTrack] = useState<"foundational" | "advanced">("foundational");

  return (
    <div className="pt-[130px] relative ">
      <img src={spiralPattern} alt="spiralPattern" className="absolute top-0 w-[550px] max-md:top-16 max-md:w-[250px] " />
      <img src={spiralPatternOne} alt="spiralPatternOne" className="absolute top-0 w-[470px] max-md:top-16 max-md:h-32 max-md:w-[200px] right-0 " />
      <HeaderOnQuizSection />
      <div className="min-h-screen  flex flex-col items-center py-10 pb-[100px]">
        <div className="text-center mb-8">
          <div className="px-4 py-1 text-sm font-medium border border-2 font-[600] rounded-full text-slateBlue border-slateBlue inline-block">Recommendation</div>
          <h1 className="text-[36px] font-[500] mt-4">Foundational Track!</h1>
          <p className="text-gray mt-[-7px]">
            We recommend the <span className="font-semibold text-deepBlue">foundational track</span> for you!
          </p>
        </div>

        <div className="w-[600px] max-md:w-[100%]">
          <div className="md:hidden flex justify-center gap-4 mb-4">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTrack === "foundational" ? "bg-deepBlue text-white" : " border"}`}
              onClick={() => setActiveTrack("foundational")}
            >
              Foundational Track
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTrack === "advanced" ? "bg-[#d92d20] text-white" : "border"}`}
              onClick={() => setActiveTrack("advanced")}
            >
              Advanced Track
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <TrackOptions activeTrack={activeTrack} />
          </div>
        </div>

        <div className="mt-10 noticeGradientColor text-white w-[750px] max-md:w-[80%] max-sm:w-[90%] h-[120px] max-sm:h-auto flex max-sm:flex-col 
        items-center max-sm:items-start justify-between p-6 max-sm:px-12  rounded-lg text-center  relative">
          <img src={nogticeBg} alt="notice-background" className="absolute w-[100%] h-[100%] object-cover top-0 left-0 z-[-1] rounded-lg" />
          <div className="text-left">
            <p className="text-[20px] font-[500]">Not ready yet?</p>
            <p className="text-sm mt-1">Subscribe to get updates about the academy</p>
          </div>

          <div className="max-sm:mt-8 max-sm:w-full">
            <Button text="Stay Updated" bgType="whiteBg" style="mt-3 px-4 bg-white text-blue-900 hover:bg-gray-200 max-sm:w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recommendation;
