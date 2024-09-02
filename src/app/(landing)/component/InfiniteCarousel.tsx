import Image from "next/image";

import styles from "./../styles.module.css";

interface CarouselItem {
  src: string;
  alt: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  direction: "left" | "right";
  size: "xlarge" | "large" | "medium" | "small";
}

const sizeClasses = {
  xlarge: "w-[15rem] md:w-[20rem] xl:w-[24rem] aspect-[2/1]",
  large: "w-[13rem] md:w-[20rem] xl:w-[24rem] aspect-[10/4]",
  medium: "w-[8rem] md:w-[10rem] xl:w-[13rem] aspect-[4/3]",
  small: "w-[4rem] md:w-[5rem] xl:w-[8rem] aspect-[1/1]",
};

const InfiniteCarousel = ({
  items,
  direction,
  size,
}: InfiniteCarouselProps) => {
  return (
    <div className={`flex w-full gap-1 md:gap-3 lg:gap-5 overflow-hidden ${styles.logoContainer}`}>
      <div className={`${direction === "left" ? "animate-slide-left" : "animate-slide-right"} inline-flex gap-1 md:gap-3 lg:gap-5 ${styles.logoSlides}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-shrink-0 items-center justify-center p-4 ${styles.glassmorphism} ${sizeClasses[size]}`}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                draggable={false}
                loading="lazy"
                quality={10}
                placeholder="blur"
                blurDataURL="/logo/logo.png"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={`${direction === "left" ? "animate-slide-left" : "animate-slide-right"} inline-flex gap-1 md:gap-3 lg:gap-5 ${styles.logoSlides}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-shrink-0 items-center justify-center p-4 ${styles.glassmorphism} ${sizeClasses[size]}`}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                draggable={false}
                loading="lazy"
                quality={10}
                placeholder="blur"
                blurDataURL="/logo/logo.png"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
