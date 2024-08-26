"use client";

import React, { useEffect, useState } from "react";
import type { HimpunanBSO } from "../data/data_lembaga";
import Card from "./Card";
import Pagination from "./Pagination";

function ListHimpunanBSO({
  daftar_himpunan,
  currentPage,
  setCurrentPage,
}: {
  daftar_himpunan: HimpunanBSO[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const pageRangeDisplayed = 1;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize handling
    return () => window.removeEventListener("resize", handleResize);
  }, [setCurrentPage]);

  // Pagination calculation
  const totalPages = Math.ceil(daftar_himpunan.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = daftar_himpunan.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (currentPage === page) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid w-full grid-cols-1 grid-rows-2 justify-center gap-6 md:grid-cols-2 md:gap-x-[50px] lg:grid-cols-3 lg:justify-between lg:gap-x-2 lg:gap-y-16 ">
        {currentItems.map((himpunan, index) => (
          <Card key={index} nama={himpunan.nama} />
        ))}
      </div>
      <div className="my-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageRangeDisplayed={pageRangeDisplayed}
        />
      </div>
    </div>
  );
}

export default ListHimpunanBSO;
