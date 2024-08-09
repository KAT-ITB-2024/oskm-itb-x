"use client";

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import articleData from 'src/app/article/list/article-datas'; // Collect Data, bakal dimanage ko Frendy.

const MiniCardCarousel = () => {
  const [sliderRef] = useKeenSlider({
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

  return (
    <div className="mini-card-carousel keen-slider" ref={sliderRef}>
      {articleData.map((card) => (
        <div key={card.id} className="card keen-slider__slide">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <div className="card-meta">
              <span className="card-stats">
                {card.views} | {card.readTime}
              </span>
            </div>
            <h2 className="card-title">{card.title}</h2>
            <div className="card-details">
              <span className="card-date">{card.date}</span> {card.time} by{' '}
              <span className="card-author">{card.author}</span>
            </div>
            <p className="card-description">{card.description}</p>
            <a href="#" className="card-read-more">
              {" Read More>>> "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniCardCarousel;
