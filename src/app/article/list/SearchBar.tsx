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
    <div className="search-bar-container">
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Cari artikel berdasarkan judul atau penulis disini..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="sort-select-container">
          <div className="sort-select-wrapper">
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
            >
              <option value="" disabled hidden>
                Urutkan Berdasarkan
              </option>
              <option value="Terbaru">Terbaru</option>
              <option value="Rekomendasi">Rekomendasi</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <div className="sort-icon-wrapper">
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
        <div className="no-articles-found">
          <img
            src="/article-icons/Search_Not_Found.png"
            alt="No articles found"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
