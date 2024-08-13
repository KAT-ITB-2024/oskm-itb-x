// src/app/article/list/SearchBar.tsx
"use client";

import { useState, useEffect } from 'react';
import articleData from './article-datas';
import React from 'react';
import Card from '../components/Card';
import Image from 'next/image';

const SearchBar = () => {
  const [filteredArticles, setFilteredArticles] = useState(articleData);
  const [found, setFound] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('Terbaru');

  useEffect(() => {
    const handleResize = () => {
      const cardContainer = document.querySelector('.mini-card-container');
      const card = document.querySelector('.card');

      if (cardContainer && card) {
        const cardWidth = card.clientWidth;
        const containerWidth = cardContainer.clientWidth;
        const cardsPerRow = Math.floor(containerWidth / cardWidth);
        if (cardsPerRow < 1) {
          cardContainer.style.gridTemplateColumns = `repeat(1, 1fr)`;
        } else {
          cardContainer.style.gridTemplateColumns = `repeat(${cardsPerRow}, 1fr)`;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFilter = (filterType: string) => {
    let sortedArticles = [];

    switch (filterType) {
      case 'Terbaru':
        sortedArticles = [...articleData].sort((a, b) => b.id - a.id);
        break;
      case 'Rekomendasi':
        sortedArticles = articleData.filter((article) => article.selected);
        break;
      case 'A-Z':
        sortedArticles = [...articleData].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z-A':
        sortedArticles = [...articleData].sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        sortedArticles = articleData;
    }

    setFilteredArticles(sortedArticles);
    setFound(sortedArticles.length > 0);
  };

  const renderArticles = () => {
    const maxRows = 4;
    const maxItemsPerRow = Math.min(4, window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : window.innerWidth <= 1024 ? 3 : 4);
    const totalItems = maxItemsPerRow * maxRows;

    return (
      <>
        <div
          className="mini-card-container"
          style={{
            overflow: 'hidden',
            padding: '20px',
            position: 'relative',
            display: 'grid',
            gap: '20px',
            marginTop: '20px',
            gridTemplateColumns: `repeat(${maxItemsPerRow}, minmax(0, 1fr))`,
          }}
        >
          {filteredArticles.slice(0, totalItems).map((card) => (
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
              buttonlink={card.buttonlink} // Pass the button link
            />
          ))}
        </div>

        {filteredArticles.length > totalItems && (
          <div
            className="extra-cards"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${maxItemsPerRow}, minmax(0, 1fr))`,
              gap: '20px',
              marginTop: '20px',
            }}
          >
            {filteredArticles.slice(totalItems).map((card) => (
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
                buttonlink={card.buttonlink} // Pass the button link
              />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div style={{ justifyContent: 'center', padding: '10px' }}>
      <div
        className="search-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          className="search-input-container"
          style={{
            width: '100%',
            height: '48px',
            padding: '12px 24px',
            gap: '16px',
            borderRadius: '8px 0px 0px 0px',
            position: 'relative',
            flex: 1,
          }}
        >
          <input
            type="text"
            placeholder="Cari artikel berdasarkan judul atau penulis disini..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              outline: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
            }}
          />
        </div>

        <div
          className="sort-select-container"
          style={{
            paddingLeft: '8px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            gap: '8px',
          }}
        >
          <Image
            src="/article-icons/filter_alt.png"
            alt="Filter"
            width={24}
            height={24}
            onClick={() => document.getElementById('filterSelect')?.focus()}
            style={{
              cursor: 'pointer',
            }}
          />
          <label
            htmlFor="filterSelect"
            style={{
              cursor: 'pointer',
              color: '#3678FF',
            }}
            onClick={() => document.getElementById('filterSelect')?.focus()}
          >
            Urutkan berdasarkan
          </label>
          <select
            id="filterSelect"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              handleFilter(e.target.value);
            }}
            style={{
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              appearance: 'none',
              background: 'transparent',
              color: '#3678FF',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            <option value="Terbaru">Terbaru</option>
            <option value="Rekomendasi">Rekomendasi</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      {found ? (
        renderArticles()
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
          }}
        >
          <img
            src="/article-icons/Search_Not_Found.png"
            alt="No articles found"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
