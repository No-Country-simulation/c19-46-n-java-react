import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useMascota = () => {
    // Estados del formulario
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Estados de la mascota
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [raza, setRaza] = useState("");
    const [tamanio, setTamanio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fotos, setFotos] = useState([]);

    const navigate = useNavigate();

    const resetEstadosMascota = () => {
        setNombre("");
        setEdad("");
        setSexo("");
        setRaza("");
        setTamanio("");
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
            // const data = await fetchRegistrarMascota(
            //     setError,
            //     nombre,
            //     edad,
            //     sexo,
            //     raza,
            //     tamanio,
            //     descripcion,
            //     fotos
            // );
            // if (data) {
            //     resetEstadosMascota();
            //     navigate("/main-menu");
            // }
            console.log("Registro exitoso");
            setIsSubmitting(false);
            navigate("/main-menu");
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getRazas = () => {
        try {
            // const razas = await fetchRazas();
            // return razas;
            const razas = [
                { value: "", label: "Selecciona una raza" },
                { value: "Pitbull", label: "Pitbull" },
                { value: "Caniche", label: "Caniche" },
                { value: "Chihuahua", label: "Chihuahua" },
                { value: "Chow-Chow", label: "Chow-Chow" },
                { value: "Dogo", label: "Dogo" },
                { value: "Golden Retriever", label: "Golden Retriever" },
                { value: "Husky", label: "Husky" },
                { value: "Labrador Retriever", label: "Labrador Retriever" },
                { value: "Pastor Alemaño", label: "Pastor Alemaño" },
                { value: "Poodle", label: "Poodle" },
                { value: "Yorkshire Terrier", label: "Yorkshire Terrier" },
            ];
            return razas;
        } catch (err) {
            setError("Error obteniendo las razas. Inténtalo de nuevo.");
            setIsSubmitting(false);
        }
    };

    return {
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
            tamanio,
            setTamanio,
            descripcion,
            setDescripcion,
            fotos,
            setFotos
        },
        handleRegister,
        getRazas
    }
}
