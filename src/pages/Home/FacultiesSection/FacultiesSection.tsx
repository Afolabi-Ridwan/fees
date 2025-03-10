import { useState,  useRef, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsArrowsAngleContract } from "react-icons/bs";

import consultant from "/assets/image/consultantOne.png";
import headingIcon from "/assets/icons/Vector.png";
import spiralPattern from "/assets/image/Vector 11.png";


interface CardData {
  id: number;
  name: string;
  image: string;
  title: string;
  bio: string;
  courses: string[];
}

const cardsData: CardData[] = [
  {
    id: 1,
    name: "Pelumi Akinsika",
    image: consultant,
    title: "HR Consultant",
    bio: "<strong>Pelumi Akinsika</strong> is a highly decorated Leadership Strategist with over 10 years of experience in team management, organizational growth, and leadership training. He has worked with notable companies like Microsoft, Astra, etc. Pelumi is dedicated to helping emerging leaders unlock their full potential.",
    courses: [
      "Strategic Decision-Making",
      "Emotional Intelligence for Leaders",
      "Driving Organizational Change",
    ],
  },
  {
    id: 2,
    name: "Afolabi Ridwan",
    image: consultant,
    title: "Leadership Coach",
    bio: "<strong>Afolabi Ridwan</strong> is a seasoned Leadership Coach with extensive experience in executive coaching and leadership development. He has worked with top-tier organizations to enhance their leadership capabilities.",
    courses: [
      "Executive Coaching",
      "Leadership Development",
      "Team Building",
    ],
  },
  {
    id: 3,
    name: "Kabeer Hammed",
    image: consultant,
    title: "Business Consultant",
    bio: "<strong>Kabeer Hammed</strong> is a Business Consultant specializing in strategic planning and organizational efficiency. She has helped numerous companies achieve their business goals.",
    courses: [
      "Strategic Planning",
      "Organizational Efficiency",
      "Business Growth Strategies",
    ],
  },
  {
    id: 4,
    name: "Idowu Valentine",
    image: consultant,
    title: "HR Specialist",
    bio: "<strong>Idowu Valentine</strong> is an HR Specialist with a focus on talent management and employee engagement. She has a proven track record of improving workplace culture.",
    courses: [
      "Talent Management",
      "Employee Engagement",
      "Workplace Culture",
    ],
  },
  {
    id: 5,
    name: "Esther Akinloose",
    image: consultant,
    title: "Change Management Expert",
    bio: "<strong>Esther Akinloose</strong> is a Change Management Expert with over 15 years of experience guiding organizations through transformational change.",
    courses: [
      "Change Management",
      "Transformational Leadership",
      "Organizational Change",
    ],
  },
  {
    id: 6,
    name: "Gbadamosi Olamide",
    image: consultant,
    title: "Team Building Specialist",
    bio: "<strong>Gbadamosi Olamide</strong> is a Team Building Specialist known for creating cohesive and high-performing teams across various industries.",
    courses: [
      "Team Building",
      "Conflict Resolution",
      "High-Performance Teams",
    ],
  },
  {
    id: 7,
    name: "Edoh Tina",
    image: consultant,
    title: "Motivational Speaker",
    bio: "<strong>Edoh Tina</strong> is a Motivational Speaker who empowers individuals and organizations to reach their highest potential.",
    courses: [
      "Public Speaking",
      "Personal Development",
      "Motivational Strategies",
    ],
  },
  {
    id: 8,
    name: "Kolade Olaide",
    image: consultant,
    title: "Executive Coach",
    bio: "<strong>Kolade Olaide</strong> is an Executive Coach with a focus on helping leaders achieve their professional and personal goals.",
    courses: [
      "Executive Leadership",
      "Goal Setting",
      "Performance Coaching",
    ],
  },
];


const FacultiesSection = () => {
  const [index, setIndex] = useState(0);
  const [activeHeight, setActiveHeight] = useState<number | null>(null);
  const activeCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeCardRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.contentRect.height;
        setActiveHeight(height);
        console.log("ResizeObserver height:", height);
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
    <div className="facultiesSection lg:mt-[-100px] mt-[-100px] relative">
      <img
        src={spiralPattern}
        alt="spiralPattern"
        className="absolute top-0 left-[15%] max-md:left-[-100px] md:w-[500px] w-[300px]"
      />
      <p className="header z-[2]">Faculty</p>
      <h1 className="text-[29px] max-md:text-[24px] max-sm:text-[21px] z-[2] font-[600] mt-4 text-center">
        Meet Your Faculties
      </h1>
      <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px] mb-12 z-4">
        Get to know a few details about your potential faculties
      </p>
      <div
        className="cards-container"
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
              transform: `translateX(${position === 0 ? 0 : position * 10}px)`,
              opacity: position === 0 ? 1 : 0.8 - position * 0.05,
              height:
                position === 0
                  ? "auto"
                  : activeHeight
                  ? `${activeHeight * (1 - (0.05 + (position - 1) * 0.15))}px` // Dynamic scaling
                  : "auto",
              top: position === 0 ? "0" : `${position * 35}px`, // Adjusted top spacing
              right: position === 0 ? "auto" : `-${position * 1}px`,
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
                        <img src={headingIcon} alt="headingIcon" />
                        <p className="mt-4">
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
    </div>
  );
};

export default FacultiesSection;