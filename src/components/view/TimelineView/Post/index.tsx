import React, { useMemo, useState } from "react";
import Comments from "./components/Comments";
import PostHeader from "./components/PostHeader";
import PostInteractions from "./components/PostInteractions";
import PostPictureContainer from "./components/PostPictureContainer";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";
import { PostDataInterface } from "src/models/Timeline";

const Post: React.FC<PostDataInterface> = ({ User, postText }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full py-4 pr-[154px] pl-[131px] border-b-[0.5px] border-b-primary-100 relative">
      <div className="absolute text-center top-6 left-12 text-xs text-primary-200 font-light">
        <div className="rounded-full">
          <Image
            width={50}
            height={50}
            className=""
            src={User.thumbnail || PeopleIcon}
          />
        </div>
        <p className="">Moderator</p>
        <p>Lvl 6</p>
      </div>
      <PostHeader />
      <p className="font-bold text-secondary-500 text-xs my-1">
        @{User.user_name}
      </p>
      <p className="text-xs font-light text-justify whitespace-pre-wrap mb-2">
        {postText.length < 150 ? (
          postText
        ) : showMore ? (
          <>
            {postText}
            {"  "}
            <span
              className="text-secondary-500 hover:underline hover:cursor-pointer font-light text-xs"
              onClick={() => setShowMore(false)}
            >
              See less
            </span>
          </>
        ) : (
          <>
            {postText.substring(0, 150)}
            {"  "}
            <span
              className="text-secondary-500 hover:underline hover:cursor-pointer font-light text-xs"
              onClick={() => setShowMore(true)}
            >
              See more
            </span>
          </>
        )}
        {}
      </p>
      <PostPictureContainer />
      <PostInteractions />
      <Comments></Comments>
      <Comments></Comments>
      <Comments></Comments>
      <Comments></Comments>
      <p className="mt-3 text-xs font-light hover:underline hover:cursor-pointer">
        Lihat komentar (20)
      </p>
    </div>
  );
};

export default Post;
