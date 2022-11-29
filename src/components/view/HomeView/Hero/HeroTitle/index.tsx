import React from "react";
import NavigateButton from "@components/design/NavigateButton";
import NavBeforeIcon from "@icons/nav-before-icon.svg";
import Image from "next/image";

interface Props {
  title: string;
  handlePrev: () => void;
  handleNext: () => void;
  activeHeroText: number;
}
const HeroTitle: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col grow sm:min-w-[700px] justify-end sm:justify-start items-center sm:items-start">
      <div className="sm:hidden">
        <Image
          src={"/loocale-mini-logo.png"}
          width={100}
          height={70}
          alt="logo"
          layout="fixed"
        ></Image>
      </div>
      <h1 className="font-bold sm:text-[68px] text-[36px] text-white sm:mb-4">
        {props.title}
      </h1>
      <div className="sm:flex gap-10 hidden">
        <NavigateButton
          type={"prev"}
          className="hover:bg-white hover:text-black border-white"
          color="white"
          onClick={props.handlePrev}
          disabled={props.activeHeroText === 0}
        />
        <NavigateButton
          type={"next"}
          className="hover:bg-white hover:text-black border-white"
          color="white"
          onClick={props.handleNext}
          disabled={props.activeHeroText === 5}
        />
      </div>
    </div>
  );
};

export default HeroTitle;
