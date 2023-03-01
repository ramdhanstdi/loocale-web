import Image from "next/image";
import React, { useState } from "react";
import { UserDataInterface } from "src/models/Timeline";
import PeopleIcon from "@icons/people_icon.svg";
import Button from "@components/design/Button";
import { useMutation } from "@tanstack/react-query";
import { useAddComment } from "src/services/Timeline";

interface AddCommentProps {
  user: UserDataInterface;
  postId: number;
}
const AddComment: React.FC<AddCommentProps> = ({ user, postId }) => {
  const addCommentHandler = useAddComment();
  const [commentText, setCommentText] = useState("");

  return (
    <div className="w-full gap-2 flex items-center">
      {user.thumbnail ? (
        <Image
          src={user.thumbnail}
          loader={() => user.thumbnail!}
          alt="comment profile pic"
        />
      ) : (
        <PeopleIcon />
      )}
      <div className="flex gap-5 w-full">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Tulis komentarmu disini"
          className="text-xs outline-none bg-grayscale-50 px-6 py-2 rounded-full w-full"
        />
        <Button
          onClick={() => addCommentHandler.mutate({ postId, commentText })}
          variant="contained"
          className="py-2 px-3 text-[9px] rounded-full"
        >
          Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
