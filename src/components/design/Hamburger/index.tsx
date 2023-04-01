import Image from "next/image";
import React, { useState } from "react";
import HamburgerIcon from "@icons/hamburger.svg";
import Button from "../Button";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  menu: {
    title: string;
    href: string;
  }[];
  className?: string;
	extraChild?: React.ReactNode
}
const Hamburger: React.FC<Props> = (props) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`absolute right-0 pr-5 flex top-0 items-center h-[68px] ${props.className}`}>
      <HamburgerIcon onClick={handleClick} className={`absolute right-0 ${props.className}`} />
      {openMenu && (
        <div className="absolute z-10 flex flex-col items-center text-center top-[70px] right-0 bg-white">
          {props.menu.map((item) => (
            <a
              href={item.href}
              className="font-bold py-3 w-[240px] border-b border-gray-100"
              key={item.title}
            >
              {item.title}
            </a>
          ))}
					{props.extraChild}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
