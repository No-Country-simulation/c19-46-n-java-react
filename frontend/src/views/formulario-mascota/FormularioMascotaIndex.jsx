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
import agregarMascota from "../../assets/agregarMascota.webp";

const FormularioMascotaIndex = () => {
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
            backgroundColor: "#e3e3e3", // Gris más oscuro
            width: "90vw", // Ancho más grande
            maxWidth: "1000px", // Ancho máximo fijo
            height: "70vh", // Altura más grande
            maxHeight: "600px", // Altura máxima fija
            backgroundImage: `url(${agregarMascota})`,
            backgroundPosition: "left bottom",
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
                <form onSubmit={() => {}}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Nombre"
                        variant="outlined"
                        margin="normal"
                        name="nombre"
                      />
                      <TextField
                        fullWidth
                        label="Edad"
                        variant="outlined"
                        margin="normal"
                        name="edad"
                      />
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Sexo</InputLabel>
                        <Select
                          variant="outlined"
                          label="Sexo"
                          name="sexo"
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
                          name="raza"
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
                          label="Tamanio"
                          name="tamanio"
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
                        name="descripcion"
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        type="file"
                        inputProps={{ accept: "image/*" }}
                        onChange={() => {}}
                        margin="normal"
                        variant="outlined"
                        label="Subir imagen"
                        name="imagen"
                      />
                    </Grid>
                    <Grid
                      container
                      justifyContent="right"
                      marginTop="16px"
                      spacing={2}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                      >
                        Volver
                      </Button>
                      <Button variant="contained" color="primary" type="submit">
                        Finalizar
                      </Button>
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
