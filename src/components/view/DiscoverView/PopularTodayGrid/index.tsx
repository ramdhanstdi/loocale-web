import React from "react";

const PopularTodayGrid = (props: { children?: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3 gap-x-[17px] gap-y-2 px-12 mb-6">
      {props.children}
    </div>
  );
};

export default PopularTodayGrid;
