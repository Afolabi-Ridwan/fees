import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import { infos } from "../../provider/data";

const TrackOptions = ({ activeTrack }: { activeTrack: string }) => {
    const navigate = useNavigate()


    return (
        infos.map(info => (
            <div key={info.id} className={`border border-[1.5px] max-md:w-[80%] max-sm:w-[90%] mx-auto 
        ${info.id === 1 ? "rounded-tl-[10px] rounded-bl-[10px]" : "rounded-tr-[10px] rounded-br-[10px]  md:border-l-0"} max-md:rounded-[10px] shadow-md bg-white 
        ${activeTrack === info.name.toLowerCase().split(" ")[0] ? "block" : "hidden"} md:block`}>
                <div className={`w-[100%] h-2 ${info.id === 1 ? "bg-deepBlue rounded-tl-[10px] " : "bg-[#d92d20] rounded-tr-[10px]"} max-md:rounded-tl-[10px] max-md:rounded-tr-[10px]`}></div>
                <div className="flex flex-col gap-2 font-semibold text-lg px-6 pt-6">
                    {info.icon} {info.name}
                </div>
                <span className={`text-[12px] ${info.id === 1 ? "max-md:inline-block" : "max-md:hidden opacity-0"} font-medium bg-[#4a61aa] mx-6 border border-[#1e2d5e] text-white px-2 py-1 rounded-full mt-2`}>
                    Recommended
                </span>
                <div className="h-[1.5px]  w-[90%] mx-auto bg-[#cacfda] mt-8"></div>
                <p className=" py-6 text-[14px] h-[300px] max-md:h-auto px-6" dangerouslySetInnerHTML={{ __html: info.shortNote }} />

                <div className={`h-[80px] flex items-center border-t-[1.5px] border-[#e0e0e0] bg-fadedBlue ${info.id === 1 ? "rounded-bl-[10px]" : "rounded-br-[10px]"} max-md:rounded-bl-[10px] max-md:rounded-br-[10px] `}>
                    <Button className={`w-full py-[8px] border-[1px] mx-6 rounded-md  
                                        ${info.id === 1 ? "" : "border border-deepBlue"}`}
                                         variant={info.buttonType as 'deepBlue' | 'transparent' | 'white' | 'blueBorder'} 
                                         text="Start your journey" onClick={() => navigate("/registration-page", {state: {recommendation: true}})} />
                </div>
            </div>
        ))
    )
}

export default TrackOptions
