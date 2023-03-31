import React, { useEffect, useMemo, useState } from "react";
import FeedIcon from "@icons/feed_icon.svg";
import GlobeIcon from "@icons/globe_icon.svg";
import PeopleIcon from "@icons/people_icon.svg";
import AddIcon from "@icons/plus_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CreatePostDialog from "../CreatePostDialog";
import { getCurrentUser } from "src/utils/helper";
import { UserDataInterface } from "src/models/Timeline";
import sampleUser from "src/utils/sample";
import { useGetUser } from "src/services/Timeline";

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
    href: "#",
    icon: PeopleIcon,
  },
];

const LeftPanel = () => {
  const router = useRouter();
  const [openCreatePost, setOpenCreatePost] = useState(false);

  const { data: currentUser } = useGetUser();

  const handleCloseDialog = () => {
    setOpenCreatePost(false);
  };

  if (!currentUser) {
    return <></>;
  } else {
    return (
      <>
        <div className="flex flex-col justify-between my-10 ml-10">
          <div className="px-[30px] py-9 rounded-xl shadow-md flex flex-col gap-12">
            {LEFT_PANEL_MENU.map((menu) => (
              <a href={menu.href} key={menu.id}>
                <div
                  className={`${
                    menu.href === router.pathname ? "text-secondary-500" : "text-primary-800"
                  } ${menu.href === "#" ? "cursor-not-allowed" : "cursor-pointer" } `}
                >
                  {<menu.icon />}
                </div>
              </a>
            ))}
            <div className="text-secondary-500" onClick={() => setOpenCreatePost(true)}>
              <AddIcon />
            </div>
          </div>
          <div className="py-3 px-5 shadow-md rounded-lg flex flex-col ">
            <div className="rounded-full mb-3 flex justify-center">
              {!currentUser.users.thumbnail ? (
								<PeopleIcon></PeopleIcon>
							): (
								<Image
								src={currentUser.users.thumbnail}
								loader={() => currentUser.users.thumbnail!}
								width={40}
								height={40}
								className="rounded-full"
								alt="profile pic"
								/>
							)}
            </div>
            <p className="text-secondary-500 text-[9px] text-center">{currentUser.users.user_name || ""}</p>
          </div>
        </div>
        <CreatePostDialog open={openCreatePost} onClose={handleCloseDialog} />
      </>
    );
  }
};

export default LeftPanel;
