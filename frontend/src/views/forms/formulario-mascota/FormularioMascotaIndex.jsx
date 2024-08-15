import { useEffect } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import agregarMascota from "../../../shared/assets/agregarMascota.webp";
import CargarFotosMascota from "./cargar-fotos/CargarFotosMascota";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { useMascota } from "../../../shared/hooks/useMascota";

const FormularioMascotaIndex = ({ onPrevious }) => {

  const {
    estadoForm: {
      error,
      setError,
      isSubmitting
    },
    estadoMascota: {
      setNombre,
      setEdad,
      setSexo,
      setRaza,
      setTamanio,
      setDescripcion,
      setFotos,
      nombre,
      edad,
      sexo,
      raza,
      razas,
      tamanio,
      tamanios,
      descripcion,
      fotos
    },
    handleRegister,
    getRazas,
    getTamanios,
  } = useMascota()

  useEffect(() => {
    getRazas()
    getTamanios()
  }, [])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            backgroundColor: "#e3e3e3", // Gris
            width: "90vw", // Ancho
            maxWidth: "1000px", // Ancho máximo fijo
            height: "100vh", // Altura
            overflowY: "auto", // Agregar scrollbar horizontal
            maxHeight: "600px", // Altura máxima fija
            backgroundImage: `url(${agregarMascota})`, // Imagen de fondo
            backgroundPosition: "left bottom", // Posición de la imagen de fondo
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardContent>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <Typography
                  color="primary"
                  variant="h5"
                  fontWeight="bold"
                  align="center"
                >
                  ¡Completa con los datos de tu mejor amigo!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={handleRegister}>
                  <Grid container spacing={2} mt={2}>
                    {/* Primera columna */}
                    <Grid item xs={12} md={4}>
                      <Input
                        id="formulario-mascota-nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        maxLength={50}
                        required
                      />
                      <Input
                        id="formulario-mascota-edad"
                        placeholder="Edad"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        maxLength={50}
                        required
                      />
                      <Input
                        id="formulario-mascota-sexo"
                        type="select"
                        placeholder="Selecciona un sexo"
                        value={sexo}
                        options={[
                          { id: "1", name: "Macho" },
                          { id: "2", name: "Hembra" },
                        ]}
                        onChange={(selectedItem) => setSexo(selectedItem)}
                        required
                      />
                      <Input
                        id="formulario-mascota-raza"
                        type="select"
                        placeholder="Selecciona una raza"
                        value={raza}
                        options={razas}
                        onChange={(selectedItem) => setRaza(selectedItem)}
                        required
                      />
                    </Grid>

                    {/* Segunda columna */}
                    <Grid item xs={12} md={4}>
                      <Input
                        id="formulario-mascota-tamanio"
                        type="select"
                        placeholder="Selecciona un tamaño"
                        value={tamanio}
                        options={tamanios}
                        onChange={(selectedItem) => setTamanio(selectedItem)}
                        required
                      />
                      <Input
                        id="formulario-mascota-descripcion"
                        type="textarea"
                        placeholder="Cuenta lo que quieras de él/ella"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        maxLength={150}
                      />
                    </Grid>

                    {/* Tercera columna */}
                    {/* Fotos de muestra e input para las fotos */}
                    <Grid item xs={12} md={4}>
                      <CargarFotosMascota
                        fotos={fotos}
                        setFotos={setFotos}
                        error={error}
                        setError={setError}
                      />
                    </Grid>

                    {/* Botones volver y finalizar */}
                    <Grid container justifyContent="flex-end" marginTop="16px">
                      <Grid item>
                        <Button className="btn-secondary" onClick={onPrevious}>
                          VOLVER
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          id="formulario-mascota-submit"
                          type="submit"
                          className="btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Enviando..." : "FINALIZAR"}
                        </Button>
                      </Grid>
                    </Grid>

                    {/* Mensaje de error */}
                    <Grid container justifyContent="flex-end">
                      {error && <div style={{ color: "red" }}>{error}</div>}
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FormularioMascotaIndex;
