import { Card, CardContent, Grid, Typography } from "@mui/material"
import { useMascota } from "../../../../shared/hooks/useMascota"
import Input from "../../../../shared/components/input/Input"
import Button from "../../../../shared/components/button/Button"

const FormEditarMascotaIndex = () => {

    const styleGridItem = {
        display: "flex",
        justifyContent: "center"
    }

    const {
        estadoForm: {
            error,
            isSubmitting
        },
        estadoMascota: {
            setNombre,
            setEdad,
            setSexo,
            setRaza,
            setTamanio,
            setDescripcion,
            nombre,
            edad,
            sexo,
            raza,
            tamanio,
            descripcion,
        },
        handleRegister,
        getRazas
    } = useMascota()

    const razas = getRazas();
    return (
        <>
            <Card
                style={{
                    backgroundColor: "#e3e3e3", // Gris
                    width: "25vw", // Ancho
                    maxWidth: "1000px", // Ancho máximo fijo
                    height: "100vh", // Altura
                    overflowY: "auto", // Agregar scrollbar horizontal
                    maxHeight: "660px", // Altura máxima fija
                }}
            >
                <CardContent>
                    <Grid container justifyContent="space-between" spacing={2}>
                        <Grid container>
                            {/* Titulo - Nombre */}
                            <Grid item xs={12} style={styleGridItem}>
                                <Typography
                                    color="primary"
                                    variant="h5"
                                    fontWeight="bold"
                                    align="center"
                                    mt={2}
                                >
                                    {nombre ? `${nombre}` : "nombre de la mascota"}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center" mt={2}>
                            <form onSubmit={handleRegister}>

                                {/* Nombre */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Input
                                        id="formulario-mascota-nombre"
                                        placeholder={"Nombre"}
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        maxLength={50}
                                        required
                                    />
                                </Grid>

                                {/* Edad */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Input
                                        id="formulario-mascota-edad"
                                        placeholder={"Edad"}
                                        value={edad}
                                        onChange={(e) => setEdad(e.target.value)}
                                        maxLength={50}
                                        required
                                    />
                                </Grid>

                                {/* Sexo */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Input
                                        id="formulario-mascota-sexo"
                                        type="select"
                                        value={sexo}
                                        options={[
                                            { value: "", label: "Selecciona un sexo" },
                                            { value: "Macho", label: "Macho" },
                                            { value: "Hembra", label: "Hembra" },
                                        ]}
                                        onChange={(e) => setSexo(e.target.value)}
                                        required
                                    />

                                </Grid>

                                {/* Raza */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Input
                                        id="formulario-mascota-raza"
                                        type="select"
                                        value={raza}
                                        options={razas}
                                        onChange={(e) => setRaza(e.target.value)}
                                        required
                                    />
                                </Grid>

                                {/* Tamanio */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Input
                                        id="formulario-mascota-tamanio"
                                        type="select"
                                        value={tamanio}
                                        options={[
                                            { value: "", label: "Selecciona un tamaño", },
                                            { value: "Pequeño", label: "Pequeño", },
                                            { value: "Mediano", label: "Mediano", },
                                            { value: "Grande", label: "Grande", },
                                        ]}
                                        onChange={(e) => setTamanio(e.target.value)}
                                        required
                                    />
                                </Grid>

                                {/* Descripcion */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Input
                                        id="formulario-mascota-descripcion"
                                        type="textarea"
                                        placeholder={"Cuenta lo que quieras de él/ella"}
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        maxLength={150}
                                    />
                                </Grid>

                                {/* Boton confirmar */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Button
                                        id="formulario-mascota-submit"
                                        type="submit"
                                        className="btn-primary"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "guardando cambios..." : "confirmar"}
                                    </Button>
                                </Grid>

                                {/* Boton cancelar */}
                                <Grid item xs={12} style={styleGridItem}>
                                    <Button className="btn-secondary" onClick={() => { }}>
                                        cancelar
                                    </Button>
                                </Grid>

                                {/* Mensaje de error */}
                                <Grid container justifyContent="center">
                                    <Grid item xs={12} style={styleGridItem}>
                                        {error && <div style={{ color: "red" }}>{error}</div>}
                                    </Grid>
                                </Grid>

                            </form>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default FormEditarMascotaIndex