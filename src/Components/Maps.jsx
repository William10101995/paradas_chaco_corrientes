import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

//Import css
import "./Maps.css";

//Import components leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Import css leaflet
import "leaflet/dist/leaflet.css";

//Import marcadores
import { Marcadores } from "./Marcadores";

//Import icons
import { yourIcon } from "./Icon";

export const Maps = () => {
  const [state, setState] = useState({
    rang: [-27.477151335963306, -58.9290258167181],
    zoom: 13,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.state.lat !== undefined && location.state.lng !== undefined) {
      setState({
        ...state,
        rang: [location.state.lat, location.state.lng],
      });
    }
  }, []);

  return (
    <MapContainer center={state.rang} zoom={state.zoom}>
      <TileLayer
        attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=f3a71b93-04a2-4edf-a8d6-a3ee3a540f89"
      />
      <Marcadores paradas={location.state.paradas} />
      <Marker position={state.rang} icon={yourIcon}>
        <Popup>
          <h1 className="popup">
            Ahora estas aqui{" "}
            <span role="img" aria-label="emoji">
              🤓
            </span>
          </h1>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
