import { Grid } from "@mui/material";
import FotoPrincipalIndex from "./foto-principal/FotoPrincipalIndex";
import FotoSecundariaIndex from "./foto-secundaria/FotoSecundariaIndex";
import FormEditarMascotaIndex from "./formulario-editar-mascota/FormEditarMascotaIndex";
import MiPerfilFooterIndex from "./footer/MiPerfilFooterIndex";

const MiPerfilIndex = () => {

  const styleGridItem = {
    display: "flex",
    justifyContent: "center",
  }

  return <>
    <Grid container justifyContent="center" spacing={0} >

      {/* Formulario */}
      <Grid item xs={12} md={3} style={styleGridItem}>
        <FormEditarMascotaIndex />
      </Grid>

      {/* Foto principal */}
      <Grid item xs={12} md={5} style={styleGridItem} >
        <FotoPrincipalIndex />
      </Grid>

      {/* Fotos secundarias */}
      <Grid item xs={12} md={4} style={styleGridItem}>
        <FotoSecundariaIndex />
      </Grid>

    </Grid>

    {/* Footer - botones */}
    <Grid container justifyContent="center">
      <Grid item xs={12} style={styleGridItem} >
        <MiPerfilFooterIndex />
      </Grid>
    </Grid>

  </>;
};

export default MiPerfilIndex;
