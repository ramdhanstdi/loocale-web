import React, { useEffect, useMemo, useState } from "react";
import FeedIcon from "@icons/feed_icon.svg";
import GlobeIcon from "@icons/globe_icon.svg";
import PeopleIcon from "@icons/people_icon.svg";
import AddIcon from "@icons/plus_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CreatePostDialog from "../CreatePostDialog";
import { useGetUser } from "src/services/Timeline";
import MoreIcon from "@icons/more_vert_icon.svg";
import Cookies from "js-cookie";

const LEFT_PANEL_MENU = [
  {
    id: "feed",
    href: "/feed",
    icon: FeedIcon,
  },
  {
    id: "discover",
    href: "/discover",
    icon: GlobeIcon,
  },
  {
    id: "people",
    href: "/partners",
    icon: PeopleIcon,
  },
];

const LeftPanel = () => {
  const router = useRouter();
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const { data: currentUser, fetchStatus } = useGetUser();

  const handleCloseDialog = () => {
    setOpenCreatePost(false);
  };

  const handleSignout = () => {
    Cookies.remove("token");
  };

  if (currentUser === undefined) {
    return <></>;
  } else {
    return (
      <>
        <div
          className="flex flex-col justify-between my-10 ml-10"
          onClick={() => setOpenProfileMenu(false)}
        >
          <div className="px-[30px] py-9 rounded-xl shadow-md flex flex-col gap-12">
            {LEFT_PANEL_MENU.map((menu) => (
              <Link href={menu.href} key={menu.id}>
                <div
                  className={`${
                    menu.href === router.pathname
                      ? "text-secondary-500"
                      : "text-primary-800"
                  } ${
                    menu.href === "#" ? "cursor-not-allowed" : "cursor-pointer"
                  } `}
                >
                  {<menu.icon />}
                </div>
              </Link>
            ))}
            {currentUser && (
              <div
                className="text-secondary-500"
                onClick={() => setOpenCreatePost(true)}
              >
                <AddIcon />
              </div>
            )}
          </div>
          {currentUser !== null && currentUser !== undefined ? (
            <div className="py-3 px-5 shadow-md rounded-lg flex flex-col relative">
              <MoreIcon
                className="absolute top-3 right-2 bg-gray-100 rounded-full hover:bg-gray-200 hover:cursor-pointer"
                width={16}
                height={16}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  e.stopPropagation();
                  setOpenProfileMenu(true);
                }}
              />
              {/* Profile Menu */}
              <div
                className={`absolute z-10 bg-white bottom-20 left-20 text-xs items-center h-[180px] justify-between rounded-lg border border-primary-100 w-[140px] ${
                  openProfileMenu ? "flex" : "hidden"
                } flex-col`}
              >
                <div className="w-full text-center cursor-not-allowed">
                  <p className="font-bold py-2 border-b border-primary-100">
                    Profil Saya
                  </p>
                  <p className="font-bold py-2 border-b border-primary-100 ">
                    Pengaturan
                  </p>
                </div>
                <Link href={"/signin"}>
                  <p
                    className="font-bold py-2 text-white bg-secondary-500 w-full text-center rounded-b-lg cursor-pointer"
                    onClick={handleSignout}
                  >
                    SIGN OUT
                  </p>
                </Link>
              </div>
              <div className="rounded-full mb-3 flex justify-center">
                {!currentUser.users.thumbnail ? (
                  <PeopleIcon></PeopleIcon>
                ) : (
                  <Image
                    src={currentUser.users.thumbnail}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    alt="profile pic"
                  />
                )}
              </div>
              <p className="text-secondary-500 text-[9px] text-center">
                {currentUser.users.user_name || ""}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <CreatePostDialog open={openCreatePost} onClose={handleCloseDialog} />
      </>
    );
  }
};

export default LeftPanel;
