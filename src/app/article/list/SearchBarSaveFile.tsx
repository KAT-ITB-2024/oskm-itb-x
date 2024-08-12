// src/app/article/list/SearchBar.tsx
"use client";

import { useState } from 'react';
import articleData from './article-datas'; // Import the article data
import React from 'react';

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
  selected?: boolean; // Assuming a 'selected' property for 'Rekomendasi' filter
}

const SearchBar = () => {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articleData);
  const [found, setFound] = useState<boolean>(true); // To track if articles are found
  const [showDropdown, setShowDropdown] = useState<boolean>(false); // Toggle for dropdown
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query

  const handleFilter = (filterType: string) => {
    let sortedArticles: Article[] = [];

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
    setFound(sortedArticles.length > 0); // Update found state based on filter result
    setShowDropdown(false); // Close the dropdown after selection
  };

  const renderArticles = () => {
    const maxItemsPerRow = 4;
    const maxRows = 4;
    const totalItems = maxItemsPerRow * maxRows;

    return (
      <>
        <div
          className="mini-card-container"
          style={{
            overflow: 'hidden', 
            padding: '35px', /* Padding around the carousel */
            position: 'relative', /* Relative position for absolute elements */
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {filteredArticles.slice(0, totalItems).map((card) => (
            <div
              key={card.id}
              className="card"
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img src={card.image} alt={card.title} className="card-image" style={{ width: '100%', height: 'auto' }} />
              <div className="card-content" style={{ padding: '16px' }}>
                <div className="card-meta">
                  <span className="card-stats">
                    {card.views} | {card.readTime}
                  </span>
                </div>
                <h2 className="card-title">{card.title}</h2>
                <div className="card-details">
                  <span className="card-date">{card.date}</span> {card.time} by{' '}
                  <span className="card-author">{card.author}</span>
                </div>
                <p className="card-description">{card.description}</p>
                <a href="#" className="card-read-more">
                  {" Read More>>> "}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Handle Remaining Articles */}
        {filteredArticles.length > totalItems && (
          <div
            className="extra-cards"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            {filteredArticles.slice(totalItems).map((card) => (
              <div
                key={card.id}
                className="card"
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <img src={card.image} alt={card.title} className="card-image" style={{ width: '100%', height: 'auto' }} />
                <div className="card-content" style={{ padding: '16px' }}>
                  <div className="card-meta">
                    <span className="card-stats">
                      {card.views} | {card.readTime}
                    </span>
                  </div>
                  <h2 className="card-title">{card.title}</h2>
                  <div className="card-details">
                    <span className="card-date">{card.date}</span> {card.time} by{' '}
                    <span className="card-author">{card.author}</span>
                  </div>
                  <p className="card-description">{card.description}</p>
                  <a href="#" className="card-read-more">
                    {" Read More>>> "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div style={{ justifyContent: 'center', marginTop: '20px', marginRight: '80px' }}>
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
            width: '980px',
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
          {searchQuery === '' && (
            <p
              className="searchbar-paragraph"
              style={{
                position: 'absolute',
                top: '12px',
                left: '24px',
                opacity: 0.5,
                margin: 0,
                pointerEvents: 'none',
              }}
            />
          )}
        </div>

        <div
          className="sort-button-container"
          style={{
            width: '360px',
            height: '48px',
            padding: '12px 24px',
            gap: '16px',
            borderRadius: '8px 0px 0px 0px',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            style={{
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              textAlign: 'left',
              padding: '0 24px',
              position: 'relative',
            }}
          >
            Urutkan berdasarkan
          </button>
          {showDropdown && (
            <ul
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '0',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                listStyleType: 'none',
                padding: '0',
                margin: '0',
                zIndex: 1000,
                width: '100%',
                borderRadius: '8px',
              }}
            >
              <li
                style={{ padding: '12px 24px', cursor: 'pointer', borderRadius: '8px' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onClick={() => handleFilter('Terbaru')}
              >
                Terbaru
              </li>
              <li
                style={{ padding: '12px 24px', cursor: 'pointer', borderRadius: '8px' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onClick={() => handleFilter('Rekomendasi')}
              >
                Rekomendasi
              </li>
              <li
                style={{ padding: '12px 24px', cursor: 'pointer', borderRadius: '8px' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onClick={() => handleFilter('A-Z')}
              >
                A-Z
              </li>
              <li
                style={{ padding: '12px 24px', cursor: 'pointer', borderRadius: '8px' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onClick={() => handleFilter('Z-A')}
              >
                Z-A
              </li>
            </ul>
          )}
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
