import React from "react";
import Image from "next/image";

interface SliderNavigatorProps {
  direction: "left" | "right";
  onClick?: () => void;
}

function SliderNavigator(props: SliderNavigatorProps) {
  const { direction, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-[#f9feab] shadow-[2px_3px_20px_0px_#FFBF51] hover:bg-[#eff590]"
    >
      <Image
        src={`/itb-x/slider-${direction}.svg`}
        alt={direction}
        width={16}
        height={16}
      />
    </div>
  );
}

export default SliderNavigator;
