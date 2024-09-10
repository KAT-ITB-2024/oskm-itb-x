import React from "react";
import SliderPaginationMarker from "./SliderPaginationMarker";

interface SliderPaginationProps {
  count: number;
  activeIndex: number; // Index start from 0
}

function SliderPagination(props: SliderPaginationProps) {
  const { count, activeIndex } = props;
  const countArray = Array.from({ length: count }, (_, i) => i + 1);

  function checkActiveIndex(idx: number) {
    if (activeIndex > count - 1) return false;
    if (idx === activeIndex) return true;
    return false;
  }

  return (
    <div className="flex gap-x-1">
      {countArray.map((i) => (
        <SliderPaginationMarker key={i} isActive={checkActiveIndex(i - 1)} />
      ))}
    </div>
  );
}

export default SliderPagination;
