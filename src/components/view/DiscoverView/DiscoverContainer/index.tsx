import React, { useEffect, useState } from "react";

interface DiscoverContainerProps {
  children?: React.ReactNode;
  hasUserSearched: boolean;
}
const DiscoverContainer: React.FC<DiscoverContainerProps> = (props) => {
  return (
    <div
      className={`${
        props.hasUserSearched ? "top-[200px]" : "top-[290px]"
      }  shadow-md rounded-lg  overflow-y-auto`}
    >
      {props.children}
    </div>
  );
};

export default DiscoverContainer;
