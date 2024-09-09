import Link from "next/link";
import React from "react";

function SliderButton({ link }: { link: string }) {
  return (
    <button
      disabled
      className="mt-4 flex w-fit items-center justify-center rounded-[32px] bg-[url('/itb-x/bg-ellips.png')] bg-[30%] px-4 py-2 text-center font-rem text-[12px] leading-[18px] shadow-[4px_4px_40px_0px_#FFBF51]"
    >
      <Link href={link} className="text-[#006E6F]">
        Read More
      </Link>
    </button>
  );
}

export default SliderButton;
