import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Select from "@components/design/Select";
import Button from "@components/design/Button";
import axios from "axios";
import { BE_URL } from "Config";
import request from "src/services/request";
import { useGetUser } from "src/services/Timeline";

interface LocationProps {
  setStep: (args: number) => void;
  province: [string, React.Dispatch<React.SetStateAction<string>>];
  city: [string, React.Dispatch<React.SetStateAction<string>>];
}
const Location: React.FC<LocationProps> = ({ setStep, province, city }) => {
  const [provincesOption, setProvincesOption] = useState([]);
  const [citiesOption, setCitiesOption] = useState<string[]>([]);

	const { data: currentUser } = useGetUser();

  const getProvincesList = async () => {
    request
      .get(BE_URL + "/provinces")
      .then((res) => {
        setProvincesOption(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getCitiesList = async () => {
    request
      .get(BE_URL + "/cities?province=" + province[0])
      .then((res) => {
        const citiesArr = [];
        for (let i = 0; i < res.data.length; i++) {
          citiesArr.push(res.data[i].name);
        }
        setCitiesOption(citiesArr);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getProvincesList();
  }, []);

  useEffect(() => {
    if (province[0]) {
      getCitiesList();
    }
  }, [province[0]]);

	if (!currentUser) {
		return <></>
	} else {

		return (
			<div className="mt-[11px] text-center text-primary-900 ">
				<h1 className="text-[21px] sm:text-[28px] font-bold">Halo {currentUser.users.user_name}!</h1>
				<p className="text-xs font-light mb-7 sm:mb-16">
					Kami butuh sedikit lagi informasi dari kamu nih!
				</p>
				<p className="text-sm font-bold mb-2">Lokasi domisili kamu saat ini?</p>
				<div className="mb-4">
					<Select
						option={provincesOption}
						placeholder={"Pilih Provinsi"}
						value={province[0]}
						onSelect={(option) => {
							province[1](option);
						}}
					/>
				</div>
				<div className="mb-[60px]">
					<Select
						option={citiesOption}
						placeholder={"Pilih Kabupaten/Kota"}
						className={`${province[0] ? "visible" : "invisible"}`}
						onSelect={(option) => city[1](option)}
						value={city[0]}
					/>
				</div>
				<Button
					variant="contained"
					onClick={() => {
						setStep(2);
					}}
					disabled={!province[0] || !city[0]}
					className={"w-full font-bold rounded-full py-3"}
				>
					Selanjutnya
				</Button>
			</div>
		);
	}
};

export default Location;
