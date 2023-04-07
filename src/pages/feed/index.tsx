import React, { useEffect, useState } from "react";
import FirstSignIn from "@components/view/TimelineView/FirstSignIn";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import TimelineHeader from "@components/view/TimelineView/TimelineHeader";
import TimelineContainer from "@components/view/TimelineView/TimelineContainer";
import Tabs from "@components/view/TimelineView/Tabs";
import Post from "@components/view/TimelineView/Post";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import { useGetPosts, useGetUser } from "src/services/Timeline";
import { PostDataInterface } from "src/models/Timeline";
import { getCurrentUser } from "src/utils/helper";
import Head from "next/head";
import useWindowDimensions from "src/utils/hooks";
import BottomNavbar from "@components/view/TimelineView/BottomNavbar";
import { Router, useRouter } from "next/router";
import Cookies from "js-cookie";

interface FeedProps {}
const Feed: React.FC<FeedProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const { width, height } = useWindowDimensions();
	const router = useRouter();

  const { data: currentUser } = useGetUser({ refetchOnMount: true });

  const { data: postData } = useGetPosts();

	useEffect(() => {
		if (!Cookies.get("token")) {
			router.push("/signin")
		}
	}, [router])
	
  if (!currentUser) {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Feed</title>
        </Head>
        {currentUser.users.isFirstSignIn ? (
          <FirstSignIn></FirstSignIn>
        ) : (
          <div className="max-h-screen max-w-screen flex justify-between box-border">
            {width && width >= 1000 && <LeftPanel />}
            <div className="flex flex-col w-full lg:mx-6">
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
						{width && width < 1000 && <BottomNavbar/>}
            {width && width >= 1000 && <RightPanel />}
          </div>
        )}
      </>
    );
  }
};

export default Feed;
