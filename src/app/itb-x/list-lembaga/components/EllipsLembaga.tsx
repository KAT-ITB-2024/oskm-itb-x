import React from "react";
import Image from "next/image";

function EllipsLembaga({ imgSrc }: { imgSrc?: string }) {
  return (
    <div className="relative z-[5] flex h-[210px] w-[243px] items-center justify-center rounded-[132px] lg:h-[228px] lg:w-[270px]">
      <div className="relative h-full w-full overflow-hidden rounded-[132px]">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="Lembaga"
            className="absolute -z-10 h-full w-full object-cover bg-white"
            width={400}
            height={400}
          />
        )}
      </div>

      <div className="absolute bottom-0 z-10 flex h-[42px] w-[42px] translate-y-[20px] rotate-180 items-center justify-center rounded-full bg-[url('/itb-x/bg-ellips.png')] bg-cover bg-[left_10%_top_50%] lg:h-[52px] lg:w-[52px] lg:translate-y-[25px]">
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
