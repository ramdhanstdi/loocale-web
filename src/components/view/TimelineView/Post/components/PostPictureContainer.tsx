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
          <div key={image.PostMedia.mediaId}>
            <div
              className="hover:cursor-pointer hover:opacity-90"
              onClick={() => pictureClickHandler(image)}
            >
              <Image
                src={image.media_url}
                width={216}
                height={144}
                alt="post-image"
                className="rounded-md object-cover"
								sizes="100%"
              />
            </div>
            <Modal open={openFullsizePicture} onClose={() => setOpenFullsizePicture(false)}>
							<CloseIcon className={"scale-[2] absolute top-6 right-6 rounded-full bg-white hover:cursor-pointer"}></CloseIcon>
              <div className="w-full h-full relative flex items-center justify-center mx-auto">
                <img src={fullsizePictureUrl} alt="" className="max-w-screen max-h-screen mx-auto p-10" />
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostPictureContainer;
