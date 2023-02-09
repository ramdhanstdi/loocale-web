import TextField from "@components/design/TextField";
import React from "react";

const DiscoverHero = () => {
  return (
    <div
      className="fixed top-[83px] left-[180px] right-[381px] items-center justify-center flex flex-col bg-red-200 pt-[38px] pb-[30px] rounded-2xl"
      style={{
        backgroundColor: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
				backgroundImage: "url('/gunung-bromo.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="mb-5 text-[28px] font-bold text-white leading-[36px]">
        Lagi rame apa disana
      </h1>
      <TextField fullWidth className="rounded-full w-[420px]" />
    </div>
  );
};

export default DiscoverHero;
