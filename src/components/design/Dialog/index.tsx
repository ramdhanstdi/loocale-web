import React from "react";
import Modal from "../Modal";

interface DialogProps {
  open: boolean;
  onClose?: VoidFunction;
  children?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
	className?: string
}

const Dialog: React.FC<DialogProps> = (props) => {
  const breakpoints = {
		xs: "320px",
    sm: "480px",
    md: "600px",
    lg: "900px",
    xl: "1100px",
  };
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div
        className={`fixed z-10 bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-xl ${props.className}`}
				style={{
					width: props.maxWidth ? breakpoints[props.maxWidth] : "600px",
					maxHeight: props.maxWidth ? breakpoints[props.maxWidth] : "600px",
				}}
      >
				{props.children}
			</div>
    </Modal>
  );
};

export default Dialog;
