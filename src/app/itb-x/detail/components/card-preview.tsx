"use client";

import { useState } from "react";
import Image from "next/image";

interface CardPreviewProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

const CardPreview: React.FC<CardPreviewProps> = ({
  title,
  subtitle,
  desc,
  image,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative flex h-[400px] w-full cursor-pointer flex-col gap-y-2 overflow-hidden rounded-[20px] bg-[#A2F8F3] px-4 pb-8 pt-4 xl:h-[560px] xl:px-8 xl:pt-8">
      <h1 className="relative z-10 text-center font-mogula text-2xl text-[#05A798] xl:text-4xl">
        {title}
      </h1>
      <p className="relative z-10 px-6 text-center font-mogula text-xl text-white xl:text-2xl">
        {subtitle}
      </p>
      <div className="relative z-10 h-[180px] w-full rounded-[60px] bg-[url('/itb-x/detail/desc-card-preview.png')] md:rounded-[100px] xl:h-[320px] xl:rounded-[160px]">
        {isFlipped ? (
          <div className="flex h-full items-center justify-center px-6">
            <p className="line-clamp-4 overflow-hidden text-ellipsis text-justify text-[#004441]">
              {desc}
            </p>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-[60px] md:rounded-[100px] xl:rounded-[160px]"
            draggable={false}
          />
        )}
        {/* Flip Icon */}
        <button
          onClick={handleFlip}
          className="absolute -bottom-6 left-1/2 z-20 -translate-x-1/2 transform"
        >
          <Image
            src={
              isFlipped
                ? "/itb-x/detail/flip-right.svg"
                : "/itb-x/detail/flip-left.svg"
            }
            alt="flip"
            width={60}
            height={60}
            className="w-4/5 cursor-pointer xl:w-full"
            draggable={false}
          />
        </button>
      </div>

      {/* ombak-card positioned absolutely */}
      <Image
        src="/itb-x/detail/ombak-card.svg"
        alt="ombak-card"
        width={600}
        height={600}
        className="absolute bottom-0 left-0 z-0"
        draggable={false}
      />
    </div>
  );
};

export default CardPreview;
