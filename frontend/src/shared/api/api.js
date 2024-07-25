import axios from 'axios';

/**
 * Función para realizar una solicitud HTTP a un endpoint especificado.
 * @param {string} url - URL del endpoint al que se va a hacer la solicitud.
 * @param {string} [method='GET'] - Método HTTP que se va a utilizar para la solicitud.
 * @param {object|null} [data=null] - Objeto que contiene los datos que se van a enviar en el cuerpo de la solicitud.
 * @param {string|null} [token=null] - Token de autenticación opcional para la solicitud.
 * @returns {Promise<object>} - Promesa que se resuelve con los datos recibidos en la respuesta.
 * @throws {Error} - Lanza un error si la solicitud falla.
 */
export const fetchData = async (url, method = 'GET', data = null, token = null) => {

  const headers = {
    'Content-Type': 'application/json',
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
      // Ocurrió un error en el servidor. Se muestra el mensaje de error y el código de estado.
      console.error('Error al obtener datos:', error.response.data);
      console.error('Código de estado:', error.response.status);
      // La solicitud fue realizada y el servidor respondió con un código de estado
      // que está fuera del rango de 2xx
      console.error('Error fetching data:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      // No se recibió respuesta del servidor.
      console.error('Error al obtener datos: No se recibió respuesta');
      // La solicitud fue realizada pero no se recibió respuesta
      console.error('Error fetching data: No response received');
    } else {
      // Ocurrió un error al configurar la solicitud.
      console.error('Error al obtener datos:', error.message);
      // Algo pasó al configurar la solicitud
      console.error('Error fetching data:', error.message);
    }
    throw error;
  }
};


