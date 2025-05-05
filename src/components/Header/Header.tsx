import { useState, useEffect } from "react";
import logoWhite from "/assets/image/Logo Horizontal white 2.png";
import logoColored from "/assets/image/Logo Horizontal color .png";
import { FaBars } from "react-icons/fa6";
import MobileNav from "../MobileNav/MobileNav";
import { useNavigate } from "react-router";
import { scrollToSection } from "../Utils/Utils";

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
        className={`navigation hidden lg:flex ${
          isHeroSecScrolled ? "navOnScroll" : ""
        } ${isHeroSectionInView ? "navOnHeroSection" : ""} text-white o`}
      >
        <li className="navLink" onClick={() => scrollToSection("hero-section")}>Home</li>
        <li className="navLink" onClick={() => scrollToSection("about-section")}>About FLA</li>
        <li className="navLink relative" onClick={() => scrollToSection("track-section")}>
            Find your track
        </li>
        <li className="navLink" onClick={() => scrollToSection("faculty-section")}>Faculty</li>
        <li className="navLink" onClick={() => scrollToSection("faq-section")}>FAQ</li>
      </ul>

      <FaBars
        className={`inline text-[25px] cursor-pointer lg:hidden ${
        !hasUserScrolled ? "text-white" : isHeroSectionInView ? "text-white" : "text-deepBlue"}`}
        onClick={openSideBarHandler}
      />

      <MobileNav sideBarState={sideBarState} updateSideBarState={updateSideBarState} closeSideBar={closeSideBarHandler} />
    </div>
  );
};

export default Header;
