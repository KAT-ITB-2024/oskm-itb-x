"use client";

import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { daftar_nama_hmps } from "../data/data_lembaga";
import ListHimpunanBSO from "../components/ListHimpunanBSO";
import SliderContainer from "../components/SliderContainer";

function HmpsBso() {
  const [filteredData, setFilteredData] = useState(daftar_nama_hmps);
  const [selectedFakultas, setSelectedFakultas] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQ, setSearchQ] = useState("");

  const filterData = (searchQ: string, selectedFakultas: string[]) => {
    return daftar_nama_hmps.filter((himpunan) => {
      const matchesFakultas =
        selectedFakultas.length === 0 ||
        selectedFakultas.includes(himpunan.fakultas);
      const matchesSearch = searchQ
        ? himpunan.nama.toLowerCase().includes(searchQ.toLowerCase())
        : true;
      return matchesFakultas && matchesSearch;
    });
  };

  const filterDataWithoutParams = () => {
    return filterData(searchQ, selectedFakultas);
  };

  useEffect(() => {
    const data = filterData(searchQ, selectedFakultas);
    setFilteredData(data);
    if (currentPage > Math.ceil(data.length / 6)) {
      setCurrentPage(1);
    }
  }, [searchQ, selectedFakultas, currentPage]);

  const fakultasList = [
    ...new Set(daftar_nama_hmps.map((himpunan) => himpunan.fakultas)),
  ];
  const fakultasMapStrNum = new Map<string, number>();
  const fakultasMapNumStr = new Map<number, string>();
  let count = 1;
  for (const himpunan of fakultasList) {
    if (!fakultasMapStrNum.has(himpunan)) {
      fakultasMapStrNum.set(himpunan, count);
      fakultasMapNumStr.set(count, himpunan);
      count++;
    }
  }

  const tempData = [
    {
      name: "HMIF ITB",
      fakultas: "STEI",
    },
    { name: "IMT ITB", fakultas: "STEI" },
    { name: "HIMATIKA ITB", fakultas: "FMIPA" },
    { name: 'HMTG "GEA" ITB', fakultas: "FITB" },
    { name: "HMS ITB", fakultas: "FTSL" },
  ];

  return (
    <div className="z-[10] mx-5 flex flex-col items-center">
      <SliderContainer data={tempData} />
      <div className="mt-6 w-[85vw]">
        <SearchBar
          onSearch={filterDataWithoutParams}
          fakultasList={fakultasList}
          selectedFakultas={selectedFakultas}
          setSelectedFakultas={setSelectedFakultas}
          onChange={setSearchQ}
        />
        <div className="mt-10 w-full">
          <ListHimpunanBSO
            daftar_himpunan={filteredData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default HmpsBso;
