import { Grid, IconButton, Typography } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import BackspaceIcon from '@mui/icons-material/Backspace';
import muestra1 from "../../../../shared/assets/muestra1.webp";
import muestra2 from "../../../../shared/assets/muestra2.webp";
import muestra3 from "../../../../shared/assets/muestra3.webp";
import CargarFotosButton from "../../../../shared/components/input/CargarFotosButton";
import Img from "../../../../shared/components/images/Img";


const CargarFotosMascota = ({ fotos, setFotos, setFotosTemp }) => {

  const MAXFILES = 4; // Máximo de fotos permitidas

  const handleChange = (event) => {
    if (event.target.files) {
      const newFotos = Array.from(event.target.files);
      // Verificar que no exceda el máximo permitido
      if (fotos.length + newFotos.length > MAXFILES) {
        alert(`No puedes cargar más de ${MAXFILES} imágenes.`);
        return; // Salir de la función sin hacer nada
      }
      setFotosTemp(newFotos);
      setFotos((prevFotos) => [...prevFotos, ...newFotos]);
    }
    else {
      setFotosTemp([]);
    }
    event.target.value = null;
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        {/* Fotos de muestra */}

        {/* Primera Columna */}
        <Grid container spacing={16}>
          <Grid item xs={6} sm={3}>
            {
              fotos && fotos?.[0] ? (
                <Img
                  file={fotos[0]}
                  id={`nombre-foto-${fotos[0]}-1`}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 20,
                  }} />
              )
                :
                fotos && fotos.length > 0 ? (
                  <PhotoCameraIcon
                    fontSize="large"
                    color="primary"
                    style={{
                      width: 120,
                      height: 120,
                    }}
                  />
                ) :
                  <Img
                    muestra={muestra1}
                    id={"muestra-1"}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 20,
                    }}
                  />
            }
          </Grid>
          <Grid item xs={6} sm={3}>
            {
              fotos && fotos?.[1] ? (
                <Img
                  file={fotos[1]}
                  id={`nombre-foto-${fotos[1]}-2`}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 20,
                  }} />
              )
                :
                fotos && fotos.length > 0 ? (
                  <PhotoCameraIcon
                    fontSize="large"
                    color="primary"
                    style={{
                      width: 120,
                      height: 120,
                    }}
                  />
                ) :
                  <Img
                    muestra={muestra2}
                    id={"muestra-2"}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 20,
                    }}
                  />
            }
          </Grid>
        </Grid>

        {/* Segunda Columna */}
        <Grid container spacing={16}>
          <Grid item xs={6} sm={3}>
            {
              fotos && fotos?.[2] ? (
                <Img
                  file={fotos[2]}
                  id={`nombre-foto-${fotos[2]}-3`}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 20,
                  }} />
              )
                :
                fotos && fotos.length > 0 ? (
                  <PhotoCameraIcon
                    fontSize="large"
                    color="primary"
                    style={{
                      width: 120,
                      height: 120,
                    }}
                  />
                ) :
                  <Img
                    muestra={muestra3}
                    id={"muestra-3"}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 20,
                    }}
                  />
            }
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

        {/* Lista de fotos cargadas */}
        {fotos && fotos.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography
              fontSize={"14px"}
              color={"primary"}
              style={{ textAlign: "left" }}
            >
              Fotos cargadas:
            </Typography>
            {
              fotos?.map((f, index) => (
                <div key={index}>
                  <Grid container justifyContent="space-between" spacing={8}>
                    <Grid item xs={6}>
                      <Typography fontSize={"11px"}>{f.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <IconButton
                        onClick={() => {
                          setFotos(fotos.filter((e, i) => i !== index));
                        }}
                        style={{ padding: 0, marginLeft: 4 }}
                      >
                        <BackspaceIcon fontSize="small" color="primary" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </div>
              ))
            }
          </div>
        ) : (
          <div>
            <Typography
              color={"red"}
              fontSize={"14px"}
            >
              Debes cargar al menos una foto
            </Typography>
          </div>
        )}
      </Grid>
    </>
  );
};

export default CargarFotosMascota;
