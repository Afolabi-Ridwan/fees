import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AccordionItemPropType } from "../../../types/types";

const AccordionItem: React.FC<AccordionItemPropType> = ({ header, text, icon, id, isOpen, setOpenItem }) => {
  return (
    <li
      className={`outline-none select-none border cursor-pointer border-[2px] ${
        !isOpen ? "border-lightGray" : "border-blueOnAccordion"
      } rounded-md p-4 ${(id === 2 || id === 3) && "mt-6"} transition-all duration-300`}
      onMouseEnter={() => setOpenItem(id)}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex items-start space-x-2">
          <img src={icon} loading="lazy" alt="mapPinicon" className="w-[28px]" />
          <span className="font-semibold text-[17px] max-sm:text-[15px]">{header}</span>
        </div>
        <div>
          {isOpen ? (
            <MdOutlineKeyboardArrowUp className="text-[30px] text-gray transition-transform duration-300 ease-in-out" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-[30px] text-gray transition-transform duration-300 ease-in-out" />
          )}
        </div>
      </div>

      <div
        className={`grid transition-all duration-400 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-justify leading-relaxed text-gray text-[14px]">
          <div dangerouslySetInnerHTML={{ __html: text || "" }} />
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
