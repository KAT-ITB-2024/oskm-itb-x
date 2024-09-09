"use client";

import React from "react";
import Image from "next/image";

interface SearchBarProps {
  onSearch: () => void;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar(props: SearchBarProps) {
  const { onSearch, onChange } = props;

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative flex w-full gap-1 px-5">
      <div
        id="search"
        className="flex grow items-center justify-center gap-2 rounded-[8px] bg-white"
      >
        <input
          type="text"
          placeholder="Cari Lembaga..."
          className="w-full bg-transparent px-6 py-3 pr-2 text-[16px] focus:outline-none"
          onChange={onTextChange}
        />
        <Image
          src="/itb-x/search.svg"
          alt="search"
          width={24}
          height={24}
          className="mr-4"
          onClick={() => onSearch()}
        />
      </div>
    </div>
  );
}

export default SearchBar;
