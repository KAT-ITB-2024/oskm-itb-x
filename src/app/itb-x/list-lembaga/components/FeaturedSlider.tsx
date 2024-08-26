import React from "react";
import SliderButton from "./SliderButton";

interface SliderProps {
  name: string;
  photoPath?: string;
  link?: string;
}

function FeaturedSlider(props: SliderProps) {
  const { name, photoPath, link } = props;
  return (
    <div className="flex h-full w-full items-center justify-center gap-x-4">
      <div
        className={`flex h-full w-full flex-col justify-between rounded-[16px] px-6 ${photoPath ? "" : "bg-black"}`}
      >
        <div className={`h-full`}>
          <p className="pt-6 font-mogula text-[24px] leading-[32px] text-white">
            {name}
          </p>
          <SliderButton disabled={link ? false : true} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedSlider;
