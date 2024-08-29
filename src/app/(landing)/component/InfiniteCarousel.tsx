"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./../styles.module.css";

interface CarouselItem {
  src: string;
  alt: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  speed: number;
  direction: "left" | "right";
  size: "xlarge" | "large" | "medium" | "small";
}

const sizeClasses = {
  xlarge: "w-40 h-32 md:w-64 md:h-36 xl:w-[19rem] xl:h-[10rem]",
  large: "w-36 h-28 md:w-60 md:h-32 xl:w-72 xl:h-36",
  medium: "w-28 h-24 md:w-40 md:h-32 xl:w-44 xl:h-36",
  small: "w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32",
};

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  speed,
  direction,
  size,
}) => {
  const [loopItems, setLoopItems] = useState<CarouselItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplikasi item untuk efek infinite
    setLoopItems([...items, ...items]);
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animateScroll = () => {
      if (direction === "left") {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      } else {
        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2;
        } else {
          container.scrollLeft -= 1;
        }
      }
    };

    const animation = setInterval(animateScroll, speed);

    return () => clearInterval(animation);
  }, [direction, speed]);

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div className="inline-flex gap-1 md:gap-3 lg:gap-5">
        {loopItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-shrink-0 items-center justify-center p-4 ${styles.glassmorphism} ${sizeClasses[size]}`}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                objectFit="contain"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
