import React, { useEffect, useState } from "react";
import FirstSignIn from "./FirstSignIn";
import FirstSignInDialog from "./FirstSignIn/FirstSignInDialog";
import Location from './FirstSignIn/steps/Location';

interface FeedProps {
  
}
const Feed: React.FC<FeedProps> = (props) => {
  const [step, setStep] = useState(1);
  return (
    <FirstSignIn></FirstSignIn>
  );
};

export default Feed;
