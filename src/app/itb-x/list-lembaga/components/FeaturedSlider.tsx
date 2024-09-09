import React from "react";
import SliderButton from "./SliderButton";
import Image from "next/image";

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
        className={`relative flex h-full w-full flex-col justify-between rounded-[16px] ${photoPath ? "" : "bg-black"}`}
      >
        <Image
          src={photoPath!}
          alt={name}
          width={700}
          height={700}
          className="absolute -z-10 h-full w-full object-cover"
        />
        <div className={`h-full max-w-96 pl-4`}>
          <p className="w-fit pt-6 font-mogula text-lg text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-5xl">
            {name}
          </p>
          <SliderButton link={link!} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedSlider;
