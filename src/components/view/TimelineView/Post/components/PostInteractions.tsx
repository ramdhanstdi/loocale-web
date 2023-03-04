import InteractionIcon from "./InteractionIcon";
import CommentIcon from "@icons/comment_icon.svg";
import HeartIcon from "@icons/heart_icon.svg";
import { useMutation } from "@tanstack/react-query";
import { likePost, useLikePost } from "src/services/Timeline";
import { PostCategory, PostLikes } from "src/models/Timeline";
import { getCurrentUser } from "src/utils/helper";

interface PostInteractionsProps {
  commentsCount: number;
  postId: string;
  categories: PostCategory[];
	likes: PostLikes[];
	setShowAddComment: (args: boolean) => void;
}
const PostInteractions: React.FC<PostInteractionsProps> = ({
  commentsCount,
  postId,
  categories,
	likes,
	setShowAddComment
}) => {
  const likesMutation = useLikePost();

	const isPostLikedByUser = () => {
		return likes.findIndex((postLike) => postLike.likedById === getCurrentUser()?.id) >= 0
	}

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex gap-4">
        <InteractionIcon
          icon={<CommentIcon />}
          activeIcon={<CommentIcon />}
          count={`Tambah komentar (${commentsCount})`}
					onClick={() => setShowAddComment(true)}
        />
        <InteractionIcon
          icon={<HeartIcon />}
					isActive={isPostLikedByUser()}
          activeIcon={<HeartIcon />}
          count={`Like (${likes.length})`}
          onClick={() => likesMutation.mutate({ postId })}
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
