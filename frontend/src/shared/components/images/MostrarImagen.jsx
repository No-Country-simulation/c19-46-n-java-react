import { useEffect, useState } from "react";

const MostrarImagen = ({ file = null, muestra = null, id = "Imagen de muestra" }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, [file]);

    return (
        muestra ?
            <img id={id} src={muestra} alt="Imagen de muestra" />
            : imageUrl ?
                <img id={id} src={imageUrl} alt="Imagen cargada" style={{ maxWidth: '100%', height: 'auto' }} />
                : <div>Error mostrando la imagen</div>
    )
}


export default MostrarImagen;
