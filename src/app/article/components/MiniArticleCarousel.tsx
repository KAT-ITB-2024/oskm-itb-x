"use client";

import React, { useEffect, useState, useRef } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getAllArticles } from "~/lib/contentful/api";
import Card from "src/app/article/components/Card";

const MiniArticleCarousel: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 0,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 0 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 0 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 0 },
      },
    },
    slideChanged(slider) {
      const currentSlide = slider.track.details.rel;
      const totalSlides = slider.track.details.slides.length;

      if (currentSlide + 4 >= totalSlides) {
        loadMoreArticles();
      }
    },
  });

  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleArticles, setVisibleArticles] = useState<Article[]>([]);
  const sliderInstance = useRef<KeenSliderInstance | null>(null);
  const [currentBatch, setCurrentBatch] = useState(0);
  const articlesPerBatch = 10;

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

  useEffect(() => {
    sliderInstance.current = slider;
  }, [slider]);

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
      <button
        className="prev-button"
        onClick={() => sliderInstance.current?.prev()}
      >
        {/* Pakai bg image nya */}
      </button>

      <div
        className="mini-card-carousel keen-slider"
        ref={sliderRef}
        style={{
          height: "100%",
          transition: "transform 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        {visibleArticles.map((card) => (
          <div
            key={card.id}
            className="keen-slider__slide"
            style={{
              padding: "30px 30px",
              boxSizing: "border-box",
            }}
          >
            <Card
              id={card.id}
              title={card.title}
              createdAt={card.createdAt}
              author={card.author}
              views={card.views}
              readTime={card.readTime}
              description={card.description}
              image={card.image.url}
            />
          </div>
        ))}
      </div>

      <button
        className="next-button"
        onClick={() => sliderInstance.current?.next()}
      >
        {/* Menggunakan bg image */}
      </button>
    </div>
  );
};

export default MiniArticleCarousel;
