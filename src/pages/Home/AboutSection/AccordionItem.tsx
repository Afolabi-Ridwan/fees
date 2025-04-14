import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AccordionItemPropType } from "../../../types/types";



const AccordionItem: React.FC<AccordionItemPropType> = ({ header, text, icon, id, isOpen, setOpenItem }) => {
  return (
    <li
      className={`outline-none select-none border cursor-pointer border-[2px] ${
        !isOpen ? "border-lightGray" : "border-blueOnAccordion"
      } rounded-md p-4 ${(id === 2 || id === 3) && "mt-6"}`}
      onMouseEnter={() => setOpenItem(id)} 
    >
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex items-start space-x-2">
          <img src={icon} loading="lazy" alt="mapPinicon" className="w-[28px]" />
          <span className="font-semibold text-[17px] max-sm:text-[15px]">{header}</span>
        </div>
        <div>
          {!isOpen ? (
            <MdOutlineKeyboardArrowDown className="text-[30px] text-gray transition-transform duration-300 ease-in-out" />
          ) : (
            <MdOutlineKeyboardArrowUp className="text-[30px] text-gray transition-transform duration-300 ease-in-out" />
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? " opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-justify leading-relaxed text-gray text-[14px]">
          <div dangerouslySetInnerHTML={{ __html: text || "" }} />
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
