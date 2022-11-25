import React, { useState } from "react";
import Navbar from "@components/layout/Navbar";
import Image from "next/image";
import Head from "next/head";
import SignUpOption from "./SignUpOption";
import InsertVerifCode from "./InsertVerifCode";
import NewAccountForm from "./NewAccountForm";

const SignUpPage = () => {
  const [hasEmailBeenInputted, setHasEmailBeenInputted] = useState(false);
  const [hasUserVerifyEmail, setHasUserVerifyEmail] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <Head>
        <title>Sign Up &#8226; Loocale</title>
      </Head>
      <Navbar />
      <div className="flex h-screen w-screen">
        <div className="px-16 py-7 relative hidden flex-col justify-center w-1/2 bg-[url('/sign-up-bg.jpg')] bg-cover sm:flex">
          <h1 className="font-bold text-[90px] text-white w-full  leading-[96px]">
            #Jalan Kemana Aja
          </h1>
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
        {/*{hasEmailBeenInputted ? (
          <InsertVerifCode></InsertVerifCode>
        ) : (
          <SignUpOption setHasEmailBeenInputted={setHasEmailBeenInputted} />
        )}*/}
        {hasUserVerifyEmail ? (
          <NewAccountForm email={email}></NewAccountForm>
        ) : hasEmailBeenInputted ? (
          <InsertVerifCode
            setHasUserVerifyEmail={setHasUserVerifyEmail}
            email={email}
          />
        ) : (
          <SignUpOption
            email={email}
            setEmail={setEmail}
            setHasEmailBeenInputted={setHasEmailBeenInputted}
            setHasUserVerifyEmail={setHasUserVerifyEmail}
          ></SignUpOption>
        )}
      </div>
    </>
  );
};

export default SignUpPage;
