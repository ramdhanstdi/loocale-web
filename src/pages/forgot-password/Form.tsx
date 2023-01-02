import TextField from "@components/design/TextField";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@components/design/Button";
import EmailSent from "./EmailSent";

const ForgotPasswordForm = (props: { onSubmit: VoidFunction }) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <form className="flex flex-col" onSubmit={props.onSubmit}>
        <TextField
          variant="contained"
          autofocus
          placeholder="Ketik alamat email kamu"
          onChange={(e) => setEmail(e.target.value)}
          className="w-[200px] sm:w-[320px] mt-4"
          value={email}
        />
        <div className="text-left font-bold text-xs text-grayscale-500 px-4 mt-4">
          <Link href={"/forgot-password"} className="">
            Kembali ke halaman sign in
          </Link>
        </div>
        <Button
          onClick={() => {}}
          variant="contained"
          type="submit"
          className="sm:text-[21px] mt-8 rounded-lg font-bold py-2 sm:py-2 w-[200px] sm:w-[260px] mx-auto"
        >
          {"Submit >"}
        </Button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
