import InteractionIcon from "./InteractionIcon";
import CommentIcon from "@icons/comment_icon.svg";
import HeartIcon from "@icons/heart_icon.svg";
import { useMutation } from "@tanstack/react-query";
import { likePost } from "src/services/Timeline";
import { PostCategory } from "src/models/Timeline";

interface PostInteractionsProps {
  commentsCount: number;
  likesCount: number;
  postId: string;
  categories: PostCategory[];
}
const PostInteractions: React.FC<PostInteractionsProps> = ({
  commentsCount,
  likesCount,
  postId,
  categories,
}) => {
  const likesMutation = useMutation({
    mutationFn: () => {
      return likePost({ postId });
    },
  });

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex gap-4">
        <InteractionIcon
          icon={<CommentIcon />}
          activeIcon={<CommentIcon />}
          count={commentsCount}
        />
        <InteractionIcon
          icon={<HeartIcon />}
          activeIcon={<HeartIcon />}
          count={likesCount}
          onClick={() => likesMutation.mutate()}
        />
      </div>
      <p className="text-[9px] text-secondary-500 font-light">
        dari{" "}
        {categories.map((category, index) => (
          index === categories.length - 1 ? (
            <span className="font-bold" key={category.id}>
              #{category.title}
            </span>
          ) : (
            <span className="font-bold" key={category.id}>
              #{category.title},{" "}
            </span>
          )
        ))}
      </p>
    </div>
  );
};

export default PostInteractions;
