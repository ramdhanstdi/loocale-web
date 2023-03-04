import React, { useCallback, useEffect, useMemo, useState } from "react";
import Comments from "./components/Comments";
import PostHeader from "./components/PostHeader";
import PostInteractions from "./components/PostInteractions";
import PostPictureContainer from "./components/PostPictureContainer";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";
import { PostDataInterface } from "src/models/Timeline";
import Comment from "./components/Comments";
import AddComment from "./components/AddComment";

const Post: React.FC<PostDataInterface> = ({
  User,
  postText,
  createdAt,
  location,
  Comments,
  Likes,
  Categories,
  id,
  location_detail,
  medias,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [displayedComments, setDisplayedComments] = useState(Comments.slice(0, 1));

  useEffect(() => {
    setDisplayedComments(Comments.slice(0, 1));
  }, [Comments]);

  const loadMoreComments = useCallback(() => {
    const newDisplayedComments = [...displayedComments];
    const getLastCommentIndex = Comments.indexOf(displayedComments[displayedComments.length - 1]);
    // If there are more than 5 comments not loaded
    if (Comments.length > getLastCommentIndex + 5) {
      // Load 5 comments
      newDisplayedComments.push(...Comments.slice(getLastCommentIndex, getLastCommentIndex + 5));
    } else {
      // Load all comments not loaded
      newDisplayedComments.push(...Comments.slice(getLastCommentIndex + 1));
    }
    setDisplayedComments(newDisplayedComments);
  }, [displayedComments, Comments]);

  return (
    <div className="w-full py-4 pr-[154px] pl-[131px] border-b-[0.5px] border-b-primary-100 relative">
      <div className="max-w-[600px] mx-auto relative">
        <div className="absolute text-center top-0 -left-20 text-xs text-primary-200 font-light">
          <div className="rounded-full flex justify-center">
            <PeopleIcon />
          </div>
          <p className="">Moderator</p>
          <p>Lvl 6</p>
        </div>
        <PostHeader
          full_name={User.full_name}
          createdAt={createdAt}
          location={location}
          location_detail={location_detail}
        />
        <p className="font-bold text-secondary-500 text-xs my-1">@{User.user_name}</p>
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
        <PostPictureContainer medias={medias} />
        <PostInteractions
          likes={Likes}
          commentsCount={Comments.length}
					setShowAddComment={setShowAddComment}
          categories={Categories}
          postId={String(id)}
        />
        {showAddComment && <AddComment user={User} postId={id} />}
        {displayedComments.map((comment) => (
          <Comment
            key={comment.id}
            commentText={comment.commentText}
            user={comment.User}
            createdAt={comment.createdAt}
          />
        ))}
        {Comments.length > 1 ? (
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
    </div>
  );
};

export default Post;
