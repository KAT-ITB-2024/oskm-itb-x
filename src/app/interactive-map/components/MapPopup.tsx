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
        <div className="absolute inset-0 z-[200]"></div>
        <div
          ref={ref}
          className="absolute left-1/2 top-1/2 z-[250] h-[90%] w-[90%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[url('/components/map-popup-bckg.webp')] bg-cover bg-center bg-no-repeat lg:left-auto lg:right-0 lg:mr-8 lg:translate-x-0"
          // id="popup-container"
        >
          <div className="z-10 flex h-full w-full flex-col justify-center overflow-hidden px-5 py-5">
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
                draggable={false}
              />
            </button>
            <div className="mt-4 flex flex-1 flex-col items-center justify-center">
              <p className="text-center font-mogula text-2xl text-white md:text-[27px] lg:text-[30px]">
                {locationData.name ?? "Lorem ipsum"}
              </p>
              <LocationImage
                src={locationData.image ?? "/maps/dummy_map.png"}
              />
              <div className="flex-1 overflow-y-auto w-full box-border max-h-[300px] md:max-h-[200px] scrollbox px-5 rounded-xl">
                <p className="text-justify font-rem text-sm text-white md:text-base lg:text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
);

MapPopup.displayName = "MapPopup";

export default MapPopup;
