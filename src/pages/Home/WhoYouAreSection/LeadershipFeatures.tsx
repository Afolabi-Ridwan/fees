import checkIcon from "/assets/icons/SealCheck.png"
import { whatYouLike, whoYouAre } from "../../../provider/data"

const LeadershipFeatures = () => {

  return (
    <div>
      <div className="mb-12">
                        <h2 className="text-[24px] font-bold">Who You Are</h2>
                        <p className="text-gray-600 mb-6 text-[14px]">Identify if you resonate with these qualities:</p>

                        <div className="grid md:grid-cols-2 gap-2 border-b border-b-2 border-grayFaded pb-[30px]">
                            {whoYouAre.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 pr-4 py-2 ">
                                    <img src={checkIcon} loading="lazy" className="w-[24px]" alt="checkIcon" />
                                    <div>
                                        <h3 className="font-semibold border-b border-b-2 border-grayFaded pb-1 mb-1 text-[16px]">{item.title}</h3>
                                        <p className="text-gray-600 text-[14px]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-[-20px]">
                        <h2 className="text-[24px] font-bold">What You Like</h2>
                        <p className="text-gray-600 mb-6 text-[14px]">Discover the features of FEES Leadership Academy that support your goals:</p>

                        <div className="grid md:grid-cols-2 gap-2">
                            {whatYouLike.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 pr-4 py-2 ">
                                <img src={checkIcon} loading="lazy" className="w-[24px]" alt="checkIcon" />
                                <div>
                                    <h3 className="font-semibold border-b border-b-2 border-grayFaded pb-1 mb-1 text-[16px]">{item.title}</h3>
                                    <p className="text-gray-600 text-[14px]">{item.desc}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
    </div>
  )
}

export default LeadershipFeatures
