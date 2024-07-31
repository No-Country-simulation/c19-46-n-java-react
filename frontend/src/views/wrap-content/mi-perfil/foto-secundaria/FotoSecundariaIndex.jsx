import { Grid } from "@mui/material"
import rellenoFoto from "../../../../shared/assets/rellenoFoto.svg"
import CardConteinerImg from "../../../../shared/components/images/CardConteinerImg"
import Img from "../../../../shared/components/images/Img"
import CargarFotosButton from "../../../../shared/components/input/CargarFotosButton"

const FotoSecundariaIndex = ({
    fotos,
    error,
    setError
}) => {

    const styleCard = {
        backgroundColor: "#e3e3e3", // Gris
        width: "21vw", // Ancho
        maxWidth: "1000px", // Ancho máximo fijo
        height: "100vh", // Altura
        maxHeight: "218px", // Altura máxima fija
    }

    const styleCardContent = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }

    const styleGridItem = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const styleFoto = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
    }

    const styleButton = {
        height: "100vh", // Altura
        maxHeight: "185px", // Altura máxima fija
        width: "7.5vw", // Ancho
        maxWidth: "1000px", // Ancho máximo fijo
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3e3e3",
        cursor: "pointer",
        borderRadius: "3px",
        marginLeft: "-5.5em",
    }

    const children1 = () => {
        return (
            fotos && fotos?.[1] ? (
                <Img
                    id={`foto-principal-${fotos[1]}`}
                    file={fotos[1]}
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

    const children2 = () => {
        return (
            fotos && fotos?.[2] ? (
                <Img
                    id={`foto-principal-${fotos[2]}`}
                    file={fotos[2]}
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

    const children3 = () => {
        return (
            fotos && fotos?.[3] ? (
                <Img
                    id={`foto-principal-${fotos[3]}`}
                    file={fotos[3]}
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
        <Grid container >
            <Grid item xs={12} style={styleGridItem} >
                <CardConteinerImg
                    styleCard={styleCard}
                    styleCardContent={styleCardContent}
                >
                    {children1()}
                </CardConteinerImg>
            </Grid>
            <Grid item xs={12} style={styleGridItem}>
                <CardConteinerImg
                    styleCard={styleCard}
                    styleCardContent={styleCardContent}
                >
                    {children2()}
                </CardConteinerImg>
            </Grid>
            <Grid container>
                <Grid item xs={12} lg={8} style={styleGridItem} >
                    <CardConteinerImg
                        styleCard={{
                            backgroundColor: "#e3e3e3", // Gris
                            width: "12vw", // Ancho
                            maxWidth: "1000px", // Ancho máximo fijo
                            height: "100vh", // Altura
                            maxHeight: "185px", // Altura máxima fija
                        }}
                        styleCardContent={styleCardContent}
                    >
                        {children3()}
                    </CardConteinerImg>
                </Grid>
                <Grid item xs={12} lg={4} style={styleGridItem} >
                    <CargarFotosButton
                        id={"input-fotos-secundarias"}
                        handleChange={() => { }}
                        style={styleButton}
                    />
                </Grid>
            </Grid>
        </Grid >
    )
}

export default FotoSecundariaIndex