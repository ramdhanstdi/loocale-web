import React from "react";

interface ModalProps {
  open: boolean;
  onClose?: VoidFunction;
  children?: React.ReactNode;
}
const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div
      className={`fixed z-40 top-0 left-0 w-screen h-screen ${
        props.open ? "block" : "hidden"
      } sm:bg-[rgba(0,0,0,0.4)]`}
      onClick={props.onClose}
    >
      {props.children}
    </div>
  );
};

export default Modal;
