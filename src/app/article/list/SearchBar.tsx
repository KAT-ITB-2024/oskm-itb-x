"use client";

import React, { useState, useEffect } from "react";
import { useArticles } from "../data/articles";
import RenderArticle from "./RenderArticle";

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

const SearchBar: React.FC = () => {
  const articleData = useArticles();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articleData);
  const [found, setFound] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log(articleData);
  }, [articleData]);

  const handleFilter = (filterType: string) => {
    let sortedArticles: Article[] = [];

    switch (filterType) {
      case "Terbaru":
        sortedArticles = [...articleData].sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
        break;
      case "Rekomendasi":
        sortedArticles = articleData.filter((article) => article.likes > 100);
        break;
      case "A-Z":
        sortedArticles = [...articleData].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedArticles = [...articleData].sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        sortedArticles = articleData;
    }

    setFilteredArticles(sortedArticles);
    setFound(sortedArticles.length > 0);
  };

  const handleSearch = (query: string) => {
    const filtered = articleData.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(filtered);
    setFound(filtered.length > 0);
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

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
                if (selectedFilter !== "") {
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
              <img
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
