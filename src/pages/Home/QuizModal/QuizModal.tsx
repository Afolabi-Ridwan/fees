import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {  AnimatePresence } from "framer-motion";
import { useIsMobile } from "../../../components/Utils/Utils";
import PagesHeader from "../../../components/Header/PagesHeader";
import { useModalStateContext } from "../../../contexts/ModalContext";
import LoaderModal from "../../../components/LoaderModal/LoaderModal";
import { quizData } from "../../../provider/data";
import QandA from "./components/QandA";
import NavButton from "./components/NavButton";
import Progressbar from "./components/Progressbar";

const QuizModal: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(quizData.length).fill(null)); // Store answers
    const isMobile = useIsMobile();
    const { modalState, modalStateHandler } = useModalStateContext();
    useEffect(() => {
        document.body.style.overflow = modalState ? "hidden" : "auto";
        if (modalState) {

            setDirection(1);
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
                        
                        <Progressbar currentQuestion={currentQuestion} quizData={quizData}/>

                        <div className=" overflow-hidden mt-16 max-sm:mt-6">
                            <div className="h-[280px] max-sm:h-[370px]">
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (
                                        <LoaderModal isOpen={isSubmitting} />
                                    ) : (
                                        <QandA
                                            currentQuestion={currentQuestion}
                                            direction={direction}
                                            isMobile={isMobile}
                                            quizData={quizData}
                                            handleAnswerSelect={handleAnswerSelect}
                                            selectedAnswers={selectedAnswers}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <NavButton
                            currentQuestion={currentQuestion}
                            quizData={quizData}
                            setDirection={setDirection}
                            setCurrentQuestion={setCurrentQuestion}
                            selectedAnswers={selectedAnswers}
                            setIsSubmitting={setIsSubmitting}
                            modalStateHandler={modalStateHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizModal;