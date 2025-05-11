import { useLocation } from "react-router";
import logoWhite from "/assets/image/Logo Horizontal white 2.png";

const Footer = () => {

    const isHomePage = "/" === useLocation().pathname

    return (
        <footer className={`
        footer
        px-[70px] py-[40px]
        max-lg:px-[30px]
        ${isHomePage ? "polygon h-[500px] max-lg:h-[600px] max-md:h-[800px] mt-[-130px]" : ""} `}>
            <div className="footer-container">
                <div className="w-full flex flex-wrap justify-between pb-12 gap-6">
                    <div className="w-full sm:w-auto">
                        <img src={logoWhite} loading="lazy" alt="Company Logo" className="w-[170px] h-[35px] sm:w-[200px] sm:h-[40px]" />

                    </div>
                    <div className="w-full sm:w-auto">
                        <h4>SERVICES</h4>
                        <p>Talent Resourcing</p>
                        <p>Skill Acquisition</p>
                        <p>Leadership Academy</p>
                        <p>Community Engagement</p>
                    </div>
                    <address className="w-full sm:w-auto flex flex-col not-italic">
                        <h4>CONTACT US</h4>
                        <a
                            href="tel:+2348166864408"
                            className="hover:text-blue-200 transition-colors"
                        >
                            +2348166864408
                        </a>
                        <a href="mailto:hello@thefeeshub.com"
                            className="hover:text-blue-200 transition-colors">
                            hello@thefeeshub.com
                        </a>
                    </address>
                    <div className="w-full sm:w-auto mr-0">
                        <h4>FIND US</h4>
                        <p>Sholanke Str, Off Chemist B/Stop, Akoka</p>
                        <p>Everyday from 10 am to 8 pm</p>
                    </div>
                </div>
                <div className="flex justify-between w-[100%] text-[12px] text-[#cacfda]">
                    <p>
                        © 2025 — Copyright
                    </p>
                    <p >
                        Privacy
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
