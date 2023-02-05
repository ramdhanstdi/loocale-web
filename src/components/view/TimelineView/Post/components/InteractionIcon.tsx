import Image from "next/image";
import React, { useState } from "react";

interface InteractionIconProps {
  icon: string;
  activeIcon: string;
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
    <div className="flex gap-2">
      <Image
        src={isActive ? activeIcon : icon}
        width={16}
        height={16}
        alt="interaction-button"
				onClick={() => {
					if (onClick) {
						onClick()
					}
					setIsActive(!isActive)
				}}
      />
			<p className="text-xs font-light text-primary-800">{count}</p>
    </div>
  );
};

export default InteractionIcon;
