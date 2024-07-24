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
     * @returns {void}
     */
    const login = (userData) => {
        setUsuarioEnSesion(userData);
    };

    /**
     * Función para cerrar sesión en la aplicación.
     * 
     * @returns {void}
     */
    const logout = () => {
        setUsuarioEnSesion(null);
    };

    return (
        /**
         * Proveedor de contexto con el estado del usuario en sesión y las funciones para iniciar y cerrar sesión.
         */
        <UsuarioContexto.Provider value={{ usuarioEnSesion, login, logout }}>
            {children}
        </UsuarioContexto.Provider>
    );
};

