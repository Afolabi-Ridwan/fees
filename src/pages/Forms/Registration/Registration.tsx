import { useState } from "react";
import FormTemplate from "../FormTemplate"
import { formDataType } from "../../../types/types";


const RegistrationForm = () => {
  const [formData, setFormData] = useState<formDataType>({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    countryCode: "NG",
    country: "NG",
    track: { value: "Foundational", price: "₦100,000" },
    termsAccepted: false,
  });


  return (
    <FormTemplate
      formData={formData}
      setFormData={setFormData}
      formType="Registration Form"
      heading="Registration"
    />
  )
}

export default RegistrationForm
