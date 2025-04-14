import { formDataType, handleSubmitParams } from "../../types/types";


export const handleChange = ({ e, setFormData }: {
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<formDataType>>
}) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
};


export const isFormValid = ({ formType, formData }: handleSubmitParams) => {
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


export const handleSubmit = ({ e, formData, formType, navigate }: handleSubmitParams) => {
    e?.preventDefault();
    if (!isFormValid({ formType, formData })) {
        return;
    }
    if (formType === "Registration Form") {
        navigate?.(`/registration-success/${formData.track?.price}`)
    } else {
        navigate?.("/")
    }
};