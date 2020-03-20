import L from "leaflet";
import React from "react";
import {
  Map as Leaflet,
  Marker,
  Popup,
  TileLayer as Tile
} from "react-leaflet";
import Spinner from "./Spinner";
import markerUrl from "../assets/marker.png";

export default function Map({ stats }) {
  if (!stats) return <Spinner />;

  const Icon = L.icon({
    iconUrl: markerUrl,
    // iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
    iconSize: [41, 41],
    iconAnchor: [20.5, 41],
    popupAnchor: [0, -41]
  });

  const markers = stats.deaths.locations;

  const randomMarker = () => {
    const i = Math.floor(Math.random() * markers.length);
    return [markers[i].coordinates.lat, markers[i].coordinates.long];
  };

  const config = {
    center: randomMarker(),
    zoom: 5
  };

  return (
    <Leaflet
      center={config.center}
      zoom={config.zoom}
      className="map__reactleaflet"
      zoomControl={false}
    >
      <Tile
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {markers.map(({ coordinates, country, country_code }, i) => (
        <Marker
          key={i}
          position={[coordinates.lat, coordinates.long]}
          icon={Icon}
        >
          <Popup>
            <span>
              {country}, {country_code}
            </span>
          </Popup>
        </Marker>
      ))}
    </Leaflet>
  );
}
