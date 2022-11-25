import React, { useState } from "react";
import TextField from "@components/design/TextField";
import Link from "next/link";
import Button from "@components/design/Button";
import axios from "axios";
import { BE_URL } from "Config";

const SignInForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e: any, setState: (args: string) => void) => {
    setState(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    axios
      .post(BE_URL + "/loocale/login", {
        email: usernameOrEmail,
        password: password,
      })
      .then(() => {
        console.log("sign insuccess");
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <TextField
        variant="contained"
        autofocus
        onChange={(e) => handleChange(e, setUsernameOrEmail)}
        placeholder="Username atau email"
        error={error}
        value={usernameOrEmail}
        className="w-[200px] sm:w-[320px] mt-4"
      />
      <TextField
        variant="contained"
        autofocus
        error={error}
        onChange={(e) => handleChange(e, setPassword)}
        placeholder="Password"
        value={password}
        type="password"
        className="w-[200px] sm:w-[320px] mt-4"
      />
      {error ? (
        <p className="text-red-500 mt-2 text-xs text-left">
          Email dan password tidak sesuai!
        </p>
      ) : (
        <></>
      )}
      <div className="text-left font-bold text-xs px-4 mt-4">
        <Link href={"/forgot-password"} className="">
          Lupa password?
        </Link>
      </div>
      <Button
        onClick={() => {}}
        variant="contained"
        type="submit"
        className="sm:text-[21px] mt-12 rounded-lg font-bold py-2 sm:py-2 w-[200px] sm:w-[260px] mx-auto"
      >
        {"Sign in >"}
      </Button>
    </form>
  );
};

export default SignInForm;
