import React, { useEffect, useState } from "react";
import Image from "next/image";
import EyeIcon from "@icons/eye_icon.svg";
import CrossedEyeIcon from "@icons/eye_crossed_icon.svg";
import ValidIcon from "@icons/valid_icon.svg";
import NotValidIcon from "@icons/not_valid_icon.svg";

interface Props {
  className?: string;
  value?: any;
  variant?: string;
  placeholder?: string;
  name?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: () => void;
  autofocus?: boolean;
  validation?: () => Promise<boolean>;
  type?: string;
  error?: boolean;
  errorMessage?: string;
  pattern?: string;
  required?: boolean;
	label?: string;
}
const TextField: React.FC<Props> = (props) => {
  const [error, setError] = useState(props.error ? props.error : false);
  const [valid, setValid] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (props.error !== undefined) {
      setError(props.error);
    }
  }, [props.error]);
  return (
    <div className={`${props.className ? props.className : ""} relative`}>
			{(props.label && props.variant == "outlined") ? (
				<p className="text-xs font-bold px-1 text-primary-900 text-left">{props.label}</p>
			) : (
				<></>
			)}
      <input
        type={
          props.type
            ? props.type === "password" && !passwordVisible
              ? props.type
              : "text"
            : "text"
        }
        className={`w-full ${
          props.variant === "outlined"
            ? "focus:outline-0 border-b-2 pl-1 pr-4 border-secondary-500 placeholder:text-xs"
            : `bg-grayscale-50 rounded-md px-3 h-[44px] sm:h-[48px] outline-0 sm:placeholder:text-base placeholder:text-xs text-xs sm:text-base ${
                props.value ? "pb-3 pt-5" : ""
              } transition-all ${error ? "border-[#DC2A2D] border" : ""}`
        }`}
        value={props.value}
        name={props.name ? props.name : "TextField"}
        placeholder={props.placeholder ? props.placeholder : ""}
        onChange={props.onChange}
        maxLength={props.maxLength}
        onFocus={() => {
          setError(false);
          setValid(false);
        }}
        onBlur={async () => {
          if (props.onBlur && props.validation) {
            props.onBlur();
            const isValid = await props.validation();
            setValid(isValid);
            setError(!isValid);
          } else if (props.onBlur) {
            props.onBlur();
          } else if (props.validation) {
            const isValid = await props.validation();
            setValid(isValid);
            setError(!isValid);
          }
        }}
        required={props.required}
        autoFocus={props.autofocus}
        //pattern={props.pattern}
      />
      {/* PLACEHOLDER AND MAX LENGTH ON TOP OF TEXT FIELD WHEN TEXT FIELD IS BEING INPUTTED */}
      {props.variant === "contained" && props.value.toString().length ? (
        <div className="absolute top-1 left-3 right-3  flex justify-between">
          <p className="font-light text-[9px]">{props.placeholder}</p>
          <p className="font-light text-[9px]">
            {props.maxLength
              ? `${props.value.toString().length}/${props.maxLength}`
              : ""}
          </p>
        </div>
      ) : (
        <></>
      )}
			{/* MAX CHARACTERS LEFT IN INPUT FIELD */}
			{props.variant === "outlined" && props.maxLength ? (
				<p className={`font-light text-[9px] absolute ${props.label ? "top-6" : "top-0"} right-0`}>{props.maxLength - props.value.toString().length}</p>
			):(
				<></>
			)}
      {/* TOGGLE PASSWORD VISIBILITY */}
      {props.type === "password" ? (
        <div
          className={`absolute right-3 top-1/2 ${
            props.value ? "-translate-y-1/3" : "-translate-y-1/2"
          } hover:cursor-pointer`}
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <Image
              src={CrossedEyeIcon}
              width={18}
              height={13}
              alt="set password invisible"
            ></Image>
          ) : (
            <Image
              src={EyeIcon}
              width={18}
              height={13}
              alt="set password visible"
            ></Image>
          )}
        </div>
      ) : (
        <></>
      )}
      {/* VALID OR ERROR ICONS */}
      {valid ? (
        <div className={`absolute -right-7 top-1/2 -translate-y-1/3`}>
          <Image src={ValidIcon} width={16} height={16} alt="valid" />
        </div>
      ) : error ? (
        <div className={`absolute -right-7 top-1/2 -translate-y-1/3 group`}>
          <Image src={NotValidIcon} width={16} height={16} alt="not-valid" />
          {props.errorMessage ? (
            <p className="py-1 px-3 text-[9px] absolute -top-6 -left-6 rounded-lg hidden bg-white shadow-md whitespace-nowrap group-hover:block">
              {props.errorMessage}
            </p>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextField;
