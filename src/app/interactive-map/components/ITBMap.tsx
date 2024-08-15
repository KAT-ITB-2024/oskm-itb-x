"use client";

import React from "react";
import * as maptilersdk from "@maptiler/sdk";
import MapView from "./MapView";
import mapLocations from "./map-data.json";
interface MapData {
  center: [number, number]; // lon, lat
  mapLimit: [number, number, number, number]; // [minLongitude, minLatitude, maxLongitude, maxLatitude]
}

function ITBMap() {
  const [mapChoice, setMapChoice] = React.useState<"Ganesha" | "Jatinangor">(
    "Ganesha",
  );

  const ganeshaMapData: MapData = {
    center: [107.610311, -6.88948],
    mapLimit: [107.605581, -6.895544, 107.61417, -6.884116],
  };

  const jatinangorMapData: MapData = {
    center: [0, 0],
    mapLimit: [0, 0, 0, 0],
  };

  const ganeshaBounds = new maptilersdk.LngLatBounds(ganeshaMapData.mapLimit);
  const jatinangorBounds = new maptilersdk.LngLatBounds(
    jatinangorMapData.mapLimit,
  );
  return (
    <MapView
      center={
        mapChoice === "Ganesha"
          ? ganeshaMapData.center
          : jatinangorMapData.center
      }
      zoom={15}
      bounds={mapChoice === "Ganesha" ? ganeshaBounds : jatinangorBounds}
      useMarkers={mapChoice === "Ganesha" ? true : false}
    />
  );
}

export default ITBMap;
