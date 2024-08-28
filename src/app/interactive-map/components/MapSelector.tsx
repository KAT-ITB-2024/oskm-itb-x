import React from "react";
import Image from "next/image";

function MapSelector({
  toggleLocationChoice,
  locationChoice,
}: {
  toggleLocationChoice: () => void;
  locationChoice: "Ganesha" | "Jatinangor";
}) {
  const toggleButton = () => {
    toggleLocationChoice();
  };
  const isGanesha = locationChoice === "Ganesha";
  return (
    <div
      className="relative inline-block h-[61px] w-[233px] cursor-pointer"
      onClick={toggleButton}
    >
      <Image
        src="/maps/button-images/ganesha.png"
        alt="Ganesha"
        width={233}
        height={61}
        className={`absolute left-0 top-[10%] h-auto w-full transition-opacity duration-500 ease-in-out ${isGanesha ? "opacity-100" : "hidden opacity-0"}`}
        draggable={false}
      />
      <Image
        src="/maps/button-images/jatinangor.png"
        alt="Jatinangor"
        width={233}
        height={61}
        className={`absolute left-0 top-[10%] h-auto w-full transition-opacity duration-500 ease-in-out ${!isGanesha ? "opacity-100" : "hidden opacity-0"}`}
        draggable={false}
      />
    </div>
  );
}

export default MapSelector;
