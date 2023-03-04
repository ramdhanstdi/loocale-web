import React, { useState } from "react";
import TextField from "@components/design/TextField";
import Button from "@components/design/Button";
import axios from "axios";
import { BE_URL } from "Config";
import { fullnameValidation, usernameValidation } from "./lib/validation";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface Props {
  email: string;
}
const NewAccountForm: React.FC<Props> = (props) => {
	const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState(
    "Only letters, numbers, and _"
  );

  const validatePassword = () => {
    const regex = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/;
    return regex.test(password);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    axios
      .post(BE_URL + "/user/signup/form", {
        email: props.email,
        full_name: fullname,
        user_name: username,
        password: password,
      })
      .then((res) => {
				Cookies.set("token", res.data.data)
				router.push("/feed");
        console.log("sign up success");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="flex grow flex-col justify-center items-center text-center">
      <h1 className="w-[240px] sm:w-[430px] font-bold text-[21px] leading-[36px] sm:text-[38px] sm:leading-[60px] text-primary-900">
        Buat akun baru
      </h1>
      <p className="text-xs sm:text-base mt-1">
        Temukan lokasi healing baru bersama Loocale
      </p>
      <form
        className="mt-8 flex flex-col gap-4 items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          placeholder="Nama lengkap"
          className="w-[200px] sm:w-80"
          variant="contained"
          maxLength={50}
          value={fullname}
          errorMessage="Alphabet only!"
          required
          pattern="^[a-zA-Z ]*$"
					validation={async () => {
						if (fullname) {
							return /^[a-zA-Z ]*$/.test(fullname)
						} else return false

					}}
          onChange={(e) => setFullname(e.target.value)}
          autofocus
        />
        <TextField
          placeholder="Username"
          className="w-[200px] sm:w-80"
          variant="contained"
          maxLength={16}
          value={username}
          required
          pattern="^[\w\.]+$"
          onChange={(e) => setUsername(e.target.value)}
          errorMessage={usernameErrorMessage}
          validation={async () => {
            const isUsernameValid = await usernameValidation(username);
            return isUsernameValid;
          }}
        />
        <div className="flex flex-col items-center">
          <TextField
            placeholder="Password"
            className="w-[200px] sm:w-80"
            variant="contained"
            required
            maxLength={16}
            pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <p
            className={`text-[9px] sm:text-xs text-left w-[200px] sm:w-80 ${
              validatePassword() ? "text-grayscale-400" : "text-error-600"
            } font-light px-2`}
          >
            Password harus menggunakan minimal 8 karakter dengan huruf kecil,
            kapital, dan angka
          </p>
        </div>

        <TextField
          placeholder="Konfirmasi Password"
          className="w-[200px] sm:w-80"
          variant="contained"
          maxLength={16}
          required
          value={confirmPassword}
          errorMessage="Password does not match"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          validation={() =>
            new Promise((resolve, reject) => {
              if (confirmPassword === password) {
                resolve(true);
              } else {
                reject();
              }
            })
          }
        />
        <Button
          onClick={() => {}}
          variant="contained"
          type="submit"
          className="sm:text-[21px] mt-12 rounded-lg font-bold py-2 sm:py-2 w-[200px] sm:w-[260px]"
        >
          {"Mulai Loocale >"}
        </Button>
      </form>
    </div>
  );
};

export default NewAccountForm;
