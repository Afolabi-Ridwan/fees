/* eslint-disable @typescript-eslint/no-explicit-any */

import ConversionLayout from "../../../components/Layout/ConversionLayout";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router";
import { formParams } from "../../../types/types";
import { handleSubmit, isFormValid } from "../helpers";
import NameAndEmailField from "./NameAndEmailField/NameAndEmailField";
import PhoneNoField from "./PhoneNoField/PhoneNoField";
import CountryField from "./CountryField/CountryField";
import TrackSelection from "./TrackSelection/TrackSelection";
import TermsCheckbox from "./TermsCheckbox/TermsCheckbox";
import { useState } from "react";

const FormTemplate = ({ heading, formType, formData, setFormData }: formParams) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});


    return (
        <ConversionLayout currentPage={formType === "Registration Form" ? "Registration" : "Subscription Form"}>
            <div className="flex flex-col items-center">
                <p className="mt-8 header">{heading}</p>
                <h1 className="mt-6 text-center text-[29px] font-[600] max-md:text-[24px] max-sm:text-[21px]">
                    {formType}
                </h1>
                <p className="text-[14px] leading-[10px] text-gray max-sm:text-[12px]">
                    Kindly fill the form below
                </p>
            </div>

            <div className="flex justify-center px-4 py-10">
                <form
                    onSubmit={(e) => handleSubmit({ e, formData, formType, navigate })}
                    className="w-full max-w-2xl"
                >
                    <div className="w-full rounded-xl border border-inputBorder bg-registrationForm p-8 max-sm:px-4">
                        <div>
                            <h1 className="text-[25px] font-[500]">Personal Information</h1>
                            <p className="mt-0 text-[14px] text-gray">
                                Fields marked with “
                                <span className="text-asteriskRed">*</span>” are required
                            </p>
                        </div>

                        <NameAndEmailField
                            formData={formData}
                            setFormData={setFormData}
                            formErrors={formErrors}
                            setFormErrors={setFormErrors}
                        />

                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <PhoneNoField formData={formData} setFormData={setFormData} />

                            {formType === "Registration Form" && (
                                <CountryField formData={formData} setFormData={setFormData} />
                            )}
                        </div>
                    </div>

                    {formType === "Registration Form" && (
                        <TrackSelection formData={formData} setFormData={setFormData} />
                    )}

                    <div className="mt-8 w-full rounded-xl border border-inputBorder bg-registrationForm p-8 max-sm:px-4">
                        <TermsCheckbox
                            formData={formData}
                            setFormData={setFormData}
                            formType={formType}
                        />

                        <div className="mt-6 flex max-sm:justify-between">
                            <Button
                                variant="blueBorder"
                                text="Cancel"
                                className="w-[48%] rounded-md border border-[1.5px] border-deepBlue px-6 py-2 text-deepBlue sm:w-[188px]"
                            />
                            <button
                                type="submit"
                                className="w-[48%] cursor-pointer rounded-md bg-deepBlue px-6 py-2 text-white disabled:bg-[#d0dfff] sm:ml-8 sm:w-[188px]"
                                disabled={!isFormValid({ formType, formData })}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </ConversionLayout>
    );
};

export default FormTemplate;
