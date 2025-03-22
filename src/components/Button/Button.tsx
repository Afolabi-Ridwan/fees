interface propType {
    text: string;
    style?: string;
    bgType: string;
    onClick?: () => void;
}

const Button: React.FC<propType> = ({ text, style, bgType, onClick}) => {
    return (
            <button onClick={onClick} className={`${bgType === "deepBlueBg"? "bg-deepBlue text-white  hover:bg-[#1e2d5e]  border-deepBlue" :
                bgType === "transparentBg" ? "text-white border border-white hover:bg-white":
                bgType === "whiteBg" ? " bg-white text-deepBlue hover:bg-[#edf2ff]" :
                bgType === "transparentBgBlueBorder" ? "text-deepBlue border border-deepBlue hover:bg-[#edf2ff]" : ""}
                ${bgType === "deepBlueBg" ? "hover:text-white" : bgType === "transparentBg" ? 
                "hover:text-deepBlue" : bgType === "whiteBg" ? "hover:text-deepBlue" :""} 
                cursor-pointer ${style} flex items-center 
                justify-center font-[600] rounded-[7px] py-2 duration-500`}>
                {text}
            </button>
    )
}

export default Button;