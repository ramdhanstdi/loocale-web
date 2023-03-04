import React from "react";
import Image from "next/image";
import CheckedIcon from "@icons/checked_icon.svg";

interface Props {
  background: string;
  title: string;
  width?: string;
  fontSize?: string;
  height?: string;
  className?: string;
  borderRadius?: string;
  onClick?: () => void;
  active?: boolean;
}
const Card: React.FC<Props> = (props) => {
  return (
    <div
      className={`flex items-center relative justify-center  font-bold px-auto py-auto text-white ${props.className}`}
      onClick={props.onClick}
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundPosition: "center",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        width: props.width ? props.width : "260px",
        fontSize: props.fontSize ? props.fontSize : "21px",
        height: props.height ? props.height : "120px",
        borderRadius: props.borderRadius ? props.borderRadius : "16px",
      }}
    >
      {props.title}
      {props.active ? (
        <div className="absolute top-2 right-2">
          <CheckedIcon />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
