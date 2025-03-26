import Button from "../../components/Button/Button";
import ConversionLayout from "../../components/Layout/ConversionLayout";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Check = () => {
    return (
        <DotLottieReact
            src="https://lottie.host/c5fb47f3-f361-4354-b71c-ea15c8545625/qML8SfRAOF.lottie"
            loop
            autoplay
        />
    );
};
const Ribbon = () => {
    return (
        <DotLottieReact
            src="https://lottie.host/4281eb35-7b77-4173-b7fd-d8c0e2c0448d/ozv18FLxxh.lottie"
            loop
            autoplay
        />
    );
};

const RegistrationSuccess = () => {
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
                        <Button text="Pay ₦100,000" bgType="deepBlueBg" style="mt-8 bg-deepBlue text-white px-6 py-2 rounded-lg" />
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
