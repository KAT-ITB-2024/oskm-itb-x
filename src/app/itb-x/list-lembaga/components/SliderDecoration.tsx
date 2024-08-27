import React from "react";
import Image from "next/image";
interface SliderDecorationProps {
  fakultasName: string;
}

function SliderDecoration(props: SliderDecorationProps) {
  const { fakultasName } = props;
  const getDecorationSrc = (fakultasName: string) => {
    const splitDash = fakultasName.split("-");
    const basePath = "/itb-x/hiasan/hiasan";
    if (splitDash.length == 2) {
      if (splitDash[0] == "SITH" && splitDash[1] == "R")
        return `${basePath}_SITH-R.png`;
      if (splitDash[0] == "SITH" && splitDash[1] == "S")
        return `${basePath}_SITH-S.png`;
      return `${basePath}_${splitDash[0]}.png`;
    }

    return `${basePath}_${fakultasName}.png`;
  };

  return (
    <div className="relative h-full w-[50px] rotate-180 overflow-hidden rounded-[136px] bg-[url('/itb-x/bg-ellips.png')] bg-[left_5%_top_37%] shadow-[2px_2px_5px_0px_#FFBF51] md:w-[85px] lg:w-[130px]">
      {/** Top decoration */}
      <Image
        src={getDecorationSrc(fakultasName)}
        alt={fakultasName}
        width={256}
        height={256}
        className={`absolute bottom-0 -translate-y-5 rotate-180 scale-[3] md:translate-y-1 md:scale-[2] lg:translate-y-1 lg:scale-[1.6]`}
      />
      {/** Bottom decoration */}
      <Image
        src={getDecorationSrc(fakultasName)}
        alt={fakultasName}
        width={256}
        height={256}
        className={`absolute top-0 translate-y-5 scale-[3] md:-translate-y-1 md:scale-[2] lg:-translate-y-1 lg:scale-[1.6]`}
      />
    </div>
  );
}

export default SliderDecoration;
