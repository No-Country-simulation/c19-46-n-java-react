import { useEffect, useState } from "react";

const Img = ({ file = null, muestra = null, id = "Imagen de muestra", style = null }) => {
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
        <>
            {
                muestra ? // si hay imagen de muesta devuelve esa
                    <img id={id} src={muestra} alt="Imagen de muestra" style={style} />
                    : imageUrl ? // si no, verifica si hay imagen cargada y devuelve esa
                        <img id={id} src={imageUrl} alt="Imagen cargada" style={style} />
                        : null // si no, devuelve null
            }
        </>
    )
}

export default Img;
