import { tv } from "tailwind-variants";

const button = tv({
  base: "cursor-pointer inline-block rounded border  items-center overflow-hidden shadow-sm transition-colors",
  variants: {
    color: {
      primary:
        "border-indigo-600 bg-indigo-600 text-white shadow-sm transition-colors hover:bg-indigo-700",
      secondary:
        "border-gray-200 text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900",
      action:
        "border-indigo-600 text-indigo-600 shadow-sm transition-colors shadow-md hover:border-indigo-400 hover:text-indigo-500 hover:shadow transition-shadow",
    },
    size: {
      sm: "text-sm px-3 py-2",
      md: "text-base font-medium px-5 py-3",
      lg: "px-4 py-3 text-lg w-full",
    },
  },

  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "action";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ size, color, children, type }) => (
  <button
    type={type}
    className={button({ size, color })}
  >
    {children}
  </button>
);

export default Button;
