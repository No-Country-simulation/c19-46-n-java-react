import { Grid } from "@mui/material";
import muestra1 from "../../../../shared/assets/muestra1.webp";
import muestra2 from "../../../../shared/assets/muestra2.webp";
import muestra3 from "../../../../shared/assets/muestra3.webp";
import CargarFotosButton from "../../../../shared/components/input/CargarFotosButton";
import MostrarImagen from "../../../../shared/components/images/MostrarImagen";

const CargarFotosMascota = ({ fotos, setFotos }) => {
  const handleChange = (event) => {
    if (event.target.files) {
      setFotos(Array.from(event.target.files));
    }
  };
  return (
    <>

      <div>
        {fotos.map((file, index) => (
          <MostrarImagen file={file} key={index} id={`foto ${index + 1}`} />
        ))}
      </div>

      <Grid container justifyContent="center" alignItems="center">
        {/* Fotos de muestra */}

        {/* Primera Columna */}
        <Grid container spacing={16}>
          <Grid item xs={6} sm={3}>
            <img
              src={muestra1}
              alt="Muestra 1"
              style={{
                width: 120,
                height: 120,
                borderRadius: 20,
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img
              src={muestra2}
              alt="Muestra 2"
              style={{
                width: 120,
                height: 120,
                borderRadius: 20,
              }}
            />
          </Grid>
        </Grid>

        {/* Segunda Columna */}
        <Grid container spacing={16}>
          <Grid item xs={6} sm={3}>
            <img
              src={muestra3}
              alt="Muestra 3"
              style={{
                width: 120,
                height: 120,
                borderRadius: 20,
              }}
            />
          </Grid>

          {/* Cargar fotos */}
          <Grid item xs={6} sm={3}>
            <CargarFotosButton
              id="formulario-mascota-cargar-fotos"
              handleChange={handleChange}
              required={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CargarFotosMascota;
