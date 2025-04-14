import { useNavigate } from 'react-router';
import { NavButtonParams } from '../../../../types/types';


const NavButton = ({
    currentQuestion,
    quizData,
    setDirection,
    setCurrentQuestion,
    selectedAnswers,
    setIsSubmitting,
    modalStateHandler
}: NavButtonParams) => {
    const navigate = useNavigate()

    const handleNext = () => {
        if (currentQuestion < quizData.length - 1) {
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
        <div className=" flex sm:mt-8 max-sm:absolute bottom-6 left-0 w-full max-sm:p-4  max-sm:justify-between">
            <div className={`w-[40px] max-sm:w-0 max-sm:mr-0 mr-4 ${currentQuestion > quizData.length - 1 && ""}`}></div>
            {currentQuestion > 0 && (
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 max-sm:w-[100%] focus:outline-none border border-deepBlue text-deepBlue font-[600] rounded-md cursor-pointer hover:bg-[#edf2ff]"
                >
                    Prev
                </button>
            )}

            <div className={`${currentQuestion > quizData.length - 1 && "w-[40px] mr-4"}`}></div>
            {currentQuestion < quizData.length - 1 && (
                <button
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentQuestion]}
                    className={`px-4 py-2 max-sm:w-[100%] focus:outline-none bg-deepBlue text-white rounded-md cursor-pointer 
                                    hover:bg-[#1e2d5e] ${currentQuestion > 0 && "ml-4"} ${!selectedAnswers[currentQuestion] && "opacity-50 cursor-not-allowed"}`}>
                    Next
                </button>
            )}

            {currentQuestion === quizData.length - 1 && (
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
    )
}

export default NavButton
