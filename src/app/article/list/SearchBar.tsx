"use client";

import React, { useState, useCallback } from "react";
import { getAllArticles } from "~/lib/contentful/api";
import { type Article } from "~/types/articles/articleType";
import _ from "lodash";
import { type FilterOption } from "~/types/articles/filterOption";
import { IoSearch } from "react-icons/io5";

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
        .then((articles: Article[]) => {
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
    void debouncedSearch(search, filter);
  };

  const handleFilter = (filterType: FilterOption) => {
    setFilter(filterType);
    void debouncedSearch(searchQuery, filterType);
  };

  return (
    <div className="">
      <div className="flex w-full items-center justify-center gap-3">
        <div className="w-3/4 rounded-lg flex md:flex-row flex-row-reverse gap-2 bg-white items-center px-2">
          <IoSearch className="text-gray-400"/>
          <input
            type="text"
            placeholder="Cari artikel berdasarkan judul atau penulis disini..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full py-1.5 rounded-lg font-rem text-sm focus:border-none focus:outline-none"
          />
        </div>

        <div className="w-1/4">
          <select
            id="filterSelect"
            value={filter}
            onChange={(e) => {
              const selectedFilter = e.target.value as FilterOption;
              if (selectedFilter) {
                handleFilter(selectedFilter);
              }
            }}
            className="w-full py-1.5 rounded-lg px-2 text-sm appearance-none"
          >
            <option value="Urutkan Berdasarkan" disabled selected>
              Urutkan Berdasarkan
            </option>
            <option value="Terbaru">Terbaru</option>
            <option value="Rekomendasi">Rekomendasi</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
