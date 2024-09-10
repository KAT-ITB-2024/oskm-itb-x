"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
// import { hmps } from "../data/data_lembaga";
import { hmps } from "../../data/data_lembaga";
import ListHimpunanBSO from "../components/ListHimpunanBSO";
import { slugify } from "~/lib/slugify";
import dynamic from "next/dynamic";

const SliderContainer = dynamic(() => import("../components/SliderContainer"), {
  ssr: false,
});

function HmpsBso() {
  const [filteredData, setFilteredData] = useState(hmps);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQ, setSearchQ] = useState("");

  const filterData = (searchQ: string) => {
    return hmps.filter((himpunan) => {
      const matchesSearch = searchQ
        ? himpunan.nama_lembaga.toLowerCase().includes(searchQ.toLowerCase())
        : true;
      return matchesSearch;
    });
  };

  const filterDataWithoutParams = () => {
    return filterData(searchQ);
  };

  useEffect(() => {
    const data = filterData(searchQ);
    setFilteredData(data);
    if (currentPage > Math.ceil(data.length / 6)) {
      setCurrentPage(1);
    }
  }, [searchQ, currentPage]);

  const hmpsDataWithoutKM = hmps.slice(0, hmps.length - 1);

  const tempData = hmpsDataWithoutKM
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map((himpunan) => {
      return {
        name: himpunan.nama_lembaga,
        fakultas: himpunan.fakultas,
        photoPath: himpunan.foto_kegiatan[0],
        link: `/itb-x/detail/${slugify(himpunan.nama_lembaga)}`,
      };
    });

  return (
    <div className="z-[10] mx-5 flex flex-col items-center">
      <SliderContainer data={tempData} />
      <div className="mt-6 w-[85vw]">
        <SearchBar onSearch={filterDataWithoutParams} onChange={setSearchQ} />
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
