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
      perView: 4, // Show 4 cards at once on larger screens
      spacing: 15, // Reduced space between cards
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 }, // Show 1 card at a time on small screens
      },
    },
  });

  const [articles, setArticles] = useState<Article[]>([]);
  const sliderInstance = useRef<KeenSliderInstance | null>(null);

  useEffect(() => {
    getAllArticles({ randomize: true })
      .then((fetchedArticles) => {
        setArticles(fetchedArticles.slice(0, 10)); // Load only 10 articles initially
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Set the slider instance when the slider is initialized
    sliderInstance.current = slider;
  }, [slider]);

  return (
    <div
      className="mini-card-carousel-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "500px", // Height of the carousel for taller cards
        padding: "0 20px", // Reduced padding left and right
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <button
        className="prev-button"
        onClick={() => sliderInstance.current?.prev()}
      >
        {/* Optional content, leave empty if using background images */}
      </button>

      <div
        className="mini-card-carousel keen-slider"
        ref={sliderRef}
        style={{
          height: "100%", // Full height for taller cards
          transition: "transform 0.5s ease-in-out", // Smooth animation
          overflow: "hidden", // Ensure no overflow of content
        }}
      >
        {articles.map((card) => (
          <div
            key={card.id}
            className="keen-slider__slide"
            style={{
              padding: "0 10px", // Reduced padding for each card
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
        {/* Optional content, leave empty if using background images */}
      </button>
    </div>
  );
};

export default MiniArticleCarousel;
