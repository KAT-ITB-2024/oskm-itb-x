"use client";

import React, { useEffect, useState } from "react";
import type { HimpunanBSO } from "../data/data_lembaga";
import Card from "./Card";
import Pagination from "./Pagination";
import Image from "next/image";

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
  }, []);

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
      {currentItems.length > 0 && (
        <>
          <div
            className={`grid w-full grid-cols-1 grid-rows-2 ${currentItems.length > 3 ? "lg:grid-rows-2" : "lg:grid-rows-1"} justify-center gap-6 md:grid-cols-2 md:gap-x-[50px] lg:grid-cols-3 lg:justify-between lg:gap-x-2 lg:gap-y-16`}
          >
            {currentItems.map((himpunan, index) => (
              <Card
                key={index}
                nama={himpunan.nama}
                logo_path={himpunan.logoPath ? himpunan.logoPath : undefined}
              />
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
        </>
      )}
      {currentItems.length <= 0 && (
        <div className="flex flex-col items-center gap-6 pb-10 md:gap-8 lg:gap-10">
          <Image
            src="/itb-x/search_not_found.png"
            width={320}
            height={320}
            alt="Not Found"
            className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] lg:h-[320px] lg:w-[320px]"
          />
          <p className="text-center font-mogula text-[32px] leading-[38px] text-[#FFFEFE] drop-shadow-[4px_4px_20px_0_#64B1F7BF] md:text-[48px] lg:mb-1 lg:text-[60px]">
            Pencarian Tidak Ditemukan...
          </p>
          <p className="w-[90%] text-justify font-rem text-[16px] leading-6 tracking-wider text-[#FFFEFE] md:w-[70%] md:text-center md:text-[20px] lg:w-[50%] lg:text-[24px]">
            Oh tidak... Tampaknya kamu mencari sesuatu yang tersembunyi di
            kedalaman. Cobalah kata kunci lain atau kembali ke permukaan untuk
            melanjutkan pencarianmu!
          </p>
        </div>
      )}
    </div>
  );
}

export default ListHimpunanBSO;
