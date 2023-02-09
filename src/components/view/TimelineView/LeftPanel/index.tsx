import React, { useMemo } from "react";
import FeedIcon from "@icons/feed_icon.svg";
import GlobeIcon from "@icons/globe_icon.svg";
import PeopleIcon from "@icons/people_icon.svg";
import AddIcon from "@icons/plus_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
    href: "/people",
    icon: PeopleIcon,
  },
];

const LeftPanel = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between top-12 bottom-12 left-16 fixed">
      <div className="px-[30px] py-9 rounded-xl shadow-md flex flex-col gap-12">
        {LEFT_PANEL_MENU.map((menu) => (
          <Link href={menu.href} key={menu.id}>
            <div
              className={`${
                menu.href === router.pathname
                  ? "text-secondary-500"
                  : "text-primary-800"
              }`}
            >
              {<menu.icon/>}
            </div>
          </Link>
        ))}
				<div className="text-secondary-500">
					<AddIcon/>
				</div>
      </div>
      <div className="py-3 px-5 shadow-md rounded-lg flex flex-col ">
        <div className="rounded-full mb-3 flex justify-center">
          <PeopleIcon />
        </div>
        <p className="text-secondary-500 text-[9px] text-center">@fakhrdwi</p>
      </div>
    </div>
  );
};

export default LeftPanel;
