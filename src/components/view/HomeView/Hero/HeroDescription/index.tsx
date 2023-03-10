import React from "react";
import Image from "next/image";

const HeroDescription = () => {
  return (
    <div className="flex flex-col text-white items-start pb-12 sm:pt-14 sm:mb-0">
      <p className="sm:mb-8 mb-3 font-light">
        Loocale merupakan social networking service berbasis digital untuk
        traveler yang ingin menemukan pengalaman wisata baru yang menarik dan
        berinteraksi dengan Warga Lokal
      </p>
      {/*<div className="text-center mx-auto sm:text-start sm:mx-0">
        <p className="mb-2">
          Download <span className="font-bold">Loocale</span> di
        </p>
        <Image
          src="/google-download.svg"
          alt="Download from google play store"
          width={163}
          height={48}
        ></Image>
      </div>*/}
    </div>
  );
};

export default HeroDescription;
