import Layout from "../../components/Layout/Layout";
import heroBgImg from "/assets/image/heroImg.png";
import cubeIcon from "/assets/icons/icons-cube-2@3x.png";
import cubeIconTwo from "/assets/icons/icons-cube@3x.png";
import cylinderIcon from "/assets/icons/icons-cylinder@3x.png";
import donotIcon from "/assets/icons/icons-donot-2@3x.png";
import Button from "../../components/Button/Button";

const HeroSection = () => {
    return (
        <Layout>
            <div className="relative w-full h-[100vh]">
                <img src={heroBgImg} alt="heroBgImg" className="w-full h-full" />
                <div className="blueRedGradient absolute top-0 left-0 w-full h-full"></div>

                <img src={cubeIcon} alt="cubeIcon" className="bubbleIcon absolute top-0 right-[45%] w-[240px] z-10" />
                <img src={cubeIconTwo} alt="cubeIconTwo" className="bubbleIcon absolute right-0 top-[45%] w-[160px] z-10" />
                <img src={cylinderIcon} alt="cylinderIcon" className="bubbleIcon absolute top-[30%] lg:w-[100px] w-[50px] z-10" />
                <img src={donotIcon} alt="donotIcon" className="bubbleIcon donotIcon absolute bottom-0 left-[40%] lg:w-[362px] w-[250px] h-[345px] z-2" />

                <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
                    <h1 className="lg:text-[60px] text-[50px] font-extrabold lg:w-[800px] w-[85vw] text-center leading-[70px] tracking-[-3px]">
                        We <span className="textGradient"> Shape Leaders</span> Who Define Tomorrow
                    </h1>
                    <p className="lg:w-[830px] w-[430px] text-center text-[18px] mt-4">The FEES Leadership Academy, through mentorship and hands-on training, builds leaders <br /> who inspire change and drive impact in their communities and workplaces.</p>
                    <div className="mt-12 flex">
                        <Button text="Join the Academy" style=" border-white   bg-white text-deepblue group-hover:bg-transparent" bgOnHover="bg-transparent" textColorOnHover="group-hover:text-white" />
                        <Button text="Learn More" style="  border-white text-white" ml="ml-8" bgOnHover="bg-white" textColorOnHover="group-hover:text-deepblue" />
                    </div>

                </div>

            </div>
        </Layout>
    );
};

export default HeroSection;

