import React from "react";

interface SliderPaginationMarkerProps {
  isActive: boolean;
}

function SliderPaginationMarker(props: SliderPaginationMarkerProps) {
  const { isActive } = props;
  return (
    <div
      className={`${isActive ? "bg-[#99E0FF] shadow-[0_0_10px_0_#FFFFFF]" : "bg-[#9EA2AD]"} h-[10px] w-[10px] rounded-full`}
    ></div>
  );
}

export default SliderPaginationMarker;
