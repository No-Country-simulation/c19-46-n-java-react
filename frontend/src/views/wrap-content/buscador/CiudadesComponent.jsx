// src/components/CiudadesComponent.js
import { useEffect, useState } from "react";
import { fetchData } from "../../../shared/api/api";
import { API_URLS } from "../../../shared/api/requests";

const CiudadesComponent = () => {
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    const getCiudades = async () => {
      try {
        const data = await fetchData(API_URLS.GET_CIUDADES);
        setCiudades(data);
      } catch (error) {
        console.error("Error fetching ciudades:", error);
      }
    };

    getCiudades();
  }, []);
  console.log(ciudades);
  return (
    <div>
      <h1>Ciudades</h1>
      <ul>
        {ciudades.map((ciudad) => (
          <li key={ciudad.id}>{ciudad.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default CiudadesComponent;
