import React from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

interface Merchandise {
  name: string;
  price: string;
  image: string;
}

export default function MerchandiseSlider({
  merchandises,
}: {
  merchandises: Merchandise[];
}) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Image
        src="/components/merchandise-card.svg"
        alt="Merchandise Card"
        className="absolute w-full"
        width={100}
        height={100}
      />
      <div className="z-10 inline-flex w-full flex-nowrap overflow-hidden bg-[url('/components/slider-background.png')] bg-cover px-[20px] py-[16px]">
        <ul className="flex animate-infinite-scroll justify-center text-[#0010A4]">
          {merchandises.map((item, index) => (
            <>
              <li
                key={"star-" + index}
                className="mx-2 flex items-center justify-center"
              >
                <IoStar className="h-[24px] w-[24px]" />
              </li>
              <li
                key={"merch-" + index}
                className="mx-2 flex items-center justify-center"
              >
                <h1 className="text-nowrap text-3xl font-normal">
                  {item.name}
                </h1>
              </li>
            </>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll justify-center text-[#0010A4]"
          aria-hidden="true"
        >
          {merchandises.map((item, index) => (
            <>
              <li
                key={"star-" + index}
                className="mx-2 flex items-center justify-center"
              >
                <IoStar className="h-[24px] w-[24px]" />
              </li>
              <li
                key={"merch-" + index}
                className="mx-2 flex items-center justify-center"
              >
                <h1 className="text-nowrap text-3xl font-normal">
                  {item.name}
                </h1>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
