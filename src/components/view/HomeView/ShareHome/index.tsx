import React, { useEffect, useState } from "react";
import Card from "./Card";
import NavigateButton from "@components/design/NavigateButton";
import ResponsiveCard from "./ResponsiveCard";
import { ShareCardInterface } from "src/models/Home";

const SHARE_LIST = [
  {
    displayName: "Fakhri Dwi",
    username: "@fakhriariza",
    story:
      "Pulau Dolphin di Kepulauan Seribu bikin lupa kalau kita masih di Jakarta! Cuma 3 jam dari Ibukota cocok banget buat jadi tempat hiburan untuk lupain kehidupan serba padat di kota. Recommended banget!",
    location: "Pulau Dolphin, Jakarta",
    image: "/image_fakhri.jpg",
    profilepic: "/dp_fakhri.png",
  },
  {
    displayName: "Frederick",
    username: "@Erikkkkk",
    story:
      "USS Shipwreck di Tulamben emang diving site terbaik yang WAJIBBB didatengin sama setiap orang yang hobi diving!Selain shipwreck, banyak juga ikan sama coral yang hidup di sekitarnya, worth to try!",
    location: "USS Shipwreck, Tulamben",
    image: "/image_erik.png",
    profilepic: "/dp_erik.png",
  },
  {
    displayName: "Bagaskara",
    username: "@askaradid",
    story:
      "Makhluk sepanjang 3 meter, ganas, bersisik ini hanya ada di lima pulau Indonesia – Padar, Gili Motang, Flores, Rinca dan secara alami, Komodo. Komodo ini benar-benar menakutkan sekaligus menakjubkan!",
    location: "Pulau Komodo, NTT",
    image: "/image_askara.png",
    profilepic: "/dp_askara.png",
  },
  {
    displayName: "Daniel",
    username: "@DanielRwn",
    story:
      "Terbaik emang abis lari pagi mampir di Tegallalang. Udah viewnya cakep udaranya seger banget lagi! ",
    location: "Tegallalang, Bali",
    image: "/image_rowin.png",
    profilepic: "/dp_rowin.png",
  },
];

const ShareHome = () => {
  const [shownCardsCount, setShownCardsCount] = useState(0);
  const [shownCards, setShownCards] = useState<ShareCardInterface[] | []>([]);

  useEffect(() => {
    setShownCards(
      SHARE_LIST.slice(carouselStartIndex, window.innerWidth > 1100 ? 2 : 1)
    );
    setCarouselEndIndex(window.innerWidth > 1100 ? 2 : 1);
    setShownCardsCount(window.innerWidth > 1100 ? 2 : 1);
  }, []);

  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const [carouselEndIndex, setCarouselEndIndex] = useState(0);

  const handleNext = () => {
    if (carouselEndIndex + shownCardsCount <= SHARE_LIST.length + 1) {
      setCarouselEndIndex(carouselEndIndex + shownCardsCount);
      setCarouselStartIndex(carouselStartIndex + shownCardsCount);
    }
  };

  const handlePrev = () => {
    if (carouselStartIndex - shownCardsCount >= 0) {
      setCarouselStartIndex(carouselStartIndex - shownCardsCount);
      setCarouselEndIndex(carouselEndIndex - shownCardsCount);
    }
  };

  useEffect(() => {
    setShownCards(SHARE_LIST.slice(carouselStartIndex, carouselEndIndex));
  }, [carouselEndIndex]);

  return (
    <section className="max-w-[1280px] mx-auto flex flex-col pt-6 sm:pt-[70px] px-7 sm:px-16 text-center pb-[80px]">
      <h1 className="font-bold text-primary-800 text-[38px] sm:text-[68px] mb-3">
        Share
      </h1>
      <p className="font-light sm:text-[21px] mb-8">
        Your Unique and Insightful Experiences
      </p>
      <div className="sm:flex gap-10 flex-wrap justify-center mb-9 hidden">
        {shownCards.map((item) => (
          <Card data={item} key={item.username}></Card>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:hidden">
        {SHARE_LIST.slice(0, 2).map((item) => (
          <ResponsiveCard data={item} key={item.username}></ResponsiveCard>
        ))}
        <p className="text-secondary-500 mt-3">{`Selengkapnya >`}</p>
      </div>
      <div className="hidden sm:flex justify-center gap-10">
        <NavigateButton
          type="prev"
          color="secondary-500"
          className="border-secondary-500 hover:bg-secondary-500 hover:text-white"
          disabled={carouselStartIndex === 0}
          onClick={handlePrev}
        />
        <NavigateButton
          type="next"
          color="secondary-500"
          className="border-secondary-500 hover:bg-secondary-500 hover:text-white"
          disabled={carouselEndIndex >= SHARE_LIST.length}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default ShareHome;
