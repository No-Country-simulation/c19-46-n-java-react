import { useEffect, useState } from "react";

const Img = ({
    file = null,
    setFile = null,
    muestra = null,
    id = "Imagen de muestra",
    style = null,
    error,
    setError
}) => {

    const [imageUrl, setImageUrl] = useState(null);

    const MAX_SIZE_MB = 1; // Tamaño máximo en MB
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024; // Tamaño máximo en bytes

    /**
     * Crea un lector de archivos para cargar la imagen.
     */
    const createReader = () => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);

                // Convertir a WebP
                canvas.toBlob(webpBlob => {
                    if (webpBlob) {
                        const newImageUrl = URL.createObjectURL(webpBlob);
                        setImageUrl(newImageUrl);
                    } else {
                        setError('Error al convertir la imagen a WebP');
                        setFile(null);
                    }
                }, 'image/webp', 0.6); // Comprime a WebP con calidad del 60%
            };
        };
        return reader;
    }

    useEffect(() => {
        if (file) {
            if (file.size > MAX_SIZE_BYTES) {
                setError(`El archivo es demasiado grande. Máximo permitido: ${MAX_SIZE_MB}MB`);
                return;
            }
            const reader = createReader();
            reader.readAsDataURL(file);
        }
    }, [file]);

    return (
        <>
            {
                error ? // si hay un error lo muestra
                    <p style={{ color: "red", fontSize: "9px" }}>
                        {error}
                    </p>
                    : muestra ? // si hay imagen de muesta devuelve esa
                        <img id={id} src={muestra} alt="Imagen de muestra" style={style} />
                        : imageUrl ? // si no, verifica si hay imagen cargada y devuelve esa
                            <img id={id} src={imageUrl} alt="Imagen cargada" style={style} />
                            : null // si no, devuelve null
            }
        </>
    )
}

export default Img;