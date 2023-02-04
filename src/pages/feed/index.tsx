import React, { useEffect, useState } from "react";
import FirstSignIn from "@components/view/TimelineView/FirstSignIn";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import AddPost from "@components/view/TimelineView/AddPost";
import TimelineContainer from "@components/view/TimelineView/TimelineContainer";
import Tabs from "@components/view/TimelineView/Tabs";
import Post from "@components/view/TimelineView/Post";
import PostsContainer from "@components/view/TimelineView/PostsContainer";

interface FeedProps {}
const Feed: React.FC<FeedProps> = (props) => {
  const [step, setStep] = useState(1);
	const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="relative">
      <LeftPanel />
      <RightPanel />
      <AddPost />
      <TimelineContainer>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <PostsContainer>
          <Post />
          <Post />
          <Post />
        </PostsContainer>
      </TimelineContainer>
    </div>
  );
};

export default Feed;
