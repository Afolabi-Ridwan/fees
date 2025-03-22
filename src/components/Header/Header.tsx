import { useState, useEffect } from "react";
import logoWhite from "/assets/image/Logo Horizontal white 2.png";
import logoColored from "/assets/image/Logo Horizontal color .png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
  const [isHeroSecScrolled, setIsHeroSecScrolled] = useState(false);
  const [isHeroSectionInView, setIsHeroSectionInView] = useState(true);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const [sideBarState, updateSideBarState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        setHasUserScrolled(false); 
      } else {
        setHasUserScrolled(true);
      }

      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const { bottom } = heroSection.getBoundingClientRect();
        setIsHeroSectionInView(bottom > 0);
      }

      setIsHeroSecScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const openSideBarHandler = () => updateSideBarState(true);
  const closeSideBarHandler = () => updateSideBarState(false);



  return (
    <div
      className={`flex items-center justify-between xl:px-[80px] px-[30px] py-4 fixed top-0 w-[100%] z-20 transition-all duration-500 ${!hasUserScrolled
          ? "bg-none border-none"
          : isHeroSectionInView
            ? "headerOnHeroSection"
            : "headerOnScroll"
        }`}
    >
      <img
        src={!hasUserScrolled ? logoWhite : isHeroSectionInView ? logoWhite : logoColored}
        loading="lazy"
        alt="Logo"
        className="sm:w-[200px] w-[170px] sm:h-[40px] h-[35px]"
      />

      <ul className={`navigation ${isHeroSecScrolled ? "navOnScroll" : ""} ${isHeroSectionInView ? "navOnHeroSection" : ""} text-white hidden md:flex`}>
        <li className="navLink">Home</li>
        <li className="navLink">About FEES</li>
        <li className="navLink relative group flex items-center cursor-pointer">
          Services
          <i><MdOutlineKeyboardArrowDown className="text-[20px]" /></i>
          <ul className="subMenu absolute top-[40px] left-0 w-[300px] translate-x-[-90px] py-6 space-y-4 text-deepBlue bg-white 
          transition-all duration-1000 overflow-hidden rounded-md opacity-0 max-h-0 
          group-hover:opacity-100 group-hover:max-h-[300px] shadow-md">
            <li>Skill Acquisition</li>
            <li>Leadership Academy</li>
            <li>Community Engagement</li>
            <li>Talent Resourcing</li>
          </ul>
        </li>
        <li className="navLink">Team</li>
        <li className="navLink">Contact</li>
      </ul>

      <FaBars
        className={`md:hidden inline ${!hasUserScrolled ? "text-white" : isHeroSectionInView ? "text-white" : "text-deepBlue"} text-[25px] cursor-pointer`}
        onClick={openSideBarHandler}
      />
      <MobileNav sideBarState={sideBarState} closeSideBar={closeSideBarHandler} />
    </div>
  );
};

export default Header;
