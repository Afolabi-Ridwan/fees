import { useState, useEffect } from "react";
import logoWhite from "/assets/image/Logo Horizontal white 2.png";
import logoColored from "/assets/image/Logo Horizontal color .png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import MobileNav from "../MobileNav/MobileNav";
import { onScrollHandler } from "../Utils/Utils";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [sideBarState, updateSideBarState] = useState<boolean>(false)

  useEffect(() => {
    const cleanup = onScrollHandler({ setIsScrolled });
    return cleanup;
  }, []);


  const openSideBarHandler = () => {
    updateSideBarState(true)
  }

  const closeSideBarHandler = () => {
    updateSideBarState(false)
  }

  return (
    <div className={`flex items-center justify-between xl:px-[80px] px-[30px] py-4 ${isScrolled ? "headerOnScroll" : "headerOnNoScroll"} fixed top-0 w-[100%] z-20`}>
      {isScrolled ?
        <img src={logoColored} alt="" className="sm:w-[200px] w-[170px] sm:h-[40px] h-[35px]" /> :
        <img src={logoWhite} alt="" className="sm:w-[200px] w-[170px] sm:h-[40px] h-[35px]" />
      }

      <ul className={`navigation ${isScrolled && "navOnScroll"} text-white  hidden md:flex`}>
        <li>Home</li>
        <li>About FEES</li>
        <li className="relative group flex items-center cursor-pointer">
          Services
          <i><MdOutlineKeyboardArrowDown className="text-[20px]" /></i>
          <ul className="subMenu absolute top-[40px] left-0 w-[300px] translate-x-[-90px] py-6 space-y-4 text-deepblue bg-white 
          transition-all duration-1000 overflow-hidden rounded-md opacity-0 max-h-0 
          group-hover:opacity-100 group-hover:max-h-[300px] shadow-md">
            <li>Skill Acquisition</li>
            <li>Leadership Academy</li>
            <li>Community Engagement</li>
            <li>Talent Resourcing</li>
          </ul>
        </li>

        <li>Team</li>
        <li>Contact</li>
      </ul>

      <FaBars className={`md:hidden inline ${isScrolled ? "text-deepblue" : "text-white"} text-[25px] cursor-pointer`} onClick={openSideBarHandler} />
      <MobileNav sideBarState={sideBarState} closeSideBar={closeSideBarHandler} />
    </div>
  )
}

export default Header;