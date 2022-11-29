import React, { useState } from "react";
import KeyboardArrowDownIcon from "@icons/keyboard_arrow_down_icon.svg";
import Image from "next/image";

interface SelectProps {
  variant?: "outlined" | "contained";
  value?: string;
  option: any[];
  placeholder?: string;
  className?: string;
  onClick?: VoidFunction;
  onSelect?: (args?: any) => void;
}
const Select: React.FC<SelectProps> = (props) => {
  const [openOptionList, setOpenOptionList] = useState(false);
	console.log('value', props.value)
  const handleClickInput = () => {
    setOpenOptionList(!openOptionList);
    if (props.onClick) {
      props.onClick();
    }
  };

  const handleSelectOption = (option: any) => {
    if (props.onSelect) {
      props.onSelect(option);
    }
    setOpenOptionList(false);
  };
  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center py-2 px-3 relative border border-primary-900 rounded-lg ${props.className}`}
        onClick={handleClickInput}
      >
        <input
          type="text"
          placeholder={props.placeholder}
          className={"pl-3 focus:outline-none"}
          readOnly
					value={props.value}
        />
        <Image
          src={KeyboardArrowDownIcon}
          alt="open select"
          width={24}
          height={24}
        />
      </div>
      {openOptionList ? (
        <div className="py-2 absolute w-full bg-white rounded-lg text-left shadow-xl z-20">
          {props.option.map((option) => (
            <div
              key={option.label}
              onClick={() => handleSelectOption(option)}
              className="py-2 px-4 hover:bg-gray-200"
            >
              <p className="">{option.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Select;
