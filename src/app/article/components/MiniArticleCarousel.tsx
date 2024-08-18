"use client";

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import articleData from 'src/app/article/list/article-datas';
import "src/styles/globals.css";

interface Article {
  id: number;  
  image: string;
  title: string;
  views: number;
  readTime: string;
  date: string;
  time: string;
  author: string;
  description: string;
  buttonlink: string;
  selected: boolean;
}

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

  return (
    <div className="mini-card-carousel-wrapper">
      <button 
        className="prev-button" 
        onClick={() => slider.current?.prev()}
      />
      
      <div className="mini-card-carousel keen-slider" ref={sliderRef}>
        {articleData.map((card, index) => (
          <div 
            key={card.id} 
            className={`card keen-slider__slide ${index === articleData.length - 1 ? 'last-card' : ''}`}
          >
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
              <a href={card.buttonlink} className="card-read-more">
                {" Read More>>> "}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="next-button" 
        onClick={() => slider.current?.next()}
      />
    </div>
  );
};

export default MiniArticleCarousel;
