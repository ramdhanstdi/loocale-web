import React from "react";

interface ButtonProps {
  onClick: (e?: any) => void;
  variant: "outlined" | "contained";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      style={{
        border: `1px solid #F1614B`,
        opacity: props.disabled ? 0.5 : 1,
      }}
      disabled={props.disabled}
      className={`${
        props.variant === "outlined"
          ? "bg-white text-secondary-500"
          : "bg-secondary-500 text-white"
      } hover:bg-secondary-800 hover:text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
