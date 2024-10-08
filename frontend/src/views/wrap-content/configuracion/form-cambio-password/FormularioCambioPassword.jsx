import { Card, CardContent, Grid, Typography } from "@mui/material"
import Input from "../../../../shared/components/input/Input"
import Button from "../../../../shared/components/button/Button"

const FormularioCambioPassword = ({
    error,
    isSubmitting,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    handleSubmitChangePassword,
    newPasswordConfirm,
    setNewPasswordConfirm
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
                    maxHeight: "600px", // Altura máxima fija
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
                                Cambiar contraseña
                            </Typography>
                        </Grid>

                        <form onSubmit={handleSubmitChangePassword}>

                            {/* Este input lo agregue porque tiraba un warning en el navegador, esta al pedo, no hace nada y esta oculto */}
                            <input
                                id="-a"
                                name="-"
                                type="text"
                                style={{ visibility: "hidden", position: "absolute" }}
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            <Grid item xs={12} >
                                <Input
                                    id="form-cambio-password-password"
                                    type="password"
                                    placeholder={"contraseña actual"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    maxLength={8}
                                    autoComplete="current-password"
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <Input
                                    id="form-cambio-password-new-password"
                                    type="password"
                                    placeholder={"nueva contraseña"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    maxLength={8}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <Input
                                    id="form-cambio-password-confirm-password"
                                    type="password"
                                    placeholder={"confirmar contraseña"}
                                    value={newPasswordConfirm}
                                    onChange={(e) => setNewPasswordConfirm(e.target.value)}
                                    maxLength={8}
                                    required
                                />
                            </Grid>

                            <Grid container mt={7} justifyContent="center">
                                <Button
                                    id="form-cambio-password-submit"
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

export default FormularioCambioPassword