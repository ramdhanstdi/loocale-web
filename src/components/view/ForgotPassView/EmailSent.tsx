import React from "react";
import Navbar from "@components/layout/Navbar";
import Image from "next/image";
import Head from "next/head";

const EmailSent = () => {
  return (
    <>
      <div className="flex grow flex-col justify-center items-center text-center max-w-[420px] mx-auto">
        <h1 className="font-bold text-[21px] sm:text-[38px] text-primary-900">
          Email terkirim
        </h1>
        <p className="text-xs text-primary-900">
          Kami telah mengirimkan email berisi link untuk mengganti password.
        </p>
        <p className="text-xs text-primary-900">
          <span className="text-secondary-500 font-bold">
            Silakan periksa inbox atau spam folder
          </span>{" "}
          dari email kamu.{" "}
        </p>
      </div>
    </>
  );
};

export default EmailSent;
