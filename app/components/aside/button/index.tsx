import { FaChevronRight } from "react-icons/fa6";

interface ButtonProps {
  Icon?: React.ElementType;
  text?: string;
  isActive?: boolean;
}
const Button = ({ Icon, text, isActive }: ButtonProps) => {
  return (
    <button
      className={`px-3 py-2.5  flex gap-2 items-center radius-8 w-full cursor-pointer ${
        isActive
          ? "bg-Neutral-100 dark:bg-Neutral-800"
          : "bg-transparent text-Neutral-700 dark:text-Neutral-200"
      }`}
    >
      {Icon && <Icon className={`w-5 h-5 ${isActive && "text-Blue-500"}`} />}
      <span className={`text-preset-4 ${isActive && "text-Neutral-950 dark:text-white"}`}>{text}</span>

      <FaChevronRight className={`w-2.5 h-3 ml-auto ${!isActive ? "hidden" : "block"} `} />
    </button>
  );
};

export default Button;
