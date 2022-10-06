import React from "react";
import Image from "next/image";
import Button from "../Button";

const NAVBAR_MENU = [
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "EXPLORE",
    href: "/explore",
  },
  {
    title: "COMMUNITY",
    href: "/community",
  },
];

const Navbar = () => {
  return (
    <nav className=" fixed w-full bg-white">
      <div className="max-w-[1280px] py-2 mx-auto px-16 flex items-center justify-between">
        <Image
          src={"/NavbarLogo.svg"}
          height={52}
          width={126}
          alt="Loocale Logo"
        />
        <div className="flex gap-9 items-center">
          <ul className="flex gap-9">
            {NAVBAR_MENU.map((menu) => (
              <a href={menu.href} key={menu.title}>
                <li className="font-bold text-primary-800">{menu.title}</li>
              </a>
            ))}
          </ul>
          <Button
            variant="outlined"
            color="#F1614B"
            onClick={() => {}}
            className={"py-1 px-3 rounded-lg font-bold"}
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
