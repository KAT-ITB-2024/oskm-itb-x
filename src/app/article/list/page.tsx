"use client";

import { useEffect, useState } from "react";
import SearchBar from "src/app/article/list/SearchBar";
import { useArticles } from "../data/articles";
import Card from "../components/Card";

interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: Date;
  views: number;
  likes: number;
  readTime: number;
  image: { url: string };
}

export default function Page() {
  const articleData = useArticles();
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
    setFilteredArticles(articleData);
  }, [articleData]);

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

      <SearchBar />

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
    </div>
  );
}
