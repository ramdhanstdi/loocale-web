import Image from "next/image";

const PostPictureContainer = () => {
  return (
    <div className="mb-2 w-full mx-auto flex gap-2">
      <div>
        <Image
          src={"/gunung-bromo.jpg"}
          width={216}
          height={144}
          alt="post-image"
          className="rounded-md"
        />
      </div>
      <div className="rounded-md">
        <Image
          src={"/jembrana.jpg"}
          width={216}
          height={144}
          alt="post-image"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default PostPictureContainer