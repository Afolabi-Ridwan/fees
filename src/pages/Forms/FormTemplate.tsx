/* eslint-disable @typescript-eslint/no-explicit-any */

import { countries } from "../../provider/data";
import ConversionLayout from "../../components/Layout/ConversionLayout";
import Button from "../../components/Button/Button";
import { Crown, Puzzle } from "lucide-react";
import { useNavigate } from "react-router";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { formTemplateParams } from "../../types/types";
import { handleChange, handleSubmit, isFormValid } from "./helpers";


const FormTemplate = ({ heading, formType, formData, setFormData }: formTemplateParams) => {
    const navigate = useNavigate();


    return (
        <ConversionLayout currentPage={formType === "Registration Form" ? "Registration" : "Subscription Form"}>
            <div className="flex flex-col items-center">
                <p className="header mt-8">{heading}</p>
                <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6 text-center">{formType}</h1>
                <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px]">Kindly fill the form below</p>
            </div>

            <div className="flex justify-center py-10 px-4">
                <form onSubmit={(e) => handleSubmit({ e, formData, formType, navigate })} className="w-full max-w-2xl">
                    <div className="w-full bg-registrationForm border border-inputBorder p-8 max-sm:px-4 rounded-xl">
                        <div>
                            <h1 className="text-[25px] font-[500]">Personal Information</h1>
                            <p className="text-[14px] text-gray mt-0">
                                Fields marked with “<span className="text-asteriskRed">*</span>” are required
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    First Name <span className="text-asteriskRed">*</span>
                                </label>
                                <div className="w-full h-full relative">
                                    <input type="text" name="firstName" value={formData.firstName} placeholder="John" onChange={(e) => handleChange({e, setFormData})} className="w-full border-inputBorder h-[50px] text-[16px] border rounded-md py-2 px-[30px] " required />
                                    <IoPersonOutline className="absolute top-[20%] text-[18px] ml-2 text-gray" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Last Name <span className="text-asteriskRed">*</span>
                                </label>
                                <div className="w-full h-full relative">
                                    <input type="text" name="lastName" placeholder="Doe" value={formData.lastName} onChange={(e) => handleChange({e, setFormData})} className="w-full border-inputBorder h-[50px] text-[16px] border rounded-md py-2 px-[30px]" required />
                                    <IoPersonOutline className="absolute top-[20%] text-[18px] ml-2 text-gray" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Email Address <span className="text-asteriskRed">*</span>
                                </label>
                                <div className="w-full h-full relative">
                                    <input type="email" name="email" placeholder="johndoe@yahoo.com" value={formData.email} onChange={(e) => handleChange({e, setFormData})} className="w-full border-inputBorder h-[50px] text-[16px] border rounded-md py-2 px-[30px]" required />
                                    <MdOutlineEmail className="absolute top-[20%] text-[18px] ml-2 text-gray" />
                                </div>
                            </div>
                            <div >
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Confirm Email Address <span className="text-asteriskRed">*</span>
                                </label>
                                <div className="w-full h-full relative">
                                    <input type="email" name="confirmEmail" placeholder="johndoe@yahoo.com" value={formData.confirmEmail} onChange={(e) => handleChange({e, setFormData})} className="w-full border-inputBorder h-[50px] text-[16px] border rounded-md py-2 px-[30px]" required />
                                    <MdOutlineEmail className="absolute top-[20%] text-[18px] ml-2 text-gray" />
                                </div>

                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Phone Number <span className="text-asteriskRed">*</span>
                                </label>
                                <div className="flex border border-inputBorder rounded-md p-2 h-[50px]">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={(e) => handleChange({e, setFormData})}
                                        className="focus:outline-none"
                                    >
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                ({country.code})
                                            </option>
                                        ))}
                                    </select>


                                    <div className="flex items-center ">
                                        <span className="px-2">
                                            {countries.find(c => c.code === formData.countryCode)?.dialCode}
                                        </span>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => handleChange({e, setFormData})}
                                            placeholder="Enter phone number"
                                            className="w-full p-2 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            {formType === "Registration Form" && <div>
                                <label className="block  text-gray text-[14px] font-medium mb-1">
                                    Country of Residence <span className="text-asteriskRed">*</span>
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={(e) => handleChange({e, setFormData})}
                                    className="w-full h-[50px] border border-inputBorder rounded-md text-[16px] px-[10px]"
                                >
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>

                            </div>}
                        </div>
                    </div>

                    {formType === "Registration Form" && <div className="w-full bg-registrationForm border border-inputBorder p-8 max-sm:px-4 rounded-xl mt-8">
                        <div>
                            <h3 className="text-[24px] font-medium">Select a track</h3>
                            <p className=" mb-6 text-[14px] text-gray">Not sure what track is right for you? <span className="text-deepBlue underline cursor-pointer">Click here</span> to find out</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Foundational Track", price: "₦100,000", value: "Foundational", recommended: true },
                                    { label: "Advanced Track", price: "₦200,000", value: "Advanced" }
                                ].map((track) => (
                                    <button
                                        key={track.value}
                                        type="button"
                                        className={`border border-[1.5px] rounded-md p-4 text-center cursor-pointer hover:border-blueOnAccordion ${formData.track?.value === track.value ? "border-blueOnAccordion" : "border-gray-300"
                                            }`}
                                        onClick={() => setFormData({ ...formData, track: { value: track.value, price: track.price } })}
                                    >
                                        <div className="flex justify-between">
                                            <span className={`text-[24px]  ${formData.track?.value === track.value && "text-deepBlue"}`}>
                                                {track.value === "Foundational" ?
                                                    <Puzzle fill={`${formData.track?.value === track.value ? "#2d3d70" : "transparent"}`} />
                                                    : <Crown fill={`${formData.track?.value === track.value ? "#2d3d70" : "transparent"}`} />}
                                            </span>
                                            <p className="text-[12px] text-slateBlue font-[500]">{track.recommended && "Recommended"}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="block font-medium text-[18px]">{track.label}</span>
                                            <span className="block text-[12px] text-gray">{track.price}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>}


                    <div className="w-full bg-registrationForm border border-inputBorder p-8 max-sm:px-4 rounded-xl mt-8">
                        <div className="mt-4 flex items-center">
                            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={(e) => handleChange({e, setFormData})} className="mr-2 text-[70px]" required />
                            <label className="text-[14px] mt-[2px]">
                                {formType === "Registration Form" ? <span>I agree to the <a href="#" className="text-deepBlue underline">terms and conditions</a></span>
                                    : <span>I agree to receive updates and promotions from FEES Leadership Academy</span>}
                            </label>
                        </div>

                        <div className="mt-6 flex max-sm:justify-between">
                            <Button variant="blueBorder" text="Cancel" className="sm:w-[188px] w-[48%] px-6 py-2 border border-deepBlue text-deepBlue border-[1.5px] cursor-pointer rounded-md" />
                            <button
                                type="submit"
                                className="sm:w-[188px] w-[48%] px-6 py-2 sm:ml-8 bg-deepBlue cursor-pointer text-white rounded-md disabled:bg-[#d0dfff]"
                                disabled={!isFormValid({formType, formData})}
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
