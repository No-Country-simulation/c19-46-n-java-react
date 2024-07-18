import { Grid } from "@mui/material";
import muestra1 from "../../../shared/assets/muestra1.webp";
import muestra2 from "../../../shared/assets/muestra2.webp";
import muestra3 from "../../../shared/assets/muestra3.webp";
import CargarFotosButton from "../../../shared/components/inputs/CargarFotosButton";

const CargarFotosMascota = () => {
  const handleChange = () => {};

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
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
          <Grid item xs={6} sm={3}>
            <CargarFotosButton handleChange={handleChange} required={true} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CargarFotosMascota;
