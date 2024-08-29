"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { type Article } from "~/types/articles/articleType";
import { getAllArticles } from "~/lib/contentful/api";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const ClientOnlyCarousel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles({ limit: 5, randomize: true }).then((articles: Article[]) => {
      setArticles(articles);
    }).catch((error) => {
      console.error(error);
    });
    setIsLoading(false);
  }, []);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen relative">
      <Swiper
        className="h-full"
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id} className="flex">
            <div className={`bg-cover bg-center bg-no-repeat h-full px-10 md:px-20 flex items-center justify-left mx-auto`} style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${article.image.url})`,
            }}>
              <div className="w-full md:w-3/5">
                <h1 className="font-mogula text-4xl md:text-[48px] text-white mb-4">{article.title}</h1>
                <p className="font-rem text-white mb-4 mdLtext-base text-sm">{truncateDescription(article.description, 250)}</p>
                <Button asChild>
                  <Link
                    href={`/article/detail/${article.slug}`}
                    className="carousel-button"
                  >
                    Read More
                  </Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};

export default ClientOnlyCarousel;
