import React from "react";

interface TabsProps {
  activeTab: number;
  setActiveTab: (args: number) => void;
}
const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex text-center">
      <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
        Populer
      </Tab>
      <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
        Dari Teman
      </Tab>
    </div>
  );
};

interface TabProps {
  active?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
const Tab: React.FC<TabProps> = (props) => {
  return (
    <h2
      className={`w-1/2 text-primary-800 py-2 ${
        props.active
          ? "font-bold border-secondary-500 border-b-4"
          : "font-normal hover:bg-gray-100 hover:cursor-pointer hover:border-b-4 border-gray-300"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </h2>
  );
};

export default Tabs;
