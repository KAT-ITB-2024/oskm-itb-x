"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface InfiniteCarouselProps {
  logos: { src: string }[];
  direction: "left" | "right";
  size: "large" | "medium" | "small";
}

const sizeClasses = {
  large: "w-32 h-16 md:w-60 md:h-32 xl:w-72 xl:h-36",
  medium: "w-24 h-16 md:w-40 md:h-32 xl:w-44 xl:h-36",
  small: "w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32",
};

const InfiniteCarousel = ({
  logos,
  direction,
  size,
}: InfiniteCarouselProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    function addAnimation() {
      if (!scroller) return;

      const innerScroller = scroller.querySelector(".scroll_inner");

      if (!innerScroller) return;

      if (innerScroller.getAttribute("data-cloned") === "true") return;

      const innerScrollerChildren = Array.from(innerScroller.children);

      innerScrollerChildren.forEach((item) => {
        const extendedLogo = item.cloneNode(true) as HTMLElement;

        innerScroller.appendChild(extendedLogo);
      });

      innerScroller.setAttribute("data-cloned", "true");
    }

    addAnimation();
  }, []);

  return (
    <div ref={scrollerRef} className="w-10/12 scroller">
      <div
        className={`flex gap-2 py-2 scroll_inner md:gap-4 md:py-4 ${
          direction === "left"
            ? "animate-infinite_scroll_left"
            : "animate-infinite_scroll_right"
        }`}
      >
        {logos.map((logo, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center 
              rounded-lg border-[0.1px] bg-gradient-to-r 
              from-blue-300 to-blue-500 p-2 shadow-[0px_4px_10px_rgba(255,255,255,0.5)] 
              ${sizeClasses[size]}`}
            >
              <Image
                src={logo.src}
                alt={`logo ${index + 1}`}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
