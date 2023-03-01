import Image from "next/image";
import React from "react";
import { UserDataInterface } from "src/models/Timeline";
import PeopleIcon from "@icons/people_icon.svg";

interface CommentProps {
  commentText: string;
  user: UserDataInterface;
}
const Comment: React.FC<CommentProps> = ({ commentText, user }) => {
  console.log("Comment user", user.thumbnail);
  return (
    <div className="flex gap-2 mb-2">
      {user.thumbnail ? (
        <Image
          src={user.thumbnail}
          loader={() => user.thumbnail!}
          alt="left panel profile pic"
        />
      ) : (
        <PeopleIcon />
      )}
      <div className="bg-grayscale-50 pl-4 pr-3 pt-[2px] pb-[10px] w-[224px]">
        <div className="flex justify-between text-[9px]">
          <p className="font-bold text-primary-800">@{user.user_name}</p>
          <p className="font-light text-grayscale-400">1 jam</p>
        </div>
        <p className="text-[9px] font-light">{commentText}</p>
      </div>
    </div>
  );
};

export default Comment;
