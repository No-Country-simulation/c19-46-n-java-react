import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PetsIcon from "@mui/icons-material/Pets";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import home from '../../shared/assets/home.svg';
import mensajes from '../../shared/assets/mensajes.svg';
import perfil from '../../shared/assets/perfil.svg';
import config from '../../shared/assets/config.svg';
//import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const getValueFromPath = (path) => {
    switch (path) {
      case "/main-menu":
      case "/main-menu/buscador":
        return 0;
      case "/main-menu/mi-perfil":
        return 1;
      case "/main-menu/preferencias":
        return 2;
      default:
        return 0;
    }
  };

  const [value, setValue] = React.useState(getValueFromPath(location.pathname));

  React.useEffect(() => {
    setValue(getValueFromPath(location.pathname));
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent="center">
      <Tabs 
        value={value}
        onChange={handleChange}
        aria-label=" icon label tabs example"
      >
        <Tab
          icon={<img src={home} alt="Home" />}
          // label="HOME"
          component={Link}
          to="/main-menu/buscador"
        />
        <Tab
          icon={<img src={mensajes} alt="mensajes" />}
          // label="MENSAJES"
          component={Link}
          to="/main-menu/mi-perfil"         
        />
        <Tab
          icon={<img src={perfil} alt="perfil" />}
          // label="PERFIL"
          component={Link}
          to="/main-menu/preferencias"
        />
        <Tab
          icon={<img src={config} alt="configuracion" />}
          // label="CONFIGURACION"
          component={Link}
          to="/main-menu/preferencias"
        />
      </Tabs>
    </Grid>
  );
};

export default Navbar;
