import Image from "next/image";
import React, { forwardRef } from "react";
import "~/styles/interactive-map-styles.css";
import type { Marker } from "../map-data/map-markers";
import LocationImage from "./LocationImage";
import "./mapStyles.css";

export interface MapPopupProps {
  locationData: Marker;
  closePopup: () => void;
}

const MapPopup = forwardRef<HTMLDivElement, MapPopupProps>(
  ({ locationData, closePopup }, ref) => {
    const description =
      locationData.description ??
      "Tidak ada deskripsi yang tersedia untuk lokasi ini.";
    return (
      <>
        <div className="fixed inset-0 z-[200] bg-black opacity-50"></div>
        <div
          ref={ref}
          className="absolute left-1/2 top-[55%] z-[250] mt-4 h-auto max-h-[70vh] min-h-[450px] w-[75vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 transform lg:left-auto lg:right-0 lg:top-[50%] lg:mr-8 lg:mt-8 lg:h-auto lg:max-h-[600px] lg:translate-x-0"
          id="popup-container"
        >
          <div className="relative z-10 flex flex-col justify-center px-4 py-2">
            <button
              onClick={closePopup}
              id="close-btn"
              className="cursor-pointer self-end pr-2 pt-5"
            >
              <Image
                src={"/components/close-btn.png"}
                width={16}
                height={16}
                alt="Close Button"
              />
            </button>
            <div className="flex flex-col items-center justify-center">
              <p className="mb-3 text-center text-[25px] text-white md:text-[27px] lg:text-[30px]">
                {locationData.name ?? "Lorem ipsum"}
              </p>
              <LocationImage
                src={locationData.image ?? "/maps/dummy_map.png"}
              />
              <p className="scrollbox mb-4 mt-2 flex h-[130px] flex-col items-center gap-6 overflow-y-scroll px-4 pb-4 text-justify text-[16px] leading-6 text-white md:my-5 md:h-[250px] md:text-[18px] md:leading-7 lg:h-[250px] lg:overflow-y-auto lg:text-[20px] lg:leading-8">
                {description}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  },
);

MapPopup.displayName = "MapPopup";

export default MapPopup;
