import SearchBar from "@components/design/SearchBar";
import TextField from "@components/design/TextField";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface DiscoverHeroProps {
  //hasUserSearched: boolean;
  onClick: () => void;
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}
const DiscoverHero: React.FC<DiscoverHeroProps> = ({
  //hasUserSearched,
  onClick,
  searchValue,
  onChange,
}) => {
  return (
    <div
      className="fixed top-[83px] left-[180px] right-[381px] items-center justify-center flex flex-col bg-red-200 pt-[38px] pb-[30px] rounded-2xl"
      style={{
        backgroundColor:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        backgroundImage: "url('/gunung-bromo.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="mb-5 text-[28px] font-bold text-white leading-[36px]">
        Lagi rame apa disana
      </h1>
      <SearchBar
        value={searchValue}
        onChange={onChange}
				onClick={onClick}
				placeholder="Cari kota atau aktivitas yang ingin kamu kepo-in..."
      />
    </div>
  );
};

export default DiscoverHero;
