import displayImg from "/assets/image/man-on-board.png"
import spiralPattern from "/assets/image/Vector 12.png"
import LeadershipFeatures from "./LeadershipFeatures"

const WhoYouAreSection = () => {
    return (
        <section className="whoYouAreSection my-4 lg:px-20 md:px-10  px-6 py-8 w-[100%] relative">
            <img src={spiralPattern} loading="lazy" alt="spiralPattern" className="md:w-[350px] w-[210px] absolute right-0 top-0 " />
            <p className="header z-[2]">Who is it for</p>

            <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] z-[2] font-[600] mt-6 text-center"> Where do you fit in</h1>
            <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px]">Journey into who you are and where you fit in below </p>
            <div className="w-[100%] flex max-md:flex-col mt-8">
                <div className="md:w-[50%] w-[100%]">
                    <img src={displayImg} loading="lazy" alt="displayImg" className="w-[100%] md:h-[auto] rounded-[10px] h-[550px] object-cover object-top" />
                </div>
                <div className="w-[100%] md:ml-16 max-md:mt-6">
                    <LeadershipFeatures />
                </div>
            </div>
        </section>
    )
}

export default WhoYouAreSection