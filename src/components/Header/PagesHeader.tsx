import { useState } from "react";
import logoColored from "/assets/image/Logo Horizontal color .png";
import { SlArrowLeftCircle } from "react-icons/sl";
import { FaBars } from "react-icons/fa6";
import MobileNav from "../MobileNav/MobileNav";
import { MdArrowRightAlt, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router";

const PagesHeader = ({ currentPage }: { currentPage: string }) => {
    const [sideBarState, updateSideBarState] = useState(false);
    const openSideBarHandler = () => updateSideBarState(true);
    const closeSideBarHandler = () => updateSideBarState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="fixed top-0 z-40 w-[100%] px-[30px] py-4 xl:px-[80px] boxShadow transition-all duration-500">
                <div className="flex items-center justify-between">
                    <img
                        src={logoColored}
                        loading="lazy"
                        alt="Logo"
                        className="h-[35px] w-[170px] cursor-pointer sm:h-[40px] sm:w-[200px]"
                        onClick={() => navigate("/")}
                    />

                    <ul className="navigation hidden items-center text-deepBlue md:flex">
                        <li className="navLink">Home</li>
                        <li className="navLink">About FEES</li>
                        <li className="navLink relative group flex cursor-pointer items-center">
                            Services
                            <i>
                                <MdOutlineKeyboardArrowDown className="text-[20px]" />
                            </i>
                            <ul className="subMenu absolute left-0 top-[40px] z-10 w-[300px] translate-x-[-90px] overflow-hidden rounded-[5px] bg-white p-2 text-deepBlue opacity-0 shadow-md transition-all duration-1000 invisible group-hover:visible group-hover:opacity-100">
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
                        </li>
                        <li className="navLink">Team</li>
                        <li className="navLink">Contact</li>
                    </ul>

                    <FaBars
                        className="inline cursor-pointer text-[25px] text-deepBlue md:hidden"
                        onClick={openSideBarHandler}
                    />
                </div>

                <div className="mt-6 flex items-center text-[12px] text-gray-600">
                    <div onClick={() => navigate(-1)} className="cursor-pointer">
                        <button className="mb-1 mr-2 cursor-pointer text-deepBlue">
                            <SlArrowLeftCircle />
                        </button>
                        <span className="mr-2">Leadership</span>
                    </div>
                    /
                    <span className="ml-2 rounded-md bg-fadedBlue px-1 font-[500] text-deepBlue">
                        {currentPage}
                    </span>
                </div>
            </div>

            <MobileNav sideBarState={sideBarState} closeSideBar={closeSideBarHandler} />
        </div>
    );
};

export default PagesHeader;
