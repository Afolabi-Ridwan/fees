import { countries } from "../../../../provider/data";
import { formParams } from "../../../../types/types";
import { handleChange } from "../../helpers";

const PhoneNoField = ({ formData, setFormData }: formParams) => {
    return (
        <div>
            <label className="block text-gray text-[14px] font-medium mb-1">
                Phone Number <span className="text-asteriskRed">*</span>
            </label>
            <div className="flex border border-inputBorder rounded-md p-2 h-[50px] bg-white">
                <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={(e) => handleChange({ e, setFormData })}
                    className="focus:outline-none">
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
                        onChange={(e) => handleChange({ e, setFormData })}
                        placeholder="Enter phone number"
                        className="w-full p-2 focus:outline-none"
                        required
                    />
                </div>
            </div>
        </div>
    )
}

export default PhoneNoField;
