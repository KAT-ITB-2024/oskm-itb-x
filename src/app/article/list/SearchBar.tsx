"use client";

import React, { useState, useEffect } from "react";
// import articleData from './article-datas';
import Card from "../components/Card";
import Image from "next/image";
import { getAllArticles } from "~/lib/contentful/api";
import { useArticles } from "../data/articles";

interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  dateTime: Date;
  views: number;
  likes: number;
  readTime: number;
  image: string;
}

// interface Article {
//   id: number;
//   title: string;
//   date: string;
//   time: string;
//   author: string;
//   views: number;
//   readTime: string;
//   description: string;
//   image: string;
//   buttonlink: string;
//   selected?: boolean;
// }

const SearchBar: React.FC = () => {
  const articleData = useArticles();
  // const [filteredArticles, setFilteredArticles] = useState<Article[]>(articleData);
  const [filteredArticles, setFilteredArticles] =
    useState<Article[]>(articleData);
  const [found, setFound] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Set articlesPerPage based on screen size
  const articlesPerPagePC = 16; // 4 columns * 4 rows on PC
  const articlesPerPageMobile = 4; // 1 column * 4 rows on mobile

  const [articlesPerPage, setArticlesPerPage] = useState(articlesPerPagePC);

  useEffect(() => {
    console.log(articleData);
  }, [articleData]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setArticlesPerPage(articlesPerPageMobile);
      } else {
        setArticlesPerPage(articlesPerPagePC);
      }

      const cardContainer = document.querySelector(
        ".mini-card-container",
      ) as HTMLElement;
      const card = document.querySelector(".card") as HTMLElement;

      if (cardContainer) {
        const isMobile = window.innerWidth <= 768;
        cardContainer.style.gridTemplateColumns = isMobile
          ? "1fr"
          : "repeat(4, 1fr)";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilter = (filterType: string) => {
    let sortedArticles: Article[] = [];

    // switch (filterType) {
    //   case "Terbaru":
    //     sortedArticles = [...articleData].sort((a, b) => b.id - a.id);
    //     break;
    //   case "Rekomendasi":
    //     sortedArticles = articleData.filter((article) => article.selected);
    //     break;
    //   case "A-Z":
    //     sortedArticles = [...articleData].sort((a, b) =>
    //       a.title.localeCompare(b.title),
    //     );
    //     break;
    //   case "Z-A":
    //     sortedArticles = [...articleData].sort((a, b) =>
    //       b.title.localeCompare(a.title),
    //     );
    //     break;
    //   default:
    //     sortedArticles = articleData;
    // }

    setFilteredArticles(sortedArticles);
    setFound(sortedArticles.length > 0);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const renderArticles = () => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(
      indexOfFirstArticle,
      indexOfLastArticle,
    );

    return (
      <div
        className="mini-card-container"
        style={{
          overflow: "hidden",
          padding: "10px",
          position: "relative",
          display: "grid",
          gap: "10px",
          marginTop: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          gridTemplateColumns:
            window.innerWidth <= 768 ? "1fr" : "repeat(4, 1fr)", // 1 column on mobile, 4 columns on PC
          gridTemplateRows:
            window.innerWidth <= 768
              ? "repeat(4, minmax(0, 1fr))"
              : "repeat(4, minmax(0, 1fr))", // 4 rows on mobile
        }}
      >
        {currentArticles.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            dateTime={card.dateTime}
            // date={card.date}
            // time={card.time}
            author={card.author}
            views={card.views}
            likes={card.likes}
            readTime={card.readTime}
            description={card.description}
            image={card.image}
            // buttonlink={card.buttonlink}
          />
        ))}
      </div>
    );
  };

  const pageNumbers: number[] = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredArticles.length / articlesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => (
    <div
      className="pagination"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        gap: "12px",
        paddingRight: "20px",
      }}
    >
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          backgroundColor: "#EE1192",
          borderRadius: "4px 0px 0px 0px",
          width: "24px",
          height: "24px",
          padding: "0px 8.5px",
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        {"<"}
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          style={{
            cursor: "pointer",
            backgroundColor: number === currentPage ? "#3678FF" : "#EE1192",
            color: number === currentPage ? "#fff" : "#000",
            borderRadius: "4px 0px 0px 0px",
            width: "24px",
            height: "24px",
            padding: "0px 8.5px",
            opacity: 1,
          }}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        style={{
          cursor:
            currentPage === pageNumbers.length ? "not-allowed" : "pointer",
          backgroundColor: "#EE1192",
          borderRadius: "4px 0px 0px 0px",
          width: "24px",
          height: "24px",
          padding: "0px 8.5px",
          opacity: currentPage === pageNumbers.length ? 0.5 : 1,
        }}
      >
        {">"}
      </button>
    </div>
  );

  return (
    <div style={{ justifyContent: "center", padding: "10px" }}>
      <div
        className="search-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          className="search-input-container"
          style={{
            width: "100%",
            height: "48px",
            padding: "12px 24px",
            gap: "16px",
            borderRadius: "8px",
            position: "relative",
            flex: 1,
            backgroundColor: "#F3F4F6",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <input
            type="text"
            placeholder="Cari artikel berdasarkan judul atau penulis disini..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#000",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          />
        </div>

        <div
          className="sort-select-container"
          style={{
            paddingLeft: "8px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            position: "relative",
            gap: "8px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "48px", // Reduced width to only show the icon
              overflow: "hidden", // Hide overflow
            }}
          >
            <select
              id="filterSelect"
              value={filter}
              onChange={(e) => {
                const selectedFilter = e.target.value;
                if (selectedFilter !== "") {
                  setFilter(selectedFilter);
                  handleFilter(selectedFilter);
                }
              }}
              style={{
                cursor: "pointer",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#F3F4F6",
                color: "#000",
                fontSize: "16px",
                width: "100%",
                paddingLeft: "40px",
                boxSizing: "border-box",
                appearance: "none",
                whiteSpace: "nowrap", // Prevent wrapping
                overflow: "hidden", // Ensure the dropdown content is clipped
                textOverflow: "ellipsis", // Add ellipsis when dropdown content overflows
              }}
            >
              <option value="" disabled hidden>
                Urutkan Berdasarkan
              </option>
              <option value="Terbaru">Terbaru</option>
              <option value="Rekomendasi">Rekomendasi</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/article-icons/filter_alt.png"
                alt="Filter"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>

      {found ? (
        <RenderArticle filteredArticles={filteredArticles} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <img
            src="/article-icons/Search_Not_Found.png"
            alt="No articles found"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
