import React, { useCallback, useMemo, useState } from "react";
import Comments from "./components/Comments";
import PostHeader from "./components/PostHeader";
import PostInteractions from "./components/PostInteractions";
import PostPictureContainer from "./components/PostPictureContainer";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";
import { PostDataInterface } from "src/models/Timeline";
import Comment from "./components/Comments";

const Post: React.FC<PostDataInterface> = ({
  User,
  postText,
  createdAt,
  location,
  Comments,
	liked,
	id
}) => {
  const [showMore, setShowMore] = useState(false);
	const [displayedComments, setDisplayedComments] = useState(Comments.slice(0,5));

	
  const loadMoreComments = useCallback(() => {
		const newDisplayedComments = [ ... displayedComments ];
    const getLastCommentIndex = Comments.indexOf(
      displayedComments[displayedComments.length - 1]
    );
		// If there are more than 5 comments not loaded
    if (Comments.length > getLastCommentIndex + 5) {
			// Load 5 comments
			newDisplayedComments.push(...Comments.slice(getLastCommentIndex, getLastCommentIndex + 5))
		} else {
			// Load all comments not loaded
			newDisplayedComments.push(...Comments.slice(getLastCommentIndex + 1))
		}
		setDisplayedComments(newDisplayedComments)	
  }, [displayedComments, Comments]);

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
      <PostHeader
        full_name={User.full_name}
        createdAt={createdAt}
        location={location}
      />
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
      <PostInteractions commentsCount={Comments.length} likesCount={liked} postId={String(id)} />
      {displayedComments.map((comment) => (
        <Comment
          key={comment.commentText}
          commentText={comment.commentText}
          user={comment.User}
        />
      ))}
      {Comments.length > 5 ? (
        <p
          className="mt-3 text-xs font-light hover:underline hover:cursor-pointer"
          onClick={loadMoreComments}
        >
          Lihat komentar ({Comments.length - displayedComments.length})
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
