import Image from "next/image";
import React, { useState } from "react";
import HamburgerIcon from "@icons/hamburger.svg";

interface Props {
  menu: {
    title: string;
    href: string;
  }[];
  className?: string;
}
const Hamburger: React.FC<Props> = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`absolute right-0 pr-5 ${props.className}`}>
      <Image
        src={HamburgerIcon}
        width={27}
        height={18}
        onClick={handleClick}
        className={`absolute right-0 ${props.className}`}
        alt="menu"
      />
      {openMenu && (
        <div className="absolute z-10 flex flex-col items-center text-center top-[45px] right-0 bg-white">
          {props.menu.map((item) => (
            <a
              href={item.href}
              className="font-bold py-3 w-[240px] border border-gray-100"
              key={item.title}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
