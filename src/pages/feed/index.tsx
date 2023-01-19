import React, { useEffect, useState } from "react";
import FirstSignIn from "@components/view/TimelineView/FirstSignIn";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import AddPost from "@components/view/TimelineView/AddPost";

interface FeedProps {
  
}
const Feed: React.FC<FeedProps> = (props) => {
  const [step, setStep] = useState(1);
  return (
		<div className="relative">
			<LeftPanel />
			<RightPanel />
			<AddPost></AddPost>
		</div>
  );
};

export default Feed;
