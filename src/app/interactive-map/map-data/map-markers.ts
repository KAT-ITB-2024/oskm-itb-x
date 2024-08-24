import ganeshaMapData from "./map-data.json";
import jatinangorMapData from "./jatinangor_map_data.json";

export type Marker = {
  name: string;
  longitude: number;
  latitude: number;
  description: string | null;
  image: string | null;
};

const ganeshaMarkersData: Marker[] = [];
const jatinangorMarkersData: Marker[] = [];

ganeshaMapData.forEach((data) => {
  const marker: Marker = {
    name: data.location_name,
    longitude: data.longitude,
    latitude: data.latitude,
    description: data.description,
    image: data.src,
  };
  ganeshaMarkersData.push(marker);
});

jatinangorMapData.forEach((data) => {
  const marker: Marker = {
    name: data.nama_lokasi,
    longitude: data.longitude,
    latitude: data.latitude,
    description: data.deskripsi,
    image: data.src,
  };
  jatinangorMarkersData.push(marker);
});

export { ganeshaMarkersData, jatinangorMarkersData };
