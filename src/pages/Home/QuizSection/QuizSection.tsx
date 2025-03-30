import Button from '../../../components/Button/Button';
import { useModalStateContext } from '../../../contexts/ModalContext';
import spiralPattern from "/assets/image/pattern.png";
import quizImg from "/assets/image/Quiz-Coloured.png";

const QuizSection = () => {

    const { modalStateHandler } = useModalStateContext()
    return (
        <div className='relative lg:min-h-[600px] md:min-h-[400px] min-h-[900px]'>
            <div className='xl:pl-64 lg:pl-32 md:pl-12 mt-20 max-md:flex flex-col justify-center items-center max-md:text-center'>
                <div className="w-fit">
                    <p className="header">Quiz</p>
                </div>
                <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6">
                    What Track is Right for You?
                </h1>
                <p className="text-gray text-[14px] max-sm:text-[12px] lg:w-[450px] md:w-[350px] max-md:px-6">
                    Discover the track that best aligns with your leadership journey.
                    Take our quick quiz to find your fit!
                </p>
                <Button text='Take the quiz' bgType='deepBlueBg' style='mt-6 z-4 w-[200px]' onClick={() => modalStateHandler(true)} />
            </div>

            <div className="relative w-full h-full">
                <div className="absolute max-md:left-[45%] max-md:transform 
                    max-md:-translate-x-1/2 max-sm:-translate-x-[55%] md:right-0 
                    lg:translate-y-[-550px] md:translate-y-[-400px] translate-y-[-50px] md:top-0 
                    xl:w-[900px] lg:w-[800px] md:w-[500px]
                    max-md:w-[100%] max-sm:w-[100%] z-2">

                    <div className="relative max-w-none ">
                        <img src={spiralPattern} loading="lazy" className='w-[100%]' alt="spiralPattern" />
                        <img src={quizImg} loading="lazy" className='w-[65%] max-sm:w-[80%] absolute top-[20%] left-[25%] max-sm:top-[13%] max-sm:left-[20%]' alt="quizImg" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default QuizSection;
