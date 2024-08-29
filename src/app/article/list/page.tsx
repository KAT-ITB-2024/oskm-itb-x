"use client";

import { useEffect, useState } from "react";
import SearchBar from "src/app/article/list/SearchBar";
import Card from "../components/Card";
import { getAllArticles } from "~/lib/contentful/api";
import { type Article } from "~/types/articles/articleType";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Page() {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768 ? 4 : 16,
  );

  useEffect(() => {
    getAllArticles({})
      .then((articles: Article[]) => {
        setFilteredArticles(articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setArticlesPerPage(window.innerWidth <= 768 ? 4 : 16);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastCard = currentPage * articlesPerPage;
  const indexOfFirstCard = indexOfLastCard - articlesPerPage;
  const currentCards = filteredArticles?.slice(
    indexOfFirstCard,
    indexOfLastCard,
  );

  console.log(filteredArticles);

  const totalPages = Math.ceil(filteredArticles?.length / articlesPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => (
    <div className="z-10 mt-8 flex items-center justify-center gap-3">
      <Button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        variant="pink"
        className={`${currentPage === 1 ? "disabled" : ""}`}
      >
        {"<"}
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => handleClick(index + 1)}
          variant="pink"
          className={`${index + 1 === currentPage ? "border border-white" : ""}`}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="pink"
        className={`${currentPage === totalPages ? "disabled" : ""}`}
      >
        {">"}
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col gap-2 bg-[url('/article-icons/blog-background.webp')] bg-cover px-10 py-28">
      <Link
        href="/article"
        className="mb-4 flex items-center gap-2 text-3xl font-bold text-white"
      >
        <FaArrowLeft className="" />
        <h1>List of Articles</h1>
      </Link>

      <SearchBar setFilteredArticles={setFilteredArticles} />

      <div className="z-10">
        {currentCards?.length > 0 ? (
          <div className="grid w-full gap-8 md:grid-cols-4">
            {currentCards.map((card) => (
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
            ))}
          </div>
        ) : (
          <div className="flex w-full items-center justify-center">
            <div className="flex h-screen w-full flex-col items-center justify-center gap-4 md:w-1/2">
              <Image
                src="/components/gurita.webp"
                alt="Item Not Found"
                height={500}
                width={500}
                className="mb-8 h-auto w-40 scale-[2] md:mb-12"
                draggable={false}
              />
              <h1 className="text-center font-mogula text-3xl text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_75%)] sm:text-5xl">
                Pencarian Tidak Ditemukan...
              </h1>
              <p className="text-wrap text-center font-rem text-white [text-shadow:_4px_4px_20px_rgb(100_177_247_/_75%)]">
                Oh tidak... Tampaknya kamu mencari sesuatu yang tersembunyi di
                kedalaman. Cobalah kata kunci lain atau kembali ke permukaan
                untuk melanjutkan pencarianmu!
              </p>
            </div>
          </div>
        )}
      </div>

      {totalPages > 1 && renderPagination()}

      <Image
        src="/article-icons/coral-left.webp"
        alt="Coral Left"
        height={500}
        width={500}
        className="absolute bottom-0 left-0"
        draggable={false}
      />
      <Image
        src="/article-icons/coral-right.webp"
        alt="Coral Right"
        height={500}
        width={500}
        className="absolute bottom-0 right-0"
        draggable={false}
      />
    </div>
  );
}
