import React from "react";
import PaginationButton from "./PaginationButton";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageRangeDisplayed: number;
}

function Pagination(props: PaginationProps) {
  const { currentPage, totalPages, onPageChange, pageRangeDisplayed } = props;

  const createPageNumbers = () => {
    const pages: (string | number)[] = [];
    pages.push(1);
    if (currentPage > pageRangeDisplayed + 2) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage - pageRangeDisplayed);
    const endPage = Math.min(totalPages - 1, currentPage + pageRangeDisplayed);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis before the last page if needed
    if (currentPage < totalPages - pageRangeDisplayed) {
      pages.push("...");
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handleButtonChangePage = (type: "prev" | "next") => {
    if (type === "prev") {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    } else {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    }
  };

  return (
    <div className="mx-8 flex gap-3">
      <PaginationButton
        type="prev"
        onClick={() => handleButtonChangePage("prev")}
      />
      {createPageNumbers().map((page, index) => {
        const elementType = typeof page === "number" ? "page_num" : "ellipsis";
        return (
          <PaginationButton
            key={index}
            type={elementType}
            onClick={
              elementType === "page_num"
                ? () => onPageChange(page as number)
                : undefined
            }
            page={elementType === "page_num" ? page : undefined}
            currentPage={currentPage}
          />
        );
      })}
      <PaginationButton
        type="next"
        onClick={() => handleButtonChangePage("next")}
      />
    </div>
  );
}

export default Pagination;
