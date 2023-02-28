import React from "react";
import LocationIcon from "@icons/location-icon.svg";
import Image from "next/image";
import { ShareCardInterface } from "src/models/Home";

interface Props {
  data: ShareCardInterface;
}
const Card: React.FC<Props> = (props) => {
  return (
    <div className="rounded-2xl border border-grayscale-100 flex w-[460px]">
      <div className="flex flex-col justify-between relative min-w-[209px] border-r border-grayscale-100">
        <Image
          src={props.data.image}
          width={209}
          height={232}
          alt="test alt"
          className="rounded-tl-2xl"
        />
        <img
          src={props.data.profilepic}
          width={80}
          height={80}
          alt="Profile pic"
          className="absolute top-[192px] left-1/2 -translate-x-1/2"
        />
        <div className="flex flex-col mb-4">
          <p className="text-primary-900 text-center font-bold text-[12px]">
            {props.data.displayName}
          </p>
          <p className="text-primary-200 text-center text-[12px]">
            {props.data.username}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between pb-9">
        <div className="px-5 pt-7 text-[#3C4A53] text-left">
          {props.data.story}
        </div>
        <div className="flex items-center gap-3 px-5 pt-10 text-primary-200">
          <LocationIcon />
          <p className="text-[12px]">{props.data.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
