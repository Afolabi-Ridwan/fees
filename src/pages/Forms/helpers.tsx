import { formDataType, handleSubmitParams } from "../../types/types";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateField = (
  name: keyof formDataType,
  formData: formDataType,
  setFormErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
) => {
  setFormErrors(prevErrors => {
    const updatedErrors = { ...prevErrors };

    if (name === "email") {
      if (!isValidEmail(formData.email)) {
        updatedErrors.email = "Enter a valid email";
      } else {
        delete updatedErrors.email;
      }
    } else if (name === "confirmEmail") {
      if (formData.confirmEmail !== formData.email) {
        updatedErrors.confirmEmail = "Emails do not match";
      } else {
        delete updatedErrors.confirmEmail;
      }
    } else {
      const value = formData[name];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        updatedErrors[name] = "This field is required";
      } else {
        delete updatedErrors[name];
      }
    }

    return updatedErrors;
  });
};

export const handleChange = ({
  e,
  setFormData,
  setFormErrors,
  touchedFields,
  setTouchedFields,
}: {
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
  setFormErrors?: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  touchedFields?: { [key in keyof formDataType]?: boolean };
  setTouchedFields?: React.Dispatch<
    React.SetStateAction<{ [key in keyof formDataType]?: boolean }>
  >;
}) => {
  const { name, value, type } = e.target;
  const fieldName = name as keyof formDataType;
  const fieldValue = type === "checkbox"
    ? (e.target as HTMLInputElement).checked
    : value;

  if (setTouchedFields) {
    setTouchedFields(prev => ({ ...prev, [fieldName]: true }));
  }

  setFormData(prev => {
    const updated = {
      ...prev,
      [fieldName]: fieldValue,
    };

    setTimeout(() => {
      if (setFormErrors) {
        validateField(fieldName, updated, setFormErrors);

        if (
          fieldName === "email" &&
          touchedFields?.confirmEmail 
        ) {
          validateField("confirmEmail", updated, setFormErrors);
        }
      }
    }, 0);

    return updated;
  });
};



export const isFormValid = ({ formType, formData }: handleSubmitParams) => {
  const requiredFields: (keyof formDataType)[] = [
    "firstName",
    "lastName",
    "email",
    "confirmEmail",
    "phone",
  ];

  if (formType === "Registration Form") {
    requiredFields.push("track");
  }

  const hasAllFields = requiredFields.every(field => {
    const value = formData[field];
    return value !== undefined && value !== null && value !== "";
  });

  if (!hasAllFields) return false;
  if (!isValidEmail(formData.email)) return false;
  if (formData.email !== formData.confirmEmail) return false;
  return !!formData.termsAccepted;
};

export const handleSubmit = ({ e, formData, formType, navigate }: handleSubmitParams) => {
  e?.preventDefault();
  if (!isFormValid({ formType, formData })) {
    return;
  }

  if (formType === "Registration Form") {
    navigate?.(`/registration-success/${formData.track?.price}`);
  } else {
    navigate?.("/");
  }
};