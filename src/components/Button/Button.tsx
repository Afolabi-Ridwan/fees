interface propType {
    text: string;
    width?: string;
    contStyle?: string;
    bgType: string;
}

const Button: React.FC<propType> = ({ text, width, contStyle, bgType}) => {
    return (
        <div className={`group ${width} ${contStyle} h-[40px] relative duration-300`}>
            <button className={`${bgType === "deepBlueBg"? "bg-deepBlue text-white mr-2 group-hover:bg-transparent  border-deepBlue" :
                bgType === "transparentBg" ? "text-white border border-white":
                bgType === "whiteBg" ? "border-white bg-white text-deepBlue group-hover:bg-transparent" :
                bgType === "transparentBgBlueBorder" ? "text-deepBlue border border-deepBlue" : ""}
                ${bgType === "deepBlueBg" ? "group-hover:text-deepBlue" : bgType === "transparentBg" ? 
                "group-hover:text-deepBlue" : bgType === "whiteBg" ? "group-hover:text-white":
                bgType === "transparentBgBlueBorder" ? "group-hover:text-white" :""} 
                cursor-pointer absolute top-0 w-[100%] flex items-center 
                justify-center font-[600] h-[100%] border rounded-[7px] border-2 py-2`}>
                {text}
            </button>
            <div className={`rounded-[7px] ${bgType === "deepBlueBg" ? "bg-white" : bgType === "transparentBg" ? 
                "bg-white": bgType === "transparentBgBlueBorder" ? "bg-deepBlue" : ""} 
                absolute top-0 left-0 w-0 h-[100%] z-[-1] duration-[1000ms] group-hover:w-[100%]`}></div>
        </div>
    )
}

export default Button;