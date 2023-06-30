import { Dispatch, FC, SetStateAction } from "react";
import Select from "@components/design/Select";

interface SelectProvinceProps {
  options: [string];
  province: string;
  setProvince: Dispatch<SetStateAction<string>>;
}

const SelectProvince: FC<SelectProvinceProps> = ({
  options,
  province,
  setProvince,
}) => {
  return (
    <div className="border-[1px] border-gray-900 rounded-full shadow-md">
      <Select
        className="border-none"
        option={options}
        placeholder={"Pilih Lokasi"}
        value={province}
        onSelect={(value) => {
          setProvince(value);
        }}
      />
    </div>
  );
};

export { SelectProvince };
