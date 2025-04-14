import { motion } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";

type QuizProps = {
  currentQuestion: number;
  direction: number;
  isMobile: boolean;
  quizData: { question: string; answers: { id: string; text: string; }[] }[];
  handleAnswerSelect: (answer: string) => void;
  selectedAnswers: (string | null)[];
};


const QandA = ({
  currentQuestion,
  direction,
  isMobile,
  quizData,
  handleAnswerSelect,
  selectedAnswers,
}: QuizProps) => {
  return (
    <div>
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

          <span className="sm:text-[24px] text-[20px] max-sm:mt-2 leading-tight">{quizData[currentQuestion].question}</span>
        </h2>

        <div className="mt-4">
          {quizData[currentQuestion].answers.map((answer, index) => (
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
    </div>
  )
}

export default QandA
