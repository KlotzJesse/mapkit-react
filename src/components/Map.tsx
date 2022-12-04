import React, { useState, useEffect, useRef } from 'react';
import load from '../util/loader';
import {
  ColorScheme, Distances, LoadPriority, MapType,
  toMapKitColorScheme, toMapKitDistances, toMapKitLoadPriority, toMapKitMapType,
} from '../util/parameters';
import MapProps from './MapProps';

export default function Map({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  token,

  colorScheme = ColorScheme.Light,
  mapType = MapType.Standard,
  distances = Distances.Adaptive,
  loadPriority = LoadPriority.LandCover,

  isRotationEnabled = true,
  isScrollEnabled = true,
  isZoomEnabled = true,
  showsMapTypeControl = true,
  showsZoomControl = true,
  showsUserLocationControl = false,
  showsPointsOfInterest = true,
  showsUserLocation = false,
  tracksUserLocation = false,
}: MapProps) {
  const [map, setMap] = useState<mapkit.Map | null>(null);
  const element = useRef<HTMLDivElement>(null);

  // Load the map
  useEffect(() => {
    load(token).then(() => {
      setMap(new mapkit.Map(element.current!));
    });

    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, []);

  // Enum properties
  useEffect(() => {
    if (!map) return;
    map.colorScheme = toMapKitColorScheme(colorScheme);
  }, [map, colorScheme]);
  useEffect(() => {
    if (!map) return;
    map.mapType = toMapKitMapType(mapType);
  }, [map, mapType]);
  useEffect(() => {
    if (!map) return;
    map.distances = toMapKitDistances(distances);
  }, [map, distances]);
  useEffect(() => {
    if (!map) return;
    // @ts-ignore
    map.loadPriority = toMapKitLoadPriority(loadPriority);
  }, [map, loadPriority]);

  // Boolean properties
  const booleanProperties = {
    isRotationEnabled,
    isScrollEnabled,
    isZoomEnabled,
    showsMapTypeControl,
    showsZoomControl,
    showsUserLocationControl,
    showsPointsOfInterest,
    showsUserLocation,
    tracksUserLocation,
  };
  Object.entries(booleanProperties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!map) return;
      // @ts-ignore
      map[propertyName] = prop;
    }, [map, prop]);
  });

  return (
    <React.StrictMode>
      <div style={{ width: '100%', height: '100%' }} ref={element} />
    </React.StrictMode>
  );
}
