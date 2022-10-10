import React from "react";
import Image from "next/image";
import LocationIcon from "@icons/location-icon.svg";

interface Props {
  image: string;
  location: string;
	className?: string;
}
const Card: React.FC<Props> = (props) => {
  return (
    <div className={`rounded-2xl border border-[#EDEFF1] flex flex-col shrink shadow-md text-primary-800 ${props.className}`}>
      <Image
        src={props.image}
        width={360}
        height={192}
        alt={props.location}
        className="rounded-t-2xl"
      />
      <div className="flex items-center gap-3 justify-center">
        <Image src={LocationIcon} width={13} height={18} alt="location" />
        <p className="py-3">{props.location}</p>
      </div>
    </div>
  );
};

export default Card;
