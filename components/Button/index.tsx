import React from "react";

interface ButtonProps {
  onClick: () => void;
  variant: "outlined" | "contained";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{	
        border: `1px solid #F1614B`,
        opacity: props.disabled ? 0.5 : 1,
      }}
      disabled={props.disabled}
      className={`${
        props.variant === "outlined" ? "bg-white text-secondary-500" : "bg-secondary-500 text-white"
      } hover:bg-secondary-800 hover:text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
