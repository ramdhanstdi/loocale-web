import React from "react";

interface ImageCardProps {
  className?: string;
  backgroundUrl?: string;
  children?: React.ReactNode;
}
const ImageCard: React.FC<ImageCardProps> = (props) => {
  return (
    <div
      className={`${props.className}`}
      style={{
        backgroundImage: `url(${props.backgroundUrl})`,
      }}
    >
      {props.children}
    </div>
  );
};

export default ImageCard;
