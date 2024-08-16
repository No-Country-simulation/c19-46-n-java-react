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

/**
 * Función asíncrona que realiza una solicitud HTTP POST para registrar una nueva mascota.
 * @param {function} setError - Función que se utiliza para establecer el estado de error.
 * @param {object} usuario - Objeto de usuario que contiene el ID del usuario.
 * @param {string} nombre - Nombre de la mascota.
 * @param {string} descripcion - Descripción de la mascota.
 * @param {number} edad - Edad de la mascota.
 * @param {object} raza - Objeto de raza que contiene el ID de la raza.
 * @param {object} tamanio - Objeto de tamaño que contiene el ID del tamaño.
 * @param {object} sexo - Objeto de sexo que contiene el ID del sexo.
 * @param {Array} fotos - Array de objetos de archivos de las fotos de la mascota.
 * @param {string} token - Token de autenticación.
 * @returns {Promise<object>} - Promesa que se resuelve con los datos de la mascota registrada.
 * @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
 */
export const fetchRegistrarMascota = async (
    setError,
    usuario,
    nombre,
    descripcion,
    edad,
    raza,
    tamanio,
    sexo,
    fotos,
    token
) => {
    const formData = new FormData();
    formData.append('userId', usuario.id);
    formData.append('name', nombre);
    formData.append('description', descripcion);
    formData.append('age', edad);
    formData.append('breedId', raza.id);
    formData.append('sizeId', tamanio.id);
    formData.append('petSex', sexo.name);
    fotos.forEach((foto) => {
        formData.append('files', foto);
    });
    try {
        const response = await fetchData(
            MASCOTAS_ENDPOINT.post_registro_mascota(),
            'POST',
            formData,
            token,
            true
        );
        return response;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Error al registrar la mascota');
        } else {
            setError('Error en la solicitud HTTP');
        }
        throw error;
    }
};
