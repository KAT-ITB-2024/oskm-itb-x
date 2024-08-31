import React from "react";
import Image from "next/image";

function EllipsLembaga({ imgSrc }: { imgSrc?: string }) {
  return (
    <div className="relative z-[5] flex h-[210px] w-[243px] items-center justify-center rounded-[132px] bg-[url('/itb-x/bg-ellips.png')] bg-cover bg-[left_5%_top_45%] lg:h-[228px] lg:w-[270px]">
      <div className="flex h-[65%] w-[65%] items-center justify-center pb-2">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="Lembaga"
            className="h-[145px] w-[145px]"
            width={220}
            height={220}
          />
        )}
      </div>
      <div className="absolute bottom-0 flex h-[42px] w-[42px] translate-y-[20px] rotate-180 items-center justify-center rounded-full bg-[url('/itb-x/bg-ellips.png')] bg-cover bg-[left_10%_top_50%] lg:h-[52px] lg:w-[52px] lg:translate-y-[25px]">
        <Image
          src="/itb-x/flip-arrow.svg"
          width={27}
          height={18}
          alt="Flip button"
          className="rotate-180 object-contain lg:h-[22px] lg:w-[33px]"
        />
      </div>
    </div>
  );
}

export default EllipsLembaga;
