import { Grid } from "@mui/material";
import NavBarRoutes from "../routes/NavBarRoutes";
import Navbar from "./navbar/Navbar";

const MainMenu = () => {
  return (
    <>
      <Navbar />
      <Grid container justifyContent="center" mt={2}>
        <NavBarRoutes />
      </Grid>
    </>
  );
};

export default MainMenu;
