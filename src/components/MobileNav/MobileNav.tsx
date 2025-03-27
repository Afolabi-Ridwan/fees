import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

type SideBarProps = {
    sideBarState: boolean;
    closeSideBar: () => void;
};

const MobileNav = ({ sideBarState, closeSideBar }: SideBarProps) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

    return (
        <nav
            className={`fixed inset-0 z-50 opacity-0 ${sideBarState ? "pointer-events-auto max-md:opacity-100" : "pointer-events-none opacity-0"} transition-opacity duration-600`}
        >
            <div className="fixed inset-0 bg-black bg-opacity-40" ></div>

            <div
                className={`fixed left-1/2 top-0 w-[100%] h-[100%] bg-white overflow-y-auto shadow-lg transition-all duration-600 transform ${
                    sideBarState ? "translate-x-[-50%] translate-y-0 opacity-100" : "translate-x-[-50%] translate-y-[-100%] opacity-0"
                }`}
            >
                <button className="absolute top-5 right-5 text-3xl text-gray-600 cursor-pointer" onClick={closeSideBar}>
                    <IoClose />
                </button>

                <ul className="p-6 space-y-6 text-lg font-medium font-semibold text-deepBlue mt-16">
                    <li className="font-[20px] bg-[#E8EDFC] px-4 py-2 rounded-lg">Home</li>
                    <li className="font-[20px] px-4">About FEES</li>

                    <li
                        className={`font-[20px] px-4 flex justify-between items-center cursor-pointer ${!isSubMenuOpen && "mb-[0]"}`}
                        onClick={() => setIsSubMenuOpen(prev => !prev)}
                    >
                        Services 
                        {!isSubMenuOpen ? (
                            <i className="text-[25px]"><MdOutlineKeyboardArrowDown /></i>
                        ) : (
                            <i className="text-[25px]"><MdOutlineKeyboardArrowUp /></i>
                        )}
                    </li>

                    <ul
                        className={`ml-10 space-y-6 text-gray text-lg transition-all duration-1000 overflow-hidden ${
                            isSubMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <li>Skill Acquisition</li>
                        <li>Leadership Academy</li>
                        <li>Community Engagement</li>
                        <li>Talent Resourcing</li>
                    </ul>

                    <li className="font-[20px] px-4">Team</li>
                    <li className="font-[20px] px-4">Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNav;
