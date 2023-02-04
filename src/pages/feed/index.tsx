import React, { useEffect, useState } from "react";
import FirstSignIn from "@components/view/TimelineView/FirstSignIn";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import AddPost from "@components/view/TimelineView/AddPost";
import TimelineContainer from "@components/view/TimelineView/TimelineContainer";
import Tabs from "@components/view/TimelineView/Tabs";
import Post from "@components/view/TimelineView/Post";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import { useQuery } from "@tanstack/react-query";
import getPosts from "src/services/Timeline";
import { PostDataInterface } from "src/models/Timeline";

interface FeedProps {}
const Feed: React.FC<FeedProps> = (props) => {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const {
    data: postData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    refetchInterval: 10000,
  });

  return (
    <div className="relative">
      <LeftPanel />
      <RightPanel />
      <AddPost />
      <TimelineContainer>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <PostsContainer>
					{postData ? (
						postData.map((post: PostDataInterface) => (
							<Post key={post.id} {...post}/>
						))
					): (
						<></>
					)}
          
        </PostsContainer>
      </TimelineContainer>
    </div>
  );
};

export default Feed;
