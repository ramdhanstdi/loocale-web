import React from "react";
import SearchIcon from "@icons/search_icon.svg";

interface SearchBarProps {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}
const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="rounded-full flex items-center bg-white">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "py-2 px-7 border-r border-r-primary-500 rounded-tl-full rounded-bl-full outline-none"
        }
      />
      <div className="px-5">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
