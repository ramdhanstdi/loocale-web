import { CommunityListInterface } from "src/models/Home";
import React from "react";
import useWindowDimensions from "src/utils/hooks";
import Card from "./Card";
import { useRouter } from "next/router";

const CommunityHome = (props: { communityList: CommunityListInterface[] }) => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const shownCommunity =
    width && width < 702 ? props.communityList.slice(0, 3) : props.communityList.slice(0, 11);
  return (
    <section
      id="community"
      className="max-w-[1280px] mx-auto flex flex-col pt-6 sm:pt-[70px] px-8 sm:px-16 text-center pb-[48px]"
    >
      <h1 className="font-bold text-primary-800 text-[38px] sm:text-[68px] mb-3">Connect</h1>
      <p className="font-light sm:text-[21px] mb-8">with Communities of Your Interest!</p>
      <div className="flex flex-wrap gap-x-9 gap-y-5 justify-center">
        {shownCommunity.map((item) => (
          <Card background={item.background} title={item.title} key={item.title}></Card>
        ))}
        <div
          className="w-[260px] sm:border-4 sm:border-secondary-500 rounded-2xl flex items-center justify-center sm:font-bold text-secondary-500 sm:text-[21px] hover:cursor-pointer"
          onClick={() => router.push("/signup")}
        >
          {"Selengkapnya >"}
        </div>
      </div>
    </section>
  );
};

export default CommunityHome;
