import Image from "next/image";
import React from "react";
import { UserDataInterface } from "src/models/Timeline";
import PeopleIcon from "@icons/people_icon.svg";
import { getTimeDifferenceString } from "src/utils/helper";
import { DateTime } from "luxon";

interface CommentProps {
  commentText: string;
  user: UserDataInterface;
	createdAt: string;
}
const Comment: React.FC<CommentProps> = ({ commentText, user, createdAt }) => {
	const currentTime = DateTime.now()
	const commentTime = DateTime.fromISO(createdAt);
	const timeDifference = currentTime.diff(commentTime, ["years", "months", "days", "hours", "minutes"]).toObject();

  return (
    <div className="flex gap-2 mb-2 items-start">
      {user.thumbnail ? (
        <Image
          src={user.thumbnail}
          alt="comment profile pic"
					width={40}
					height={40}
					className="rounded-full object-cover"
        />
      ) : (
        <PeopleIcon />
      )}
      <div className="bg-grayscale-50 pl-4 pr-3 pt-[2px] pb-[10px] w-[224px]">
        <div className="flex justify-between text-[9px]">
          <p className="font-bold text-primary-800">@{user.user_name}</p>
          <p className="font-light text-grayscale-400">{getTimeDifferenceString(timeDifference)}</p>
        </div>
        <p className="text-[9px] font-light">{commentText}</p>
      </div>
    </div>
  );
};

export default Comment;
