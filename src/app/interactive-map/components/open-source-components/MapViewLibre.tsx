"use client";

import React, { useEffect, useRef } from "react";
import maplibregl, { LngLatBounds } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { type Marker } from "~/app/interactive-map/map-data/map-markers";
import MapPopup from "../MapPopup";
import MapSelector from "../MapSelector";
import "../mapStyles.css";

interface MapViewProps {
  bounds: [number, number, number, number];
  markersData: Marker[];
  center: [number, number];
  locationChoice: "Ganesha" | "Jatinangor";
  toggleLocationChoice: () => void;
}

function MapViewLibre(props: MapViewProps) {
  const { bounds, markersData, center, locationChoice, toggleLocationChoice } =
    props;
  const popupRef = useRef<HTMLDivElement | null>(null);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [currLocData, setCurrLocData] = React.useState<Marker | null>(null);
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);
  const markerRefs = useRef<Array<maplibregl.Marker>>([]);
  const [loadedLocation, setLoadedLocation] = React.useState<
    "Ganesha" | "Jatinangor"
  >("Jatinangor");

  function closePopup() {
    setIsPopupVisible(false);
    setCurrLocData(null);
  }

  function createCustomMarker(iconPath: string): HTMLElement {
    const newMarkerElement = document.createElement("div");
    newMarkerElement.className = "custom-marker";
    newMarkerElement.style.backgroundImage = `url(${iconPath})`;
    newMarkerElement.style.backgroundSize = "contain";
    newMarkerElement.style.width = "48px";
    newMarkerElement.style.height = "48px";
    newMarkerElement.style.cursor = "pointer";
    return newMarkerElement;
  }

  useEffect(() => {
    if (map.current && loadedLocation === locationChoice) return;

    // Initialize the Map
    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style:
        "https://sea-lion-app-ecwmz.ondigitalocean.app/styles/liberty/style.json", // {Tilserver GL URL}/styles/liberty/style.json,
      center: center,
      zoom: 16,
      maxBounds: new LngLatBounds(bounds),
      pitch: 25,
    });
    setLoadedLocation(locationChoice);

    // Clear previous markers
    markerRefs.current.forEach((marker) => marker.remove());
    markerRefs.current = [];

    // Add markers
    markersData.forEach((markerData) => {
      const markerElement = createCustomMarker("/components/map-marker.png");
      const marker = new maplibregl.Marker({ element: markerElement });
      marker
        .setLngLat([markerData.longitude, markerData.latitude])
        .addTo(map.current!);

      const handleMarkerClick = () => {
        setCurrLocData(markerData);
        setIsPopupVisible(true);
      };

      // Create popup event listener and save its reference
      markerElement.addEventListener("click", handleMarkerClick);
      marker.on("remove", () =>
        markerElement.removeEventListener("click", handleMarkerClick),
      );
      markerRefs.current.push(marker);
    });
  }, [
    bounds,
    markersData,
    center,
    loadedLocation,
    locationChoice,
    currLocData,
  ]);

  return (
    <div className="relative h-[85vh] w-[100%] lg:h-[90vh]">
      <div ref={mapContainer} className="absolute h-[100%] w-[100%]" />
      <div className="absolute top-[10%] ml-4 lg:top-[15%]">
        <MapSelector
          toggleLocationChoice={toggleLocationChoice}
          locationChoice={locationChoice}
        />
      </div>
      {isPopupVisible && (
        <div className="pointer-events-none fixed inset-0 z-40 bg-black opacity-50" />
      )}
      {isPopupVisible && currLocData && (
        <>
          {/* Marker stays bright */}
          {markerRefs.current.map((marker) => {
            const pos = marker.getLngLat();

            if (
              pos.lng === currLocData.longitude &&
              pos.lat === currLocData.latitude
            ) {
              return (
                <div
                  key={`${pos.lng}-${pos.lat}`}
                  className="absolute z-50" // ensure marker is above overlay
                  style={{
                    left: `calc(${marker.getElement().style.left})`,
                    top: `calc(${marker.getElement().style.top})`,
                  }}
                />
              );
            }
          })}

          <MapPopup
            ref={popupRef}
            locationData={currLocData}
            closePopup={closePopup}
          />
        </>
      )}
    </div>
  );
}

export default MapViewLibre;
