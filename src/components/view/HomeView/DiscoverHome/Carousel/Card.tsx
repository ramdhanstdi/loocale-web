import React from "react";
import Image from "next/image";
import LocationIcon from "@icons/location-icon.svg";

interface Props {
  image: string;
  location: string;
  className?: string;
  href?: string;
}
const Card: React.FC<Props> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={`rounded-2xl border border-[#EDEFF1] flex flex-col shrink shadow-md text-primary-800 ${props.className}`}
    >
      <Image
        src={props.image}
        width={360}
        height={192}
        alt={props.location}
        className="rounded-t-2xl"
      />
      <div className="flex items-center gap-3 justify-center">
        <LocationIcon />
        <p className="py-3">{props.location}</p>
      </div>
    </a>
  );
};

export default Card;
