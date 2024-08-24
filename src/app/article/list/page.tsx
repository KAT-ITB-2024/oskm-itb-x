"use client";

import { useEffect, useState } from "react";
import SearchBar from "src/app/article/list/SearchBar";
import Card from "../components/Card";
import { getAllArticles } from "~/lib/contentful/api";
import { Article } from "~/types/articles/articleType";
import BgImages2 from "../components/BgImages2";

export default function Page() {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  const articlesPerPagePC = 16;
  const articlesPerPageMobile = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
      ? articlesPerPageMobile
      : articlesPerPagePC,
  );

  useEffect(() => {
    getAllArticles({})
      .then((articles) => {
        setFilteredArticles(articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setArticlesPerPage(
        window.innerWidth <= 768 ? articlesPerPageMobile : articlesPerPagePC,
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageNumbers: number[] = [];
  if (filteredArticles) {
    for (
      let i = 1;
      i <= Math.ceil(filteredArticles.length / articlesPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
  }

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => (
    <div className="pagination">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
      >
        {"<"}
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={`pagination-button ${number === currentPage ? "active" : ""}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className={`pagination-button ${currentPage === pageNumbers.length ? "disabled" : ""}`}
      >
        {">"}
      </button>
    </div>
  );

  return (
    <div className="pagetsx-article-background">
      <BgImages2/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href="/article">
        <button className="prev-button"></button>
      </a>
      <div style={{ marginLeft: "40px" }}>
        <h2>List of Articles</h2>
      </div>

      <SearchBar setFilteredArticles={setFilteredArticles} />

      <div className="mini-card-container">
        {filteredArticles && filteredArticles.length > 0 ? (
          filteredArticles.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              createdAt={card.createdAt}
              author={card.author}
              views={card.views}
              likes={card.likes}
              readTime={card.readTime}
              description={card.description}
              image={card.image.url}
            />
          ))
        ) : (
          <div className="no-articles-found">
            <img
              src="/article-icons/Search_Not_Found.png"
              alt="No articles found"
            />
          </div>
        )}
        {renderPagination()}
      </div>

      {/*Div ini untuk background yang ada Figma ya Ko :D */}
      <div className="pagetsx-downregion">
        {" "}
        {/* Downregion */}
        <img
          className="bottom-left-image"
          src="/article-icons/coral-oren.png"
          alt="Coral Oren"
        />
        <img
          className="bottom-right-image"
          src="/article-icons/Coral.png"
          alt="Coral"
        />
        <img
          className="downleft-coral-pensu"
          src="/article-icons/Coral-Pensu.png"
          alt="Coral Pensu"
        />
      </div>
    </div>
  );
}
