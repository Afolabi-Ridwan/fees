import spiralPattern from "/assets/image/Vector 11.png";
import ProfileCard from "./ProfileCard";


const FacultiesSection = () => {

  return (
    <div className="facultiesSection lg:mt-[-100px] mt-[-100px] relative">
      <img
        src={spiralPattern}
        loading="lazy"
        alt="spiralPattern"
        className="absolute top-0 left-[15%] max-md:left-[-100px] md:w-[500px] w-[300px]"
      />
      <p className="header z-[2]">Faculty</p>
      <h1 className="text-[29px] max-md:text-[24px] max-sm:text-[21px] z-[2] font-[600] mt-4 text-center">
        Meet Your Faculties
      </h1>
      <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px] mb-6 z-4">
        Get to know a few details about your potential faculties
      </p>
      
      <ProfileCard />
    </div>
  );
};

export default FacultiesSection;