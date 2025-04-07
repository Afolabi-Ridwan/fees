import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { cardsData } from "../../../../provider/data";
import { BsArrowsAngleContract } from "react-icons/bs";


const CardNav = ({isExpanded, setIsExpanded, card, index, prevSlide, nextSlide}: any) => {

    

    return (
        <div>
            <div className={` w-full max-md:mt-8  flex justify-between items-center ${isExpanded && "max-md:hidden"}`}>
                <div>
                    <p className="border-l-2 pl-2 italic max-md:hidden">{card.title}</p>
                    <span className="text-[45px] font-[600] md:hidden ">
                        {index + 1}/{cardsData.length}
                    </span>
                </div>
                <div className="slider-buttons ">
                    <button onClick={prevSlide}>
                        <FaArrowLeftLong />
                    </button>
                    <button onClick={nextSlide}>
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
            <div onClick={() => setIsExpanded(!isExpanded)} className={`md:hidden flex justify-between items-center mt-[40px] ${isExpanded && "hidden"}`}>
                <button className="text-white">
                    Click to Read More
                </button>
                <BsArrowsAngleContract className="text-[20px] font-[800]" />
            </div>
        </div>
    )
}

export default CardNav
