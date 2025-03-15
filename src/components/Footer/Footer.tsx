import logoWhite from "/assets/image/Logo Horizontal white 2.png";

const Footer = () => {
    return (

        <footer className="footer px-[100px] max-lg:px-[30px] py-[40px]">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={logoWhite} loading="lazy" alt="logoWhite" className="sm:w-[200px] w-[170px] sm:h-[40px] h-[35px]" />

                    </div>
                    <div className="footer-section">
                        <h4>SERVICES</h4>
                        <p>Talent Resourcing</p>
                        <p>Skill Acquisition</p>
                        <p>Leadership Academy</p>
                        <p>Community Engagement</p>
                    </div>
                    <div className="footer-section">
                        <h4>CONTACT US</h4>
                        <p>+234 901 010 1010</p>
                        <p>hello@fees.com</p>
                    </div>
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
