"use client";

import React, { useState } from 'react';
import Card from '../components/Card';

interface Article {
  id: number;
  title: string;
  date: string;
  time: string;
  author: string;
  views: number;
  readTime: string;
  description: string;
  image: string;
  buttonlink: string;
}

interface RenderArticleProps {
  filteredArticles: Article[];
}

const RenderArticle: React.FC<RenderArticleProps> = ({ filteredArticles }) => {
  const articlesPerPagePC = 16;
  const articlesPerPageMobile = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768 ? articlesPerPageMobile : articlesPerPagePC
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredArticles.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => (
    <div className="pagination">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
      >
        {'<'}
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={`pagination-button ${number === currentPage ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className={`pagination-button ${currentPage === pageNumbers.length ? 'disabled' : ''}`}
      >
        {'>'}
      </button>
    </div>
  );

  return (
    <div className="mini-card-container">
      {currentArticles.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          date={card.date}
          time={card.time}
          author={card.author}
          views={card.views}
          readTime={card.readTime}
          description={card.description}
          image={card.image}
          buttonlink={card.buttonlink}
        />
      ))}
      {renderPagination()}
    </div>
  );
};

export default RenderArticle;
