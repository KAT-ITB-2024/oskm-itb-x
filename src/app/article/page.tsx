import React from "react";
import Swiper from "src/app/article/components/SwiperCarousel";
import MiniSwiper from "src/app/article/components/MiniArticleCarousel";

export default function Page() {
  return (
    <>
      <Swiper /> {/*Section 1 Carousel*/}
      <div> {/*Section 2 Elastic Search??*/}
        <br></br>
        <div style={{ marginLeft: "120px" }}>
          <h3>Read More Articles</h3>
          <br></br>
        </div>
          <MiniSwiper/>
          <div class="center-container">
            <button class="article-pagetsx-button">Your Button Text</button>
          </div>
      </div>
    </>
  );
}
