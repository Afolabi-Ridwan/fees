/* eslint-disable @typescript-eslint/no-explicit-any */

import { handleChange } from "../../helpers"
import { countries } from "../../../../provider/data"

const CountryField = ({ formData, setFormData }: any) => {
    return (
        <div>
            <label className="block text-gray text-[14px] font-medium mb-1">
                Country of Residence <span className="text-asteriskRed">*</span>
            </label>
            <select
                name="country"
                value={formData.country}
                onChange={(e) => handleChange({ e, setFormData })}
                className="w-full h-[50px] border border-inputBorder rounded-md text-[16px] px-3 pr-10 bg-[right_10px_center] bg-no-repeat appearance-none"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")"
                }}
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
