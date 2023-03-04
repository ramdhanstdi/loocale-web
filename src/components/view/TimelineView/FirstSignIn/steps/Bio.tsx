import React, { ChangeEvent, useState } from "react";
import CameraIcon from "@icons/camera_icon.svg";
import Image from "next/image";
import TextField from "@components/design/TextField";
import Button from "@components/design/Button";
import Link from "next/link";

interface BioProps {
  setProfileImage: (args: File) => void;
  setBio: (args: string) => void;
  bio: string;
  setStep: (args: number) => void;
}
const Bio: React.FC<BioProps> = ({ bio, setBio, ...props }) => {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);
  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      props.setProfileImage(event.target.files[0]);
      setImageURL(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="mt-[24px] text-center text-primary-900">
      <h1 className="font-bold text-[28px] mb-2 leading-9	">
        Lengkapi tampilan profil
      </h1>
      <p className="font-light text-xs mb-4">
        Unggah foto dan ceritakan dirimu di bio
      </p>
      <div className="relative mb-2">
        <label className="relative z-20">
          <div
            className={`rounded-full bg-grayscale-100 relative cursor-pointer  w-24 h-24 flex items-center justify-center mx-auto ${
              imageURL ? "invisible" : "visible"
            }`}
          >
            <CameraIcon />
          </div>

          <input
            type="file"
            onChange={onImageChange}
            className="filetype hidden"
          />
        </label>
        {imageURL ? (
          <div className="absolute top-0 left-0 m-auto w-full z-10">
            <Image
              src={imageURL}
              width={96}
              height={96}
              alt="preview image"
              className="rounded-full object-cover"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <TextField
        variant="outlined"
        placeholder="Ceritakan tentang diri kamu"
        className="mb-2 w-full"
        label="Bio"
        maxLength={140}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          props.setStep(4);
        }}
        className={"w-full font-bold rounded-full py-3 mb-3"}
        disabled={!imageURL && !bio}
      >
        Selanjutnya
      </Button>
      <p
        className="font-bold text-xs underline cursor-pointer"
        onClick={() => props.setStep(4)}
      >
        Nanti dulu
      </p>
    </div>
  );
};

export default Bio;
