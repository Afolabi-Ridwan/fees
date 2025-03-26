import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import spiralPattern from "/assets/image/Vector 13.png";


const CallToActionSection = () => {

    const navigate = useNavigate();

    return (
        <div className="callToActionSection relative">
            <img src={spiralPattern} loading="lazy" alt="spiralPattern" className="absolute top-0 w-[349px] max-sm:hidden" />
            <p className="header z-[2]">Ready</p>
            <h1 className="text-[29px] max-md:text-[24px] max-sm:text-[21px] z-[2] font-[600] mt-4 text-center">
                Are you primed to lead?
            </h1>
            <p className="text-gray text-[14px] md:w-[500px] w-[100%] px-4  max-sm:text-[12px]  mb-12 z-4">
                Join a host of others on a journey to inspire change, lead with purpose, and drive impact in communities and workplaces
            </p>

            <div className="flex">
                <Button text="Join the academy" bgType="deepBlueBg"   style='mr-2 sm:w-[200px] w-[170px]' onClick={() => navigate("/registration-page")}/>
                <Button text="Stay updated!" bgType="transparentBgBlueBorder" style="ml-4 sm:w-[200px] w-[170px]" onClick={() => navigate("/subscription-page")}/>
            </div>
        </div>
    )
}

export default CallToActionSection