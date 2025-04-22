/* eslint-disable @typescript-eslint/no-explicit-any */

import { handleChange } from "../../helpers"
import { countries } from "../../../../provider/data"

const CountryField = ({formData, setFormData}: any) => {
    return (
        <div>
            <label className="block text-gray text-[14px] font-medium mb-1">
                Country of Residence <span className="text-asteriskRed">*</span>
            </label>
            <select
                name="country"
                value={formData.country}
                onChange={(e) => handleChange({ e, setFormData })}
                className="w-full h-[50px] border border-inputBorder rounded-md text-[16px] px-[10px]"
            >
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CountryField
