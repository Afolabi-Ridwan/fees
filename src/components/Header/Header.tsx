import logo from "/assets/image/Logo Horizontal white 2.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between lg:px-[100px] px-[30px] py-4 border-bottom absolute top-0 w-[100%] z-20">
      <img src={logo} alt="" className="w-[200px] h-[40px]"/>

      <ul className="navigation  hidden md:flex">
        <li>Home</li>
        <li>About FEES</li>
        <li className="flex items-center">Services <i ><MdOutlineKeyboardArrowDown className="text-[20px]"/></i></li>
        <li>Team</li>
        <li>Contact</li>
      </ul>

    
    </div>
  )
}

export default Header
