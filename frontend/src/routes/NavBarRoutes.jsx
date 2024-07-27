import { Route, Routes } from "react-router-dom";
import BuscadorIndex from "../views/wrap-content/buscador/BuscadorIndex";
import MiPerfilIndex from "../views/wrap-content/mi-perfil/MiPerfilIndex";
import PreferenciasIndex from "../views/wrap-content/preferencias/PreferenciasIndex";

const NavBarRoutes = () => {
  const routes = [
    {
      path: "*",
      element: <BuscadorIndex />,
    },
    {
      path: "buscador/*",
      element: <BuscadorIndex />,
    },
    {
      path: "mi-perfil/*",
      element: <MiPerfilIndex />,
    },
    {
      path: "preferencias/*",
      element: <PreferenciasIndex />,
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
