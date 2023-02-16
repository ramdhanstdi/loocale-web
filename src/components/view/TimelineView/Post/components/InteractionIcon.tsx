import Image from "next/image";
import React, { useState } from "react";

interface InteractionIconProps {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  count: number | string;
	onClick?: () => void;
}
const InteractionIcon: React.FC<InteractionIconProps> = ({
  icon,
  activeIcon,
  count = 0,
	onClick
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`flex gap-2 ${isActive ? "text-secondary-500" : "text-white"}`} onClick={() => {
			if (onClick) {
				onClick()
			}
			setIsActive(!isActive);
		}}>
      {isActive ? activeIcon : icon}
			<p className="text-xs font-light text-primary-800">{count}</p>
    </div>
  );
};

export default InteractionIcon;
