import InteractionIcon from "./InteractionIcon";
import CommentIcon from "@icons/comment_icon.svg";
import HeartIcon from "@icons/heart_icon.svg";

const PostInteractions = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex gap-4">
        <InteractionIcon
          icon={CommentIcon}
          activeIcon={CommentIcon}
          count={20}
        />
        <InteractionIcon icon={HeartIcon} activeIcon={HeartIcon} count={222} />
      </div>
      <p className="text-[9px] text-secondary-500 font-light">
        dari <span className="font-bold">#Traveling</span>
      </p>
    </div>
  );
};

export default PostInteractions