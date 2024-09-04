import Image from "next/image";
import React from "react";
import { type Article } from "~/types/articles/articleType";
import { MdOutlineTimer } from "react-icons/md";
import Link from "next/link";

const Card: React.FC<Article> = ({
  slug,
  title,
  author,
  readTime,
  description,
  image,
  content,
}) => {
  return (
    <Link href={`/article/detail/${slug}`}>
      <div
        className="relative mx-auto mt-6 flex h-[400px] w-[275px] scale-100 transform flex-col justify-between self-center overflow-hidden rounded-[20px] bg-white p-[20px_15px] text-center shadow-lg transition-transform duration-300 sm:w-[300px]"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 0 15px #64B1F7BF";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 4px 8px #64B1F7BF";
        }}
      >
        <Image
          src={image.url}
          alt={title}
          width={4040}
          height={300}
          className="h-[300px] rounded-[20px] object-cover shadow-md"
        />
        <div className="mt-2 flex flex-1 flex-col justify-between px-1 py-[5px]">
          <h2
            className="m-0 line-clamp-1 h-auto w-full text-left font-mogula text-[17.75px] font-normal leading-[21.31px] text-[#0010A4]"
            style={{ textShadow: "3.55px 5.33px 44.39px 0px #64B1F7" }}
          >
            {title}
          </h2>
          <div className="font-REM m-0 w-full text-left text-[10.65px] font-normal leading-[15.98px] text-[#9EA2AD]">
            <span className="line-clamp-1 text-[#999]">Oleh {author}</span>
          </div>
          <p className="font-REM my-2 line-clamp-3 h-auto w-full text-justify text-[12.43px] font-normal leading-[18.64px] text-[#3678FF]">
            {description}
          </p>
          <div className="mt-[5px] flex justify-between text-right text-[12px] font-normal leading-[16px] text-[#FB43BD]">
            <div className="flex items-center gap-1 font-semibold">
              <MdOutlineTimer />
              <p>{(readTime).toFixed(0)} mins read</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
