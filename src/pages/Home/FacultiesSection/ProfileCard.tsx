import { cardsData } from "../../../provider/data";
import { BsArrowsAngleContract } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import ProfileImageAndBio from "./components/ProfileImageAndBio";
import Comment from "./components/Comment";
import CardNav from "./components/CardNav";

const ProfileCard = () => {

    const [activeHeight, setActiveHeight] = useState<number | null>(null);
    const activeCardRef = useRef<HTMLDivElement>(null);

    const [stepOffset, setStepOffset] = useState(30);
    const [thirdCardAdjustment, setThirdCardAdjustment] = useState(60);
    const [index, setIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);


    useEffect(() => {
        const updateAdjustment = () => {
            if (window.innerWidth < 768) {
                setThirdCardAdjustment(30);
                setStepOffset(15)
            } else {
                setThirdCardAdjustment(60);
                setStepOffset(30)
            }
        };

        updateAdjustment();
        window.addEventListener("resize", updateAdjustment);

        return () => window.removeEventListener("resize", updateAdjustment);
    }, []);

    useEffect(() => {
        if (!activeCardRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const height = entry.contentRect.height;
                setActiveHeight(height);
            }
        });

        observer.observe(activeCardRef.current);

        return () => observer.disconnect();
    }, [index]);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % cardsData.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    };

    return (
        <div
            className="cards-container w-[980px]  max-lg:w-[85%]"
            style={{ height: activeHeight ? `${activeHeight}px` : "auto" }}
        >
            {cardsData.map((card, i) => {
                const position = (i - index + cardsData.length) % cardsData.length;
                return (
                    <div
                        key={card.id}
                        ref={position === 0 ? activeCardRef : null}
                        className={`card ${position === 0 ? "active" : ""}`}


                        style={{
                            zIndex: cardsData.length - position,
                            transform: `translateX(${position * 10}px)`,
                            opacity: 1 - position * 0.1,
                            height:
                                position === 0
                                    ? "auto"
                                    : position === 2
                                        ? `${activeHeight && activeHeight - thirdCardAdjustment}px`
                                        : `${activeHeight}px`,
                            top: `${position * stepOffset}px`,
                            right: position === 0 ? "auto" : `-${position * 7}px`,
                            display: position < 3 ? "block" : "none",
                            overflow: "hidden",
                        }}
                    >
                        {position === 0 && (
                            <>
                                <div className="card-content">
                                    <div onClick={() => setIsExpanded(!isExpanded)} className={`md:hidden flex justify-between items-center mb-[20px] ${!isExpanded && "hidden"}`}>
                                        <button className="text-white">
                                            Click to close
                                        </button>
                                        <BsArrowsAngleContract className="text-[20px] font-[800]" />
                                    </div>

                                    <div>
                                        <ProfileImageAndBio card={card} index={index} />

                                        <CardNav
                                            isExpanded={isExpanded}
                                            setIsExpanded={setIsExpanded}
                                            card={card}
                                            index={index}
                                            prevSlide={prevSlide}
                                            nextSlide={nextSlide}
                                        />
                                    </div>

                                    <div className="md:hidden">
                                        <Comment isExpanded={isExpanded} card={card} />
                                    </div>
                                </div>

                            </>
                        )}
                    </div>
                );
            })}
        </div>
    )
}

export default ProfileCard
