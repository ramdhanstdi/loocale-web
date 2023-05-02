import { DateTime } from "luxon";
import { getTimeDifferenceString } from "src/utils/helper";
import MoreHorizIcon from "@icons/more_horiz_icon.svg";
import { EventHandler, MouseEventHandler, useState } from "react";
import { GetUserDataInterface, UserDataInterface } from "src/models/Timeline";
import { deletePost, useGetUser } from "src/services/Timeline";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

interface PostHeaderProps {
  full_name: string;
  location: string;
  createdAt: string;
  location_detail: string | null;
  postingUser: UserDataInterface;
  openPostMenu: boolean;
  postId: number;
  setOpenPostMenu: (args: boolean) => void;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  full_name,
  location,
  createdAt,
  location_detail,
  postingUser,
  postId,
  openPostMenu,
  setOpenPostMenu,
}) => {
  const currentTime = DateTime.now();
  const postTime = DateTime.fromISO(createdAt);
  const timeDifference = currentTime
    .diff(postTime, ["years", "months", "days", "hours", "minutes"])
    .toObject();

  const postLink =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/posts/${postId}`
      : `https://loocale.id/posts/${postId}`;

  const { data: currentUser } = useGetUser();
  const queryClient = useQueryClient();

  const OTHER_USER_POST_MENU = [
    //{
    //  onClick: function(){},
    //  content: <span>Buka Profil</span>,
    //},
    //{
    //  onClick: function(){},
    //  content: (
    //    <span>
    //      Follow <span className="text-secondary-500">@{postingUser.user_name}</span>
    //    </span>
    //  ),
    //},
    //{
    //  onClick: function(){},
    //  content: <span>Laporkan</span>,
    //},
    {
      onClick: function (e: React.MouseEvent) {
        e.stopPropagation();
        toast("Copied to clipboard");
        navigator.clipboard.writeText(postLink);
      },
      content: <span>Share Post</span>,
    },
  ];

  const CURRENT_USER_POST_MENU = [
    //{
    //  onClick: function(){},
    //  content: <span>Profil Saya</span>,
    //},
    {
      onClick: function (e: React.MouseEvent) {
        e.stopPropagation();
        toast("Copied to clipboard");
        navigator.clipboard.writeText(postLink);
      },
      content: <span>Share Post</span>,
    },
    {
      onClick: async function () {
        try {
          await deletePost(postId);
          setTimeout(() => {
            queryClient.invalidateQueries(["getPosts"]);
            toast("Success delete post");
          }, 500);
        } catch (e) {
          toast("Failed to delete post");
        }
      },
      content: <span className="text-secondary-500">Hapus Post</span>,
    },
  ];

  const postMenu =
    currentUser && currentUser.users.id === postingUser.id
      ? CURRENT_USER_POST_MENU
      : OTHER_USER_POST_MENU;

  return (
    <div className="flex justify-between items-center" onClick={() => setOpenPostMenu(false)}>
      <div className="flex sm:gap-2 sm:items-end items-start sm:flex-row flex-col">
        <p className="font-bold text-primary-800 sm:text-base text-xs">{full_name}</p>
        <div className="flex gap-2">
          <p className="text-primary-800 font-light text-[9px] inline sm:pb-1">
            - {location_detail ? `${location_detail},` : ""}{" "}
            <span className="font-bold sm:pb-1">{location}</span>
          </p>
          <p className="text-[9px]">{"\u2022"}</p>
          <p className="text-[9px] font-light sm:pb-1">{getTimeDifferenceString(timeDifference)}</p>
        </div>
      </div>
      <div className="relative">
        <MoreHorizIcon
          width={36}
          height={24}
          className="hover:bg-grayscale-50 hover:cursor-pointer rounded-2xl"
          onClick={(e: Event) => {
            e.stopPropagation();
            setOpenPostMenu(true);
          }}
        />
        {openPostMenu && (
          <div className="rounded-lg border-primary-100 border top-0 z-20 bg-white right-0 flex flex-col text-xs absolute font-bold">
            {postMenu.map((menuItem, i) => (
              <PostMenuItem key={"postMenu" + createdAt + i} onClick={menuItem.onClick}>
                {menuItem.content}
              </PostMenuItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PostMenuItem: React.FC<{
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLParagraphElement>;
}> = ({ children, onClick }) => (
  <p
    className="py-2 border-b border-primary-100 w-full text-center whitespace-nowrap min-w-[140px] px-2 hover:cursor-pointer hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg"
    onClick={onClick}
  >
    {children}
  </p>
);

export default PostHeader;
