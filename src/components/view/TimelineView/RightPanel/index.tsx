import React from "react";
import LocationAnchor from "./components/LocationAnchor";
import ImageCard from "./components/ImageCard";
import HelpIcon from "@icons/help_icon.svg";
import Image from "next/image";

const TREND_LIST = [
  {
    backgroundUrl: "/culinary_bg.png",
    trendName: "Jelajah Kuliner",
    postCount: 200,
  },
  {
    backgroundUrl: "/situ-gunung.jpg",
    trendName: "Hiking",
    postCount: 200,
  },
  {
    backgroundUrl: "/movie_festival_bg.png",
    trendName: "Festival Film",
    postCount: 200,
  },
  {
    backgroundUrl: "/arts_and_gallery.png",
    trendName: "Seni & Pameran",
    postCount: 200,
  },
  {
    backgroundUrl: "/music_concert.png",
    trendName: "Konser Musik",
    postCount: 200,
  },
];

const RightPanel = () => {
  return (
    <div className="fixed top-6 bottom-6 right-16 flex flex-col items-center rounded-lg shadow-md px-7 py-10">
      <h1 className="font-bold text-primary-800 sm:text-[21px] mb-1">
        Populer di Loocale
      </h1>
      <LocationAnchor
        href="#"
        iconColor="#F1614B"
        location="Bandung"
        className="flex gap-3 items-center mb-5"
      />
      <p className="text-primary-800 font-bold mb-3">Tren Aktivitas</p>
      {TREND_LIST.map((trend, index) => (
        <div
          className="flex items-center gap-5 mb-2 mr-6"
          key={trend.trendName}
        >
          <p className="font-light text-primary-800">{index + 1}</p>
          <ImageCard
            backgroundUrl={trend.backgroundUrl}
            className="sm:w-[191px] sm:h-16 text-white text-center flex flex-col items-center justify-center rounded-lg"
          >
            <p className="font-bold ">{trend.trendName}</p>
            <p className="font-light text-xs">{trend.postCount} unggahan</p>
          </ImageCard>
        </div>
      ))}
      <p className="mt-4 mb-6 sm:w-[191px] py-2 font-light text-xs text-primary-800 text-center border border-primary-500 rounded-lg">
        {"Lihat lebih banyak >"}
      </p>
      <div className="text-primary-100 text-[9px] flex gap-1 text-left sm:w-[191px] mb-1">
        <a className="">About us</a>
        <a className="">Terms and Conditions</a>
      </div>
      <p className="text-primary-100 text-[9px] sm:w-[191px] mb-2">
        Frequently Asked Questions
      </p>
      <div className="flex gap-1 sm:w-[191px]">
        <Image width={16} height={16} src={HelpIcon} alt={"help"} />
				<p>Help</p>
      </div>
    </div>
  );
};

export default RightPanel;
