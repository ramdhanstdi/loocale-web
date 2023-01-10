import React, { useState } from "react";
import Navbar from "@components/layout/Navbar";
import Image from "next/image";
import Head from "next/head";
import Form from "./Form";

const ResetPassword = () => {

  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <Navbar />
      <div className="flex h-screen w-screen">
        <div className="px-16 py-7 relative hidden flex-col justify-center w-1/2 bg-[url('/sign-up-bg.jpg')] bg-cover sm:flex">
          <div className="font-bold text-[90px] text-white w-full  leading-[96px]">
            <h1>#Jalan</h1>
            <h1>Kemana</h1>
            <h1>Aja</h1>
          </div>
          <div className="absolute bottom-[29px]">
            <Image
              src="/loocale_vertical_logo.png"
              alt="Loocale Logo"
              width={125}
              height={102}
              layout="fixed"
            />
          </div>
        </div>
        <div className="flex grow flex-col justify-center items-center text-center">
          <h1 className="font-bold text-[21px] sm:text-[38px] text-primary-900">
            Reset Password
          </h1>
          <Form></Form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
