import React, { ChangeEvent, useState, useRef, RefObject } from "react";

interface Props {
  innerRef?: RefObject<HTMLInputElement>;
  onChange: (args: any) => void;
  onClick: (args: any) => void;
  value?: any;
  onKeyDown: (args: any) => void;
}
const VerifCodeInput: React.FC<Props> = (props) => {
  return (
    <>
      <input
        ref={props.innerRef}
        onClick={props.onClick}
        type={"text"}
        className="outline-none border-b-4 border-black w-full font-bold text-[28px] leading-[36px] sm:text-[50px] sm:leading-[60px] text-center"
        onChange={props.onChange}
        maxLength={1}
        onKeyDown={props.onKeyDown}
      />
    </>
  );
};

export default VerifCodeInput;
