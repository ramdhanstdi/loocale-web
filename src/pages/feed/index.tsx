import React, { useEffect, useState } from "react";
import FirstSignIn from "@components/view/TimelineView/FirstSignIn";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import TimelineHeader from "@components/view/TimelineView/TimelineHeader";
import TimelineContainer from "@components/view/TimelineView/TimelineContainer";
import Tabs from "@components/view/TimelineView/Tabs";
import Post from "@components/view/TimelineView/Post";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import { useQuery } from "@tanstack/react-query";
import getPosts, { getUser } from "src/services/Timeline";
import { PostDataInterface } from "src/models/Timeline";
import { getCurrentUser } from "src/utils/helper";

interface FeedProps {}
const Feed: React.FC<FeedProps> = (props) => {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

	const user = getCurrentUser();
	console.log(user)

  const { data: postData } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    refetchInterval: 10000,
  });

  return (
    <div className="relative">
      <LeftPanel />
      <RightPanel />
      <TimelineHeader />
      <TimelineContainer>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <PostsContainer>
          {postData ? (
            postData.map((post: PostDataInterface) => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <></>
          )}
        </PostsContainer>
      </TimelineContainer>
    </div>
  );
};

export default Feed;
