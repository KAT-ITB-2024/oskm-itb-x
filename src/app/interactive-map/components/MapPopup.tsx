import Image from "next/image";
import React from "react";
import "~/styles/interactive-map-styles.css";
import mapLocations from "./map-data.json";
import type { locationCodes } from "../map-types";

export interface MapPopupProps {
  locationCode: locationCodes;
  closePopup: () => void;
}

function MapPopup({ locationCode, closePopup }: MapPopupProps) {
  const description =
    mapLocations[locationCode].deskripsi ?? "Lorem ipsum dolor";
  return (
    <div className="z-100 absolute left-1/2 top-1/2 flex h-[85vh] w-[75vw] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
      <Image
        src="/components/map-popup-bckg.png"
        alt="Map Popup"
        width={1080}
        height={1920}
        className="absolute z-0 h-auto rounded-[9px] object-cover shadow-[0px_0px_50px_10px_#1863E8]"
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-2">
        <Image
          src="/components/close-btn.png"
          alt="Close Button"
          width={16}
          height={16}
          className="cursor-pointer self-end py-4"
          onClick={closePopup}
        />
        <p className="mb-4 text-center text-[24px] text-white">
          {mapLocations[locationCode].nama_lokasi ?? "Lorem ipsum"}
        </p>
        <Image
          src="/components/map-popup-frame.png"
          alt="Picture Frame"
          width={300}
          height={200}
          className="h-auto w-[85%]"
        />
        <div className="scrollbox my-4 flex h-[200px] flex-col items-center gap-6 overflow-y-scroll px-4 pb-4 text-justify text-[16px] leading-6 text-white">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MapPopup;
