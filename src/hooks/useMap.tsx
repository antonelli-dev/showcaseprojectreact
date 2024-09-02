import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";

const useMap = (mapRef: React.RefObject<HTMLElement>) => {
  const [mapValue, setMapValue] = useState(Object);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      zoom: 13,
      style: "mapbox://styles/mapbox/standard",
      accessToken:"pk.eyJ1IjoiaHJleWVzIiwiYSI6ImNtMGk5bzc2cjA5cWUya3M4c3JvbXhiZzMifQ.IPh44mVFEwCuY2XnhFTc2w",
    });
    setMapValue(map);
    return () => {
      map.remove();
    };
  }, []);

  return mapValue;
};

export default useMap;
