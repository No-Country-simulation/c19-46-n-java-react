import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePreviousLocation = () => {
    const location = useLocation();
    const prevLocationRef = useRef(location);

    useEffect(() => {
        prevLocationRef.current = location;
    }, [location]);

    const getDirection = () => {
        const paths = [
            "/main-menu/home",
            "/main-menu/mensaje",
            "/main-menu/perfil",
            "/main-menu/configuracion"
        ];

        const currentPath = location.pathname.split("/")[2] ? `/main-menu/${location.pathname.split("/")[2]}` : "/main-menu/home";
        const prevPath = prevLocationRef.current.pathname.split("/")[2] ? `/main-menu/${prevLocationRef.current.pathname.split("/")[2]}` : "/main-menu/home";

        const currentIndex = paths.indexOf(currentPath);
        const prevIndex = paths.indexOf(prevPath);

        return currentIndex < prevIndex ? 100 : -100;

    };

    return {
        getDirection
    };
};
