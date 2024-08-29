"use client";

import { useEffect, useState } from "react";
import SearchBar from "src/app/article/list/SearchBar";
import Card from "../components/Card";
import { getAllArticles } from "~/lib/contentful/api";
import { Article } from "~/types/articles/articleType";
// import BgImages2 from "../components/BgImages2";

export default function Page() {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768 ? 4 : 16
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
        window.innerWidth <= 768 ? 4 : 16
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastCard = currentPage * articlesPerPage;
  const indexOfFirstCard = indexOfLastCard - articlesPerPage;
  const currentCards = filteredArticles.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

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
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleClick(index + 1)}
          className={`pagination-button ${index + 1 === currentPage ? "active" : ""}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
      >
        {">"}
      </button>
    </div>
  );

  return (
    <div className="pagetsx-article-background">
      {/* <BgImages2 /> */}
      <a href="/article" style={{ marginTop: "100px", marginLeft: "10px" }}>
        <button className="GoBackButton"></button>
      </a>
      <div style={{ marginLeft: "60px" }}>
        <h2>List of Articles</h2>
      </div>


      <SearchBar setFilteredArticles={setFilteredArticles} />

      <div className="card-container">
        {currentCards.length > 0 ? (
          currentCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              slug={card.slug}
              title={card.title}
              createdAt={card.createdAt}
              author={card.author}
              views={card.views}
              likes={card.likes}
              readTime={card.readTime}
              description={card.description}
              image={card.image}
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
      </div>

      {totalPages > 1 && renderPagination()}

      <div className="pagetsx-downregion">
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

      <style jsx>{`
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          max-width: 100%;
          margin: 0 auto;
        }

        .card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .card-container {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        @media (min-width: 769px) {
          .card-container {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          gap: 12px;
          padding-right: 20px;
        }

        .pagination-button {
          cursor: pointer;
          background-color: #EE1192;
          border-radius: 4px 0 0 0;
          width: 24px;
          height: 24px;
          padding: 0 8.5px;
          color: #000;
        }

        .pagination-button.active {
          background-color: #3678FF;
          color: #fff;
        }

        .pagination-button.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        .pagination-box {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
