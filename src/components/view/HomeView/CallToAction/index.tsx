import React from "react";
import Image from "next/image";
import Button from "@components/design/Button";
import { useRouter } from "next/router";

const CallToAction = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-primary-900">
      <div className=" flex mx-auto">
        <div className="w-[30%] relative hidden sm:block">
          <Image src={"/cta-home.png"} alt="Bike riding" layout="fill" className="object-cover" />
        </div>
        <div className="flex flex-col px-9 pt-12 pb-16">
          <h1 className="text-[38px] sm:text-[50px] font-bold text-white mb-4 sm:mb-2">
            Temukan Destinasi Baru di Loocale
          </h1>
          <p className="hidden sm:block text-[21px] text-white mb-10">
            Gabung bersama kami dan mulai perjalananmu
          </p>
          <Button
            variant="contained"
            onClick={() => {
              router.push("/signup");
            }}
            className="px-2 py-2 rounded-lg w-[200px]"
          >
            Mulai Menjelajah &gt;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
