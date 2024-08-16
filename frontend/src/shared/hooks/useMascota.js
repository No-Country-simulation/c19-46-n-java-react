import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContexto } from "../utils/UsuarioContext";
import {
    fetchListaRazas,
    fetchListaTamanios,
    fetchListaFotos,
    fetchRegistrarMascota
} from "../api/mascota_api";

export const useMascota = () => {
    // Estados del formulario
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Estados de la mascota
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState(null);
    const [raza, setRaza] = useState(null);
    const [razas, setRazas] = useState([]);
    const [tamanio, setTamanio] = useState(null);
    const [tamanios, setTamanios] = useState([]);
    const [descripcion, setDescripcion] = useState("");
    const [fotos, setFotos] = useState([]);

    // Estado global de usuario
    const { usuarioEnSesion, getToken } = useContext(UsuarioContexto);

    const navigate = useNavigate();

    /**
     * Reinicia todos los estados de la mascota a sus valores iniciales.
     */
    const resetEstadosMascota = () => {
        setNombre("");
        setEdad("");
        setSexo(null);
        setRaza(null);
        setRazas([]);
        setTamanio(null);
        setTamanios([]);
        setDescripcion("");
        setFotos([]);
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (isSubmitting) {
            return;
        }
        if (!nombre || !edad || !sexo || fotos.length === 0) {
            setError("Información requerida incompleta.");
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            const data = await fetchRegistrarMascota(
                setError,
                usuarioEnSesion,
                nombre,
                descripcion,
                edad,
                raza,
                tamanio,
                sexo,
                fotos,
                getToken()
            );
            if (data) {
                resetEstadosMascota();
                navigate("/main-menu");
            }
            setIsSubmitting(false);
            navigate("/main-menu");
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * Función asíncrona que obtiene la lista de razas disponibles.
     * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos de razas.
     * @throws {Error} - Si ocurre algún error durante la solicitud HTTP, se maneja y se muestra un mensaje de error.
     */
    const getRazas = async () => {
        try {
            const data = await fetchListaRazas(setError);
            if (data) {
                setRazas(data);
            }
        } catch (err) {
            setError("Error obteniendo las razas. Inténtalo de nuevo.");
            setIsSubmitting(false);
        }
    };

    /**
     * Función asíncrona que obtiene la lista de tamaños de mascotas disponibles.
     * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos de tamaños de mascotas.
     * @throws {Error} - Si ocurre algún error durante la solicitud HTTP, se maneja y se muestra un mensaje de error.
     */
    const getTamanios = async () => {
        try {
            const data = await fetchListaTamanios(setError);
            if (data) {
                setTamanios(data);
            }
        } catch (err) {
            setError("Error obteniendo los tamaños. Inténtalo de nuevo.");
            setIsSubmitting(false);
        }
    };

    /**
     * Función asíncrona que obtiene la lista de fotos de la mascota.
     * @param {number} idMascota - El id de la mascota.
     * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos de fotos.
     * @throws {Error} - Si ocurre algún error durante la solicitud HTTP, se maneja y se muestra un mensaje de error.
     */
    const getFotos = async (idMascota) => {
        try {
            const data = await fetchListaFotos(setError, idMascota);
            if (data) {
                setFotos(data);
            }
        } catch (err) {
            setError("Error obteniendo las fotos. Inténtalo de nuevo.");
            setIsSubmitting(false);
        }
    }


    return {
        handleRegister,
        getRazas,
        getTamanios,
        getFotos,
        estadoForm: {
            error,
            setError,
            isSubmitting,
            setIsSubmitting
        },
        estadoMascota: {
            nombre,
            setNombre,
            edad,
            setEdad,
            sexo,
            setSexo,
            raza,
            setRaza,
            razas,
            setRazas,
            tamanio,
            setTamanio,
            tamanios,
            setTamanios,
            descripcion,
            setDescripcion,
            fotos,
            setFotos
        }
    }
}