import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContexto } from "../utils/UsuarioContext";
import { fetchLogin, fetchRegistrarUsuario, fetchEditarUsuario } from "../api/usuario_api";

export const useUsuario = (onNext = null) => {

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

    // Estado global de usuario
    const { login } = useContext(UsuarioContexto);

    const navigate = useNavigate();

    /**
     * Función que resetea los estados de los usuarios, limpiando los campos de formulario.
     * @returns {void} No devuelve nada.
     */
    const resetEstadosUsuario = () => {
        setUsername("");
        setPassword("");
        setConfirmarPassword("");
        setNombre("");
        setTelefono("");
        setCiudad(null);
    }

    /**
     * Función asíncrona que maneja el inicio de sesión en el formulario de inicio de sesión.
     * @param {Event} e - Evento de envío del formulario.
     * @returns {Promise<object|undefined>} - Promesa que se resuelve con los
     * datos del usuario si el inicio de sesión es exitoso, o undefined si
     * falla.
     */
    const handleLogin = async (e) => {
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
    const handleRegister = async (e) => {
        e.preventDefault();
        if (isSubmitting) {
            return;
        }
        if (!username || !email || !password || !confirmarPassword) {
            setError("Información requerida incompleta.");
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            // const data = await fetchRegistrarUsuario(
            //     setError,
            //     username,
            //     email,
            //     password,
            //     confirmarPassword
            // );
            // if (data) {
            //      resetEstadosUsuario();
            //      onNext();
            // }
            onNext()
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
    const handleProfileRegister = async (e) => {
        e.preventDefault();
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
            // const data = await fetchRegistrarUsuario(
            //     setError,
            //     username,
            //     password,
            //     confirmarPassword,
            //     nombre,
            //     telefono,
            //     ciudad
            // );
            // if (data) {
            //     resetEstadosUsuario();
            //     onNext();
            // }
            onNext()
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleLogin,
        handleRegister,
        handleProfileRegister,
        estadoForm: {
            error,
            setError,
            isSubmitting,
            setIsSubmitting
        },
        estadoUsuario: {
            username,
            email,
            setEmail,
            setUsername,
            password,
            setPassword,
            confirmarPassword,
            setConfirmarPassword,
            nombre,
            setNombre,
            telefono,
            setTelefono,
            ciudad,
            setCiudad
        }
    };
};

