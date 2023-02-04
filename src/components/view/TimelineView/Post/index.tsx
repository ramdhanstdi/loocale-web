import React, { useMemo, useState } from "react";
import Comments from "./components/Comments";
import PostHeader from "./components/PostHeader";
import PostInteractions from "./components/PostInteractions";
import PostPictureContainer from "./components/PostPictureContainer";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";

const Post = () => {
  const [showMore, setShowMore] = useState(false);
  const text = useMemo(
    () =>
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda delectus numquam suscipit porro atque nam doloremque facere maxime deleniti, nihil eius quibusdam repellat, vero iste debitis. Voluptatum, eius exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet quia exercitationem possimus explicabo perspiciatis at atque aut? Ullam ut id error non consequuntur reprehenderit eveniet adipisci qui? Natus, distinctio",
    []
  );

  return (
    <div className="w-full py-4 pr-[154px] pl-[131px] border-b-[0.5px] border-b-primary-100 relative">
      <div className="absolute text-center top-6 left-12 text-xs text-primary-200 font-light">
        <div className="rounded-full">
          <Image width={50} height={50} className="" src={PeopleIcon} />
        </div>
				<p className="">Moderator</p>
				<p>Lvl 6</p>
      </div>
      <PostHeader />
      <p className="font-bold text-secondary-500 text-xs my-1">@ErikBoril</p>
      <p className="text-xs font-light text-justify whitespace-pre-wrap mb-2">
        {showMore ? (
					<>
					{text}
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
            {text.substring(0, 150)}
            {"  "}
            <span
              className="text-secondary-500 hover:underline hover:cursor-pointer font-light text-xs"
              onClick={() => setShowMore(true)}
            >
              See more
            </span>
          </>
        )}
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
