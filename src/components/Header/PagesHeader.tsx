import { useState } from "react";
import logoColored from "/assets/image/Logo Horizontal color .png";
import { SlArrowLeftCircle } from "react-icons/sl";

import { FaBars } from "react-icons/fa6";
import MobileNav from "../MobileNav/MobileNav";
import { useModalStateContext } from "../../contexts/ModalContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router";

const PagesHeader = ({currentPage}: {currentPage: string}) => {
    const [sideBarState, updateSideBarState] = useState(false);


    const { modalStateHandler } = useModalStateContext()

    const openSideBarHandler = () => updateSideBarState(true);
    const closeSideBarHandler = () => updateSideBarState(false);
    const navigate = useNavigate()

    return (
        <div>
            <div
                className={`boxShadow xl:px-[80px] px-[30px] py-4 fixed top-0 
          w-[100%] z-40 transition-all duration-500 `}
            >
                <div className={`flex items-center justify-between`}>
                    <img
                        src={logoColored}
                        loading="lazy"
                        alt="Logo"
                        className="sm:w-[200px] w-[170px] sm:h-[40px] h-[35px] cursor-pointer"
                        onClick={() => navigate('/')}
                    />

                    <ul className={`navigation  text-deepBlue hidden md:flex`}>
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
                        className={`md:hidden inline  text-deepBlue text-[25px] cursor-pointer`}
                        onClick={openSideBarHandler}
                    />
                </div>
                <div className="flex items-center text-gray-600 text-[12px] mt-6">
                    <div onClick={() => modalStateHandler(false)} className="cursor-pointer">
                    <button className="mr-2  mb-1 text-deepBlue"><SlArrowLeftCircle /></button>
                    <span className="mr-2">Leadership</span>
                    </div>
                     /
                    <span className="ml-2 px-1  bg-fadedBlue rounded-md font-[500]  text-deepBlue">
                        {currentPage}
                    </span>
                </div>
            </div>

            <MobileNav sideBarState={sideBarState} closeSideBar={closeSideBarHandler} />
        </div>
    );
}

export default PagesHeader