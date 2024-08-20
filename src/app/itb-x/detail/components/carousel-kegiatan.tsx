"use client";

import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

interface CarouselKegiatanProps {
  images: string[];
  interval?: number;
}

const CarouselKegiatan: React.FC<CarouselKegiatanProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isCarouselActive, setIsCarouselActive] = React.useState(false);
  const imageCount = images.length;

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
  }, [imageCount]);

  const goToPrev = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageCount - 1 : prevIndex - 1,
    );
  }, [imageCount]);

  React.useEffect(() => {
    if (isCarouselActive) {
      const autoplay = setInterval(() => {
        goToNext();
      }, interval);

      return () => clearInterval(autoplay);
    }
  }, [isCarouselActive, goToNext, interval]);

  const handleFlipClick = () => {
    setIsCarouselActive((prev) => !prev);
    if (!isCarouselActive) {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="relative w-full">
      {/* Lingkaran logo */}
      <div className="absolute -left-4 -top-4 z-20 h-24 w-24 rounded-full bg-red-600 bg-[url('/itb-x/detail/logo-hmif.png')] bg-cover bg-center md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48"></div>

      {!isCarouselActive ? (
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-bl-[40px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[40px] bg-[url('/itb-x/bg-line.png')] bg-cover bg-center md:h-[320px] md:rounded-[80x] md:rounded-br-[120px] md:rounded-tl-[120px] md:rounded-tr-[80px] lg:h-[400px] lg:rounded-[100px] lg:rounded-br-[180px] lg:rounded-tl-[180px] lg:rounded-tr-[100px] xl:h-[500px] xl:rounded-br-[240px] xl:rounded-tl-[240px]">
          <p className="absolute z-10 text-center font-mogula text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Himpunan Mahasiswa Informatika
          </p>
          <Image
            src="/itb-x/detail/hmif-icon.png"
            alt="hmif-icon"
            width={1080}
            height={1080}
            className="w-full object-cover md:px-40 lg:px-60 xl:px-80"
          />
        </div>
      ) : (
        <Carousel className="overflow-hidden">
          <div className="relative h-[300px] w-full md:h-[320px] lg:h-[400px] xl:h-[500px]">
            <CarouselContent
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <CarouselItem key={index} className="w-full flex-shrink-0">
                  <div className="h-[300px] overflow-hidden rounded-bl-[40px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[40px] md:h-[320px] md:rounded-[80x] md:rounded-br-[120px] md:rounded-tl-[120px] md:rounded-tr-[80px] lg:h-[400px] lg:rounded-[100px] lg:rounded-br-[180px] lg:rounded-tl-[180px] lg:rounded-tr-[100px] xl:h-[500px] xl:rounded-br-[240px] xl:rounded-tl-[240px]">
                    <Image
                      src={image}
                      alt={`image-${index + 1}`}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      )}

      {/* Indicator Dots */}
      {isCarouselActive && (
        <div className="absolute bottom-12 left-1/2 mb-2 flex -translate-x-1/2 transform space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-[#99E0FF]" : "bg-[#9EA2AD]"
              }`}
            ></div>
          ))}
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
