"use client";

import React, { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Ensure CSS is imported globally
import { getAllArticles } from "~/lib/contentful/api";
import Card from "src/app/article/components/Card";

const MiniArticleCarousel: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    rtl: true, // RTL mode
    slides: {
      perView: 4, // Show 4 cards at once on large screens
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 }, // Show 1 card on small screens
      },
    },
  });

  const [articles, setArticles] = useState<Article[]>([]);
  const sliderInstance = useRef<any>(null);

  useEffect(() => {
    getAllArticles({ randomize: true })
      .then((fetchedArticles) => {
        setArticles(fetchedArticles.slice(0, 10)); // Load the first 10 articles
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  useEffect(() => {
    sliderInstance.current = slider.current;
  }, [slider]);

  // Function to go to the previous slide (RTL: moves left)
  const goToPrevious = () => {
    if (sliderInstance.current) {
      sliderInstance.current.prev(); // RTL: prev moves slider to the right
    }
  };

  // Function to go to the next slide (RTL: moves right)
  const goToNext = () => {
    if (sliderInstance.current) {
      sliderInstance.current.next(); // RTL: next moves slider to the left
    }
  };

  return (
    <div
      className="mini-card-carousel-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        padding: "0 10px", // Adjust padding for better fit on smaller screens
        boxSizing: "border-box",
        overflow: "hidden",
        direction: "rtl", // Ensure RTL is active
      }}
    >
      <button
        className="next-button"
        onClick={goToNext}
      />

      <div
        className="mini-card-carousel keen-slider"
        ref={sliderRef}
        style={{
          height: "100%",
          transition: "transform 0.5s ease-in-out",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {articles.map((card) => (
          <div
            key={card.id}
            className="keen-slider__slide"
            style={{
              padding: "0 5px", // Reduce padding between cards
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
        className="prev-button"
        onClick={goToPrevious}
      />
    </div>
  );
};

export default MiniArticleCarousel;
