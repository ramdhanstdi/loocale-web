import React from "react";
import useWindowDimensions from "src/utils/hooks";
import Carousel from "./Carousel";
import Card from "./Carousel/Card";
import ResponsiveCard from "./ResponsiveCard";
import { DiscoverListInterface } from "src/models/Home";

const DiscoverHome = (props: { discoverList: DiscoverListInterface[] }) => {
  return (
    <section
      id="discover"
      className="max-w-[1280px] mx-auto flex flex-col pt-6 sm:pt-[70px] px-4 sm:px-16 text-center sm:pb-[80px]"
    >
      <h1 className="font-bold text-primary-800 sm:text-[68px] text-[38px] mb-3">
        Discover
      </h1>
      <p className="sm:text-[21px] font-light mb-8">
        New and Exciting Places From All Over Indonesia
      </p>
      <Carousel displayPerDot={3} className="hidden sm:flex">
        {props.discoverList.map((item) => (
          <Card
            image={item.image}
            location={item.location}
            key={item.location}
            href={item.href}
            className={"duration-500"}
          />
        ))}
      </Carousel>
      <div className="flex flex-wrap gap-x-6 gap-y-4 sm:hidden justify-center">
        {props.discoverList.slice(0, 4).map((item) => (
          <ResponsiveCard
            background={item.image}
            title={item.location}
            key={item.location}
          ></ResponsiveCard>
        ))}
      </div>
    </section>
  );
};

export default DiscoverHome;
