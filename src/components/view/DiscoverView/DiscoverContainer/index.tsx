import React, { useEffect, useState } from "react";

interface DiscoverContainerProps {
  children?: React.ReactNode;
  hasUserSearched: boolean;
}
const DiscoverContainer: React.FC<DiscoverContainerProps> = (props) => {
  return (
    <div
      className={`left-[180px] right-[381px] ${
        props.hasUserSearched ? "top-[200px]" : "top-[290px]"
      }  shadow-md rounded-lg fixed overflow-y-auto`}
    >
      {props.children}
    </div>
  );
};

export default DiscoverContainer;
