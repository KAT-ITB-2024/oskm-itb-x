import React from "react";
import Swiper from "src/app/article/components/SwiperCarousel";
import MiniSwiper from "src/app/article/components/MiniArticleCarousel";

const Page: React.FC = () => {
  return (
    <>
      <Swiper /> {/* Section 1 Carousel */}
      
      <div className="pagetsx-article-background"> {/* Section 2 Elastic Search */}
        <div className="pagetsx-upregion"> {/* Upregion */}
          {/* Content for the upper part of the section */}
        </div>
        
        <div style={{ marginLeft: "40px" }}>
          <br/>
          <h2>Read More Articles</h2>
          <br/>
        </div>
        <MiniSwiper />
        {/* For the cards */}
        <div className="center-container">
          <a href="/article/list">
            <button className="article-pagetsx-button">
              {"More Articles > "}
            </button>
          </a>
        </div>
        
        <div className="pagetsx-downregion"> {/* Downregion */}
          <img className="downleft-corner" src="/article-icons/coral-oren.png" alt="Coral Oren" />
          <img className="downleft-coral-pensu" src="/article-icons/Coral-Pensu.png" alt="Coral Pensu" />
          <img className="downleft-coral" src="/article-icons/Coral.png" alt="Coral" />
        </div>
      </div>
    </>
  );
};

export default Page;
