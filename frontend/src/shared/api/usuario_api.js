import { fetchData } from "./api";
import { USUARIOS_ENDPOINT } from "./requests";

/**
     * Función asíncrona que realiza una solicitud HTTP POST para iniciar sesión
     * con un usuario ya registrado.
     * @param {function} setError - Función que se utiliza para establecer el estado de error.
     * @param {string} username - Nombre de usuario.
     * @param {string} password - Contraseña del usuario.
     * @returns {Promise<object>} - Promesa que se resuelve con los datos del usuario
     * registrado o con null si la solicitud falla.
     * registrados.
     * @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
     */
export const fetchLogin = async (setError, username, password) => {
    const userData = {
        nickname: username,
        contrasenia: password
    };
    try {
        const data = await fetchData(USUARIOS_ENDPOINT.post_login_usuario, 'POST', userData);
        return data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Error en los datos del usuario');
        } else {
            setError('Error iniciando sesión');
        }
        throw error;
    }
};

/**
* Función asíncrona que realiza una solicitud HTTP POST para registrar un nuevo usuario.
* @param {function} setError - Función que se utiliza para establecer el estado de error.
* @param {string} username - Nombre de usuario.
* @param {string} password - Contraseña del usuario.
* @param {string} confirmarPassword - Confirmación de la contraseña del usuario.
* @param {string} nombre - Nombre completo del usuario.
* @param {string} telefono - Número de teléfono del usuario.
* @param {object} ciudad - Objeto con el ID de la ciudad asociada al usuario.
* @returns {Promise<object>} - Promesa que se resuelve con los datos del usuario registrado.
* @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
*/
export const fetchRegistrarUsuario = async (setError, username, password, confirmarPassword, nombre, telefono, ciudad) => {
    const usuarioData = {
        nickname: username,
        contrasenia: password,
        confirmarContrasenia: confirmarPassword,
        nombreCompleto: nombre,
        telefono: telefono,
        ciudadId: ciudad.id
    }
    try {
        const data = await fetchData(USUARIOS_ENDPOINT.post_registrar_usuario, 'POST', usuarioData);
        return data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Error en los datos del usuario');
        } else {
            setError('Error registrando usuario');
        }
        throw error;
    }
};