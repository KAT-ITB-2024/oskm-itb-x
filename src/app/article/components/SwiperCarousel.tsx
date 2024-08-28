"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BgImages1 from "./BgImages1"; // Import BgImages1
import { Article } from "~/types/articles/articleType";
import { getAllArticles } from "~/lib/contentful/api";

const ClientOnlyCarousel: React.FC = () => {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getAllArticles({ limit: 5, randomize: true }).then((articles) => {
      setArticles(articles);
    }).catch((error) => {
      console.error(error);
    })
  }, [])

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
                backgroundImage: `url(${article.image.url})`,
                position: "relative", // Ensure relative positioning for child elements
              }}
            >
              {/* Optional Gradient Overlays
              <div className="overlay-left"></div>
              <div className="overlay-right"></div>
              */}

              <div className="text-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                {index !== 1 && index !== 2 && (
                  <a
                    href={`/article/detail/${article.slug}`}
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
