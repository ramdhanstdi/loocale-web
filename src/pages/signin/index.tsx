import React from "react";
import Navbar from "@components/layout/Navbar";
import Image from "next/image";
import Head from "next/head";
import Form from "../../components/view/SignInView/Form";
import { useRouter } from "next/router";
import GoogleSSO from "@components/GoogleSSO";

const SignInPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sign In &#8226; Loocale</title>
      </Head>
      <Navbar />
      <div className="flex h-screen w-screen">
        <div className="px-16 py-7 relative hidden flex-col justify-center w-1/2 bg-[url('/sign-up-bg.jpg')] bg-cover sm:flex">
				<div className="font-bold text-[90px] text-white w-full  leading-[96px]">
					<h1>
            #Jalan
          </h1>
					<h1>
            Kemana
          </h1>
					<h1>
            Aja
          </h1>
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
            Sign in
          </h1>
          <p className="text-xs text-primary-900">
            Mari menjelajah kembali bersama Loocale!
          </p>
          <Form></Form>
          <div className="flex gap-4 items-center justify-center mb-6 mt-8 w-[260px]">
            <hr className="w-full" color="#678190" />
            <p className="text-[14px] text-[#678190]">atau</p>
            <hr className="w-full" color="#678190" />
          </div>
          <GoogleSSO
            variant="login"
            callback={() => {
              router.push("/feed");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
