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
        maxHeight ? maxHeight : "lg:max-h-[calc(100vh-145px)] max-h-[calc(100vh-180px)]"
      } scrollbar-hide px-auto box-border`}
    >
      {children}
    </div>
  );
};

export default PostsContainer;
