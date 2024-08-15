// La URL base de la API
const API_BASE_URL = 'http://localhost:8080';


// Ejemplo de uso: hay que importar la constante y con el . acceder a la url completa
// USUARIOS_ENDPOINT.get_login_usuario
// 

/**
 * Endpoints de la API para manejar usuarios.
 */
export const USUARIOS_ENDPOINT = {
    /**
     * Obtener el inicio de sesión de usuario.
     */
    post_login_usuario: () => `${API_BASE_URL}/auth/login`,
    /**
     * Registrar un nuevo usuario.
     */
    post_registrar_usuario: () => `${API_BASE_URL}/auth/register`,
    /**
     * Editar un usuario.
     */
    post_completar_usuario: () => `${API_BASE_URL}/api/complet`,
};

/**
 * Endpoints de la API para manejar ciudades.
 */
export const CIUDADES_ENDPOINT = {
    /**
     * Obtener la lista de ciudades.
     */
    get_lista_ciudades: () => `${API_BASE_URL}/api/cities`,
};


/**
 * Endpoints de la API para manejar mascotas.
 */
export const MASCOTAS_ENDPOINT = {
    /**
     * Obtener la lista de razas.
     */
    get_lista_razas: () => `${API_BASE_URL}/api/breeds`,
    /**
     * Obtener la lista de tamaños.
     */
    get_lista_tamanios: () => `${API_BASE_URL}/api/sizes`,
    /**
     * Obtener la lista de fotos de una mascota.
     * @param {number} id - El id de la mascota.
     * Obtener la lista de fotos.
     */
    get_lista_fotos: (id) => `${API_BASE_URL}/api/photos/${id}`,
}
