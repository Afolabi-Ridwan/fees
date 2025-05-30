import heroBgImg from "/assets/image/heroImg.png";
import cubeIcon from "/assets/icons/icons-cube-2@3x.png";
import cubeIconTwo from "/assets/icons/icons-cube@3x.png";
import cylinderIcon from "/assets/icons/icons-cylinder@3x.png";
import donotIcon from "/assets/icons/icons-donot-2@3x.png";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router";

const HeroSection = () => {

    const navigate = useNavigate()

    return (
        <div id="hero-section" className="relative w-full h-[100vh] heroSection">
            <img src={heroBgImg} loading="lazy" alt="heroBgImg" className="heroBgImg w-full h-full" />
            <div className="blueRedGradient absolute top-0 left-0 w-full h-full"></div>

            <img src={cubeIcon} loading="lazy" alt="cubeIcon" className="bubbleIcon cubeIcon absolute top-0 lg:right-[45%] right-[35%] lg:w-[240px] w-[180px] z-10" />
            <img src={cubeIconTwo} loading="lazy" alt="cubeIconTwo" className="bubbleIcon absolute right-0 lg:top-[45%] top-[60%] lg:w-[160px] md:w-[90px] w-[60px] z-10" />
            <img src={cylinderIcon} loading="lazy" alt="cylinderIcon" className="bubbleIcon absolute top-[30%] lg:w-[100px] w-[50px] z-10" />
            <img src={donotIcon} loading="lazy" alt="donotIcon" className="bubbleIcon donotIcon absolute bottom-0 md:left-[40%] left-[30%] lg:w-[362px] w-[150px] lg:h-[345px] h-[200px] z-2 lg:translate-y-[150px] translate-y-[100px]" />

            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-white z-10 md:px-0 px-8">
                <h1 className="lg:text-[60px] text-[35px] font-extrabold lg:w-[800px] md:w-[600px] w-[100%] text-center lg:leading-[70px] leading-[40px] tracking-[-1px]">
                    We <span className="textGradient"> Shape Leaders</span>  Who Define Tomorrow
                </h1>
                <p className="lg:w-[830px] md:w-[600px] w-[100%] text-center lg:text-[18px] text-[18px] mt-4">
                    The FEES Leadership Academy, through
                    mentorship and hands-on training, builds
                    leaders  who inspire change and drive impact
                    in their communities and workplaces.</p>
                <div className="mt-12 md:flex">
                    <Button text="Join the Academy" variant="white" className="md:w-[200px] w-[300px]" onClick={() => navigate('/registration-page')} />
                    <Button
                        text="Learn More"
                        variant="transparent"
                        className="md:mt-0 mt-6 md:ml-8 border-2 md:w-[200px] w-[300px]"
                        onClick={() => {
                            document.getElementById("about-section")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    />
                </div>

            </div>

        </div>
    );
};

export default HeroSection;

