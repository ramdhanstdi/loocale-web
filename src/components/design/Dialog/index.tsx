import React from "react";
import Modal from "../Modal";

interface DialogProps {
  open: boolean;
  onClose?: VoidFunction;
  children?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: VoidFunction;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const widthBreakpoints = {
    xs: "w-[320px]",
    sm: "w-[480px]",
    md: "w-[600px]",
    lg: "w-[900px]",
    xl: "w-[1100px]",
  };
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div
        className={`fixed z-50 bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 sm:rounded-xl ${
          props.maxWidth ? widthBreakpoints[props.maxWidth] : "sm:w-[600px]"
        } ${props.className}`}
        onClick={(e) => {
          if (props.onClick) {
            props.onClick();
          }
          e.stopPropagation();
        }}
      >
        {props.children}
      </div>
    </Modal>
  );
};

export default Dialog;
