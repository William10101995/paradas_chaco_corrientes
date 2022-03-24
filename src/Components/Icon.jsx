import L from "leaflet";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers";

//Icono de ubicacion de paradas
export const LocationIcon = L.AwesomeMarkers.icon({
  icon: "star",
  prefix: "glyphicon",
  markerColor: "green",
});

//Icono de mi ubicacion
export const yourIcon = L.AwesomeMarkers.icon({
  icon: "spinner",
  markerColor: "red",
  prefix: "fa",
  spin: true,
});
