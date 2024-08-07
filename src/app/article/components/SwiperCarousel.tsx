"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ClientOnlyCarousel: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const articles = [
    {
      id: 1,
      title: "Article 1",
      content: "Content of Article 1",
      bgImage: "/path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Article 2",
      content: "Content of Article 2",
      bgImage: "/path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Article 3",
      content: "Content of Article 3",
      bgImage: "/path/to/image3.jpg",
    },
  ];

  return (
    <div className="main-article">
      <h2>Main Articles</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div
              className="item"
              style={{
                backgroundImage: `url(${article.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "560px", // Adjust height as needed
                color: "#fff", // Optional: Adjust text color for better visibility
                padding: "20px", // Optional: Adjust padding for content positioning
              }}
            >
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientOnlyCarousel;
