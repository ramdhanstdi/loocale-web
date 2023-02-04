import React from "react";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";
import TextField from "@components/design/TextField";
import AddIcon from "@icons/plus_icon.svg";

const AddPost = () => {
  return (
    <div className="flex flex-col px-9 py-2 left-[180px] right-[381px] rounded-lg shadow-md fixed top-0">
      <div className="">
        <Image
          src={"/NavbarLogo.svg"}
          width={140}
          height={52}
          alt="Loocale Logo"
        />
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <div className="rounded-full flex justify-center">
            <Image width={50} height={50} className="" src={PeopleIcon} />
          </div>
          <p className="text-secondary-500 sm:text-xs font-bold">@fakhrdwi</p>
        </div>
        <TextField
          placeholder="Mulai post baru"
          className="mt-[6px] w-full h-9"
          size="sm"
          fullWidth
          endIcon={<Image src={AddIcon} width={20} height={20}/>}
        />
      </div>
    </div>
  );
};

export default AddPost;
