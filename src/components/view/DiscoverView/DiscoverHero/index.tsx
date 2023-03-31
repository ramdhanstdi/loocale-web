import SearchIcon from "@icons/search_icon.svg";
import { Autocomplete } from "@mui/material";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CityDataInterface } from "src/models/Timeline";

interface DiscoverHeroProps {
	setSearchValue: (args: string) => void;
  searchValue: string;
  searchOptions: string[];
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}
const DiscoverHero: React.FC<DiscoverHeroProps> = ({
  onChange,
  searchValue,
	setSearchValue,
  searchOptions,
}) => {
  return (
    <div
      className=" items-center justify-center flex flex-col bg-red-200 pt-[38px] pb-[30px] rounded-2xl"
      style={{
        backgroundColor: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
        backgroundImage: "url('/hero-bg-1.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="mb-5 text-[28px] font-bold text-white leading-[36px]">Lagi rame apa disana</h1>
      <div className="flex gap-5 w-[420px] items-center h-9 bg-white px-5 rounded-full">
        <Autocomplete
          options={searchOptions}
          onChange={onChange}
          inputValue={searchValue}
          onInputChange={(e, value) => setSearchValue(value)}
          filterOptions={(x) => x}
					className="w-full"
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                {...params.inputProps}
                placeholder="Cari kota atau aktivitas yang ingin kamu kepo-in..."
                className="outline-none w-full placeholder:text-xs placeholder:italic h-9 border-r border-primary-800"
              />
            </div>
          )}
        />
				<SearchIcon></SearchIcon>
      </div>
    </div>
  );
};

export default DiscoverHero;
