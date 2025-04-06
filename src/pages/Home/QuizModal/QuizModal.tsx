import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../../../components/Utils/Utils";
import PagesHeader from "../../../components/Header/PagesHeader";
import { useModalStateContext } from "../../../contexts/ModalContext";
import LoaderModal from "../../../components/LoaderModal/LoaderModal";
import { questions } from "../../../provider/data";
import { IoMdCheckmark } from "react-icons/io";

const QuizModal: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null)); // Store answers
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    const { modalState, modalStateHandler } = useModalStateContext();
    useEffect(() => {
        document.body.style.overflow = modalState ? "hidden" : "auto";
        if (modalState) {

            setDirection(1); // Reset to forward direction when modal opens
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalState]);

    useEffect(() => {
        document.body.style.overflow = modalState ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalState]);

    if (!modalState) return null;

    const handleAnswerSelect = (answer: string) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestion] = answer;
        setSelectedAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setDirection(1);
            setCurrentQuestion((prev) => prev + 1);
        }
        console.log(selectedAnswers)
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setDirection(-1);
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        setDirection(1);

        setTimeout(() => {
            setIsSubmitting(false);
            modalStateHandler(false);
            navigate("/recommendation-page");
        }, 3000);
    };



    return (
        <div id="quiz-modal">
            {isMobile ? <PagesHeader currentPage={"Quiz"} /> : ""}
            <div className={`fixed inset-0 flex justify-center items-center z-30 overflow-y-auto ${isSubmitting && "z-50"}`} style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <div className="bg-white sm:flex flex-col justify-center items-center  p-6 rounded-lg w-[65%] max-lg:w-[80%] max-sm:w-[100%] h-[620px] max-sm:h-[100%] shadow-lg relative quizCont">
                    <i
                        className="border border-2 border-white text-white text-[10px] rounded-full p-1 
                        cursor-pointer absolute right-0 top-0 translate-y-[-25px] translate-x-[25px] 
                        hover:text-[14px] duration-400 max-sm:hidden"
                        onClick={() => modalStateHandler(false)}
                    >
                        <FaTimes />
                    </i>

                    <div className="w-[80%] max-md:w-[100%] max-sm:mt-[110px] progressBar">
                        <div className="sm:flex items-center">
                            <p className="flex  w-[40px] justify-between mr-4 text-[13px] font-[600]">
                                <span>{currentQuestion + 1}</span>
                                <span>/</span>
                                <span>{questions.length}</span>
                            </p>
                            <div className="w-full bg-[#d0dfff] h-1 overflow-hidden rounded-md max-sm:mt-4">
                                <motion.div
                                    className="bg-deepBlue h-1 transition-all duration-300"
                                    style={{
                                        width: currentQuestion === 0 ? "0%" : `${(currentQuestion / (questions.length - 1)) * 100}%`,
                                    }}
                                ></motion.div>
                            </div>
                        </div>

                        <div className=" overflow-hidden mt-16 max-sm:mt-8">
                            <div className="h-[280px] max-sm:h-[370px]">
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (
                                        <LoaderModal isOpen={isSubmitting} />
                                    ) : (
                                        <motion.div
                                            key={currentQuestion}
                                            initial={{
                                                x: direction === -1 ? "-100%" : "100%",
                                                opacity: 0
                                            }}
                                            animate={{
                                                x: "0%",
                                                opacity: 1
                                            }}
                                            exit={{
                                                x: direction === -1 ? "100%" : "-100%",
                                                opacity: 0
                                            }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            <h2 className="flex max-sm:flex-col font-[500] text-[#60646f] items-start">
                                                <span className="text-[18px] flex items-center min-w-[40px] justify-between mr-4 flex-shrink-0">
                                                    <span>{`0${currentQuestion + 1}`}</span>
                                                    <span className={`font-light ${isMobile && "text-[22px]"}`}>
                                                        {isMobile ? "⬎" : "↳"}
                                                    </span>
                                                </span>

                                                <span className="sm:text-[24px] text-[20px] max-sm:mt-2 leading-tight">{questions[currentQuestion].question}</span>
                                            </h2>

                                            <div className="mt-4">
                                                {questions[currentQuestion].answers.map((answer, index) => (
                                                    <div key={index} className="flex group">
                                                        <div className="w-[40px] max-sm:w-0 max-sm:mr-0 mr-4"></div>
                                                        <button
                                                            onClick={() => handleAnswerSelect(answer.text)}
                                                            className={`flex justify-between w-full p-3 border border-[1.5px] border-[#d6dae3] rounded-md mt-2 text-left text-[16px] font-[600] cursor-pointer transition 
                                                                ${selectedAnswers[currentQuestion] === answer.text
                                                                && "border-blueOnAccordion"
                                                                }`}
                                                        >
                                                            <div className="flex">
                                                                <span className={`mr-4 mt-[2px] w-[30px] h-[23px] text-[14px] border border-[#d6dae3] inline-flex items-center justify-center leading-none 
                                                                group-hover:bg-deepBlue group-hover:text-white duration-500 ${selectedAnswers[currentQuestion] === answer.text && "bg-deepBlue text-white"}`}>
                                                                    {answer.id}
                                                                </span>
                                                                <span>{answer.text}</span>
                                                            </div>
                                                            {selectedAnswers[currentQuestion] === answer.text &&
                                                                <div>
                                                                    <span className="text-[20px] text-deepBlue"><IoMdCheckmark /></span>
                                                                </div>}

                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className=" flex sm:mt-8 max-sm:absolute bottom-6 left-0 w-full max-sm:p-4  max-sm:justify-between">
                            <div className={`w-[40px] max-sm:w-0 max-sm:mr-0 mr-4 ${currentQuestion > questions.length - 1 && ""}`}></div>
                            {currentQuestion > 0 && (
                                <button
                                    onClick={handlePrev}
                                    className="px-4 py-2 max-sm:w-[100%] focus:outline-none border border-deepBlue text-deepBlue font-[600] rounded-md cursor-pointer hover:bg-[#edf2ff]"
                                >
                                    Prev
                                </button>
                            )}

                            <div className={`${currentQuestion > questions.length - 1 && "w-[40px] mr-4"}`}></div>
                            {currentQuestion < questions.length - 1 && (
                                <button
                                    onClick={handleNext}
                                    disabled={!selectedAnswers[currentQuestion]}
                                    className={`px-4 py-2 max-sm:w-[100%] focus:outline-none bg-deepBlue text-white rounded-md cursor-pointer 
                                    hover:bg-[#1e2d5e] ${currentQuestion > 0 && "ml-4"} ${!selectedAnswers[currentQuestion] && "opacity-50 cursor-not-allowed"}`}>
                                    Next
                                </button>
                            )}

                            {currentQuestion === questions.length - 1 && (
                                <button
                                    onClick={handleSubmit}
                                    disabled={!selectedAnswers[currentQuestion]}
                                    className={`px-4 py-2 max-sm:w-[100%] focus:outline-none bg-deepBlue text-white rounded-md cursor-pointer 
                                                hover:bg-[#1e2d5e] ml-4 ${!selectedAnswers[currentQuestion] && "opacity-50 cursor-not-allowed"}`}
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizModal;