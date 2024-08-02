import { Card, CardContent, Grid, Typography } from "@mui/material"
import Input from "../../../../shared/components/input/Input"
import Button from "../../../../shared/components/button/Button"

const FormularioCambioEmail = ({
    error,
    isSubmitting,
    email,
    setEmail,
    newEmail,
    setNewEmail,
    handleSubmitChangeEmail
}) => {
    return (
        <>
            <Card
                style={{
                    backgroundColor: "#e3e3e3", // Gris
                    width: "100vw", // Ancho
                    maxWidth: "450px", // Ancho máximo fijo
                    height: "60vh", // Altura
                    overflowY: "auto", // Agregar scrollbar horizontal
                    maxHeight: "500px", // Altura máxima fija
                }}
            >
                <CardContent>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12} >
                            <Typography
                                color="primary"
                                variant="h5"
                                fontWeight="bold"
                                align="center"
                                mt={2}
                                mb={2}
                            >
                                Cambiar correo
                            </Typography>
                        </Grid>

                        <form onSubmit={handleSubmitChangeEmail}>

                            {/* Este input lo agregue porque tiraba un warning en el navegador, esta al pedo, no hace nada y esta oculto */}
                            <input
                                id="-"
                                name="-"
                                type="text"
                                style={{ visibility: "hidden", position: "absolute" }}
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            <Grid item xs={12} >
                                <Input
                                    id="form-cambio-email-email"
                                    placeholder={"correo actual"}
                                    type={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    maxLength={50}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <Input
                                    id="form-cambio-email-new-password"
                                    placeholder={"nuevo correo"}
                                    type={"email"}
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    maxLength={50}
                                    required
                                />
                            </Grid>

                            <Grid container mt={7} justifyContent="center">
                                <Button
                                    id="form-cambio-email-submit"
                                    type="submit"
                                    className="btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Enviando..." : "CONFIRMAR"}
                                </Button>

                                <Grid item xs={12}>
                                    {error && <div style={{ color: "red" }}>{error}</div>}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default FormularioCambioEmail