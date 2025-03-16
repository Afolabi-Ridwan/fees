import { useState } from "react";
import { faqs } from "../../../provider/data";
import { FaPlus} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const FaqsSection = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faqsSection">
            <p className="header z-[2]">FAQS</p>
            <h1 className="text-[29px] max-md:text-[24px] max-sm:text-[21px] z-[2] font-[600] mt-4 text-center">
                Frequently Asked Questions
            </h1>
            <p className="text-gray text-[14px] md:w-[500px] w-[100%]  max-sm:text-[12px]  mb-12 z-4 text-center">
                Got some questions? Scroll down to find all the right answers
            </p>


            <div className="max-w-2xl mx-auto p-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`mb-6 border border-[1.5px] ${openIndex === index ? "border-blueOnAccordion" : "border-borderGrey"} rounded-[10px]`}
                    >
                        <button
                            className="w-full text-left px-4 py-4 flex justify-between cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-semibold text-[16px]">{faq.question}</span>
                            <span
                                className={`text-[13px] 
                                    text-[#60646f] border border-[1.5px] border-[#60646f] p-[1px] rounded-[2px] 
                                    inline-flex items-center justify-center leading-none ml-6`}
                            >
                                {openIndex === index ? <FaTimes /> : <FaPlus />}
                            </span>
                        </button>


                        {openIndex === index && (
                            <div className="mx-4 py-3 font-[400] text-[14px] border-t border-t-[1.5px] border-t-borderGrey text-textGrey">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </div>
    )
}

export default FaqsSection
