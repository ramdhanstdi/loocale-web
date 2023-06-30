import { Dispatch, FC, SetStateAction } from "react";
import Select from "@components/design/Select";

interface SelectActivityProps {
  options: string[];
  activity: string;
  setActivity: Dispatch<SetStateAction<string>>;
}

const SelectActivity: FC<SelectActivityProps> = ({
  options,
  activity,
  setActivity,
}) => {
  return (
    <div className="border-[1px] border-gray-900 rounded-full shadow-md">
      <Select
        className="border-none"
        option={options}
        placeholder={"Pilih Aktivitas"}
        value={activity}
        onSelect={(value) => {
          setActivity(value);
        }}
      />
    </div>
  );
};

export { SelectActivity };
