import React, { useState } from "react";
import FirstSignIn from "@components/view/TimelineView/FirstSignIn";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import TimelineHeader from "@components/view/TimelineView/TimelineHeader";
import TimelineContainer from "@components/view/TimelineView/TimelineContainer";
import Tabs from "@components/view/TimelineView/Tabs";
import Post from "@components/view/TimelineView/Post";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import getPosts, { getNotifications, useGetUser } from "src/services/Timeline";
import { PostDataInterface } from "src/models/Timeline";
import Head from "next/head";
import useWindowDimensions from "src/utils/hooks";
import BottomNavbar from "@components/view/TimelineView/BottomNavbar";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";

interface FeedProps {}
const Feed: React.FC<FeedProps> = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { width } = useWindowDimensions();

  const { data: currentUser } = useGetUser({ refetchOnMount: true });

  const { data: postData } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const data = await getPosts();
      return data;
    },
  });

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      {currentUser && currentUser.users.isFirstSignIn ? (
        <FirstSignIn></FirstSignIn>
      ) : (
        <div className="max-h-screen max-w-screen flex justify-between box-border overflow-hidden">
          {width && width >= 1000 && <LeftPanel />}
          <div className="flex flex-col w-full lg:mx-6 shrink">
            <TimelineHeader />
            <TimelineContainer>
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <PostsContainer>
                {postData ? (
                  postData.map((post: PostDataInterface) => <Post key={post.id} {...post} />)
                ) : (
                  <></>
                )}
              </PostsContainer>
            </TimelineContainer>
          </div>
          {width && width < 1000 && <BottomNavbar />}
          {width && width >= 1000 && <RightPanel />}
        </div>
      )}
    </>
  );
  //}
};

export async function getServerSideProps() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const data = await getPosts();
      return data;
    },
  });

	await queryClient.prefetchQuery({
		queryKey: ["getNotifications"],
		queryFn: getNotifications
	})

  //await queryClient.prefetchQuery({
  //	queryKey: ["getUser"],
  //	queryFn: getUser,
  //})

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Feed;
