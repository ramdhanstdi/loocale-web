import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Select from "@components/design/Select";
import Button from "@components/design/Button";

interface LocationProps {
	setStep: (args: number) => void;
	province: [string, React.Dispatch<React.SetStateAction<string>>];
	city: [string, React.Dispatch<React.SetStateAction<string>>];
}
const Location:React.FC<LocationProps> = ({setStep, province, city}) => {
  const sampleOption = [{ label: "Hello" }, { label: "World" }];
  const [username, setUsername] = useState("user");

  useEffect(() => {
    const cookiesUsername = Cookies.get("username");
    if (cookiesUsername) {
      setUsername(cookiesUsername);
    }
  }, []);
  return (
    <div className="mt-[60px] text-center text-primary-900 ">
      <h1 className="text-[28px] font-bold">Halo {username}!</h1>
      <p className="text-xs font-light mb-16">
        Kami butuh sedikit lagi informasi dari kamu nih!
      </p>
      <p className="text-sm font-bold mb-2">Lokasi domisili kamu saat ini?</p>
      <div className="mb-4">
        <Select
          option={sampleOption}
          placeholder={"Pilih Provinsi"}
          value={province[0]}
          onSelect={(option) => {
            console.log("option", option);
            province[1](option.label);
          }}
        />
      </div>
      <div className="mb-[60px]">
        <Select
          option={sampleOption}
          placeholder={"Pilih Kabupaten/Kota"}
          className={`${province[0] ? "visible" : "invisible"}`}
          onSelect={(option) => city[1](option.label)}
        />
      </div>
      <Button
        variant="contained"
        onClick={() => {}}
        disabled={!province[0] || !city[0]}
        className={"w-full font-bold rounded-full py-3"}
      >
        Selanjutnya
      </Button>
    </div>
  );
};

export default Location;
