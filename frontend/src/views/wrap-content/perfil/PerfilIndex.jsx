import { Grid } from "@mui/material";
import FotoPrincipalIndex from "./foto-principal/FotoPrincipalIndex";
import FotoSecundariaIndex from "./foto-secundaria/FotoSecundariaIndex";
import FormEditarMascotaIndex from "./formulario-editar-mascota/FormEditarMascotaIndex";
import MiPerfilFooterIndex from "./footer/MiPerfilFooterIndex";
import { useMascota } from "../../../shared/hooks/useMascota";

const PerfilIndex = () => {

  const styleGridItem = {
    display: "flex",
    justifyContent: "center",
  }

  const {
    estadoForm: {
      error,
      setError,
      isSubmitting,
      setIsSubmitting
    },
    estadoMascota: {
      setNombre,
      setEdad,
      setSexo,
      setRaza,
      setTamanio,
      setDescripcion,
      nombre,
      edad,
      sexo,
      raza,
      tamanio,
      descripcion,
    },
    handleRegister,
    getRazas,
    getFotos
  } = useMascota()

  const razas = getRazas();
  const fotos = getFotos();

  return <>
    <Grid container justifyContent="center" spacing={-50} marginTop={3}  >

      {/* Formulario editar mascota */}
      <Grid item xs={12} lg={4} style={styleGridItem}>
        <FormEditarMascotaIndex
          error={error}
          isSubmitting={isSubmitting}
          setNombre={setNombre}
          setEdad={setEdad}
          setSexo={setSexo}
          setRaza={setRaza}
          setTamanio={setTamanio}
          setDescripcion={setDescripcion}
          nombre={nombre}
          edad={edad}
          sexo={sexo}
          raza={raza}
          razas={razas}
          tamanio={tamanio}
          descripcion={descripcion}
          handleRegister={handleRegister}
        />
      </Grid>

      {/* Foto principal */}
      <Grid item xs={12} lg={4} style={styleGridItem} >
        <FotoPrincipalIndex
          fotos={fotos}
          error={error}
          setError={setError}
        />
      </Grid>

      {/* Fotos secundarias */}
      <Grid item xs={12} lg={4} style={styleGridItem}>
        <FotoSecundariaIndex />
      </Grid>

    </Grid >

    {/* Footer - botones */}
    <Grid container justifyContent="center" spacing={-50} >
      <Grid item xs={12} lg={4} style={styleGridItem} />
      <Grid item xs={12} lg={4} style={styleGridItem} />
      <Grid item xs={12} lg={4} style={{ ...styleGridItem, justifyContent: "flex-end", marginTop: "20px" }}>
        <MiPerfilFooterIndex />
      </Grid>
    </Grid>

  </>;
};

export default PerfilIndex;
