import { useParams } from "react-router";
import Button from "../../components/Button/Button";
import ConversionLayout from "../../components/Layout/ConversionLayout";
import { Check, Ribbon } from "../../components/Lottie/Lottie";
    


const RegistrationSuccess = () => {

    const { trackPrice } = useParams()

    return (
        <ConversionLayout currentPage="Registration">
            <div className="flex flex-col w-full items-center justify-center md:px-4 relative overflow-x-hidden">
                <div className="w-[250px]  md:pt-30 pt-6">
                    <Check />
                </div>
                <div className="w-full max-w-[750px] text-center md:px-8 px-2 pb-30 ">

                    <h2 className="text-[36px] font-semibold text-gray-900">Submission Received!</h2>

                    <div className="w-full flex flex-col items-center justify-center">
                        <p className="mt-2 text-gray-600 md:w-[512px] w-[95%] text-[16px] text-gray text-center">
                            You are on the right track to building a solid base in leadership principles.
                            Kindly proceed to payment to complete your registration.
                        </p>
                        <Button text={`Pay ${trackPrice}`} variant="deepBlue" className="mt-8 bg-deepBlue text-white px-6 py-2 rounded-lg" />
                    </div>

                    <div className="w-full flex justify-center mt-20">
                        <div className="border border-blueOnAccordion p-4 rounded-lg md:w-[750px] w-[95%] text-[16px] font-[500] text-deepBlue text-center">
                            Please note that the payment link will also be sent to your registered email address.
                            Ensure to complete your payment before the due date.
                        </div>
                    </div>
                </div>
                <div className=" md:w-[850px] w-[800px] absolute bottom-26">
                    <Ribbon />
                </div>
            </div>
        </ConversionLayout>
    );
};

export default RegistrationSuccess;
