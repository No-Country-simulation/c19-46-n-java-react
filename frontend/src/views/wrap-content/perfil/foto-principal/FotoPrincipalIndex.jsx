import Img from "../../../../shared/components/images/Img"
import rellenoFoto from "../../../../shared/assets/rellenoFoto.svg"
import CardConteinerImg from "../../../../shared/components/images/CardConteinerImg"

const FotoPrincipalIndex = ({
    fotos,
    error,
    setError
}) => {

    const styleCard = {
        backgroundColor: "#e3e3e3", // Gris
        width: "42vw", // Ancho
        maxWidth: "1000px", // Ancho máximo fijo
        height: "100vh", // Altura
        maxHeight: "660px", // Altura máxima fija
    }

    const styleCardContent = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }

    const styleFoto = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
    }

    const children = () => {
        return (
            fotos && fotos?.[0] ? (
                <Img
                    id={`foto-principal-${fotos[0]}`}
                    file={fotos[0]}
                    error={error}
                    setError={setError}
                    style={styleFoto}
                />
            ) : (
                <Img
                    muestra={rellenoFoto}
                    id={"foto-principal-relleno"}
                    style={styleFoto}
                />
            )
        )
    }

    return (
        <>
            <CardConteinerImg
                styleCard={styleCard}
                styleCardContent={styleCardContent}
            >
                {children()}
            </CardConteinerImg>
        </>
    )
}

export default FotoPrincipalIndex