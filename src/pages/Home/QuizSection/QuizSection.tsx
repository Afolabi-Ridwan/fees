import Button from '../../../components/Button/Button'
import spiralPattern from "/assets/image/pattern.png"
import quizImg from "/assets/image/Quiz-Coloured.png"

const QuizSection = () => {
    return (
        <div className='  relative '>
            <div className='xl:pl-64 lg:pl-32 py-32 max-md:flex flex-col justify-center items-center max-md:text-center'>
                <p className="header w-[150px]">Quiz</p>
                <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6">What Track is Right for You?</h1>
                <p className="text-gray text-[14px] max-sm:text-[12px] md:w-[450px] max-md:px-6">Discover the track that best aligns with your leadership journey.
                    Take our quick quiz to find your fit!</p>
                <Button text='Take the quiz' style='bg-deepBlue text-white border-none mt-6 z-2' width='w-[200px]' />
            </div>
            <div className="absolute max-md:left-[45%] max-md:transform 
                max-md:-translate-x-1/2 max-sm:-translate-x-[55%] md:right-0 
                xl:translate-y-[-300px] translate-y-[-250px] md:top-0 xl:w-[900px] 
                max-md:w-[100%] max-sm:w-[150%] overflow-x-hidden">
                <div className="   relative 
                 max-w-none ">

                    <img src={spiralPattern} className=' w-[100%]' alt="spiralPattern" />
                    <img src={quizImg} className='w-[65%] absolute top-[20%] left-[25%]' alt="quizImg" />
                </div>
            </div>

        </div>
    )
}

export default QuizSection

