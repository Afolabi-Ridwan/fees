import { cardsData } from "../../../provider/data";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsArrowsAngleContract } from "react-icons/bs";
import headingIcon from "/assets/icons/Vector.png";
import { useEffect, useRef, useState } from "react";

const ProfileCard = () => {

    const [index, setIndex] = useState(0);
    const [activeHeight, setActiveHeight] = useState<number | null>(null);
    const activeCardRef = useRef<HTMLDivElement>(null);

    const [stepOffset, setStepOffset] = useState(30);
    const [thirdCardAdjustment, setThirdCardAdjustment] = useState(60);
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
                            right: position === 0 ? "auto" : `-${position * 5}px`,
                            display: position < 3 ? "block" : "none",
                            overflow: "hidden",
                        }}


                    >
                        {position === 0 && (
                            <>
                                <div className="card-content">
                                    <div className="card-image">
                                        <img src={card.image} alt={card.name} />
                                    </div>

                                    <div className="card-info max-md:hidden">
                                        <p className="heading">BIO</p>
                                        <p
                                            className="bio"
                                            dangerouslySetInnerHTML={{ __html: card.bio }}
                                        />
                                        <div>
                                            <img src={headingIcon} loading="lazy" alt="headingIcon" />
                                            <p className="mt-2 text-[14px]">
                                                Leadership is not about being in charge; it's about
                                                taking care of those in your charge.
                                            </p>
                                        </div>
                                        <div className="courses mt-6">
                                            <p className="heading">Courses Taught</p>
                                            <ul>
                                                {card.courses.map((course, idx) => (
                                                    <li key={idx}>{course}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center max-md:flex-col max-md:items-start max-md:mt-6">
                                    <div>
                                        <h1 className="text-[40px] font-[600]">
                                            {card.name.split(" ")[0]}
                                        </h1>
                                        <h1 className="text-[40px] font-[600]">
                                            {card.name.split(" ")[1]}
                                        </h1>
                                    </div>
                                    <div>
                                        <span className="text-[45px] font-[600] max-md:hidden">
                                            {index + 1}/{cardsData.length}
                                        </span>
                                    </div>
                                    <p className="border-l-2 pl-2 italic md:hidden">
                                        {card.title}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div>
                                        <p className="border-l-2 pl-2 italic">{card.title}</p>
                                        <span className="text-[45px] font-[600] md:hidden">
                                            {index + 1}/{cardsData.length}
                                        </span>
                                    </div>
                                    <div className="slider-buttons">
                                        <button onClick={prevSlide}>
                                            <FaArrowLeftLong />
                                        </button>
                                        <button onClick={nextSlide}>
                                            <FaArrowRightLong />
                                        </button>
                                    </div>
                                </div>
                                <div className="md:hidden flex justify-between items-center mt-[40px]">
                                    <p className="flex items-center">
                                        Click to read more <FaArrowRightLong className="ml-2" />
                                    </p>
                                    <BsArrowsAngleContract className="text-[25px] font-[800]" />
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
