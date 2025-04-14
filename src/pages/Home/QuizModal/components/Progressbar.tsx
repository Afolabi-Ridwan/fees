import { motion } from "framer-motion";

const Progressbar = ({currentQuestion, quizData}: {
    currentQuestion: number, 
    quizData: { question: string; answers: { id: string; text: string; }[] }[];}) => {
    return (
        <div className="sm:flex items-center">
            <p className="flex  w-[40px] justify-between mr-4 text-[13px] font-[600]">
                <span>{currentQuestion + 1}</span>
                <span>/</span>
                <span>{quizData.length}</span>
            </p>
            <div className="w-full bg-[#d0dfff] h-1 overflow-hidden rounded-md max-sm:mt-4">
                <motion.div
                    className="bg-deepBlue h-1 transition-all duration-300"
                    style={{
                        width: currentQuestion === 0 ? "0%" : `${(currentQuestion / (quizData.length - 1)) * 100}%`,
                    }}
                ></motion.div>
            </div>
        </div>
    )
}

export default Progressbar
