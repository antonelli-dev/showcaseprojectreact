import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import { Coordinates } from "@/interfaces/coordinates.interface";

const useMap = (mapRef: React.RefObject<HTMLElement>, initialCoords: Coordinates) => {
  const [mapValue, setMapValue] = useState(Object);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      zoom: 13,
      style: 'mapbox://styles/mapbox/dark-v10',
      accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
      center: initialCoords,
    });
    setMapValue(map);
    return () => {
      map.remove();
    };
  }, []);

  return mapValue;
};

export default useMap;