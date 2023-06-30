import React, { useState } from "react";
import FeedIcon from "@icons/feed_icon.svg";
import GlobeIcon from "@icons/globe_icon.svg";
import PeopleIcon from "@icons/people_icon.svg";
import AddIcon from "@icons/plus_icon.svg";
import { useRouter } from "next/router";
import { useGetUser } from "src/services/Timeline";
import Image from "next/image";
import CreatePostDialog from "../CreatePostDialog";

interface BottomNavbarMenuProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

const BottomNavbarMenu: React.FC<BottomNavbarMenuProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

const BottomNavbar = () => {
  const router = useRouter();

  const [openCreatePost, setOpenCreatePost] = useState(false);

  const { data: currentUser } = useGetUser();

  const handleCloseDialog = () => {
    setOpenCreatePost(false);
  };

  //if (!currentUser) {
  //  return <></>;
  //} else {
  return (
    <>
      <div className="fixed w-screen bottom-0 bg-white flex justify-between items-center px-5 py-3 border-t border-gray-100">
        <BottomNavbarMenu
          onClick={() => router.push("/feed")}
          className={`${
            router.pathname === "/feed"
              ? "text-secondary-500"
              : "text-primary-800"
          }`}
        >
          <FeedIcon />
        </BottomNavbarMenu>
        <BottomNavbarMenu
          onClick={() => router.push("/discover")}
          className={`${
            router.pathname === "/discover"
              ? "text-secondary-500"
              : "text-primary-800"
          }`}
        >
          <GlobeIcon />
        </BottomNavbarMenu>
        {currentUser && (
          <BottomNavbarMenu
            onClick={() => setOpenCreatePost(true)}
            className={`text-secondary-500`}
          >
            <AddIcon />
          </BottomNavbarMenu>
        )}
        <BottomNavbarMenu
          onClick={() => router.push("/partners")}
          className={`${
            router.pathname === "/partners"
              ? "text-secondary-500"
              : "text-primary-800"
          }`}
        >
          <PeopleIcon />
        </BottomNavbarMenu>
        {currentUser && (
          <BottomNavbarMenu onClick={() => {}} className={`flex items-center`}>
            {!currentUser.users.thumbnail ? (
              <PeopleIcon></PeopleIcon>
            ) : (
              <Image
                src={currentUser.users.thumbnail}
                width={40}
                height={40}
                className="rounded-full"
                alt="profile pic"
              />
            )}
          </BottomNavbarMenu>
        )}
      </div>
      <CreatePostDialog open={openCreatePost} onClose={handleCloseDialog} />
    </>
  );
  //}
};

export default BottomNavbar;
