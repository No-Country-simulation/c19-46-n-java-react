import { Navigate } from "react-router-dom";
import { useAuth } from "../shared/hooks/useAuth";

/**
 * Componente que protege una ruta para que solo se pueda acceder si se está logueado.
 * 
 * @param {ReactNode} children Componente a proteger.
 * 
 * @returns {ReactNode} El componente protegido o un redireccionamiento a la ruta de login si no se está logueado.
 */
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Desestructuración

    if (!isAuthenticated()) { // Llama a la función
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
