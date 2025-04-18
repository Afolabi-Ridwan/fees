import { useLocation } from "react-router";
import logoWhite from "/assets/image/Logo Horizontal white 2.png";

const Footer = () => {

    const isHomePage = "/" === useLocation().pathname

    return (
        <footer className={`
        footer
        px-[100px] py-[40px]
        max-lg:px-[30px]
        ${isHomePage ? "polygon h-[500px] max-md:h-[700px] mt-[-130px]" : ""} `}>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={logoWhite} loading="lazy" alt="Company Logo" className="w-[170px] h-[35px] sm:w-[200px] sm:h-[40px]" />

                    </div>
                    <div className="footer-section">
                        <h4>SERVICES</h4>
                        <p>Talent Resourcing</p>
                        <p>Skill Acquisition</p>
                        <p>Leadership Academy</p>
                        <p>Community Engagement</p>
                    </div>
                    <address className="footer-section flex flex-col not-italic">
                        <h4>CONTACT US</h4>
                        <a
                            href="tel:+2348166864408"
                            className="hover:text-blue-200 transition-colors"
                        >
                            +2348166864408
                        </a>
                        <a  href="mailto:hello@thefeeshub.com"
                            className="hover:text-blue-200 transition-colors">
                            hello@thefeeshub.com
                        </a>
                    </address>
                    <div className="footer-section">
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
