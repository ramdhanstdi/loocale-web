import React from "react";

interface PostsContainerProps {
  children?: React.ReactNode;
  maxHeight?: string;
}
const PostsContainer: React.FC<PostsContainerProps> = ({
  children,
  maxHeight,
}) => {
  return (
    <div
      className={`w-full overflow-y-auto ${
        maxHeight ? maxHeight : "max-h-[calc(100vh-210px)]"
      } scrollbar-hide px-auto box-border`}
    >
      {children}
    </div>
  );
};

export default PostsContainer;
