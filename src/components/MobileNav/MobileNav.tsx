import { IoClose } from "react-icons/io5";
import { scrollToSection } from "../Utils/Utils";

type SideBarProps = {
    sideBarState: boolean;
    closeSideBar: () => void;
};

const MobileNav = ({ sideBarState, closeSideBar }: SideBarProps) => {

    return (
        <nav
            className={`fixed inset-0 z-50 opacity-0 ${
                sideBarState ? "pointer-events-auto max-lg:opacity-100" : "pointer-events-none opacity-0"
            } transition-opacity duration-600`}
        >
            <div
                className={`fixed top-0 right-0 w-[100%] max-w-[400px] h-[400px] bg-white overflow-y-auto shadow-lg transition-all duration-600 transform ${
                    sideBarState ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button className="absolute top-5 right-5 text-3xl text-gray-600 cursor-pointer" onClick={closeSideBar}>
                    <IoClose />
                </button>

                <ul className="p-6 space-y-6 text-lg font-medium font-semibold text-deepBlue mt-16">
                    <li className="font-[20px] bg-[#E8EDFC] px-4 py-2 rounded-lg" onClick={() => scrollToSection("hero-section")}>Home</li>
                    <li className="font-[20px] px-4" onClick={() => scrollToSection("about-section")}>About FEES</li>
                    <li
                        className="font-[20px] px-4 flex justify-between items-center cursor-pointer"
                        onClick={() => scrollToSection("track-section")}
                    >
                        Find your track
                    </li>
                    <li className="font-[20px] px-4" onClick={() => scrollToSection("faculty-section")}>Faculty</li>
                    <li className="font-[20px] px-4" onClick={() => scrollToSection("faq-section")}>FAQ</li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNav;
