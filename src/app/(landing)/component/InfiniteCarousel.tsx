"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface InfiniteCarouselProps {
  logos: { src: string }[];
  direction: "left" | "right";
  size: "large" | "medium" | "small";
}

const sizeClasses = {
  large: "w-32 h-32",
  medium: "w-24 h-24",
  small: "w-16 h-16",
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
    <div ref={scrollerRef} className="w-[200px] scroller">
      <div
        className={`flex gap-4 py-4 scroll_inner ${direction === "left" ? "animate-infinite_scroll_left" : "animate-infinite_scroll_right"}`}
      >
        {logos.map((logo, index) => {
          return (
            <div key={index} className={`bg-white p-1 ${sizeClasses[size]}`}>
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
