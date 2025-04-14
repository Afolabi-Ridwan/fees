import { useState, useEffect } from "react";
import logoWhite from "/assets/image/Logo Horizontal white 2.png";
import logoColored from "/assets/image/Logo Horizontal color .png";
import { MdArrowRightAlt, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import MobileNav from "../MobileNav/MobileNav";
import { useNavigate } from "react-router";

const Header = () => {
  const [isHeroSecScrolled, setIsHeroSecScrolled] = useState<boolean>(false);
  const [isHeroSectionInView, setIsHeroSectionInView] = useState<boolean>(true);
  const [hasUserScrolled, setHasUserScrolled] = useState<boolean>(false);
  const [sideBarState, updateSideBarState] = useState<boolean>(false);

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
  const navigate = useNavigate()


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
        className="sm:w-[200px] w-[170px] sm:h-[40px] h-[35px] cursor-pointer"
        onClick={() => navigate('/')}
      />

      <ul className={`navigation ${isHeroSecScrolled ? "navOnScroll" : ""} ${isHeroSectionInView ? "navOnHeroSection" : ""} text-white hidden md:flex o`}>
        <li className="navLink ">Home</li>
        <li className="navLink">About FEES</li>
        <li className="navLink relative group flex items-center cursor-pointer">
          Services
          <i><MdOutlineKeyboardArrowDown className="text-[20px]" /></i>
          <ul className="subMenu absolute top-[-300px] left-0 w-[300px] translate-x-[-90px] p-2  text-deepBlue bg-white 
          transition-all duration-1000 overflow-hidden rounded-[5px] group-hover:top-[40px] shadow-md">
            <li>Skill Acquisition <span ><MdArrowRightAlt /></span></li>
            <li>Leadership Academy <span ><MdArrowRightAlt /></span></li>
            <li>Community Engagement <span ><MdArrowRightAlt /></span></li>
            <li>Talent Resourcing <span ><MdArrowRightAlt /></span></li>
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
