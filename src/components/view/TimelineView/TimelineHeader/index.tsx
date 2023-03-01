import React, { useEffect, useState } from "react";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";
import TextField from "@components/design/TextField";
import AddIcon from "@icons/plus_icon.svg";
import CreatePostDialog from "../CreatePostDialog";
import { getCurrentUser } from "src/utils/helper";
import { UserDataInterface } from "src/models/Timeline";
import sampleUser from "src/utils/sample";

const AddPost = () => {
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [user, setUser] = useState<UserDataInterface | null>(sampleUser);

  const handleCloseDialog = () => {
    setOpenCreatePost(false);
  };

  useEffect(() => {
    setUser(getCurrentUser() as UserDataInterface);
  }, []);
  return (
    <>
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
              {user ? (
                user.thumbnail ? (
                  <Image
                    src={user.thumbnail ? user.thumbnail : PeopleIcon}
										loader={() => user.thumbnail || PeopleIcon}
                    alt="profile-pic"
                  />
                ) : (
                  <PeopleIcon />
                )
              ) : (
                <PeopleIcon />
              )}
            </div>
            <p className="text-secondary-500 sm:text-xs font-bold">
              {user?.user_name}
            </p>
          </div>
          <div className="w-full" onClick={() => setOpenCreatePost(true)}>
            <TextField
              placeholder="Mulai post baru"
              className="mt-[6px] w-full h-9 rounded-full"
              size="sm"
              fullWidth
              endIcon={
                <div className="scale-50 absolute top-1 right-0">
                  <AddIcon />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <CreatePostDialog open={openCreatePost} onClose={handleCloseDialog} />
    </>
  );
};

export default AddPost;
