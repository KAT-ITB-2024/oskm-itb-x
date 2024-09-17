"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import MiniArticleCarousel from "src/app/article/components/MiniArticleCarousel";
import { getArticle } from "~/lib/contentful/api";
import { type Article } from "~/types/articles/articleType";
import { FaCalendar } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Page: React.FC = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    getArticle({ slug: slug as string })
      .then((data) => {
        setArticle(data);
      })
      .catch(() => {
        setArticle(undefined);
      });
  }, [slug]);

  return (
    <>
      <div className="w-full bg-[url('/article-icons/BgDetail.png')] pt-40">
        {article && (
          <div className="flex flex-col items-center px-[5%]">
            <h1 className="mb-6 text-center font-mogula text-2xl text-white md:text-5xl">
              {article.title}
            </h1>

            <div
              className="flex w-full max-w-2xl items-center justify-between gap-6 rounded-full px-6 py-2 text-white"
              style={styles.statsContainer}
            >
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <IoMdPerson />
                <p className="text-center text-xs text-white md:text-base">
                  {article.author}
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <FaCalendar />
                <p className="text-center text-xs text-white md:text-base">
                  {new Date(article.createdAt).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-xs md:flex-row">
                <IoTimeOutline size={20} />
                <p className="text-center text-xs text-white md:text-base">
                  {article.readTime} minutes
                </p>
              </div>
            </div>

            <div className="relative my-10 aspect-video w-[90%] max-w-2xl overflow-hidden rounded-xl md:w-1/2">
              <Image
                src={article.image.url}
                alt={article.title}
                fill
                className="h-full w-full"
                objectFit="cover"
              />
            </div>
                    
            <div className="mb-10 w-full max-w-[60rem] px-[5%] bg-white py-10 rounded-xl ">
              <div className="prose text-base md:text-lg w-full text-justify">
              {documentToReactComponents(article.content?.json)}
              </div>
            </div>
          </div>
        )}

        {/* Spacer before the button */}
        <div style={styles.spacer} />

        {/* MiniArticleCarousel Component */}
        <MiniArticleCarousel />
      </div>
    </>
  );
};

// Styles Page disimpan disini biar enak diatur sebelum diletakkan di Global.css//
const styles = {
  pageContainer: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    backgroundImage: `url('/article-icons/BiruBackground1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "REM, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  goBackButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  articleTitle: {
    fontFamily: "Mogula, sans-serif",
    fontSize: "64px",
    fontWeight: "400",
    lineHeight: "76.8px",
    textAlign: "center" as const,
    marginBottom: "10px",
    color: "#ffffff",
    zIndex: 2, // Konten di atas overlay
  },
  articleDate: {
    fontSize: "1rem",
    textAlign: "center" as const,
    marginBottom: "20px",
    color: "#ffffff",
    zIndex: 2,
  },
  statsContainer: {
    background:
      "linear-gradient(166.31deg, rgba(255, 254, 254, 0.36) 9.26%, rgba(255, 202, 224, 0.48) 89.28%)",
    boxShadow: "0px 0px 10px 0px #FFFFFF",
  },
  statsItem: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  articleImageContainer: {
    textAlign: "center" as const,
    margin: "20px 0",
    zIndex: 2,
  },
  articleImage: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "20px",
    margin: "0 auto",
  },
  spacer: {
    height: "50px",
  },
  largeSpacer: {
    height: "100px",
  },

  "@media (max-width: 768px)": {
    statsContainer: {
      flexDirection: "column",
      borderRadius: "10cm",
      width: "100%",
    },
    statsItem: {
      fontSize: "0.875rem",
    },
    articleTitle: {
      fontSize: "1.5rem",
    },
    articleDescriptionContainer: {
      width: "90%",
    },
    articleDescription: {
      fontSize: "0.9rem",
    },
  },
};

export default Page;
