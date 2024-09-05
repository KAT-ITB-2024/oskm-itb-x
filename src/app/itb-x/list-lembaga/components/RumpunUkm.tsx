"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import Pagination from "./Pagination";

interface RumpunUkmProps {
  nama_rumpun: string;
  data: {
    nama_lembaga: string;
    logoSrc?: string;
  }[];
}

function RumpunUkm(props: RumpunUkmProps) {
  const { nama_rumpun, data } = props;
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const pageRangeDisplayed = 1;
  const router = useRouter();
  if (
    ![
      "Agama",
      "Pendidikan",
      "Kajian",
      "Media",
      "OlahragaKesehatan",
      "SeniBudaya",
    ].includes(nama_rumpun)
  ) {
    router.push("/itb-x/list-lembaga/ukm");
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(5);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(9);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize handling
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (currentPage === page) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="my-4 text-center text-[32px] leading-[28px] text-[#0010A4] md:my-6 lg:my-8 lg:text-[60px]">
        {nama_rumpun === "OlahragaKesehatan"
          ? "Olahraga & Kesehatan"
          : nama_rumpun === "SeniBudaya"
            ? "Seni Budaya"
            : nama_rumpun}
      </p>
      <div className="mt-5 grid w-[90%] grid-cols-1 gap-y-10 md:mt-8 md:grid-cols-2 lg:mt-10 lg:w-[95%] lg:grid-cols-3">
        {currentItems.map((data_ukm, index) => (
          <Card
            key={index}
            nama={data_ukm.nama_lembaga}
            logo_path={data_ukm.logoSrc ? data_ukm.logoSrc : undefined}
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
    </div>
  );
}

export default RumpunUkm;
