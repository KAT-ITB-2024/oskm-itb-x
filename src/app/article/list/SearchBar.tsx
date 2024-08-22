"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getAllArticles } from "~/lib/contentful/api";
import { Article } from "~/types/articles/articleType";
import _ from "lodash";
import { FilterOption } from "~/types/articles/filterOption";

const SearchBar = ({
  setFilteredArticles,
}: {
  setFilteredArticles: (article: Article[]) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<FilterOption>("Terbaru");

  const debouncedSearch = useCallback(
    _.debounce(async (query: string, currentFilter: FilterOption) => {
      getAllArticles({ search: query, filter: currentFilter })
        .then((articles) => {
          setFilteredArticles(articles);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 500),
    [],
  );

  const handleSearch = (search: string) => {
    setSearchQuery(search);
    debouncedSearch(search, filter);
  };

  const handleFilter = (filterType: FilterOption) => {
    setFilter(filterType);
    debouncedSearch(searchQuery, filterType);
  };

  return (
    <div className="search-bar-container">
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Cari artikel berdasarkan judul atau penulis disini..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="sort-select-container">
          <div className="sort-select-wrapper">
            <select
              id="filterSelect"
              value={filter}
              onChange={(e) => {
                const selectedFilter = e.target.value as FilterOption;
                if (selectedFilter) {
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
    </div>
  );
};

export default SearchBar;
