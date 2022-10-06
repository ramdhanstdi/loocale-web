import React from "react";
import NavigateButton from "../../NavigateButton/index";
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
    <div className="flex flex-col grow min-w-[500px]">
      <h1 className="font-bold text-[68px] text-white mb-4">{props.title}</h1>
      <div className="flex gap-10">
        <NavigateButton
          type={"prev"}
          className="hover:bg-white"
          color="white"
          onClick={props.handlePrev}
					disabled={props.activeHeroText === 0}
        />
        <NavigateButton
          type={"next"}
          className="hover:bg-white"
          color="white"
          onClick={props.handleNext}
					disabled={props.activeHeroText === 5}
        />
      </div>
    </div>
  );
};

export default HeroTitle;
