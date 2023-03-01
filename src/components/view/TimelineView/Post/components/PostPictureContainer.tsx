import Image from "next/image";
import { PostMediaInterface } from "src/models/Timeline";

interface PostPictureContainerProps {
  medias: {
    PostMedia: PostMediaInterface;
    media_url: string;
  }[];
}

const PostPictureContainer: React.FC<PostPictureContainerProps> = ({
  medias,
}) => {
  return (
    <div className="mb-2 w-full mx-auto flex gap-2">
      {medias.map((image) => (
        <div key={image.PostMedia.mediaId}>
          <Image
            src={image.media_url}
            loader={() => image.media_url}
            width={216}
            height={144}
            alt="post-image"
            className="rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default PostPictureContainer;
