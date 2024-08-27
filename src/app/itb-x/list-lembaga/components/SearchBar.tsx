"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import FakultasSelector from "./FakultasSelector";

interface SearchBarProps {
  onSearch: () => void;
  fakultasList: string[];
  selectedFakultas: string[];
  setSelectedFakultas: (fakultas: string[]) => void;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar(props: SearchBarProps) {
  const { onSearch, setSelectedFakultas, onChange, selectedFakultas } = props;
  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = useCallback(
    (fakultas: string[]) => {
      setSelectedFakultas(fakultas);
    },
    [setSelectedFakultas],
  );

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
      <div
        id="filter"
        className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-white lg:min-w-[200px] lg:max-w-[300px] lg:justify-normal lg:ease-in-out lg:hover:bg-gray-100"
        onClick={() => setShowFilter(!showFilter)}
      >
        <Image
          src="/itb-x/filter-button.svg"
          alt="filter"
          width={16}
          height={16}
          className="cursor-pointer lg:hidden"
        />
        <div className="hidden justify-between gap-x-6 lg:flex lg:w-full lg:cursor-pointer lg:px-4 lg:py-1">
          <div className="flex items-center gap-x-3">
            <p className="text-[#a5acb7] opacity-70">Filter</p>
            {selectedFakultas.length > 0 && (
              <p className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#a5acb7] text-[13px]">
                {selectedFakultas.length}
              </p>
            )}
          </div>
          <Image
            src="/itb-x/dropdown_arrow.svg"
            alt="Dropdown arrow"
            width={16}
            height={16}
          />
        </div>
      </div>
      {showFilter && (
        <FakultasSelector
          fakultasList={props.fakultasList}
          selectedFakultas={props.selectedFakultas}
          handleFilterClick={handleFilterClick}
        />
      )}
    </div>
  );
}

export default SearchBar;
