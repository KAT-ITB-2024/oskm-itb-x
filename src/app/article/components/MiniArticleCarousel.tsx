"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "src/styles/globals.css";
import { getAllArticles } from "~/lib/contentful/api";
import Card from "src/app/article/components/Card.tsx"; // Import komponen Card

const MiniArticleCarousel: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 25,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 25 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 25 },
      },
    },
  });

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getAllArticles({ randomize: true })
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mini-card-carousel-wrapper">
      <button className="prev-button" onClick={() => slider.current?.prev()} />

      <div className="mini-card-carousel keen-slider" ref={sliderRef}>
        {articles &&
          articles.length !== 0 &&
          articles.map((card, index) => (
            <div
              key={card.id}
              className="keen-slider__slide"
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

      <button className="next-button" onClick={() => slider.current?.next()} />
    </div>
  );
};

export default MiniArticleCarousel;
