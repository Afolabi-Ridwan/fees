import { useState } from "react";
import FormTemplate from "../FormTemplate/FormTemplate"
import { formDataType } from "../../../types/types";
import { useLocation } from "react-router";


const RegistrationForm = () => {
  const location = useLocation()
  const recommendation = location.state?.recommendation

  const [formData, setFormData] = useState<formDataType>({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    countryCode: "NG",
    country: "NG",
    track: { value: recommendation && "Foundational", price: "₦100,000" },
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
