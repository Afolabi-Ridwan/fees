import Button from "../../components/Button/Button";
import ConversionLayout from "../../components/Layout/ConversionLayout";

const RegistrationSuccess = () => {
    return (
        <ConversionLayout>
            <div className="flex flex-col w-full items-center justify-center py-36 px-4">
                <div className="w-full max-w-[750px] text-center p-8">
                    <img src="" alt="" />
                    <h2 className="text-[36px] font-semibold text-gray-900">Submission Received!</h2>

                    <div className="w-full flex flex-col items-center justify-center">
                        <p className="mt-2 text-gray-600 w-[512px] text-[16px] text-gray text-center">
                            You are on the right track to building a solid base in leadership principles.
                            Kindly proceed to payment to complete your registration.
                        </p>
                    <Button text="Pay ₦100,000" bgType="deepBlueBg" style="mt-8 bg-deepBlue text-white px-6 py-2 rounded-lg" />
                    </div>                        
                    

                    <div className="w-full flex justify-center mt-20">
                        <div className="border border-blueOnAccordion p-4 rounded-lg w-[750px] text-[16px] font-[500] text-deepBlue text-center">
                            Please note that the payment link will also be sent to your registered email address.
                            Ensure to complete your payment before the due date.
                        </div>
                    </div>
                </div>
            </div>
        </ConversionLayout>
    );
};

export default RegistrationSuccess;
