"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { getAllArticles } from "~/lib/contentful/api";
import Card from "src/app/article/components/Card";
import { type Article } from "~/types/articles/articleType";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const MiniArticleCarousel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleArticles, setVisibleArticles] = useState<Article[]>([]);
  const articlesPerBatch = 7;
  const [currentBatch, setCurrentBatch] = useState(0);

  useEffect(() => {
    getAllArticles({ randomize: true })
      .then((fetchedArticles: Article[]) => {
        setArticles(fetchedArticles);
        setVisibleArticles(fetchedArticles.slice(0, articlesPerBatch));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const loadMoreArticles = () => {
    const nextBatch = currentBatch + 1;
    const nextArticles = articles.slice(
      nextBatch * articlesPerBatch,
      (nextBatch + 1) * articlesPerBatch
    );

    if (nextArticles.length > 0) {
      setVisibleArticles((prev) => [...prev, ...nextArticles]);
      setCurrentBatch(nextBatch);
    }
  };

  return (
    <div className="bg-[url('/article-icons/blog-background.webp')] bg-cover bg-center h-auto md:h-screen relative py-10 px-10 md:px-20">
      <h2 className="font-mogula md:text-[48px] text-4xl drop-shadow-lg text-white text-center md:text-left">Read More Articles</h2>
      <button className="prev-button absolute top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer" />
      <button className="next-button absolute top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer" />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        onSlideChange={() => {
          if (visibleArticles.length - 4 <= articles.length) {
            loadMoreArticles();
          }
        }}
        className="w-full mx-10 h-[480px] overflow-clip"
      >
        {visibleArticles.map((card) => (
          <SwiperSlide
            key={card.id}
            className="px-4"
          >
            <Card
              key={card.id}
              id={card.id}
              slug={card.slug}
              title={card.title}
              createdAt={card.createdAt}
              author={card.author}
              views={card.views}
              readTime={card.readTime}
              description={card.description}
              image={card.image}
              likes={card.likes}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex w-full items-center justify-center z-10">
        <Button variant="pink" className="z-10"><Link href="/article/list">More Articles {'>'}</Link></Button>
      </div>
    </div>
  );
};

export default MiniArticleCarousel;
