import React, { useEffect, useState } from "react";
import Image from "next/image";
import PeopleIcon from "@icons/people_icon.svg";
import TextField from "@components/design/TextField";
import AddIcon from "@icons/plus_icon.svg";
import CreatePostDialog from "../CreatePostDialog";
import { getCurrentUser } from "src/utils/helper";
import { UserDataInterface } from "src/models/Timeline";
import sampleUser from "src/utils/sample";
import { useGetUser } from "src/services/Timeline";
import useWindowDimensions from "src/utils/hooks";
import Hamburger from "@components/design/Hamburger";
import Link from "next/link";
import Cookies from "js-cookie";

const AddPost = () => {
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const { width } = useWindowDimensions();

  const { data: currentUser } = useGetUser();

  const handleCloseDialog = () => {
    setOpenCreatePost(false);
  };

  const handleSignout = () => {
    Cookies.remove("token");
  };

  //if (!currentUser) {
  //  return <></>;
  //} else {
  return (
    <>
      {width && width > 1000 ? (
        <>
          <div className="flex flex-col px-9 py-2 rounded-lg shadow-md">
            <div className="">
              <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
            </div>
            {currentUser && (
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <div className="rounded-full flex justify-center">
                    {!currentUser.users.thumbnail ? (
                      <PeopleIcon />
                    ) : (
                      <Image
                        src={currentUser.users.thumbnail}
                        alt="profile-pic"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <p className="text-secondary-500 sm:text-xs font-bold mt-2">
                    {currentUser.users.user_name}
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
            )}
          </div>
          <CreatePostDialog open={openCreatePost} onClose={handleCloseDialog} />
        </>
      ) : (
        <div className="flex items-center justify-center py-2 shadow-md">
          <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
          <Hamburger
            menu={[]}
            className="mr-2"
            extraChild={
              <Link href={"/signin"}>
                <p
                  className="font-bold py-3 w-[240px] text-white bg-secondary-500 hover:cursor-pointer"
                  onClick={handleSignout}
                >
                  SIGN OUT
                </p>
              </Link>
            }
          />
        </div>
      )}
    </>
  );
  //}
};

export default AddPost;
