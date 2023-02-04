import {DateTime} from "luxon";
import { getTimeDifferenceString } from "src/utils/helper";

interface PostHeaderProps {
	full_name: string;
	location: string;
	createdAt: string;
}

const PostHeader:React.FC<PostHeaderProps> = ({ full_name, location, createdAt }) => {
	const currentTime = DateTime.now()
	const postTime = DateTime.fromISO(createdAt);
	const timeDifference = currentTime.diff(postTime, ["years", "months", "days", "hours", "minutes"]).toObject();

	return (
    <div className="flex justify-between items-end">
      <div className="flex gap-2">
        <p className="font-bold text-primary-800">{full_name}</p>
        <div>
          <p className="text-primary-800 font-light text-[9px] inline">
            - di Kawah Putih, <span className="font-bold">{location}</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-[9px] font-light">{getTimeDifferenceString(timeDifference)}</p>
      </div>
    </div>
  );
};

export default PostHeader