import { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import rellenoFoto from "../../../../shared/assets/rellenoFoto.svg";
import BackspaceIcon from '@mui/icons-material/Backspace';
import muestra1 from "../../../../shared/assets/muestra1.webp";
import muestra2 from "../../../../shared/assets/muestra2.webp";
import muestra3 from "../../../../shared/assets/muestra3.webp";
import Img from "../../../../shared/components/images/Img";
import CargarFotosButton from "../../../../shared/components/input/CargarFotosButton";


const CargarFotosMascota = ({ fotos, setFotos }) => {

  // Estilos
  const styleFoto = {
    width: 120,
    height: 120,
    borderRadius: 20,
  }

  const styleRelleno = {
    width: 40,
    height: 40,
    borderRadius: 20,
  }

  // Máximo de fotos permitidas
  const MAXFILES = 4;

  // Estado para guardar temporalmente las fotos
  const [fotosTemp, setFotosTemp] = useState([]);

  /**
   * Función para manejar el cambio de archivos seleccionados.
   * Verifica si se supera el máximo permitido y actualiza el estado de fotos.
   */
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
                  style={styleFoto} />
              )
                :
                fotos && fotos.length > 0 ? (
                  <Grid container justifyContent="center" alignItems="center" style={{ height: 120, width: 120 }} >
                    <Img
                      muestra={rellenoFoto}
                      id={"relleno-1"}
                      style={styleRelleno}
                    />
                  </Grid>
                ) :
                  <Img
                    muestra={muestra1}
                    id={"muestra-1"}
                    style={styleFoto}
                  />
            }
          </Grid>
          <Grid item xs={6} sm={3}>
            {
              fotos && fotos?.[1] ? (
                <Img
                  file={fotos[1]}
                  id={`nombre-foto-${fotos[1]}-2`}
                  style={styleFoto} />
              )
                :
                fotos && fotos.length > 0 ? (
                  <Grid container justifyContent="center" alignItems="center" style={{ height: 120, width: 120 }} >
                    <Img
                      muestra={rellenoFoto}
                      id={"relleno-2"}
                      style={styleRelleno}
                    />
                  </Grid>
                ) :
                  <Img
                    muestra={muestra2}
                    id={"muestra-2"}
                    style={styleFoto}
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
                  style={styleFoto} />
              )
                :
                fotos && fotos.length > 0 ? (
                  <Grid container justifyContent="center" alignItems="center" style={{ height: 120, width: 120 }} >
                    <Img
                      muestra={rellenoFoto}
                      id={"relleno-3"}
                      style={styleRelleno}
                    />
                  </Grid>
                ) :
                  <Img
                    muestra={muestra3}
                    id={"muestra-3"}
                    style={styleFoto}
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
