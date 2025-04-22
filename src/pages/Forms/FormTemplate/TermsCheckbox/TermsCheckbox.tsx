import { formParams } from "../../../../types/types"
import { handleChange } from "../../helpers"



const TermsCheckbox = ({formData, setFormData, formType}: formParams) => {
    return (
        <div className="mt-4 flex items-center">
            <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={(e) => handleChange({ e, setFormData })}
                className="mr-2 w-4 h-4"
                required
            />
            <label htmlFor="termsAccepted" className="text-[14px]">
                {formType === "Registration Form" ? (
                    <span>I agree to the <a href="#" className="text-deepBlue underline">terms and conditions</a></span>
                ) : (
                    <span>I agree to receive updates and promotions from FEES Leadership Academy</span>
                )}
            </label>
        </div>
    )
}

export default TermsCheckbox
