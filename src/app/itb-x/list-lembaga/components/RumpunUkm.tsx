"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import Pagination from "./Pagination";
import { type UKM } from "../../data/data_lembaga";

interface RumpunUkmProps {
  nama_rumpun: string;
  data: UKM[];
}

function RumpunUkm(props: RumpunUkmProps) {
  const { nama_rumpun, data } = props;
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const pageRangeDisplayed = 1;
  const router = useRouter();
  if (
    ![
      "agama",
      "pendidikan",
      "kajian",
      "media",
      "olahraga-kesehatan",
      "seni-budaya",
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

  let title = "";
  switch (nama_rumpun) {
    case "agama":
      title = "Agama";
      break;
    case "pendidikan":
      title = "Pendidikan";
      break;
    case "kajian":
      title = "Kajian";
      break;
    case "media":
      title = "Media";
      break;
    case "olahraga-kesehatan":
      title = "Olahraga & Kesehatan";
      break;
    case "seni-budaya":
      title = "Seni Budaya";
      break;
  }

  return (
    <div className="flex flex-col items-center">
      <p className="my-4 text-center text-[32px] leading-[28px] text-[#0010A4] md:my-6 lg:my-8 lg:text-[60px]">
        {title}
      </p>
      <div className="mt-5 grid w-[90%] grid-cols-1 gap-y-10 md:mt-8 md:grid-cols-2 lg:mt-10 lg:w-[95%] lg:grid-cols-3">
        {currentItems.map((data_ukm, index) => (
          <Card
            key={index}
            nama={data_ukm.nama_lembaga}
            logo_path={
              data_ukm.logo_lembaga ? data_ukm.logo_lembaga : undefined
            }
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
