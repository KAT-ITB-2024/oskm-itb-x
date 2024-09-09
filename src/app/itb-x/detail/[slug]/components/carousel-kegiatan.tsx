"use client";

import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import type { HimpunanBSO, UKM } from "../../../data/data_lembaga";
import { type CarouselApi } from "~/components/ui/sliderCarousel";
import Autoplay from "embla-carousel-autoplay";
import SliderPagination from "~/app/itb-x/list-lembaga/components/SliderPagination";

interface CarouselKegiatanProps {
  hmps: HimpunanBSO | UKM;
}

const CarouselKegiatan: React.FC<CarouselKegiatanProps> = ({ hmps }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isCarouselActive, setIsCarouselActive] = React.useState(false);

  const updateIndex = React.useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
    api.plugins().autoplay.reset();
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    // Listen for when the carousel changes slides
    api.on("select", updateIndex);

    // Set the initial index
    updateIndex();

    return () => {
      api.off("select", updateIndex); // Cleanup on unmount
    };
  }, [api, updateIndex]);

  const handleFlipClick = () => {
    setIsCarouselActive((prev) => !prev);
    if (!isCarouselActive) {
      setActiveIndex(0);
    }
  };

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
    <div className="relative w-full">
      {/* Lingkaran logo */}
      <div className="absolute -left-4 -top-4 z-20 h-24 w-24 rounded-full bg-red-600 bg-cover bg-center md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48">
        <div className="relative h-full w-full rounded-full">
          <Image
            src={hmps.logo_lembaga}
            alt={hmps.nama_lembaga}
            className="h-full w-full rounded-full object-cover"
            width={360}
            height={360}
          />
        </div>
      </div>

      {!isCarouselActive ? (
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-bl-[40px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[40px] bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:h-[320px] md:rounded-[80x] md:rounded-br-[120px] md:rounded-tl-[120px] md:rounded-tr-[80px] lg:h-[400px] lg:rounded-[100px] lg:rounded-br-[180px] lg:rounded-tl-[180px] lg:rounded-tr-[100px] xl:h-[500px] xl:rounded-br-[240px] xl:rounded-tl-[240px]">
          <p className="absolute z-10 w-full text-center font-mogula text-3xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl xl:text-6xl">
            {hmps.nama_lembaga}
          </p>
          {"fakultas" in hmps ? (
            <Image
              src={getDecorationSrc(hmps.fakultas)}
              alt={hmps.nama_lembaga}
              width={1080}
              height={1080}
              className="w-full object-cover md:px-40 lg:px-60 xl:px-80"
            />
          ) : (
            <div className="w-[calc(100vw-96px)] lg:w-[calc(100vw-144px)]"></div>
          )}
        </div>
      ) : (
        <Carousel
          className="overflow-hidden"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent className="flex">
            {hmps.foto_kegiatan.map((image, index) => (
              <CarouselItem key={index} className="w-full flex-shrink-0">
                <div className="h-[300px] overflow-hidden rounded-bl-[40px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[40px] md:h-[320px] md:rounded-[80x] md:rounded-br-[120px] md:rounded-tl-[120px] md:rounded-tr-[80px] lg:h-[400px] lg:rounded-[100px] lg:rounded-br-[180px] lg:rounded-tl-[180px] lg:rounded-tr-[100px] xl:h-[500px] xl:rounded-br-[240px] xl:rounded-tl-[240px]">
                  <Image
                    src={image}
                    alt={`image-${index + 1}`}
                    width={1080}
                    height={1080}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}

      {/* Indicator Dots */}
      {isCarouselActive && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
          <SliderPagination
            count={hmps.foto_kegiatan.length}
            activeIndex={activeIndex}
          />
        </div>
      )}

      {/* Flip Icon */}
      <button
        onClick={handleFlipClick}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 transform"
        aria-label={isCarouselActive ? "Stop carousel" : "Start carousel"}
      >
        <Image
          src={`/itb-x/detail/${isCarouselActive ? "flip-right" : "flip-left"}.svg`}
          alt="flip"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </button>
    </div>
  );
};

export default CarouselKegiatan;
