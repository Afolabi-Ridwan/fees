import { useState, useEffect } from "react";
import logoWhite from "/assets/image/Logo Horizontal white 2.png";
import logoColored from "/assets/image/Logo Horizontal color .png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`flex items-center justify-between xl:px-[80px] px-[30px] py-4 ${isScrolled ? "headerOnScroll" : "header"} fixed top-0 w-[100%] z-20`}>
      {isScrolled ? 
      <img src={logoColored} alt="" className="sm:w-[200px] w-[140px] sm:h-[40px] h-[30px]" /> :
      <img src={logoWhite} alt="" className="sm:w-[200px] w-[140px] sm:h-[40px] h-[30px]" /> 
      }

      <ul className={`navigation ${isScrolled && "navOnScroll"}  hidden md:flex`}>
        <li>Home</li>
        <li>About FEES</li>
        <li className="flex items-center">Services <i ><MdOutlineKeyboardArrowDown className="text-[20px]" /></i></li>
        <li>Team</li>
        <li>Contact</li>
      </ul>

      <FaBars className={`md:hidden inline ${isScrolled ? "text-logoBlue" : "text-white"} text-[25px]`} />
    </div>
  )
}

export default Header
