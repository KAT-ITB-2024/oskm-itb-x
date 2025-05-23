"use client";

import React, { useEffect } from "react";
import FeaturedSlider from "./FeaturedSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/sliderCarousel";
import SliderPagination from "./SliderPagination";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "~/components/ui/sliderCarousel";
import SliderDecoration from "./SliderDecoration";

interface SliderContainerProps {
  data: {
    name: string;
    fakultas: string;
    photoPath?: string;
    link?: string;
  }[];
}

function SliderContainer(props: SliderContainerProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const { data } = props;

  const updateIndex = React.useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
    api.plugins().autoplay.reset();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    // Listen for when the carousel changes slides
    api.on("select", updateIndex);

    // Set the initial index
    updateIndex();

    return () => {
      api.off("select", updateIndex); // Cleanup on unmount
    };
  }, [api, updateIndex]);

  return (
    <div className="relative h-[370px] w-[80vw] rounded-[36px] bg-[radial-gradient(109.4%_109.4%_at_50%_50%,_rgba(170,233,218,0.75)_0%,_rgba(211,246,244,0.75)_99.99%,_rgba(245,245,245,0.75)_100%)] px-6 py-1 sm:h-[560px]">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
        className="flex h-full gap-x-4 py-6"
      >
        <SliderDecoration fakultasName={data[activeIndex]!.fakultas} />
        <CarouselContent className="h-full w-full">
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <FeaturedSlider
                key={index}
                name={item.name}
                photoPath={item.photoPath}
                link={item.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-[#f9feab] shadow-[2px_3px_20px_0px_#FFBF51] hover:bg-[#eff590]" />
        <CarouselNext className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-[#f9feab] shadow-[2px_3px_20px_0px_#FFBF51] hover:bg-[#eff590]" />
      </Carousel>
      <div className="absolute bottom-14 left-[37%] sm:left-1/2">
        <SliderPagination count={data.length} activeIndex={activeIndex} />
      </div>
    </div>
  );
}

export default SliderContainer;
