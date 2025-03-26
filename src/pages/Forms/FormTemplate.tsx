import { useState } from "react";
import { countries } from "../../provider/data";
import ConversionLayout from "../../components/Layout/ConversionLayout";
import Button from "../../components/Button/Button";
import { Crown, Puzzle } from "lucide-react";
import { useNavigate } from "react-router";

const FormTemplate = ({ heading, formType }: {
    heading: string,
    formType: string,
}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        phone: "",
        countryCode: "NG",
        country: "NG",
        track: "",
        termsAccepted: false,
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };




    const isFormValid = () => {
        const requiredFields = ["firstName", "lastName", "email", "confirmEmail", "phone"];

        if (formType === "Registration Form") {
            requiredFields.push("track");
        }

        const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

        if (missingFields.length > 0) {
            return false;
        }

        if (formData.email !== formData.confirmEmail) {
            return false;
        }

        return formData.termsAccepted;
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid()) {
            return;
        }
        console.log("Form submitted:", formData)
        navigate("/")
    };


    return (
        <ConversionLayout>
            <div className="flex flex-col items-center">
                <p className="header mt-8">{heading}</p>
                <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6 text-center">{formType}</h1>
                <p className="text-gray text-[14px] max-sm:text-[12px] leading-[10px]">Kindly fill the form below</p>
            </div>

            <div className="flex justify-center py-10 px-4">
                <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                    <div className="w-full bg-registrationPageForm border border-registrationPageFormBorder p-8 rounded-xl">
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
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full h-[50px] text-[16px] border rounded-md py-2 px-[10px]" required />
                            </div>
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Last Name <span className="text-asteriskRed">*</span>
                                </label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full h-[50px] text-[16px] border rounded-md py-2 px-[10px]" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Email Address <span className="text-asteriskRed">*</span>
                                </label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-[50px] text-[16px] border rounded-md py-2 px-[10px]" required />
                            </div>
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Confirm Email Address <span className="text-asteriskRed">*</span>
                                </label>
                                <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className="w-full h-[50px] text-[16px] border rounded-md py-2 px-[10px]" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Phone Number <span className="text-asteriskRed">*</span>
                                </label>
                                <div className="flex border rounded-md p-2 h-[50px]">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="border-r focus:outline-none"
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
                                            onChange={handleChange}
                                            placeholder="Enter phone number"
                                            className="w-full p-2 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray text-[14px] font-medium mb-1">
                                    Country of Residence <span className="text-asteriskRed">*</span>
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full h-[50px] border rounded-md text-[16px] px-[10px]"
                                >
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                    </div>

                    {formType === "Registration Form" && <div className="w-full bg-registrationPageForm border border-registrationPageFormBorder p-8 rounded-xl mt-8">
                        <div>
                            <h3 className="text-[24px] font-medium">Select a track</h3>
                            <p className=" mb-6 text-[14px] text-gray">Not sure what track is right for you? <span className="text-deepBlue underline cursor-pointer">Click here</span> to find out</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Foundational Track", price: "₦100,000", value: "Foundational", icon: <Puzzle /> },
                                    { label: "Advanced Track", price: "₦200,000", value: "Advanced", icon: <Crown /> }
                                ].map((track) => (
                                    <button
                                        key={track.value}
                                        type="button"
                                        className={`border border-[1.5px] rounded-md p-4 text-center cursor-pointer hover:bg-blueOnAccordion ${formData.track === track.value ? "border-blueOnAccordion" : "border-gray-300"
                                            }`}
                                        onClick={() => setFormData({ ...formData, track: track.value })}
                                    >
                                        <div className={`text-[24px]  ${formData.track === track.value && "text-deepBlue"}`}>
                                            {track.icon}
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


                    <div className="w-full bg-registrationPageForm border border-registrationPageFormBorder p-8 rounded-xl mt-8">
                        <div className="mt-4 flex items-center">
                            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" required />
                            <label className="text-14px">
                                I agree to the <a href="#" className="text-deepBlue underline">terms and conditions</a>
                            </label>
                        </div>

                        <div className="mt-6 flex max-sm:justify-between">
                            <Button bgType="transparentBgBlueBorder" text="Cancel" style="sm:w-[188px] w-[48%] px-6 py-2 border border-deepBlue text-deepBlue border-[1.5px] cursor-pointer rounded-md" />
                            <button
                                type="submit"
                                className="sm:w-[188px] w-[48%] px-6 py-2 sm:ml-8 bg-deepBlue cursor-pointer text-white rounded-md disabled:bg-[#d0dfff]"
                                disabled={!isFormValid()}
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
