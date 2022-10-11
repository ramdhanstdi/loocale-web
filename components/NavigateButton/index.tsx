import React from "react";
import NavBeforeIcon from "@icons/nav-before-icon.svg";
import NavAfterIcon from "@icons/nav-next-icon.svg";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
	disabled?: boolean
  type: "prev" | "next";
  color?: string;
}
const IconButton: React.FC<Props> = (props) => {
  return (
    <button
      className={`${props.className} text-${props.color} ${props.disabled ? 'opacity-20' : ''} rounded-full bg-transparent flex items-center justify-center p-4 border w-10 h-10`}
      onClick={props.onClick}
			disabled={props.disabled}
    >
      {props.type === "prev" ? (
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0L7.41 1.41L2.83 6L7.41 10.59L6 12L3.8147e-06 6L6 0Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export default IconButton;
