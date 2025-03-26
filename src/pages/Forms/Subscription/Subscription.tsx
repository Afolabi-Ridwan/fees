import { useState } from "react";
import FormTemplate from "../FormTemplate";


const SubscriptionForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        phone: "",
        countryCode: "NG",
        termsAccepted: false,
    });

    return (
        <FormTemplate formData={formData} setFormData={setFormData} formType="Subscription Form" heading="Subscribe" />
    );
};

export default SubscriptionForm;
