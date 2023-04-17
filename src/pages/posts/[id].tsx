import LeftPanel from "@components/view/TimelineView/LeftPanel";
import React, { useMemo } from "react";
import useWindowDimensions from "src/utils/hooks";
import TimelineHeader from "@components/view/TimelineView/TimelineHeader";
import TimelineContainer from "@components/view/TimelineView/TimelineContainer";
import BottomNavbar from "@components/view/TimelineView/BottomNavbar";
import RightPanel from "@components/view/TimelineView/RightPanel";
import getPosts, { useGetPosts } from "src/services/Timeline";
import Image from "next/image";
import Post from "@components/view/TimelineView/Post";
import { GetServerSideProps } from "next";
import { QueryClient } from "@tanstack/react-query";

interface SinglePostProps {
	postId: string
}
const SinglePost:React.FC<SinglePostProps> = ({ postId }) => {
  const { width } = useWindowDimensions();
  const { data: postData } = useGetPosts();

	const currentPostData = useMemo(() => {
		if (postData) {
			return postData.find((post) => String(post.id) === postId)
		}
	}, [postData])

  if (!currentPostData || !postData) {
    return <></>;
  } else {
    return (
      <div className="max-h-screen max-w-screen flex justify-between box-border">
        {width && width >= 1000 && <LeftPanel />}
        <div className="flex flex-col w-full lg:mx-6 shrink">
          <div className="mt-2 ml-2">
            <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
          </div>
          <Post {...currentPostData } />
        </div>
        {width && width < 1000 && <BottomNavbar />}
        {width && width >= 1000 && <RightPanel />}
      </div>
    );
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const pageParams = context.params;
	const postId = pageParams?.id;

	return {
		props: {
			postId
		}
	}
}

export default SinglePost;
