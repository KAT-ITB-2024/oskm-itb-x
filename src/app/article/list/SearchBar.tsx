"use client";

import React, { useState, useEffect } from 'react';
import articleData from './article-datas';
import RenderArticle from './renderArticle';
import Image from 'next/image';

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
  selected?: boolean;
}

const SearchBar: React.FC = () => {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articleData);
  const [found, setFound] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const cardContainer = document.querySelector('.mini-card-container') as HTMLElement;

      if (cardContainer) {
        const isMobile = window.innerWidth <= 768;
        cardContainer.style.gridTemplateColumns = isMobile ? '1fr' : 'repeat(4, 1fr)';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFilter = (filterType: string) => {
    let sortedArticles: Article[] = [];

    switch (filterType) {
      case 'Terbaru':
        sortedArticles = [...articleData].sort((a, b) => b.id - a.id);
        break;
      case 'Rekomendasi':
        sortedArticles = [...articleData].sort((a, b) => b.views - a.views);
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
            borderRadius: '8px',
            position: 'relative',
            flex: 1,
            backgroundColor: '#F3F4F6',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
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
              backgroundColor: 'transparent',
              fontSize: '16px',
              color: '#000',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          />
        </div>

        <div
          className="sort-select-container"
          style={{
            paddingLeft: '8px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            gap: '8px',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '48px',
              overflow: 'hidden',
            }}
          >
            <select
              id="filterSelect"
              value={filter}
              onChange={(e) => {
                const selectedFilter = e.target.value;
                if (selectedFilter !== '') {
                  setFilter(selectedFilter);
                  handleFilter(selectedFilter);
                }
              }}
              style={{
                cursor: 'pointer',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#F3F4F6',
                color: '#000',
                fontSize: '16px',
                width: '100%',
                paddingLeft: '40px',
                boxSizing: 'border-box',
                appearance: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
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
                position: 'absolute',
                top: '50%',
                left: '12px',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
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
