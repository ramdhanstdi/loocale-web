import { DateTime } from "luxon";
import { getTimeDifferenceString } from "src/utils/helper";
import MoreHorizIcon from "@icons/more_horiz_icon.svg";

interface PostHeaderProps {
  full_name: string;
  location: string;
  createdAt: string;
  location_detail: string | null;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  full_name,
  location,
  createdAt,
  location_detail,
}) => {
  const currentTime = DateTime.now();
  const postTime = DateTime.fromISO(createdAt);
  const timeDifference = currentTime
    .diff(postTime, ["years", "months", "days", "hours", "minutes"])
    .toObject();

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-end">
        <p className="font-bold text-primary-800 sm:text-base text-xs">{full_name}</p>
        <p className="text-primary-800 font-light text-[9px] inline sm:pb-1">
          - {location_detail ? `${location_detail},` : ""}{" "}
          <span className="font-bold sm:pb-1">{location}</span>
        </p>
				<p className="text-[9px]">{"\u2022"}</p>
        <p className="text-[9px] font-light sm:pb-1">{getTimeDifferenceString(timeDifference)}</p>
      </div>
      <div>
				<MoreHorizIcon width={16} height={16} className="sm:pb-1"/>
			</div>
    </div>
  );
};

export default PostHeader;
