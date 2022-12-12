import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Select from "@components/design/Select";
import Button from "@components/design/Button";
import axios from "axios";
import { BE_URL } from "Config";

interface LocationProps {
  setStep: (args: number) => void;
  province: [string, React.Dispatch<React.SetStateAction<string>>];
  city: [string, React.Dispatch<React.SetStateAction<string>>];
}
const Location: React.FC<LocationProps> = ({ setStep, province, city }) => {
  const [provincesOption, setProvincesOption] = useState([]);
  const [citiesOption, setCitiesOption] = useState<string[]>([]);
  const [username, setUsername] = useState("user");

  const getProvincesList = async () => {
    axios
      .get(BE_URL + "/loocale/provinces")
      .then((res) => {
        setProvincesOption(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getCitiesList = async () => {
    axios
      .post(BE_URL + "/loocale/cities", {
        province: province[0],
      })
      .then((res) => {
        const citiesArr = [];
        for (let i = 0; i < res.data.data.length; i++) {
          citiesArr.push(res.data.data[i].name);
        }
        setCitiesOption(citiesArr);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const cookiesUsername = Cookies.get("username");
    if (cookiesUsername) {
      setUsername(cookiesUsername);
    }
    getProvincesList();
  }, []);

  useEffect(() => {
    if (province[0]) {
      getCitiesList();
    }
  }, [province[0]]);
  return (
    <div className="mt-[60px] text-center text-primary-900 ">
      <h1 className="text-[28px] font-bold">Halo {username}!</h1>
      <p className="text-xs font-light mb-16">
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
};

export default Location;
