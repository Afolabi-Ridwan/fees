import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"

interface accordionItemPropType {
    header: string;
    text?: string;
    icon: string;
    id: number;
    isOpen: boolean;
    toggleItem: () => void;
}

const AccordionItem: React.FC<accordionItemPropType> = ({ header, text, icon, id, isOpen, toggleItem }) => {


    return (
        <li className={`outline-none select-none border cursor-pointer border-[2px] ${!isOpen ? "border-lightGray" : "border-blueOnAccordion"} 
        rounded-md p-4 ${(id == 2 || id == 3) && "mt-6"}`} onClick={toggleItem}>
            <div className="w-[100%] flex justify-between items-center">
                <div className="flex items-start space-x-2">
                    <img src={icon} loading="lazy" alt="mapPinicon" className="w-[28px]" />
                    <span className="font-semibold text-[17px] max-sm:text-[15px]">{header}</span>
                </div>
                <div>
                {!isOpen ? <i><MdOutlineKeyboardArrowDown className="text-[30px] text-gray" /></i> :
                <i><MdOutlineKeyboardArrowUp className="text-[30px] text-gray" /></i>}
                </div>
            </div>
            <p className={`${isOpen ? "block" : "hidden"}  duration-700 text-justify leading-relaxed text-gray text-[14px] mt-6`}>
                {text}
            </p>
        </li>
    )
}

export default AccordionItem
