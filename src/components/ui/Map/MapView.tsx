import useMap from "@/hooks/useMap";
import { useRef } from "react";

export default function MapView() {

    const mapRef = useRef<HTMLDivElement>(null);
    useMap(mapRef,  {lon: -100.31019063199852, lat: 25.66901932031443});

    return (
        <div ref={mapRef} className='w-full h-full' />
    )
}