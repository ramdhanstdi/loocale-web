import React from "react";
import { ShareCardInterface } from "src/models/Home";

interface Props {
  data: ShareCardInterface;
}
const ResponsiveCard: React.FC<Props> = (props) => {
  return (
    <div className="w-[240px] mx-auto border border-grayscale-100 rounded-lg flex flex-col">
      <div
        style={{
          backgroundImage: `url(${props.data.image})`,
          backgroundSize: "cover",
          width: "240px",
          height: "56px",
          backgroundPosition: "50% 10%",
        }}
      ></div>
      <div className="flex relative min-h-[80px]">
        <div className="w-[80px] flex flex-col justify-start pt-12 px-3 pb-2">
          <p className="text-[9px] text-primary-800 font-bold">
            {props.data.displayName}
          </p>
          <p className="text-[9px] font-light text-primary-200">
            {props.data.username}
          </p>
        </div>
        <p className="text-[9px] text-start p-2 w-[160px]">
          {props.data.story}
        </p>
        <div className="absolute flex gap-1 text-white -top-4 items-center left-[88px]">
          <svg
            width="6"
            height="8"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.25C3.61375 0.25 0.875 2.98875 0.875 6.375C0.875 7.8975 1.3125 9.32375 2.10875 10.61C2.94 11.9575 4.03375 13.1125 4.87375 14.46C5.285 15.1163 5.5825 15.7288 5.8975 16.4375C6.125 16.9188 6.30875 17.75 7 17.75C7.69125 17.75 7.875 16.9188 8.09375 16.4375C8.4175 15.7288 8.70625 15.1163 9.1175 14.46C9.9575 13.1213 11.0512 11.9663 11.8825 10.61C12.6875 9.32375 13.125 7.8975 13.125 6.375C13.125 2.98875 10.3862 0.25 7 0.25ZM7 8.78125C5.7925 8.78125 4.8125 7.80125 4.8125 6.59375C4.8125 5.38625 5.7925 4.40625 7 4.40625C8.2075 4.40625 9.1875 5.38625 9.1875 6.59375C9.1875 7.80125 8.2075 8.78125 7 8.78125Z"
              fill="currentColor"
            />
          </svg>
          <p className="font-bold text-[9px]">{props.data.location}</p>
        </div>
        <img
          src={props.data.profilepic}
          className="absolute border border-white z-10 rounded-full -top-[13px] left-4"
          width={49}
          height={49}
        ></img>
      </div>
    </div>
  );
};

export default ResponsiveCard;
