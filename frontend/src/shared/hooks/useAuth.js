import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Aquí puedes agregar lógica para validar el token o recuperar el usuario.
            setUser({ token }); // Ejemplo simplificado.
        }
    }, []);

    const getToken = () => {
        return localStorage.getItem('token');
    };

    const login = (userData) => {
        localStorage.setItem('token', userData.token);
        setUser(userData.user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const isAuthenticated = () => !!user;

    return {
        user,
        getToken,
        login,
        logout,
        isAuthenticated,
    };
};
