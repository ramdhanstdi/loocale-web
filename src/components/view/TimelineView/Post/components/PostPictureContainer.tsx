import Modal from "@components/design/Modal";
import Image from "next/image";
import { useState } from "react";
import { PostMediaInterface } from "src/models/Timeline";
import CloseIcon from "@icons/close_icon.svg";

interface PostPictureContainerProps {
  medias: {
    PostMedia: PostMediaInterface;
    media_url: string;
  }[];
}

const PostPictureContainer: React.FC<PostPictureContainerProps> = ({ medias }) => {
  const [openFullsizePicture, setOpenFullsizePicture] = useState(false);
	const [fullsizePictureUrl, setFullsizePictureUrl] = useState("");
  const pictureClickHandler = (image: {
		PostMedia: PostMediaInterface,
		media_url: string
	}) => {
    setOpenFullsizePicture(true);
		setFullsizePictureUrl(image.media_url)
  };
  return (
    <>
      <div className="mb-2 w-full mx-auto grid grid-cols-2 gap-2">
        {medias.map((image) => (
          <>
            <div
              key={image.PostMedia.mediaId}
              className="hover:cursor-pointer hover:opacity-90"
              onClick={() => pictureClickHandler(image)}
            >
              <Image
                src={image.media_url}
                loader={() => image.media_url}
                width={216}
                height={144}
                unoptimized
                alt="post-image"
                className="rounded-md"
              />
            </div>
            <Modal open={openFullsizePicture} onClose={() => setOpenFullsizePicture(false)}>
							<CloseIcon className={"scale-[2] absolute top-6 right-6 rounded-full bg-white hover:cursor-pointer"}></CloseIcon>
              <div className="w-3/4 h-3/4 relative top-1/2 -translate-y-1/2 mx-auto">
                <Image
                  src={fullsizePictureUrl}
                  loader={() => fullsizePictureUrl}
                  layout="fill"
                  unoptimized
                  alt="post-image"
                  className="object-cover"
                />
              </div>
            </Modal>
          </>
        ))}
      </div>
    </>
  );
};

export default PostPictureContainer;
