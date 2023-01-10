import React, { useState } from "react";
import TextField from "@components/design/TextField";
import Link from "next/link";
import Button from "@components/design/Button";
import axios from "axios";
import { BE_URL } from "Config";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import request from "src/services/request";
import ResetPassword from ".";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [hasPasswordBeenReset, setHasPasswordBeenReset] = useState(false);

  const router = useRouter();

  const validatePassword = () => {
    const regex = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/;
    return regex.test(newPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(BE_URL + "/user/reset-password", {
        password: newPassword,
        token: router.query.token,
      })
      .then(() => {
				setHasPasswordBeenReset(true)
        console.log("password has been reset");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
		<>
		{!hasPasswordBeenReset ? (
			<form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <TextField
        variant="contained"
        autofocus
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Password baru"
        maxLength={16}
        pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
        type="password"
        value={newPassword}
        className="w-[200px] sm:w-[320px] mt-4"
      />
      <TextField
        placeholder="Konfirmasi Password"
        className="w-[200px] sm:w-[320px] mt-4"
        variant="contained"
        maxLength={16}
        required
        value={confirmNewPassword}
        errorMessage="Password does not match"
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        type="password"
        validation={() =>
          new Promise((resolve, reject) => {
            if (confirmNewPassword === newPassword) {
              resolve(true);
            } else {
              reject();
            }
          })
        }
      />
      <p
        className={`text-[9px] sm:text-xs text-left w-[200px] sm:w-80 mt-2 ${
          validatePassword() ? "text-grayscale-400" : "text-error-600"
        } font-light px-2`}
      >
        Password harus menggunakan minimal 8 karakter dengan huruf kecil,
        kapital, dan angka
      </p>
      <Button
        onClick={() => {}}
        variant="contained"
        type="submit"
				disabled={!confirmNewPassword || !newPassword || confirmNewPassword !== newPassword}
        className="sm:text-[21px] mt-6 rounded-lg font-bold py-2 sm:py-2 w-[200px] sm:w-[260px] mx-auto"
      >
        {"Sign in >"}
      </Button>
    </form>
		) : (
			<p className="text-[9px] sm:text-xs">
				Password telah diganti
			</p>
		)}
    
		</>
  );
};

export default ResetPasswordForm;
