import { Route, Routes } from "react-router-dom";
import HomeIndex from "../views/wrap-content/home/Home_Index";
import MensajeIndex from "../views/wrap-content/mensaje/MensajeIndex";
import PerfilIndex from "../views/wrap-content/perfil/PerfilIndex";
import ConfiguracionIndex from "../views/wrap-content/configuracion/ConfiguracionIndex";

const NavBarRoutes = () => {
  const routes = [
    {
      path: "*",
      element: <HomeIndex />,
    },
    {
      path: "home/*",
      element: <HomeIndex />,
    },
    {
      path: "mensaje/*",
      element: <MensajeIndex />,
    },
    {
      path: "perfil/*",
      element: <PerfilIndex />,
    },
    {
      path: "configuracion/*",
      element: <ConfiguracionIndex />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default NavBarRoutes;
