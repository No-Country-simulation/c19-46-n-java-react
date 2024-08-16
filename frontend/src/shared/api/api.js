import axios from 'axios';

/**
 * Función para realizar una solicitud HTTP a un endpoint especificado.
 * @param {string} url - URL del endpoint al que se va a hacer la solicitud.
 * @param {string} [method='GET'] - Método HTTP que se va a utilizar para la solicitud.
 * @param {object|null} [data=null] - Objeto que contiene los datos que se van a enviar en el cuerpo de la solicitud.
 * @param {string|null} [token=null] - Token de autenticación opcional para la solicitud.
 * @param {boolean} [isMultipart=false] - Indica si la solicitud es multipart.
 * @returns {Promise<object>} - Promesa que se resuelve con los datos recibidos en la respuesta.
 * @throws {Error} - Lanza un error si la solicitud falla.
 */
export const fetchData = async (
  url,
  method = 'GET',
  data = null,
  token = null,
  isMultipart = false
) => {

  const headers = {
    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // que está fuera del rango de 2xx
      console.error('Código de estado:', error.response.status);
    } else if (error.request) {
      // No se recibió respuesta del servidor.
      console.error('Error al obtener datos: No se recibió respuesta');
    } else {
      // Ocurrió un error al configurar la solicitud.
      console.error('Error al obtener datos:', error.message);
    }
    throw error;
  }
};