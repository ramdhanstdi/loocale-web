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
    <div className="w-full gap-2 flex items-center pt-3 mb-5">
      {user.thumbnail ? (
        <Image
          src={user.thumbnail}
          alt="comment profile pic"
          className="rounded-full"
          width={40}
          height={40}
        />
      ) : (
        <PeopleIcon />
      )}
      <div className="flex gap-4 w-full items-center">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Tulis komentarmu disini"
          className="text-xs outline-none px-4 py-3 rounded-lg w-full border border-primary-500"
          onKeyDown={(e) => {
            if (e.code === "Enter" && commentText) {
              addCommentHandler.mutate({ postId, commentText });
              setCommentText("");
            }
          }}
        />
        <Button
          onClick={() => {
            addCommentHandler.mutate({ postId, commentText });
            setCommentText("");
          }}
          variant="contained"
          className="h-[30px] px-4 text-[9px] rounded-full font-bold leading-3"
        >
          Kirim
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
