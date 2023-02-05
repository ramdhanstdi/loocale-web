import TextField from "@components/design/TextField";
import React from "react";

const DiscoverHero = () => {
  return (
    <div className="fixed top-[83px] left-[180px] right-[381px] items-center justify-center flex flex-col border border-b bg-red-200">
      <h1 className="mt-[38px] mb-5 text-[28px] font-bold text-white leading-[36px]">
        Lagi rame apa disana
      </h1>
      <div className="w-[420px]">
        <TextField fullWidth className="rounded-full"/>
      </div>
    </div>
  );
};

export default DiscoverHero;
