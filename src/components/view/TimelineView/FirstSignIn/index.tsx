import React, { useEffect, useState } from "react";
import { CommunityListInterface } from "src/models/Home";
import FirstSignInDialog from "./FirstSignInDialog";
import Bio from "./steps/Bio";
import Dialog from "@components/design/Dialog";
import Interest from "./steps/Interest";
import Location from "./steps/Location";
import Image from "next/image";
import axios from "axios";
import { BE_URL } from "Config";
import request from "src/services/request";
import { useQueryClient } from "@tanstack/react-query";

const FirstSignIn = () => {
	const queryClient = useQueryClient();
  const [step, setStep] = useState(1);
  const province = useState("");
  const city = useState("");
  const [chosenInterest, setChosenInterest] = useState<
    CommunityListInterface[]
  >([]);
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [hasPostProfile, setHasPostProfile] = useState(false);

  useEffect(() => {
    if (step === 4) {
      const data = new FormData();
      //@ts-ignore
			if (profileImage) {
				data.append("profileImage", profileImage);
			}
      data.append("province", province[0]);
      data.append("city", city[0]);
      for (let i = 0; i < chosenInterest.length; i++) {
				data.append(`connectId[${i}]`, chosenInterest[i].id.toString())
			}

      request
        .post(BE_URL + "/userprofiles", data)
        .then(() => {
          setHasPostProfile(true);
					queryClient.invalidateQueries(["getUser"])
        })
        .catch((err) => console.error(err));
    }
  }, [step]);

  return (
    <>
      {step !== 4 ? (
        <FirstSignInDialog step={step} setStep={setStep}>
          {step === 1 ? (
            <Location setStep={setStep} province={province} city={city} />
          ) : step === 2 ? (
            <Interest
              setStep={setStep}
              chosenInterest={chosenInterest}
              setChosenInterest={setChosenInterest}
            />
          ) : step === 3 ? (
            <Bio
              setBio={setBio}
              bio={bio}
              setProfileImage={setProfileImage}
              setStep={setStep}
            />
          ) : (
            <></>
          )}
        </FirstSignInDialog>
      ) : !hasPostProfile ? (
        <Dialog
          open={true}
          maxWidth={"sm"}
          className="px-11 pt-7 pb-8 relative text-center flex flex-col items-center justify-center h-[480px]"
        >
          <h1 className="font-bold text-[28px] text-primary-900">
            Terima kasih!
          </h1>
          <p className="font-light text-xs text-primary-900 mb-6">
            Sesaat lagi kamu akan tiba di home Loocale
          </p>
          <div className="mb-[74px]">
            <Image
              src={"/loocale-mini-logo.png"}
              width={152}
              height={108}
              alt={"loocale-logo"}
            />
          </div>
          <p className="font-light text-xs text-primary-900">
            Sedang memuat...
          </p>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};

export default FirstSignIn;
