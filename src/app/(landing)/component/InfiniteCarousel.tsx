"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
  xlarge: "w-40 h-32 md:w-64 md:h-36 xl:w-[19rem] xl:h-[10rem]",
  large: "w-36 h-28 md:w-60 md:h-32 xl:w-72 xl:h-36",
  medium: "w-28 h-24 md:w-40 md:h-32 xl:w-44 xl:h-36",
  small: "w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32",
};

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = React.memo(({
  items,
  direction,
  size,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loopItems, setLoopItems] = useState<CarouselItem[]>([]);

  useEffect(() => {
    setLoopItems([...items, ...items]);
  }, [items]);

  const animateScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 1;
    const maxScroll = container.scrollWidth / 2;

    if (direction === "left") {
      container.scrollLeft += scrollAmount;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
    } else {
      container.scrollLeft -= scrollAmount;
      if (container.scrollLeft <= 0) {
        container.scrollLeft = maxScroll;
      }
    }
  }, [direction]);

  useEffect(() => {
    const animationId = requestAnimationFrame(function animate() {
      animateScroll();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [animateScroll]);

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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

InfiniteCarousel.displayName = 'InfiniteCarousel';

export default InfiniteCarousel;