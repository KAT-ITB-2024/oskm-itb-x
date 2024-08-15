import React from "react";
import Swiper from "src/app/article/components/SwiperCarousel";
import MiniSwiper from "src/app/article/components/MiniArticleCarousel";

export default function Page() {
  return (
    <>
      <Swiper /> {/* Section 1 Carousel */}
      <div className="pagetsx-article-background"> {/* Section 2 Elastic Search */}
        {/*Bagian ada Animasinya (Bakal di Implementasi setelah fungsionalitas dasarnya terpenuhi!!!*/}
        <div>
        </div>
        <br />
        <div style={{ marginLeft: "120px" }}>
          <h2>Read More Articles</h2>
          <br />
        </div>
        <MiniSwiper />
        {/* Untuk Kartunya ya */}
        <div className="center-container">
          <a href="/article/list">
            <button className="article-pagetsx-button">
              {"More Articles > "}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
