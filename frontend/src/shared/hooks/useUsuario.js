import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { fetchListaCiudades } from "../api/ciudad_api";
import {
    fetchLogin,
    fetchRegistrarUsuario,
    fetchCompletarUsuario
} from "../api/usuario_api";

export const useUsuario = (
    onNext = null,
    newEmail = "",
    newPassword = "",
    newPasswordConfirm = ""
) => {

    // Estados del formulario
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Estados del usuario
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ciudad, setCiudad] = useState(null);
    const [ciudades, setCiudades] = useState([]);

    // Estado global de usuario
    const { login, getToken } = useAuth();

    const navigate = useNavigate();

    /**
     * Función que resetea los estados de los usuarios, limpiando los campos de formulario.
     * @returns {void} No devuelve nada.
     */
    const resetEstadosUsuario = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmarPassword("");
        setNombre("");
        setTelefono("");
        setCiudad(null);
        setCiudades([]);
    }

    /**
     * Función asíncrona que obtiene la lista de ciudades disponibles.
     * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos de ciudades.
     * @throws {Error} - Si ocurre algún error durante la solicitud HTTP, se maneja y se muestra un mensaje de error.
     */
    const getCiudades = async () => {
        try {
            const data = await fetchListaCiudades(setError);
            if (data) {
                setCiudades(data);
            }
        }
        catch (err) {
            setError("Error obteniendo las ciudades. Inténtalo de nuevo.");
            setIsSubmitting(false);
        }
    }

    /**
     * Función asíncrona que maneja el inicio de sesión en el formulario de inicio de sesión.
     * @param {Event} e - Evento de envío del formulario.
     * @returns {Promise<object|undefined>} - Promesa que se resuelve con los
     * datos del usuario si el inicio de sesión es exitoso, o undefined si
     * falla.
     */
    const handleSubmitLoginForm = async (e) => {
        e.preventDefault();
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            const data = await fetchLogin(
                setError,
                username,
                password);
            if (data) {
                resetEstadosUsuario();
                // Si en la data tiene una ciudad significa que completo todo el formulario de registro
                if (data.ciudad) {
                    // Setea el usuario en el contexto global
                    login(data);
                    // Redirecciona al menu principal
                    navigate("/main-menu");
                }
                // Si en la data no tiene una ciudad redireccionar al formulario de registro
                else {
                    navigate("/");
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * Función asíncrona que maneja el registro en el formulario de registro.
     * @param {Event} e - Evento de envío del formulario.
     * @returns {Promise<object|undefined>} - Promesa que se resuelve con los
     * datos del usuario registrado si el registro es exitoso, o undefined si
     * falla.
     */
    const handleSubmitRegisterForm = async (e) => {
        e.preventDefault();
        if (isSubmitting) {
            return;
        }
        if (!username || !email || !password || !confirmarPassword) {
            setError("Información requerida incompleta.");
            return;
        }
        if (password !== confirmarPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            const data = await fetchRegistrarUsuario(
                setError,
                username,
                email,
                password,
                confirmarPassword
            );
            if (data) {
                login(data);
                resetEstadosUsuario();
                onNext();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };


    /**
     * Función asíncrona que maneja el registro de perfil en el formulario de perfil.
     * @param {Event} e - Evento de envío del formulario.
     * @returns {Promise<object|undefined>} - Promesa que se resuelve con los
     * datos del usuario registrado si el registro es exitoso, o undefined si
     * falla.
     */
    const handleSubmitPerfilForm = async () => {
        if (isSubmitting) {
            return;
        }
        if (!nombre || !telefono || !ciudad) {
            setError("Información requerida incompleta.");
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            const data = await fetchCompletarUsuario(
                setError,
                nombre,
                telefono,
                ciudad,
                getToken()
            );
            if (data) {
                resetEstadosUsuario();
                onNext();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmitChangeEmail = (e) => {
        e.preventDefault();
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            // const data = await fetchCambioEmail(
            //     setError,
            //     newEmail
            // );
            // if (data) {
            //     onNext();
            // }
            console.log("EXITOO")
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmitChangePassword = (e) => {
        e.preventDefault();
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            // const data = await fetchCambioPassword(
            //     setError,
            //     newPassword,
            //     newPasswordConfirm
            // );
            // if (data) {
            //     onNext();
            // }
            console.log("EXITOO")
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleSubmitLoginForm,
        handleSubmitRegisterForm,
        handleSubmitPerfilForm,
        handleSubmitChangeEmail,
        handleSubmitChangePassword,
        getCiudades,
        estadoForm: {
            error,
            setError,
            isSubmitting,
            setIsSubmitting
        },
        estadoUsuario: {
            username,
            setUsername,
            email,
            setEmail,
            password,
            setPassword,
            confirmarPassword,
            setConfirmarPassword,
            nombre,
            setNombre,
            telefono,
            setTelefono,
            ciudad,
            setCiudad,
            ciudades,
        }
    };
};

