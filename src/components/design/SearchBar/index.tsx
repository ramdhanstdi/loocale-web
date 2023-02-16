import React from "react";
import SearchIcon from "@icons/search_icon.svg";

interface SearchBarProps {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
	onClick?: () => void
}
const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
	onClick,
}) => {
  return (
    <div className="rounded-full flex items-center bg-white sm:w-[420px] border border-primary-800 text-xs">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "py-2 px-7 border-r border-r-primary-500 rounded-tl-full rounded-bl-full outline-none w-full placeholder:italic"
        }
      />
      <div className="px-5" onClick={onClick}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
