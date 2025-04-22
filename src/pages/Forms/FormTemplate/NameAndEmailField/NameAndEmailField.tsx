import FormField from "../../../../components/FormField/FormField"
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { formDataType } from "../../../../types/types";



const NameAndEmailField = ({
    formData,
    setFormData,
    formErrors,
    setFormErrors,
  }: {
    formData: formDataType;
    setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
    formErrors: { [key: string]: string };
    setFormErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  }) => {

    const [touchedFields, setTouchedFields] = useState<{ [key in keyof formDataType]?: boolean }>({});

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <FormField
                    Icon={IoPersonOutline}
                    type="text"
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    setFormData={setFormData}
                    touchedFields={touchedFields}
                    setTouchedFields={setTouchedFields}
                />

                <FormField
                    Icon={IoPersonOutline}
                    type="text"
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    setFormData={setFormData}
                    touchedFields={touchedFields}
                    setTouchedFields={setTouchedFields}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                <FormField
                    Icon={MdOutlineEmail}
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="johndoe@yahoo.com"
                    value={formData.email}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                    error={formErrors.email}
                />


                <FormField
                    Icon={MdOutlineEmail}
                    label="Confirm Email Address"
                    type="email"
                    name="confirmEmail"
                    placeholder="johndoe@yahoo.com"
                    value={formData.confirmEmail}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                    error={formErrors.confirmEmail}
                />
            </div>
        </div>
    )
}

export default NameAndEmailField
