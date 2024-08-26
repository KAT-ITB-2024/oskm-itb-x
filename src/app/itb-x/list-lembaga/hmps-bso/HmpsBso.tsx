"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { daftar_nama_hmps } from "../data/data_lembaga";
import ListHimpunanBSO from "../components/ListHimpunanBSO";

function HmpsBso() {
  const [filteredData, setFilteredData] = useState(daftar_nama_hmps);
  const [selectedFakultas, setSelectedFakultas] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (selectedFakultas.length === 0) {
      setFilteredData(daftar_nama_hmps);
    } else {
      setFilteredData(
        daftar_nama_hmps.filter((himpunan) =>
          selectedFakultas.includes(himpunan.fakultas),
        ),
      );
    }
    setCurrentPage(1);
  }, [selectedFakultas]);

  const handleSearch = (query: string) => {
    setFilteredData(
      filteredData.filter((himpunan) =>
        query
          ? himpunan.nama.toLowerCase().includes(query.toLowerCase())
          : true,
      ),
    );
  };

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

  return (
    <div className="z-[10] mx-5 flex flex-col items-center pt-24 md:pt-[110px] lg:pt-[120px]">
      <SearchBar
        onSearch={handleSearch}
        fakultasList={fakultasList}
        selectedFakultas={selectedFakultas}
        setSelectedFakultas={setSelectedFakultas}
      />
      <div className="mt-10 w-full">
        <ListHimpunanBSO
          daftar_himpunan={filteredData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default HmpsBso;
