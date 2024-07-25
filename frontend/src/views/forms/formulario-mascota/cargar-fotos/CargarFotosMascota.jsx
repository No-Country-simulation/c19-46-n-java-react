import { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import BackspaceIcon from '@mui/icons-material/Backspace';
import muestra1 from "../../../../shared/assets/muestra1.webp";
import muestra2 from "../../../../shared/assets/muestra2.webp";
import muestra3 from "../../../../shared/assets/muestra3.webp";
import CargarFotosButton from "../../../../shared/components/input/CargarFotosButton";
import Img from "../../../../shared/components/images/Img";


const CargarFotosMascota = ({ setFotos }) => {

  const [fotosCollection, setFotosCollection] = useState([]);
  const MAXFILES = 10; // Máximo de fotos permitidas

  const handleChange = (event) => {
    if (event.target.files) {
      const newFotos = Array.from(event.target.files);
      // Verificar que no exceda el máximo permitido
      if (fotosCollection.length + newFotos.length > MAXFILES) {
        alert(`No puedes cargar más de ${MAXFILES} imágenes.`);
        return; // Salir de la función sin hacer nada
      }
      setFotos(newFotos);
      setFotosCollection((prevFotos) => [...prevFotos, ...newFotos]);
    }
    else {
      setFotos([]);
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
              fotosCollection && fotosCollection?.[0] ? (
                <Img
                  file={fotosCollection[0]}
                  id={`nombre-foto-${fotosCollection[0]}-1`}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 20,
                  }} />
              )
                :
                fotosCollection && fotosCollection.length > 0 ? (
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
              fotosCollection && fotosCollection?.[1] ? (
                <Img
                  file={fotosCollection[1]}
                  id={`nombre-foto-${fotosCollection[1]}-2`}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 20,
                  }} />
              )
                :
                fotosCollection && fotosCollection.length > 0 ? (
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
              fotosCollection && fotosCollection?.[2] ? (
                <Img
                  file={fotosCollection[2]}
                  id={`nombre-foto-${fotosCollection[2]}-3`}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 20,
                  }} />
              )
                :
                fotosCollection && fotosCollection.length > 0 ? (
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
        {fotosCollection && fotosCollection.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography
              fontSize={"14px"}
              color={"primary"}
              style={{ textAlign: "left" }}
            >
              Fotos cargadas:
            </Typography>
            {
              fotosCollection?.map((f, index) => (
                <div key={index}>
                  <Grid container justifyContent="space-between" spacing={8}>
                    <Grid item xs={6}>
                      <Typography fontSize={"11px"}>{f.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <IconButton
                        onClick={() => {
                          setFotosCollection(fotosCollection.filter((e, i) => i !== index));
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
