"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import OwlCarousel for creating a web slider
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const ClientOnlyCarousel: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const articles = [
    { id: 1, title: "Article 1", content: "Content of Article 1" },
    { id: 2, title: "Article 2", content: "Content of Article 2" },
    { id: 3, title: "Article 3", content: "Content of Article 3" },
  ];

  return (
    <div className="main-article">
      <h2>Main Articles</h2>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        items={1}
        autoplay
        autoplayTimeout={3000}
        dots
      >
        {articles.map((article) => (
          <div key={article.id} className="item">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ClientOnlyCarousel;
