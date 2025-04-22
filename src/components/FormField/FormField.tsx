import { IconType } from "react-icons";
import { formDataType } from "../../types/types";
import { handleChange } from "../../pages/Forms/helpers";

interface FormFieldParams {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
  setFormErrors?: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  Icon: IconType;
  value: string;
  error?: string;
  touchedFields?: { [key: string]: boolean };
  setTouchedFields?: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}




const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  Icon,
  setFormData,
  setFormErrors,
  error
}: FormFieldParams) => {
  return (
    <div className="w-full mb-4">
      <label className="block text-gray text-[14px] font-medium mb-1">
        {label} <span className="text-asteriskRed">*</span>
      </label>
      <div className="w-full h-full relative">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange({ e, setFormData, setFormErrors })}
          className="w-full border-inputBorder h-[50px] text-[16px] border rounded-md py-2 px-[30px]"
          required
        />

        <Icon className="absolute top-[20%] text-[18px] ml-2 text-gray" />
      {error && <p className="text-red-500 text-[12px]">{error}</p>}
      </div>


    </div>
  );
};

export default FormField;
