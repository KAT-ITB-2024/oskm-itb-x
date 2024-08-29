"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { getAllArticles } from "~/lib/contentful/api";
import Card from "src/app/article/components/Card";
import { Article } from "~/types/articles/articleType";

const MiniArticleCarousel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleArticles, setVisibleArticles] = useState<Article[]>([]);
  const articlesPerBatch = 7;
  const [currentBatch, setCurrentBatch] = useState(0);

  useEffect(() => {
    getAllArticles({ randomize: true })
      .then((fetchedArticles) => {
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
    <div
      className="mini-card-carousel-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        padding: "0 20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Custom Navigation Buttons */}
      <button
        className="prev-button"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      />
      <button
        className="next-button"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      />

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        breakpoints={{
          1200: { // For large screens
            slidesPerView: 4,
          },
          992: { // For medium screens
            slidesPerView: 3,
          },
          768: { // For tablets
            slidesPerView: 2,
          },
          576: { // For small tablets and large phones
            slidesPerView: 1,
          },
          524: { // For very small screens
            slidesPerView: 1,
          },
          0: { // For very small screens
            slidesPerView: 1,
          },
        }}
        onSlideChange={() => {
          if (visibleArticles.length - 4 <= articles.length) {
            loadMoreArticles();
          }
        }}
        style={{
          height: "100%",
          width: "calc(100% - 80px)", // Adjust width to account for button margins
          margin: "0 auto", // Center the Swiper container
        }}
      >
        {visibleArticles.map((card) => (
          <SwiperSlide
            key={card.id}
            className="keen-slider__slide"
            style={{
              padding: "40px 0px",
              margin: "0px",
              boxSizing: "border-box",
            }}
          >
            <Card
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
    </div>
  );
};

export default MiniArticleCarousel;
