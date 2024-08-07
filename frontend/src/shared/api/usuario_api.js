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
        username: username,
        password: password
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
* @param {string} email - Email de usuario.
* @param {string} password - Contraseña del usuario.
* @param {string} confirmarPassword - Confirmación de la contraseña del usuario.
* @returns {Promise<object>} - Promesa que se resuelve con los datos del usuario registrado.
* @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
*/
export const fetchRegistrarUsuario = async (setError, username, email, password, confirmarPassword) => {
    const usuarioData = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmarPassword
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

/**
* Función asíncrona que realiza una solicitud HTTP PUT para editar los datos de un usuario.
* @param {function} setError - Función que se utiliza para establecer el estado de error.
* @param {string} nombre - Nombre completo del usuario.
* @param {string} telefono - Teléfono del usuario.
* @param {object} ciudad - Objeto de ciudad, con la propiedad id.
* @returns {Promise<object>} - Promesa que se resuelve con los datos del usuario editado.
* @throws {Error} - Si ocurre algún error durante la solicitud HTTP.
*/
export const fetchCompletarUsuario = async (setError, nombre, telefono, ciudad) => {
    const usuarioData = {
        firstname: nombre,
        phone: telefono,
        cityId: ciudad.id
    }
    try {
        const data = await fetchData(USUARIOS_ENDPOINT.post_completar_usuario, 'POST', usuarioData);
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
