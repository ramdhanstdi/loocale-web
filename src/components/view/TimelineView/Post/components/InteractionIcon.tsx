import Image from "next/image";
import React, { useState } from "react";
import { useGetUser } from "src/services/Timeline";

interface InteractionIconProps {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  count: string;
  onClick?: () => void;
  isActive?: boolean;
}
const InteractionIcon: React.FC<InteractionIconProps> = ({
  icon,
  activeIcon,
  isActive: activeProps,
  count = "",
  onClick,
}) => {
  const [isActive, setIsActive] = useState(Boolean(activeProps));
  const { data: currentUser } = useGetUser();

  return (
    <div
      className={`flex gap-2 ${isActive ? "text-secondary-500" : "text-white"} ${
        currentUser ? "hover:cursor-pointer" : ""
      }`}
      onClick={() => {
        if (onClick && currentUser) {
          onClick();
        }
        setIsActive(!isActive);
      }}
    >
      {isActive ? activeIcon : icon}
      <p className={`text-xs font-light text-primary-800 ${currentUser ? "hover:underline" : ""}`}>
        {count}
      </p>
    </div>
  );
};

export default InteractionIcon;
