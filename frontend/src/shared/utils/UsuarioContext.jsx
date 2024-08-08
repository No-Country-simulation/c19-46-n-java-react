import { createContext, useState } from 'react';

export const UsuarioContexto = createContext();

export const UserProvider = ({ children }) => {
    /**
     * Estado del usuario en sesión. Si es null, significa que no hay usuario en sesión.
     * @type {null|Object}
     */
    const [usuarioEnSesion, setUsuarioEnSesion] = useState(null);

    /**
     * Función para iniciar sesión en la aplicación.
     * 
     * @param {Object} userData - Datos del usuario.
     * @param {string} userData.token - Token de sesión.
     * @returns {void}
     */
    const login = (userData) => {
        localStorage.setItem('token', userData.token);
        setUsuarioEnSesion(userData.user);
    };

    /**
     * Función para cerrar sesión en la aplicación.
     * 
     * @returns {void}
     */
    const logout = () => {
        localStorage.removeItem('token');
        setUsuarioEnSesion(null);
    };

    /**
     * Función para obtener el token de la sesión.
     * 
     * @returns {string|null} - El token de sesión si existe, o null si no hay token.
     */
    const getToken = () => localStorage.getItem('token');

    return (
        /**
         * Proveedor de contexto con el estado del usuario en sesión, las funciones para iniciar y cerrar sesión,
         * y la función para obtener el token de sesión.
         */
        <UsuarioContexto.Provider value={{ usuarioEnSesion, login, logout, getToken }}>
            {children}
        </UsuarioContexto.Provider>
    );
};
