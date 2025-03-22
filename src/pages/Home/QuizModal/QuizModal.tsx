import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../../../components/Utils/Utils";
import HeaderOnQuizSection from "../../../components/HeaderOnQuizSection/HeaderOnQuizSection";
import { useModalStateContext } from "../../../contexts/ModalContext";
import LoaderModal from "../../../components/LoaderModal/LoaderModal";
import { questions } from "../../../provider/data";



interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const QuizModal: React.FC<QuizModalProps> = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate()
    const isMobile = useIsMobile()

    const { modalState, modalStateHandler } = useModalStateContext()

    useEffect(() => {
        document.body.style.overflow = modalState ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalState]);


    if (!modalState) return null;

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setDirection(1);
            setCurrentQuestion((prev) => prev + 1);
        }
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
            navigate("/recommendationPage")
        }, 3000);


    };


    return (
        <div id="quiz-modal">
            {isMobile ? <HeaderOnQuizSection /> : ""}
            <div className={`fixed inset-0 flex justify-center items-center z-30 ${isSubmitting && "z-50"}`} style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg w-[65%] max-lg:w-[80%] max-sm:w-[100%] h-[620px] max-sm:h-[100%] shadow-lg  relative">
                    <i
                        className="border border-2 border-white text-white text-[10px] rounded-full p-1 cursor-pointer absolute right-0 top-0 translate-y-[-25px] translate-x-[25px] hover:text-[14px] duration-400"
                        onClick={() => modalStateHandler(false)}
                    >
                        <FaTimes />
                    </i>

                    <div className="w-[80%] max-md:w-[100%] ">
                        <div className="flex items-center">

                            <p className="flex w-[40px] justify-between mr-4 text-[12px] font-[600]">
                                <span>{currentQuestion + 1}</span>
                                <span>/</span>
                                <span>{questions.length}</span>
                            </p>
                            <div className="w-full bg-[#d0dfff] h-1 overflow-hidden rounded-md ">
                                <motion.div
                                    className="bg-deepBlue h-1 transition-all duration-300"
                                    style={{
                                        width: currentQuestion === 0 ? "0%" : `${(currentQuestion / (questions.length - 1)) * 100}%`,
                                    }}
                                ></motion.div>
                            </div>
                        </div>

                        <div className=" mt-6  overflow-hidden mt-16">
                            <div className="h-[220px] max-sm:h-[370px]">
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (

                                        <LoaderModal isOpen={isSubmitting} />
                                    ) : <motion.div
                                        key={currentQuestion}
                                        initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
                                        animate={{ x: "0%", opacity: 1 }}
                                        exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                    >
                                        <h2 className="flex max-sm:flex-col  font-semibold text-[#60646f] items-start">
                                            <span className="text-[18px] flex items-center min-w-[40px] justify-between mr-4 flex-shrink-0">
                                                <span>{`0${currentQuestion + 1}`}</span>
                                                <span className={`font-light ${isMobile && "text-[22px]"}`}>{isMobile ? "⬎" : "↳"}  </span>
                                            </span>

                                            <span className="text-[24px] max-sm:mt-6 leading-tight">{questions[currentQuestion].question}</span>
                                        </h2>


                                        <div className="mt-4">
                                            {questions[currentQuestion].answers.map((answer, index) => (
                                                <div key={index} className="flex group">
                                                    <div className="w-[40px] max-sm:w-0 max-sm:mr-0 mr-4"></div>
                                                    <button

                                                        className="flex w-full p-3 border border-[#d6dae3] rounded-md mt-2 text-left text-[16px] font-[600] cursor-pointer transition"
                                                    >
                                                        <span className="mr-4 mt-[2px] px-[5px] pt-[3px] text-[14px] border border-[#d6dae3] inline-flex  leading-none group-hover:bg-deepBlue group-hover:text-white duration-500">{answer.id}</span>
                                                        <span>{answer.text}</span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className=" flex mt-14">
                            <div className={`w-[40px] max-sm:w-0 max-sm:mr-0   mr-4 ${currentQuestion > questions.length - 1 && ""}`}></div>
                            {currentQuestion > 0 && (
                                <button
                                    onClick={handlePrev}
                                    className="px-4 py-2 max-sm:w-[100%] focus:outline-none border border-deepBlue text-deepBlue font-[600] rounded-md cursor-pointer hover:bg-[#edf2ff]"
                                >
                                    Prev
                                </button>
                            )}

                            <div className={`${currentQuestion > questions.length - 1 && "w-[40px]  mr-4"}`}></div>
                            {currentQuestion < questions.length - 1 && (
                                <button
                                    onClick={handleNext}
                                    className={`px-4 py-2 max-sm:w-[100%] focus:outline-none bg-deepBlue text-white rounded-md cursor-pointer hover:bg-[#1e2d5e] ${currentQuestion > 0 && "ml-4"}`}                                >
                                    Next
                                </button>
                            )}

                            {currentQuestion === questions.length - 1 && (
                                <button
                                    onClick={handleSubmit}
                                    className={`px-4 py-2 max-sm:w-[100%] focus:outline-none bg-deepBlue text-white rounded-md cursor-pointer hover:bg-[#1e2d5e] ${currentQuestion > 0 && "ml-4"}`}
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