import React, { useEffect, useState } from "react";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";
import TextField from "@components/design/TextField";
import AddIcon from "@icons/plus_icon.svg";
import CreatePostDialog from "../CreatePostDialog";
import NotificationIcon from "@icons/notification_icon.svg";
import { useGetUser } from "src/services/Timeline";
import useWindowDimensions from "src/utils/hooks";
import Hamburger from "@components/design/Hamburger";
import Link from "next/link";
import Cookies from "js-cookie";
import HeartOutlinedIcon from "@icons/heart_outlined_icon.svg";

const TimelineHeader = () => {
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const { width } = useWindowDimensions();
  const [openNotifications, setOpenNotifications] = useState(false);

  const { data: currentUser } = useGetUser();

  const handleCloseDialog = () => {
    setOpenCreatePost(false);
  };

  const handleSignout = () => {
    Cookies.remove("token");
  };

  const handleClickNotification = () => {
    setOpenNotifications((prevState) => !prevState);
  };

  if (!width || currentUser === undefined) {
    return <></>;
  } else {
    return (
      <>
        {width > 1000 ? (
          <>
            <div className="flex flex-col px-9 py-2 rounded-lg shadow-md">
              <div className="">
                <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
              </div>
              {currentUser && (
                <div className="flex gap-6 items-center">
                  <div className="flex flex-col">
                    <div className="rounded-full flex justify-center">
                      {!currentUser.users.thumbnail ? (
                        <PeopleIcon />
                      ) : (
                        <Image
                          src={currentUser.users.thumbnail}
                          alt="profile-pic"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                    </div>
                    <p className="text-secondary-500 sm:text-xs font-bold mt-2">
                      {currentUser.users.user_name}
                    </p>
                  </div>
                  <div className="w-full shrink" onClick={() => setOpenCreatePost(true)}>
                    <TextField
                      placeholder="Mulai post baru"
                      className="w-full h-9 rounded-full relative"
                      size="sm"
                      fullWidth
                      endIcon={
                        <div className="absolute top-1/2 -translate-y-1/2 right-1 scale-50">
                          <AddIcon />
                        </div>
                      }
                    />
                  </div>
                  <div className="grow hover:cursor-pointer hover:bg-gray-200 p-1 rounded-full relative">
                    <div className="relative">
                      <div className="w-[9px] h-[9px] rounded-full bg-secondary-500 absolute top-0 right-0" />
                      <NotificationIcon onClick={handleClickNotification} />
                    </div>
                    {openNotifications && (
                      <div className="absolute p-4 bg-white z-20 flex flex-col shadow-md rounded-xl gap-5">
                        <div className="flex gap-2 items-center text-xs text-primary-800">
                          <div className="">
                            <HeartOutlinedIcon width={22} height={22} />
                          </div>
                          <p className="w-[120px]">3 orang menyukai postingan kamu</p>
                          <div className="w-[9px] h-[9px] rounded-full bg-secondary-500" />
                        </div>
                        <div className="flex gap-2 items-center text-xs text-primary-800">
                          <div className="">
                            <HeartOutlinedIcon width={22} height={22} />
                          </div>
                          <p className="w-[120px]">3 orang menyukai postingan kamu</p>
                          <div className="w-[9px] h-[9px] rounded-full bg-secondary-500" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <CreatePostDialog open={openCreatePost} onClose={handleCloseDialog} />
          </>
        ) : (
          <div className="flex items-center justify-center py-2 shadow-md">
            <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
            <Hamburger
              menu={[]}
              className="mr-2"
              extraChild={
                <Link href={"/signin"}>
                  <p
                    className="font-bold py-3 w-[240px] text-white bg-secondary-500 hover:cursor-pointer"
                    onClick={handleSignout}
                  >
                    SIGN OUT
                  </p>
                </Link>
              }
            />
          </div>
        )}
      </>
    );
  }
};

export default TimelineHeader;
