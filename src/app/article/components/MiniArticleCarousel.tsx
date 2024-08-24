"use client";

import React, { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Pastikan CSS sudah di-import secara global
import { getAllArticles } from "~/lib/contentful/api";
import Card from "src/app/article/components/Card";

const MiniArticleCarousel: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    rtl: true, // Aktifkan mode RTL
    slides: {
      perView: 4, // Menampilkan 4 kartu sekaligus pada layar besar
      spacing: 15, // Jarak antara kartu yang lebih kecil
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 }, // Menampilkan 1 kartu pada layar kecil
      },
    },
  });

  const [articles, setArticles] = useState<Article[]>([]);
  const sliderInstance = useRef<any>(null);

  useEffect(() => {
    getAllArticles({ randomize: true })
      .then((fetchedArticles) => {
        setArticles(fetchedArticles.slice(0, 10)); // Memuat 10 artikel pertama
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
      sliderInstance.current.next(); // Dalam RTL, next menggerakkan slider ke kiri
    }
  };

  // Function to go to the next slide (RTL: moves right)
  const goToNext = () => {
    if (sliderInstance.current) {
      sliderInstance.current.prev(); // Dalam RTL, prev menggerakkan slider ke kanan
    }
  };

  return (
    <div
      className="mini-card-carousel-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        padding: "0 20px",
        boxSizing: "border-box",
        overflow: "hidden",
        direction: "rtl", // Pastikan ini untuk mengaktifkan RTL pada elemen
      }}
    >
      <button className="next-button" onClick={goToNext}>
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
        {articles.map((card) => (
          <div
            key={card.id}
            className="keen-slider__slide"
            style={{
              padding: "0 10px",
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

      <button className="prev-button" onClick={goToPrevious}>
      </button>
    </div>
  );
};

export default MiniArticleCarousel;
