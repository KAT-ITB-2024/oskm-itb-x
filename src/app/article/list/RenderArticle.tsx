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
    <div
      className="pagination"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        gap: '12px',
        paddingRight: '20px',
      }}
    >
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          backgroundColor: '#EE1192',
          borderRadius: '4px 0px 0px 0px',
          width: '24px',
          height: '24px',
          padding: '0px 8.5px',
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        {'<'}
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          style={{
            cursor: 'pointer',
            backgroundColor: number === currentPage ? '#3678FF' : '#EE1192',
            color: number === currentPage ? '#fff' : '#000',
            borderRadius: '4px 0px 0px 0px',
            width: '24px',
            height: '24px',
            padding: '0px 8.5px',
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
          cursor: currentPage === pageNumbers.length ? 'not-allowed' : 'pointer',
          backgroundColor: '#EE1192',
          borderRadius: '4px 0px 0px 0px',
          width: '24px',
          height: '24px',
          padding: '0px 8.5px',
          opacity: currentPage === pageNumbers.length ? 0.5 : 1,
        }}
      >
        {'>'}
      </button>
    </div>
  );

  return (
    <div
      className="mini-card-container"
      style={{
        overflow: 'hidden',
        padding: '10px',
        position: 'relative',
        display: 'grid',
        gap: '10px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(4, 1fr)',
        gridTemplateRows: window.innerWidth <= 768 ? 'repeat(4, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))',
      }}
    >
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
