import React from "react";
import Image from "next/image";

export interface PaginationButtonProps {
  currentPage?: number;
  type: "prev" | "next" | "page_num" | "ellipsis";
  onClick?: () => void;
  page?: number | string;
}

function PaginationButton(props: PaginationButtonProps) {
  const { currentPage, type, onClick, page } = props;
  return (
    <div
      className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[4px] bg-[#EE1192] ${currentPage && currentPage === page ? "border border-[#FFB4D3]" : ""}`}
      onClick={onClick}
    >
      {type === "prev" ? (
        <Image
          src="/itb-x/left-arrow-pagination.svg"
          alt="prev"
          width={10}
          height={10}
        />
      ) : type === "next" ? (
        <Image
          src="/itb-x/right-arrow-pagination.svg"
          alt="next"
          width={10}
          height={10}
        />
      ) : type === "page_num" ? (
        <p
          className={`font-mogula text-[16px] text-white ${currentPage === page ? "font-bold" : ""}`}
        >
          {page}
        </p>
      ) : (
        <p className="font-mogula text-[16px] text-white">...</p>
      )}
    </div>
  );
}

export default PaginationButton;
