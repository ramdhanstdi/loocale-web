import React from "react";

interface ImageCardProps {
  className?: string;
  backgroundUrl?: string;
  children?: React.ReactNode;
	onClick?: () => void;
}
const ImageCard: React.FC<ImageCardProps> = (props) => {
  return (
    <div
      className={`${props.className}`}
      style={{
        backgroundImage: `url(${props.backgroundUrl})`,
      }}
			onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ImageCard;
