import checkIcon from "/assets/icons/SealCheck.png"

const whoYouAre = [
    { title: "Driven to Lead with Purpose", desc: "Motivated by a desire to inspire others and make a meaningful impact." },
    { title: "Committed to Lifelong Growth", desc: "Embraces learning, adapting, and evolving continuously." },
    { title: "Aspiring to Influence Change", desc: "Aims to bring about positive change in your career, business, or community." },
    { title: "Seeking Mentorship and Collaboration", desc: "Values learning from experienced leaders and connecting with driven peers." },
    { title: "Ready to Invest in Your Future", desc: "Prepared to take the next step in a meaningful leadership journey." }
]

const whatYouLike = [
    { title: "Personalized Learning Tracks", desc: "Tailored pathways for leaders at every stage." },
    { title: "Exclusive Class Sizes", desc: "Small cohorts of 30 ensure personalized attention and interaction." },
    { title: "Access to Industry-Leading Faculty", desc: "Learn from seasoned experts dedicated to your growth." },
    { title: "Hands-On Leadership Skills", desc: "Practical skills development for immediate impact in real-world settings." }
]


const LeadershipFeatures = () => {

  return (
    <div>
      <div className="mb-12">
                        <h2 className="text-[24px] font-bold">Who You Are</h2>
                        <p className="text-gray-600 mb-6 text-[14px]">Identify if you resonate with these qualities:</p>

                        <div className="grid md:grid-cols-2 gap-2 border-b border-b-2 border-grayFaded pb-[30px]">
                            {whoYouAre.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 pr-4 py-2 ">
                                    <img src={checkIcon} className="w-[24px]" alt="checkIcon" />
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
                                <img src={checkIcon} className="w-[24px]" alt="checkIcon" />
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
