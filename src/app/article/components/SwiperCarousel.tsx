"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BgImages1 from "./BgImages1"; // Import BgImages1

const ClientOnlyCarousel: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const articles = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonlink: "#",
      bgImage: "/path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Article 2",
      content: "Content of Article 2",
      buttonlink: "#",
      bgImage: "/path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Article 3",
      content: "Content of Article 3",
      buttonlink: "#",
      bgImage: "/path/to/image3.jpg",
    },
    {
      id: 4,
      title: "Article 4",
      content: "Content of Article 4",
      buttonlink: "#",
      bgImage: "/path/to/image4.jpg",
    },
    {
      id: 5,
      title: "Article 5",
      content: "Content of Article 5",
      buttonlink: "#",
      bgImage: "/path/to/image5.jpg",
    },
  ];

  return (
    <div className="main-article">
      {/* Insert BgImages1 component (contains moving images) */}
      <BgImages1 />

      <Swiper
        className="swiper-container"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.id}>
            <div
              className="item"
              style={{
                backgroundImage: `url(${article.bgImage})`,
                position: "relative", // Ensure relative positioning for child elements
              }}
            >
              {/* Optional Gradient Overlays
              <div className="overlay-left"></div>
              <div className="overlay-right"></div>
              */}

              <div className="text-content">
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                {index !== 1 && index !== 2 && (
                  <a
                    href={article.buttonlink}
                    className="carousel-button"
                  >
                    Read More
                  </a>
                )}
              </div>

              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientOnlyCarousel;
