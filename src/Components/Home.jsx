import React, { useEffect, useState } from "react";
//Import Link
import { Link } from "react-router-dom";
//Import Select
import Select from "react-select";
//Import paradas
import { paradas_sarmiento } from "../Data/paradas_sarmiento";
import { paradas_barranqueras } from "../Data/paradas_barranqueras";
//Import icon next
import { GrLinkNext } from "react-icons/gr";
//Import styles
import { customStyles } from "./styles";
//Import images
import Fondo from "../Images/fondo.png";
import logo from "../Images/Logo.png";
import circulo1 from "../Images/Circle1.png";
import circulo2 from "../Images/Circle2.png";

export const Home = () => {
  //Filtro las paradas de IDA y VUELTA por separado
  const paradas_sarmiento_ida = paradas_sarmiento
    .map((parada) => {
      if (parada.sentido === "IDA") {
        return parada;
      }
    })
    .filter(function (dato) {
      return dato != undefined;
    });
  const paradas_sarmiento_vuelta = paradas_sarmiento
    .map((parada) => {
      if (parada.sentido === "VUELTA") {
        return parada;
      }
    })
    .filter(function (dato) {
      return dato != undefined;
    });
  const paradas_barranqueras_vuelta = paradas_barranqueras
    .map((parada) => {
      if (parada.sentido === "VUELTA") {
        return parada;
      }
    })
    .filter(function (dato) {
      return dato != undefined;
    });

  const paradas_barranqueras_ida = paradas_barranqueras
    .map((parada) => {
      if (parada.sentido === "IDA") {
        return parada;
      }
    })
    .filter(function (dato) {
      return dato != undefined;
    });

  //Opciones de ramal
  const optionsRamal = [
    { value: paradas_barranqueras, label: "Barranqueras" },
    { value: paradas_sarmiento, label: "Sarmiento" },
  ];

  //Opciones de sentido segun seleccion de ramal
  const optionsSentido = () => {
    if (state.paradas === paradas_barranqueras) {
      return [
        { value: paradas_barranqueras_ida, label: "Corrientes-Chaco" },
        { value: paradas_barranqueras_vuelta, label: "Chaco-Corrientes" },
      ];
    } else {
      return [
        { value: paradas_sarmiento_ida, label: "Corrientes-Chaco" },
        { value: paradas_sarmiento_vuelta, label: "Chaco-Corrientes" },
      ];
    }
  };

  //Defino un estdo para manejar coordenadas y paradas
  const [state, setState] = useState({
    lat: 0,
    lng: 0,
    paradas: [],
    optionSelect: "",
  });

  //Pregunto por los permisos de la ubicacion al cargar la pagina de inicio
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  //Cambio el estado al seleccionar una opcion
  const handleChange = (option) => {
    console.log(option);
    setState({
      ...state,
      optionSelect: option.label,
      paradas: option.value,
    });
  };
  return (
    <div className="conteiner">
      <img src={logo} alt="logo parada de colectivos" className="logo" />
      <img
        src={circulo1}
        alt="circulo parada de colectivos"
        className="circulo1"
      />
      <img
        src={circulo2}
        alt="circulo parada de colectivos"
        className="circulo2"
      />
      <img src={Fondo} alt="paradas de colectivos" className="fondo" />
      <div className="body">
        <h1>¿Dónde esperamos el cole?</h1>

        <div className="option">
          <h2>Ramales</h2>
          <Select
            placeholder="Elegí un ramal"
            options={optionsRamal}
            value={state.options}
            onChange={handleChange}
            closeMenuOnSelect={true}
            styles={customStyles}
            isSearchable={false}
          />
          <h2>Destinos</h2>

          <Select
            placeholder="Elegí un destino"
            options={optionsSentido()}
            value={state.options}
            onChange={handleChange}
            closeMenuOnSelect={true}
            styles={customStyles}
            isSearchable={false}
          />
        </div>

        <div className="boton">
          <Link
            to={{
              pathname: "/map",
              state,
            }}
            className="link"
          >
            ¡Hechemos un vistazo al mapa!
          </Link>
          <span>
            <GrLinkNext className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};
