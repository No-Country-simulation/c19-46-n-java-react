import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import agregarMascota from "../../shared/assets/agregarMascota.webp";
import CargarFotosMascota from "./cargar-fotos/CargarFotosMascota";

const FormularioMascotaIndex = () => {
  const handleSubmit = () => {};

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
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Nombre"
                        variant="outlined"
                        margin="normal"
                        id="formulario-mascota-nombre"
                      />
                      <TextField
                        fullWidth
                        label="Edad"
                        variant="outlined"
                        margin="normal"
                        id="formulario-mascota-edad"
                      />
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Sexo</InputLabel>
                        <Select
                          variant="outlined"
                          label="Sexo"
                          id="formulario-mascota-sexo"
                          defaultValue="Macho"
                        >
                          <MenuItem value="Macho">Macho</MenuItem>
                          <MenuItem value="Hembra">Hembra</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Raza</InputLabel>
                        <Select
                          variant="outlined"
                          label="Raza"
                          id="formulario-mascota-raza"
                          defaultValue="Caniche"
                        >
                          <MenuItem value="Caniche">Caniche</MenuItem>
                          <MenuItem value="Doberman">Doberman</MenuItem>
                          <MenuItem value="Dálmata">Dálmata</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Tamaño</InputLabel>
                        <Select
                          variant="outlined"
                          label="Tamaño"
                          id="formulario-mascota-tamaño"
                          defaultValue="Pequeño"
                        >
                          <MenuItem value="Pequeño">Pequeño</MenuItem>
                          <MenuItem value="Mediano">Mediano</MenuItem>
                          <MenuItem value="Grande">Grande</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        fullWidth
                        label="Cuenta lo que quieras de él/ella"
                        variant="outlined"
                        margin="normal"
                        id="formulario-mascota-descripcion"
                        multiline
                        rows={4}
                      />
                    </Grid>

                    {/* Fotos de muestra e input para las fotos */}
                    <Grid item xs={12} md={4}>
                      <CargarFotosMascota />
                    </Grid>

                    {/* Botones volver y finalizar */}
                    <Grid
                      container
                      justifyContent="flex-end"
                      marginTop="16px"
                      spacing={2}
                    >
                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          type="button"
                        >
                          Volver
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Finalizar
                        </Button>
                      </Grid>
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
