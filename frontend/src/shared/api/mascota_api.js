import { fetchData } from "./api";
import { MASCOTAS_ENDPOINT } from "./requests";

/**
 * Función asíncrona que realiza una solicitud HTTP GET para obtener la lista de razas de mascotas.
 * @param {function} setError - Función que se utiliza para establecer el estado de error.
 * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos de razas de mascotas.
 * @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
 */
export const fetchListaRazas = async (setError) => {
    try {
        const data = await fetchData(MASCOTAS_ENDPOINT.get_lista_razas());
        return data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Error al obtener la lista de razas');
        } else {
            setError('Error en la solicitud HTTP');
        }
        throw error;
    }
};

/**
 * Función asíncrona que realiza una solicitud HTTP GET para obtener la lista de tamaños de mascotas.
 * @param {function} setError - Función que se utiliza para establecer el estado de error.
 * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos de tamaños de mascotas.
 * @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
 */
export const fetchListaTamanios = async (setError) => {
    try {
        const data = await fetchData(MASCOTAS_ENDPOINT.get_lista_tamanios());
        return data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Error al obtener la lista de tamaños');
        } else {
            setError('Error en la solicitud HTTP');
        }
        throw error;
    }
};


/**
 * Función para obtener la lista de fotos de una mascota.
 * @param {function} setError - Función para establecer el mensaje de error.
 * @param {number} idMascota - El id de la mascota.
 * @returns {Promise<any>} - Devuelve la lista de fotos.
 */
export const fetchListaFotos = async (setError, idMascota) => {
    try {
        const data = await fetchData(MASCOTAS_ENDPOINT.get_lista_fotos(idMascota));
        return data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Error al obtener la lista de fotos');
        } else {
            setError('Error en la solicitud HTTP');
        }
        throw error;
    }
};