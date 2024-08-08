"use client";

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const MiniCardCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  const cards = [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://via.placeholder.com/300x200',
      author: 'John Doe',
      date: '24 August 2024',
      time: '10:00 AM',
      readTime: '2 min',
      views: 1653,
    },
    {
      id: 2,
      title: 'Sed Ut Perspiciatis Unde Omnis',
      description: 'Natus error sit voluptatem accusantium doloremque laudantium.',
      image: 'https://via.placeholder.com/300x200',
      author: 'Jane Smith',
      date: '23 August 2024',
      time: '11:00 AM',
      readTime: '3 min',
      views: 1200,
    },
    {
      id: 3,
      title: 'Eiusmod Tempor Incididunt Ut Labore',
      description: 'Excepteur sint occaecat cupidatat non proident.',
      image: 'https://via.placeholder.com/300x200',
      author: 'Alice Johnson',
      date: '22 August 2024',
      time: '2:00 PM',
      readTime: '5 min',
      views: 980,
    },
    {
      id: 4,
      title: 'Duis Aute Irure Dolor in reprehenderit',
      description: 'In voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://via.placeholder.com/300x200',
      author: 'Bob Brown',
      date: '21 August 2024',
      time: '3:00 PM',
      readTime: '4 min',
      views: 1550,
    },
    {
      id: 5,
      title: 'Excepteur Sint Occaecat Cupidatat Non Proident',
      description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/300x200',
      author: 'Charlie Davis',
      date: '20 August 2024',
      time: '4:00 PM',
      readTime: '6 min',
      views: 1100,
    },
    {
      id: 6,
      title: 'Ut Enim Ad Minim Veniam',
      description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/300x200',
      author: 'Eve Evans',
      date: '19 August 2024',
      time: '5:00 PM',
      readTime: '7 min',
      views: 1300,
    },
  ];

  return (
    <div className="mini-card-carousel keen-slider" ref={sliderRef}>
      {cards.map((card) => (
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
              Read More>>>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniCardCarousel;
