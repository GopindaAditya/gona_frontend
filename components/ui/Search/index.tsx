"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search products...",
  onSearch,
  className = "",
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onSearch) onSearch(newValue);
  };

  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      <div
        className="
          flex w-full items-stretch rounded-lg h-12 
          bg-white dark:bg-gray-900/50 
          shadow-md hover:shadow-lg transition-shadow duration-200
        "
      >
        <div className="text-gray-500 flex items-center justify-center pl-4">
          <span className="material-symbols-outlined">search</span>
        </div>

        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="
            flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg
            text-text-light dark:text-text-dark 
            border-none bg-transparent
            h-full placeholder:text-gray-500 px-4 
            text-base font-normal leading-normal 
            focus:outline-none
          "
        />
      </div>
    </div>
  );
}
