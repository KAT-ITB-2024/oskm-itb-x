"use client";

import React from "react";
import Swiper from "src/app/article/components/SwiperCarousel";
import MiniArticleCarousel from "src/app/article/components/MiniArticleCarousel";
{/* import BgAnimation1 from "src/app/article/components/BgAnimation1"; */}

const Page: React.FC = () => {
  return (
    <div style={{ position: "relative", zIndex: 1 }}> {/* Ensures images are behind content */}
      <Swiper /> {/* Section 1 Carousel */}
      

      <div className="pagetsx-article-background"> {/* Section 2 Elastic Search */}
        
        {/* Animation slide up (SCRAPPED?)*/}

        <div style={{ marginLeft: "40px" }}>
          <br/>
          <h2>Read More Articles</h2>
          <br/>
        </div>
        <MiniArticleCarousel />
        {/* For the cards */}
        <div className="center-container">
          <a href="/article/list">
            <button className="article-pagetsx-button">
              {"More Articles > "}
            </button>
          </a>
        </div>

        <div className="pagetsx-downregion"> {/* Downregion */}
          <img className="bottom-left-image" src="/article-icons/coral-oren.png" alt="Coral Oren" />
          <img className="bottom-right-image" src="/article-icons/Coral.png" alt="Coral" />
          <img className="downleft-coral-pensu" src="/article-icons/Coral-Pensu.png" alt="Coral Pensu" />
        </div>


      </div>
    </div>
  );
};

export default Page;
