// React
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

// API
import request from "src/services/request";

// Components
import { SelectActivity, SelectProvince } from "./components";
import Button from "@components/design/Button";

// Const
import { BE_URL } from "Config";
import { ACTIVITY } from "./const";

interface FilterPartnersProps {
  onClickFilter: () => void;
  province: string;
  activity: string;
  setProvince: Dispatch<SetStateAction<string>>;
  setActivity: Dispatch<SetStateAction<string>>;
}

const FilterPartners: FC<FilterPartnersProps> = ({
  onClickFilter,
  activity,
  province,
  setActivity,
  setProvince,
}) => {
  const [searchOptions, setSearchOptions] = useState<[string]>([""]);

  /**
   * @description get province
   *
   * @return {string[]}
   */
  const getProvinces = async () => {
    request
      .get(BE_URL + "/partners-city")
      .then((res: any) => {
        setSearchOptions(res.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getProvinces();
  }, []);

  return (
    <div className="flex gap-4 justify-left ">
      <div>
        <SelectProvince
          options={searchOptions}
          province={province}
          setProvince={setProvince}
        />
      </div>
      <div>
        <SelectActivity
          options={ACTIVITY}
          activity={activity}
          setActivity={setActivity}
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => onClickFilter()}
          className={"w-full font-bold rounded-lg px-4 py-2"}
        >
          Cari Partner
        </Button>
      </div>
    </div>
  );
};

export { FilterPartners };
