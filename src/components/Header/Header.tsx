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
        setIsHeroSectionInView(bottom > 70);
      }

      setIsHeroSecScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSideBarHandler = () => updateSideBarState(true);
  const closeSideBarHandler = () => updateSideBarState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 z-20 flex w-[100%] items-center justify-between px-[30px] py-4 xl:px-[80px] transition-all duration-500 ${
        !hasUserScrolled
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
        className="h-[35px] w-[170px] cursor-pointer sm:h-[40px] sm:w-[200px]"
        onClick={() => navigate("/")}
      />

      <ul
        className={`navigation hidden md:flex ${
          isHeroSecScrolled ? "navOnScroll" : ""
        } ${isHeroSectionInView ? "navOnHeroSection" : ""} text-white o`}
      >
        <li className="navLink">Home</li>
        <li className="navLink">About FEES</li>
        <li className="navLink relative">
          <div className="group relative flex cursor-pointer items-center">
            Services
            <i>
              <MdOutlineKeyboardArrowDown className="text-[20px]" />
            </i>

            <ul className="subMenu absolute top-[40px] left-0 z-10 w-[300px] translate-x-[-90px] overflow-hidden rounded-[5px] bg-white p-2 text-deepBlue opacity-0 shadow-md transition-all duration-1000 invisible group-hover:visible group-hover:opacity-100">
              <li>
                Skill Acquisition <span><MdArrowRightAlt /></span>
              </li>
              <li>
                Leadership Academy <span><MdArrowRightAlt /></span>
              </li>
              <li>
                Community Engagement <span><MdArrowRightAlt /></span>
              </li>
              <li>
                Talent Resourcing <span><MdArrowRightAlt /></span>
              </li>
            </ul>
          </div>
        </li>
        <li className="navLink">Team</li>
        <li className="navLink">Contact</li>
      </ul>

      <FaBars
        className={`inline text-[25px] cursor-pointer md:hidden ${
          !hasUserScrolled ? "text-white" : isHeroSectionInView ? "text-white" : "text-deepBlue"
        }`}
        onClick={openSideBarHandler}
      />

      <MobileNav sideBarState={sideBarState} closeSideBar={closeSideBarHandler} />
    </div>
  );
};

export default Header;
