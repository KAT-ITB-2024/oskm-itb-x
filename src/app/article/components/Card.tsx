"use client";

import Image from 'next/image';
import React from 'react';
import { type Article } from '~/types/articles/articleType';
import { MdOutlineTimer } from "react-icons/md";

const Card: React.FC<Article> = ({
  slug,
  title,
  author,
  readTime,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-[400px] p-[20px_15px] rounded-[20px] mt-6 bg-white shadow-lg overflow-hidden text-center relative transition-transform duration-300 transform scale-100"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 15px #64B1F7BF';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 8px #64B1F7BF';
      }}
    >
      <Image
        src={image.url}
        alt={title}
        width={5000}
        height={5000}
        className="h-[300px] object-cover rounded-[20px] shadow-md mx-auto"
      />
      <div className="flex-1 flex flex-col justify-between py-[5px] px-1 mt-2">
        <h2 className="font-mogula text-[17.75px] font-normal leading-[21.31px] line-clamp-1 text-left text-[#0010A4] w-full h-auto m-0" style={{ textShadow: '3.55px 5.33px 44.39px 0px #64B1F7' }}>
          {title}
        </h2>
        <div className="font-REM text-[10.65px] font-normal leading-[15.98px] text-left text-[#9EA2AD] w-full m-0">
          <span className="text-[#999] line-clamp-1">Oleh {author}</span>
        </div>
        <p className="font-REM text-[12.43px] font-normal leading-[18.64px] text-justify text-[#3678FF] my-2 w-full h-auto line-clamp-3">
          {description}
        </p>
        <div className="text-[12px] font-normal leading-[16px] text-right text-[#FB43BD] mt-[5px] flex justify-between">
          <div className="flex gap-1 items-center font-semibold">
            <MdOutlineTimer />
            <p>{(readTime / 60).toFixed(0)} mins read</p>
          </div>
          <a
            href={`/article/detail/${slug}`}
            className=""
          >
            {"Read More >>>"}
          </a>
        </div>
      </div>

    </div>
  );
};

export default Card;
