interface ButtonProps {
    text: string;
    variant?: 'deepBlue' | 'transparent' | 'white' | 'blueBorder';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
  }
  
  const variantClasses: Record<string, string> = {
    deepBlue: "bg-deepBlue text-white hover:bg-[#1e2d5e] border-deepBlue hover:text-white",
    transparent: "text-white border border-white hover:bg-white hover:text-deepBlue",
    white: "bg-white text-deepBlue hover:bg-[#edf2ff] hover:text-deepBlue",
    blueBorder: "text-deepBlue border border-deepBlue hover:bg-[#edf2ff] hover:text-deepBlue"
  };
  
  const Button: React.FC<ButtonProps> = ({
    text,
    variant = '',
    className = '',
    onClick,
    type = 'button'
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`cursor-pointer flex items-center justify-center font-semibold rounded-[7px] py-2 duration-500 ${variantClasses[variant]} ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  