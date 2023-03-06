import React, { useEffect, useState } from "react";
import TextField from "@components/design/TextField";
import Button from "@components/design/Button";
import axios from "axios";
import { BE_URL } from "Config";
import Link from "next/link";
import { useRouter } from "next/router";
import GoogleSSO from "@components/GoogleSSO";

interface Props {
  setHasEmailBeenInputted: (args: boolean) => void;
  setHasUserVerifyEmail: (args: boolean) => void;
  setEmail: (args: string) => void;
  email: string;
}
const SignUpOption: React.FC<Props> = ({ email, setEmail, ...props }) => {
  const [doesEmailExist, setDoesEmailExist] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex grow flex-col justify-center items-center text-center">
        <h1 className="w-[240px] sm:w-[430px] font-bold text-[28px] leading-[36px] sm:text-[50px] sm:leading-[60px] text-primary-900">
          Yuk gabung jadi Warga Loocal!
        </h1>
        <div className="w-[200px] sm:w-[261px] mt-8 flex flex-col">
          <TextField
            variant="outlined"
            className="w-full"
            placeholder="Ketik alamat email kamu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={doesEmailExist}
            errorMessage={"Email already exist"}
          ></TextField>
          <Button
            variant="contained"
            onClick={async () => {
              axios
                .post(BE_URL + "/user/email", {
                  email: email,
                })
                .then(() => {
                  props.setHasEmailBeenInputted(true);
                })
                .catch((err) => {
                  setDoesEmailExist(true);
                  console.error(err);
                });
            }}
            disabled={email.length == 0}
            className="py-2 rounded-xl font-bold mt-6 sm:text-[21px] mb-8"
          >
            Sign Up
          </Button>
          <div className="flex gap-4 items-center justify-center mb-6">
            <hr className="w-full" color="#678190" />
            <p className="text-[14px] text-[#678190]">atau</p>
            <hr className="w-full" color="#678190" />
          </div>
          <GoogleSSO
            variant="signup"
            callback={() => {
              router.push("/feed");
            }}
          />
          <p className="text-[9px] sm:text-xs text-[#678190] text-left mt-7 mb-8">
            Dengan mendaftar, kamu menyetujui{" "}
            <Link href="/terms-and-conditions">
              <span className="underline hover:cursor-pointer">Syarat dan Ketentuan</span>
            </Link>
            , dan{" "}
            <Link href="/privacy-policy">
              <span className="underline hover:cursor-pointer">Kebijakan Privasi</span>
            </Link>
          </p>
        </div>
        <Link href="/signin">
          <div className="text-xs font-bold text-primary-900 underline sm:no-underline ">
            <p>
              Sudah punya akun Loocale? <span className="sm:underline cursor-pointer">Sign In</span>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SignUpOption;
