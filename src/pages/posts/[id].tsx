import LeftPanel from "@components/view/TimelineView/LeftPanel";
import React from "react";
import useWindowDimensions from "src/utils/hooks";
import BottomNavbar from "@components/view/TimelineView/BottomNavbar";
import RightPanel from "@components/view/TimelineView/RightPanel";
import { getPostById } from "src/services/Timeline";
import Image from "next/image";
import Post from "@components/view/TimelineView/Post";
import { GetServerSideProps } from "next";
import { PostDataInterface } from "src/models/Timeline";
import Head from "next/head";

interface SinglePostProps {
  postData: PostDataInterface;
}
const SinglePost: React.FC<SinglePostProps> = ({ postData }) => {
  const { width } = useWindowDimensions();

  if (!postData) {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Post {"\u2022"} {postData.postText}</title>
        </Head>

        <div className="max-h-screen max-w-screen flex justify-between box-border">
          {width && width >= 1000 && <LeftPanel />}
          <div className="flex flex-col w-full lg:mx-6 shrink">
            <div className="mt-2 ml-2">
              <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
            </div>
            <Post {...postData} />
          </div>
          {width && width < 1000 && <BottomNavbar />}
          {width && width >= 1000 && <RightPanel />}
        </div>
      </>
    );
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageParams = context.params;
  const postId = pageParams?.id as string;

  const postData = await getPostById(postId);

  return {
    props: {
      postData,
    },
  };
};

export default SinglePost;
