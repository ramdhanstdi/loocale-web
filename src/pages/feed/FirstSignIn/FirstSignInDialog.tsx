import React from "react";
import Dialog from "@components/design/Dialog";
import Image from "next/image";
import ArrowBackIcon from "@icons/arrow_back_icon.svg";

interface FirstSignInDialogProps {
  step: number;
	setStep: (args: number) => void
  children?: React.ReactNode;
}
const FirstSignInDialog: React.FC<FirstSignInDialogProps> = (props) => {
  return (
    <Dialog open={true} maxWidth={"sm"} className="px-11 pt-7 pb-8 relative">
      <div className="flex justify-between">
        <Image
          src={ArrowBackIcon}
          alt="Back button"
          width={16}
          height={16}
          className={`${props.step === 1 ? "invisible" : "visible"}`}
					onClick={() => props.setStep(props.step-1)}
        />
        <p className="text-xs">{props.step} of 3</p>
      </div>
      {props.children}
    </Dialog>
  );
};

export default FirstSignInDialog;
