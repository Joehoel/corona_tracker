import "leaflet/dist/leaflet.css";
import React from "react";
import {
  Map as Leaflet,
  Marker,
  Popup,
  TileLayer as Tile
} from "react-leaflet";
import useStats from "../utils/useStats";
import Spinner from "./Spinner";
import L from "leaflet";

export default function Map({ children }) {
  const stats = useStats();
  if (!stats) return <Spinner />;

  const Icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [22, 94],
    popupAnchor: [0, -76]
  });

  const markers = stats.deaths.locations;

  const randomMarker = () => {
    const i = Math.floor(Math.random() * markers.length);
    console.log(markers[i]);
    return [markers[i].coordinates.lat, markers[i].coordinates.long];
  };

  const mapConfig = {
    center: randomMarker(),
    zoom: 3
  };

  const LeafletMarkers = markers.map((marker) => (
    <Marker
      position={(Object.values(marker).lat, Object.values(marker).long)}
      key={`marker_`}
      icon={Icon}
    >
      <Popup>
        <span>Test</span>
      </Popup>
    </Marker>
  ));
  return (
    <Leaflet
      center={mapConfig.center}
      zoom={mapConfig.zoom}
      className="map__reactleaflet"
    >
      <Tile
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      />
      {markers.map(({ coordinates, country, country_code }, i) => (
        <Marker
          key={i}
          position={[coordinates.lat, coordinates.long]}
          icon={Icon}
        >
          <Popup>
            <span>{country}</span>
          </Popup>
        </Marker>
      ))}
    </Leaflet>
  );
}
