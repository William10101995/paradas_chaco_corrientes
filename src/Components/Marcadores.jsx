import React from "react";

//Import components leaflet
import { Marker, Popup } from "react-leaflet";

//Import icons
import { LocationIcon } from "./Icon";

//Import styles
import "./Maps.css";

export const Marcadores = ({ paradas }) => {
  const marcadore = paradas.map((parada) => {
    return (
      <Marker
        key={parada.gid}
        position={{ lat: parada.lat.toString(), lng: parada.lng.toString() }}
        icon={LocationIcon}
      >
        <Popup>
          <h1 className="popup">{`Direccion: ${parada.ubicacion}`}</h1>
        </Popup>
      </Marker>
    );
  });

  return <>{marcadore}</>;
};
