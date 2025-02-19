import { MdOutlineKeyboardArrowDown } from "react-icons/md"

interface accordItemPropType {
    header: string;
    text?: string;
    icon: string;
    id: number;
}

const AccordionItem:React.FC<accordItemPropType> = ({header, text, icon, id}) => {
    return (
        <li className={`border border-[2px] ${(id == 2 || id == 3) ? "border-lightGray" : "border-blueOnAccordion"} rounded-md p-4 ${(id == 2 || id == 3) && "mt-6"}`} >
            <div className="w-[100%] flex justify-between items-center">
                <div className="flex items-start space-x-2">
                    <img src={icon} alt="mapPinicon" className="w-[28px]" />
                    <span className="font-semibold text-[17px] max-sm:text-[15px]">{header}</span>
                </div>
                <div>
                    <i><MdOutlineKeyboardArrowDown className="text-[30px] text-gray" /></i>
                </div>
            </div>
            <p className={`text-justify leading-relaxed text-gray text-[14px] ${(id == 1) && "mt-6"}`}>
                {text}
            </p>
        </li>
    )
}

export default AccordionItem
