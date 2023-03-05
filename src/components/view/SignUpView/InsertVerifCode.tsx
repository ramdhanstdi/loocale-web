import React, { ChangeEvent, useState, useEffect, createRef } from "react";
import VerifCodeInput from "@components/design/VerifCodeInput";
import Button from "@components/design/Button";
import axios from "axios";
import { BE_URL } from "Config";

interface Props {
  email: string;
  setHasUserVerifyEmail: (args: boolean) => void;
}
const InsertVerifCode: React.FC<Props> = (props) => {
  const [letters, setLetters] = useState(() =>
    Array.from({ length: 6 }, () => "")
  );
  const [inputRefsArray, setInputRefsArray] = useState(() =>
    Array.from({ length: 6 }, () => createRef<HTMLInputElement>())
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (e: any, index: number) => {
    const { value } = e.target;
    setLetters((letters) =>
      letters.map((letter, letterIndex) =>
        letterIndex === index ? value : letter
      )
    );
    if (value !== "") {
      const nextIndex = currentIndex < 5 ? currentIndex + 1 : 5;
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      nextInput?.focus();
      nextInput?.select();
      setCurrentIndex(nextIndex);
    }
  };
  const handleBackspace = (index: number) => {
    if (letters[index] === "") {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      const prevInput = inputRefsArray?.[prevIndex]?.current;
      prevInput?.focus();
      prevInput?.select();
      setCurrentIndex(prevIndex);
    }
  };

  useEffect(() => {
    // focus the firs iput initially
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }
  }, []);

  return (
    <div className="flex grow flex-col justify-center items-center text-center">
      <h1 className="w-[240px] sm:w-[440px] font-bold text-[28px] leading-[36px] sm:text-[50px] sm:leading-[60px] text-primary-900">
        Selamat datang!
      </h1>
      <p className="w-[240px] sm:w-[440px] text-primary-900 mt-2 font-light">
        Silakan masukan kode verifikasi yang telah kami kirimkan ke email kamu
      </p>
      <div className="flex gap-3 max-w-[240px] sm:max-w-[261px] mt-10 mb-6">
        {inputRefsArray.map((ref, index) => (
          <VerifCodeInput
            key={index}
            innerRef={ref}
            onChange={(e) => {
              handleChange(e, index);
            }}
            value={letters[index]}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                handleBackspace(index);
              }
            }}
            onClick={(e) => {
              setCurrentIndex(index);
              e.target.select();
            }}
          />
        ))}
      </div>
      <Button
        variant="contained"
        className="w-[240px] sm:w-[261px] py-2 rounded-xl font-bold text-[21px]"
        onClick={async () => {
          axios
            .post(BE_URL + "/user/validate/otp", {
              email: props.email,
              OTP: Number(letters.join("")),
            })
            .then(() => {
              props.setHasUserVerifyEmail(true);
            })
            .catch((err) => {
              console.error(err);
            });
        }}
      >
        Verifikasi
      </Button>
      <p className="font-light mt-6">
        Tidak menerima email?{" "}
        <span
          className="underline hover:cursor-pointer"
          onClick={async () => {
            axios.post(BE_URL + "/user/resend/otp", {
              email: props.email,
            });
          }}
        >
          Kirim ulang
        </span>
      </p>
    </div>
  );
};

export default InsertVerifCode;
