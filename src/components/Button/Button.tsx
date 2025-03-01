interface propType {
    text: string;
    style: string;
    bgOnHover?: string;
    textColorOnHover?: string;
    ml?: string;
    width?: string;
    contStyle?: string;
}

const Button: React.FC<propType> = ({ text, style, bgOnHover, textColorOnHover, ml, width, contStyle}) => {
    return (
        <div className={`group ${width} ${contStyle} h-[40px] relative duration-300  ${ml}`}>
            <button className={`${style} cursor-pointer absolute top-0 w-[100%] flex items-center justify-center font-[600] h-[100%] border rounded-[7px] border-2 py-2 ${textColorOnHover}`}>
                {text}
            </button>
            <div className={`rounded-[7px] ${bgOnHover} absolute top-0 left-0 w-0 h-[100%] z-[-1] duration-[1000ms] group-hover:w-[100%]`}></div>
        </div>
    )
}

export default Button;