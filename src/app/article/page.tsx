"use client";

import React from "react";
import Swiper from "src/app/article/components/SwiperCarousel";
import MiniArticleCarousel from "src/app/article/components/MiniArticleCarousel";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <div className="">
      <Swiper />
      <MiniArticleCarousel />

      <Image
        src="/article-icons/coral-left.webp"
        alt="Coral Left"
        height={500}
        width={500}
        className="absolute bottom-0 left-0"
        draggable={false}
      />
      <Image
        src="/article-icons/coral-right.webp"
        alt="Coral Right"
        height={500}
        width={500}
        className="absolute bottom-0 right-0"
        draggable={false}
      />
    </div>
  );
};

export default Page;
