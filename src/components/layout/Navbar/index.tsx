import React from "react";
import Image from "next/image";
import Button from "../../design/Button";
import Hamburger from "@components/design/Hamburger";
import { useRouter } from "next/router";
import Link from "next/link";

const NAVBAR_MENU = [
  {
    title: "ABOUT",
    href: "/",
  },
  {
    title: "EXPLORE",
    href: "/#discover",
  },
  {
    title: "COMMUNITY",
    href: "/#community",
  },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className=" fixed w-screen bg-white z-10 shadow-md">
      <div className="w-screen sm:max-w-[1280px] py-2 mx-0 sm:mx-auto px-16 flex items-center justify-center sm:justify-between relative">
        <Image
          src={"/NavbarLogo.svg"}
          height={52}
          width={126}
          alt="Loocale Logo"
          className="hover:cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="hidden sm:flex gap-9 items-center">
          <ul className="flex gap-9">
            {NAVBAR_MENU.map((menu) => (
              <a href={menu.href} key={menu.title}>
                <li className="font-bold text-primary-800">{menu.title}</li>
              </a>
            ))}
          </ul>
          <Button
            variant="contained"
            onClick={() => {
              router.push("/signup");
            }}
            className={"py-1 px-3 rounded-lg font-bold"}
          >
            SIGN UP
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              router.push("/signin");
            }}
            className={"py-1 px-3 rounded-lg font-bold"}
          >
            SIGN IN
          </Button>
        </div>
        <Hamburger
          menu={NAVBAR_MENU}
          className="sm:hidden mr-2"
          extraChild={
            <Link href="/signup">
              <p className="font-bold py-3 w-[240px] text-white bg-secondary-500">SIGN UP</p>
            </Link>
          }
        ></Hamburger>
      </div>
    </nav>
  );
};

export default Navbar;
