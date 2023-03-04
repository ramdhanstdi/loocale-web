import React from "react";
import Dialog from "@components/design/Dialog";
import Image from "next/image";
import ArrowBackIcon from "@icons/arrow_back_icon.svg";
import useWindowDimensions from "src/utils/hooks";

interface FirstSignInDialogProps {
  step: number;
	setStep: (args: number) => void
  children?: React.ReactNode;
}
const FirstSignInDialog: React.FC<FirstSignInDialogProps> = (props) => {
	const { width } = useWindowDimensions();
  return (
    <Dialog open={true} maxWidth={width && width < 500 ? "xs" : "sm"} className="px-4 sm:px-11 pt-4 sm:pt-7 pb-8 relative">
      <div className="flex justify-between">
        <ArrowBackIcon
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
