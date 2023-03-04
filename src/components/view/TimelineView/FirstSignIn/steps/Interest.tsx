import React, { useEffect, useState } from "react";
import Card from "@components/view/HomeView/CommunityHome/Card";
import axios from "axios";
import { BE_URL } from "Config";
import { CommunityListInterface } from "src/models/Home";
import Button from "@components/design/Button";
import request from "src/services/request";

interface InterestProps {
  setStep: (args: number) => void;
  chosenInterest: CommunityListInterface[];
  setChosenInterest: (args: CommunityListInterface[]) => void;
}
const Interest: React.FC<InterestProps> = ({ chosenInterest, setChosenInterest, ...props }) => {
  const [interestList, setInterestList] = useState<CommunityListInterface[] | []>([]);

  const hasInterestBeenChosen = (
    interest: CommunityListInterface,
    array: CommunityListInterface[]
  ) => {
    let isInterestClicked = false;
    let index = -1;
    for (let i = 0; i < array.length; i++) {
      if (interest.id === array[i].id) {
        isInterestClicked = true;
        index = i;
      }
    }
    return { isInterestClicked, index };
  };

  const handleClickInterest = (interest: CommunityListInterface) => {
    const arr = [...chosenInterest];
    const { isInterestClicked, index } = hasInterestBeenChosen(interest, arr);
    if (isInterestClicked) {
      arr.splice(index, 1);
    } else {
      if (arr.length < 5) {
        arr.push(interest);
      }
    }
    setChosenInterest(arr);
  };

	const getCursorStyle = (interest: CommunityListInterface) => {
		if (chosenInterest.length === 5) {
			if (!chosenInterest.find((currentInterest) => currentInterest.id === interest.id)) {
				return "hover:cursor-not-allowed"
			}
		}
		return "hover:cursor-pointer"
	}

  useEffect(() => {
    request.get(BE_URL + "/connect").then((res) => {
      setInterestList(res.data);
    });
  }, []);
  return (
    <div className="mt-[56px] text-center text-primary-900">
      <h1 className="text-[28px] font-bold mb-2 leading-9">Pilih hal yang kamu sukai</h1>
      <p className="text-sm font-light mb-6">Silakan pilih hingga 5 kategori favorit</p>
      <div className="flex gap-4 flex-wrap max-h-[200px] overflow-y-scroll scrollbar-hide justify-start">
        {interestList.length ? (
          interestList.map((interest) => (
            <div
              className={`rounded-lg ${getCursorStyle(interest)} ${
                hasInterestBeenChosen(interest, chosenInterest).isInterestClicked
                  ? "border-2 border-secondary-500"
                  : ""
              }`}
              key={interest.id}
            >
              <Card
                background={interest.background}
                title={interest.title}
                width={"116px"}
                fontSize="16px"
                active={hasInterestBeenChosen(interest, chosenInterest).isInterestClicked}
                height="78px"
                borderRadius="8px"
                className="border-2 border-white"
                onClick={() => handleClickInterest(interest)}
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <Button
        variant="contained"
        onClick={() => {
          props.setStep(3);
        }}
        className={"w-full font-bold rounded-full py-3 mt-3"}
        disabled={chosenInterest.length < 3}
      >
        Selanjutnya
      </Button>
    </div>
  );
};

export default Interest;
