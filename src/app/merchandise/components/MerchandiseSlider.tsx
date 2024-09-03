import React from "react";
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
    <div className="relative flex h-[120px] w-full items-start justify-center bg-[url('/components/merchandise-card.webp')] bg-contain bg-left bg-no-repeat sm:h-[200px] sm:items-center">
      <div className="z-10 inline-flex w-full flex-nowrap overflow-hidden bg-[url('/components/slider-background.png')] bg-cover bg-left bg-no-repeat px-[20px] py-[16px]">
        <ul className="flex animate-slide-left justify-center font-mogula text-[#0010A4]">
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
          className="flex animate-slide-left justify-center text-[#0010A4] font-mogula"
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
