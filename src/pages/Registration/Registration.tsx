import { useState } from "react";
import { countries } from "../../provider/data";
import ConversionLayout from "../../components/Layout/ConversionLayout";
import { FaCrown, FaPuzzlePiece } from "react-icons/fa6";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        phone: "",
        countryCode: "NG",
        track: "",
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <ConversionLayout>
            <div className="flex flex-col items-center">
                <p className="header mt-8">Registration</p>
                <h1 className="text-[29px]  max-md:text-[24px] max-sm:text-[21px] font-[600] mt-6 text-center">Registration Form</h1>
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
                                        className="border-r  focus:outline-none"
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
                                <select name="country" value={formData.countryCode} onChange={handleChange} className="w-full h-[50px] border rounded-md text-[16px] px-[10px]">
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-registrationPageForm border border-registrationPageFormBorder p-8 rounded-xl mt-8">
                        <div>
                            <h3 className="text-[24px] font-medium">Select a track</h3>
                            <p className=" mb-6 text-[14px] text-gray">Not sure what track is right for you? <span className="text-deepBlue underline">Click here</span> to find out</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Foundational Track", price: "₦100,000", value: "Foundational", icon: <FaPuzzlePiece /> },
                                    { label: "Advanced Track", price: "₦200,000", value: "Advanced", icon: <FaCrown /> }
                                ].map((track) => (
                                    <button
                                        key={track.value}
                                        type="button"
                                        className={`border rounded-md p-4 text-center ${formData.track === track.value ? "border-blue-500 bg-blue-100" : "border-gray-300"
                                            }`}
                                        onClick={() => setFormData({ ...formData, track: track.value })}
                                    >
                                        <div className="text-[24px] text-deepBlue">
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
                    </div>


                    <div className="w-full bg-registrationPageForm border border-registrationPageFormBorder p-8 rounded-xl mt-8">
                        <div className="mt-4 flex items-center">
                            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" required />
                            <label>
                                I agree to the <a href="#" className="text-blue-500">terms and conditions</a>
                            </label>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <button type="button" className="px-6 py-2 border rounded-md">Cancel</button>
                            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300" disabled={!formData.termsAccepted}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </ConversionLayout>
    );
};

export default RegistrationForm;
