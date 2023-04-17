import Image from "next/image";
import React from "react";

interface ImageCardProps {
  className?: string;
  backgroundUrl: string;
  children?: React.ReactNode;
	onClick?: () => void;
}
const ImageCard: React.FC<ImageCardProps> = (props) => {
  return (
    <div
      className={`${props.className} relative`}
			onClick={props.onClick}
    >

			<Image src={props.backgroundUrl} layout="fill" alt="image-card-background" className="rounded-lg filter brightness-75 object-cover"/>
      {props.children}
    </div>
  );
};

export default ImageCard;
