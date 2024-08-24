"use client";

import React from "react";
import MapViewLibre from "./MapViewLibre";
import {
  ganeshaMarkersData,
  jatinangorMarkersData,
} from "~/app/interactive-map/map-data/map-markers";

function ITBMapLibre() {
  const [locationChoice, setLocationChoice] = React.useState<
    "Ganesha" | "Jatinangor"
  >("Jatinangor");
  const toggleLocationChoice = () => {
    if (locationChoice === "Ganesha") {
      setLocationChoice("Jatinangor");
    } else {
      setLocationChoice("Ganesha");
    }
  };
  const jatinangorMapBounds: [number, number, number, number] = [
    107.765351, -6.93537, 107.773, -6.922917,
  ];
  const ganeshaMapBounds: [number, number, number, number] = [
    107.605075, -6.899285, 107.614803, -6.881697,
  ];
  const ganeshaCenterPoint: [number, number] = [107.610311, -6.88948];
  const jatinangorCenterPoint: [number, number] = [107.769061, -6.929337];
  return (
    <MapViewLibre
      bounds={
        locationChoice === "Ganesha" ? ganeshaMapBounds : jatinangorMapBounds
      }
      markersData={
        locationChoice === "Ganesha"
          ? ganeshaMarkersData
          : jatinangorMarkersData
      }
      center={
        locationChoice === "Ganesha"
          ? ganeshaCenterPoint
          : jatinangorCenterPoint
      }
      locationChoice={locationChoice}
      toggleLocationChoice={toggleLocationChoice}
    />
  );
}

export default ITBMapLibre;
