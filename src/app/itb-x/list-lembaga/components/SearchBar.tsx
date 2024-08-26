"use client";

import React, { useState } from "react";
import Image from "next/image";
import FakultasSelector from "./FakultasSelector";

interface SearchBarProps {
  onSearch: (query: string) => void;
  fakultasList: string[];
  selectedFakultas: string[];
  setSelectedFakultas: (fakultas: string[]) => void;
}

function SearchBar(props: SearchBarProps) {
  const { onSearch, setSelectedFakultas } = props;
  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = (fakultas: string[]) => {
    setSelectedFakultas(fakultas);
    setShowFilter(false);
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
          onChange={(e) => setQuery(e.target.value)}
        />
        <Image
          src="/itb-x/search.svg"
          alt="search"
          width={24}
          height={24}
          className="mr-4"
          onClick={() => onSearch(query)}
        />
      </div>
      <div
        id="filter"
        className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-white"
        onClick={() => setShowFilter(!showFilter)}
      >
        <Image
          src="/itb-x/filter-button.svg"
          alt="filter"
          width={16}
          height={16}
        />
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
