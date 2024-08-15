import React, { useRef, useEffect } from "react";
import * as ReactDOMClient from "react-dom/client";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import MapPopup from "./MapPopup";
import type { locationCodes } from "../map-types";
import mapLocations from "./map-data.json";

export interface MapProps {
  center: [number, number]; // lon, lat
  zoom: number;
  bounds: maptilersdk.LngLatBoundsLike;
  useMarkers?: boolean;
}

function createCustomMarker(iconPath: string): HTMLElement {
  const newMarkerElement = document.createElement("div");
  newMarkerElement.className = "custom-marker";
  newMarkerElement.style.backgroundImage = `url(${iconPath})`;
  newMarkerElement.style.backgroundSize = "contain";
  newMarkerElement.style.width = "32px";
  newMarkerElement.style.height = "32px";
  return newMarkerElement;
}

function MapView({ center, zoom, bounds, useMarkers }: MapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maptilersdk.Map | null>(null);
  const [popupLocation, setPopupLocation] =
    React.useState<null | locationCodes>(null);
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);

  function closePopup() {
    setPopupLocation(null);
    setIsPopupVisible(false);
  }

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter(center);
      mapRef.current.setZoom(zoom);
      mapRef.current.setMaxBounds(bounds);
      return;
    }

    // Initialize the Map
    mapRef.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: center,
      zoom: zoom,
      maxBounds: bounds,
      pitch: 30,
      // apiKey: "CKoEVetWUHS4By66BY6j",
    });

    // Add markers
    if (useMarkers) {
      const locations = Object.keys(mapLocations) as locationCodes[];
      locations.forEach((locationCode) => {
        // Create marker
        const markerElement = createCustomMarker("/components/map-marker.png");
        const locationData = mapLocations[locationCode];
        const position: [number, number] = [
          parseFloat(locationData.longitude),
          parseFloat(locationData.latitude),
        ];
        const marker = new maptilersdk.Marker({
          element: markerElement,
        })
          .setLngLat(position)
          .addTo(mapRef.current!);

        // Create popup event listener
        markerElement.addEventListener("click", () => {
          setPopupLocation(locationCode);
          setIsPopupVisible(true);
        });
      });
    }

    // Clean map on unmount
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [center, zoom, bounds, useMarkers]);

  return (
    <div className="relative h-[85vh] w-[100%]">
      <div ref={mapContainer} className={`absolute h-[100%] w-[100%]`}></div>
      {isPopupVisible && popupLocation && (
        <MapPopup locationCode={popupLocation} closePopup={closePopup} />
      )}
    </div>
  );
}

export default MapView;
