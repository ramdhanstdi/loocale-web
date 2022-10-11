import React from "react";

interface Props {
  background: string;
  title: string;
}
const ResponsiveCard:React.FC<Props> = (props) => {
  return (
    <div className="w-[152px] h-[144px] flex items-center justify-center rounded-lg text-center flex-col text-white" style={{
			background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.background})`
		}}>
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0.25C3.61375 0.25 0.875 2.98875 0.875 6.375C0.875 7.8975 1.3125 9.32375 2.10875 10.61C2.94 11.9575 4.03375 13.1125 4.87375 14.46C5.285 15.1163 5.5825 15.7288 5.8975 16.4375C6.125 16.9188 6.30875 17.75 7 17.75C7.69125 17.75 7.875 16.9188 8.09375 16.4375C8.4175 15.7288 8.70625 15.1163 9.1175 14.46C9.9575 13.1213 11.0512 11.9663 11.8825 10.61C12.6875 9.32375 13.125 7.8975 13.125 6.375C13.125 2.98875 10.3862 0.25 7 0.25ZM7 8.78125C5.7925 8.78125 4.8125 7.80125 4.8125 6.59375C4.8125 5.38625 5.7925 4.40625 7 4.40625C8.2075 4.40625 9.1875 5.38625 9.1875 6.59375C9.1875 7.80125 8.2075 8.78125 7 8.78125Z"
          fill="currentColor"
        />
      </svg>
			<p>{props.title}</p>
    </div>
  );
};

export default ResponsiveCard;
