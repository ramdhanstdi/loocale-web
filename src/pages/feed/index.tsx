import React, { useEffect, useState } from "react";
import FirstSignIn from "@components/view/TimelineView/FirstSignIn";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";

interface FeedProps {
  
}
const Feed: React.FC<FeedProps> = (props) => {
  const [step, setStep] = useState(1);
  return (
		<>
		<LeftPanel />
		<RightPanel />
		</>
  );
};

export default Feed;
