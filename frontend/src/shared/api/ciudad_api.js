import { fetchData } from "./api";
import { CIUDADES_ENDPOINT } from "./requests";

/**
 * Función asíncrona que realiza una solicitud HTTP GET para obtener la lista de ciudades.
 * @param {function} setError - Función que se utiliza para establecer el estado de error.
 * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos de ciudades.
 * @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
 */
export const fetchListaCiudades = async (setError) => {
    try {
        const data = await fetchData(CIUDADES_ENDPOINT.get_lista_ciudades());
        return data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Error al obtener la lista de ciudades');
        } else {
            setError('Error en la solicitud HTTP');
        }
        throw error;
    }
};
