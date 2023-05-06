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
import { useGetUser } from "src/services/Timeline";
import WhatsAppIcon from "@icons/whatsapp_green_icon.svg";
import InternetIcon from "@icons/internet_icon.svg";

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
  const [openPostMenu, setOpenPostMenu] = useState(false);

  const { data: currentUser } = useGetUser();

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

  //if (!currentUser) {
  //  return <></>;
  //} else {
  return (
    <div
      className="w-full py-4 sm:pl-[40px] pr-4 pl-4 border-b-[0.5px] border-b-primary-100 relative"
      onClick={() => {
        setOpenPostMenu(false);
      }}
    >
      <div className=" relative flex gap-5 px-auto max-w-[800px] mx-auto">
        <div className="text-center text-xs text-primary-200 font-light">
          <div className="rounded-full flex flex-col items-center justify-start w-10 gap-2">
            {User.thumbnail ? (
              <Image
                src={User.thumbnail}
                width={40}
                height={40}
                alt="profile-pic"
                className="rounded-full object-cover"
              />
            ) : (
              <PeopleIcon />
            )}
            {User.user_role === "partner" && (
              <>
                <p className="text-white px-1 bg-primary-800 font-bold leading-[18px]">Partner</p>
                <div className="flex items-center justify-center gap-1">
									{/* PHONE NUMBER FORMAT IS WITHOUT COUNTRY CODE EX: 81204843324 */}
                  <a href={`https://api.whatsapp.com/send?phone=${User.phone_number}&text=`} target="_blank" rel="noreferrer">
                    <WhatsAppIcon className={"text-green-400"} />
                  </a>
                  {/*<InternetIcon />*/}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col grow">
          <PostHeader
            full_name={User.full_name}
            createdAt={createdAt}
            location={location}
            postId={id}
            location_detail={location_detail}
            postingUser={User}
            openPostMenu={openPostMenu}
            setOpenPostMenu={setOpenPostMenu}
          />
          <p className="font-bold text-secondary-500 text-xs my-1">@{User.user_name}</p>
          <p className="text-xs font-light text-justify break-words whitespace-pre-wrap mb-2">
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
          {currentUser && showAddComment && <AddComment user={currentUser.users} postId={id} />}
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
    </div>
  );
  //}
};

export default Post;
