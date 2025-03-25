import * as React from "react";

const defaultClass =
  "rounded-md text-xl font-medium ring-offset-text transition-all focus-visible:outline-none focus-visible:ring-2 px-8 py-2 transition-all";

const buttonVariants = {
  default:
    "pointer-events-auto transition-all text-text hover:shadow-[0px_0px_5px_5px_rgba(235,94,40,0.3)] bg-gradient-to-br from-primary from-45% via-[#f9a477] via-50% to-primary to-55% bg-[length:300%_300%] bg-[position:100%_100%] hover:bg-[position:0%_0%] duration-[800ms]",
  outline:
    "border border-text bg-transparent text-text hover:shadow-[0px_0px_4px_4px_rgba(235,94,40,0.3)] hover:border-primary",
  white:
    "border border-text bg-white text-black hover:shadow-[0px_0px_4px_4px_rgba(235,94,40,0.3)] hover:border-primary",
  ghost:
    "hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-stone-50 pointer-events-auto text-text hover:bg-primary hover:text-text hover:shadow-[0px_0px_4px_4px_rgba(235,94,40,0.3)]",
};

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: "default" | "outline" | "ghost" | "white";
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    // <div className={props.variant === "default" ? `bg-white rounded-md` : ""}>
    <button
      {...props}
      className={`${defaultClass} ${buttonVariants[props.variant]}  ${
        props.className
      }`}
    >
      {props.children}
    </button>
    // </div>
  );
};
export default Button;

export { Button, buttonVariants };
