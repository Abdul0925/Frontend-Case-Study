import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import mapboxgl from 'mapbox-gl';
import { useProfiles } from './ProfileContext';
import { MapMarker } from '../types';


const MAPBOX_TOKEN = 'your_token';

interface MapContextType {
  map: mapboxgl.Map | null;
  mapContainer: React.RefObject<HTMLDivElement>;
  markers: MapMarker[];
  initializeMap: (container: HTMLDivElement) => void;
  focusMarker: (markerId: string) => void;
  flyToCoordinates: (lat: number, lng: number, zoom?: number) => void;
  error: string | null;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [error, setError] = useState<string | null>(null);
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const { profiles, selectedProfileId } = useProfiles();

  mapboxgl.accessToken = MAPBOX_TOKEN;

  const initializeMap = (container: HTMLDivElement) => {
    try {
      if (map) return; 

      const newMap = new mapboxgl.Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [20.5937, 78.9629], 
        zoom: 3,
      });

      newMap.on('load', () => {
        setMap(newMap);
      });

      
      newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Failed to initialize map. Please refresh the page.');
    }
  };

  useEffect(() => {
    if (!map || !profiles.length) return;

    document.querySelectorAll('.mapboxgl-marker').forEach(el => el.remove());

    const newMarkers: MapMarker[] = [];

    profiles.forEach(profile => {
      const { lat, lng } = profile.address.coordinates;
      
      const markerEl = document.createElement('div');
      markerEl.className = 'map-marker';
      markerEl.style.backgroundImage = `url(${profile.photoUrl})`;
      markerEl.setAttribute('data-id', profile.id);
      
      if (profile.id === selectedProfileId) {
        markerEl.classList.add('map-marker-selected');
      }

      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat([lng, lat])
        .addTo(map);

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-3 max-w-sm">
            <div class="flex items-center gap-3">
              <img src="${profile.photoUrl}" alt="${profile.name}" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 class="font-medium">${profile.name}</h3>
                <p class="text-xs text-gray-500">${profile.address.city}, ${profile.address.state}</p>
              </div>
            </div>
          </div>
        `);

      markerEl.addEventListener('click', () => {
        marker.setPopup(popup);
      });

      newMarkers.push({
        id: profile.id,
        coordinates: [lng, lat],
        profileId: profile.id
      });
    });

    setMarkers(newMarkers);
  }, [map, profiles, selectedProfileId]);

  const focusMarker = (markerId: string) => {
    if (!map) return;

    const marker = markers.find(m => m.id === markerId);
    if (!marker) return;

    flyToCoordinates(marker.coordinates[1], marker.coordinates[0], 14);

    document.querySelectorAll('.map-marker').forEach(el => {
      if (el.getAttribute('data-id') === markerId) {
        el.classList.add('map-marker-selected');
        el.click();
      } else {
        el.classList.remove('map-marker-selected');
      }
    });
  };

  const flyToCoordinates = (lat: number, lng: number, zoom = 14) => {
    if (!map) return;

    map.flyTo({
      center: [lng, lat],
      zoom,
      essential: true,
      duration: 1500
    });
  };

  return (
    <MapContext.Provider
      value={{
        map,
        mapContainer,
        markers,
        initializeMap,
        focusMarker,
        flyToCoordinates,
        error
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMap = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};