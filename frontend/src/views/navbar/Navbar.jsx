import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import home_default from '../../shared/assets/home_default.png';
import mensaje_default from '../../shared/assets/mensaje_default.png';
import perfil_default from '../../shared/assets/perfil_default.png';
import configuracion_default from '../../shared/assets/configuracion_default.png';
import home_hover from '../../shared/assets/home_hover.png';
import mensaje_hover from '../../shared/assets/mensaje_hover.png';
import perfil_hover from '../../shared/assets/perfil_hover.png';
import configuracion_hover from '../../shared/assets/configuracion_hover.png';
import "./navbar.css"

const Navbar = () => {
  const location = useLocation();
  const getValueFromPath = (path) => {
    switch (path) {
      case "/main-menu":
      case "/main-menu/home":
        return 0;
      case "/main-menu/mensaje":
        return 1;
      case "/main-menu/perfil":
        return 2;
      case "/main-menu/configuracion":
        return 3;
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
    <Grid container justifyContent="flex-end" className="navbar">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        TabIndicatorProps={{ style: { display: 'none'} }}
      >
        <Tab
          icon={<img src={value === 0 ? home_hover : home_default} alt="Home" />}
          component={Link}
          to="/main-menu/home"
        />
        <Tab
          icon={<img src={value === 1 ? mensaje_hover : mensaje_default} alt="Mensajes" />}
          component={Link}
          to="/main-menu/mensaje"       
        />
        <Tab
          icon={<img src={value === 2 ? perfil_hover : perfil_default} alt="Perfil" />}
          component={Link}
          to="/main-menu/perfil" 
        />
        <Tab
          icon={<img src={value === 3 ? configuracion_hover : configuracion_default} alt="Configuracion" />}
          component={Link}
          to="/main-menu/configuracion"
        />
      </Tabs>
    </Grid>
  );
};

export default Navbar;