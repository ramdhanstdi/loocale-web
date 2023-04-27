import React, { useCallback } from "react";
import LocationAnchor from "./components/LocationAnchor";
import ImageCard from "@components/design/ImageCard";
import HelpIcon from "@icons/help_icon.svg";
import Image from "next/image";
import { useGetCategories } from "src/services/Timeline";
import { useRouter } from "next/router";

const RightPanel = () => {
  const { data: categories } = useGetCategories();

  const getPopularTodayGrid = useCallback(() => {
    if (!categories) return [];
    return categories.slice(0, 5).map((community) => ({
      title: community.title,
      backgroundUrl: community.background,
      subtitle: `${community.count} Unggahan`,
      id: community.id,
    }));
  }, [categories]);

  if (!categories) {
    return <></>;
  } else {
    return (
      <div className="my-6 mr-8 flex flex-col items-center rounded-lg shadow-md px-7 py-10">
        <h1 className="font-bold text-primary-800 sm:text-[21px] mb-1">Populer di Loocale</h1>
        <LocationAnchor
          iconColor="#F1614B"
          location="Bandung"
          className="flex gap-3 items-center mb-5"
        />
        <p className="text-primary-800 font-bold mb-3">Tren Aktivitas</p>
        {getPopularTodayGrid().map((trend, index) => (
          <div className="flex items-center gap-5 mb-2 mr-6" key={trend.id}>
            <p className="font-light text-primary-800">{index + 1}</p>
            <ImageCard
              backgroundUrl={trend.backgroundUrl}
              className="sm:w-[191px] sm:h-16 text-white text-center hover:cursor-pointer flex flex-col items-center justify-center rounded-lg"
              onClick={() => {
                window.location.assign("/discover?searchValue=" + trend.title);
              }}
            >
              <p className="font-bold relative z-20">{trend.title}</p>
              <p className="font-light text-xs z-20">{trend.subtitle}</p>
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
        <p className="text-primary-100 text-[9px] sm:w-[191px] mb-2">Frequently Asked Questions</p>
        <div className="flex gap-1 sm:w-[191px] items-center">
          <HelpIcon />
          <p>Help</p>
        </div>
      </div>
    );
  }
};

export default RightPanel;
