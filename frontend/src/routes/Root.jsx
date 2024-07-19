import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainMenu from "../views/MainMenu";
import ComponentePruebas from "../ComponentePruebas";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "main-menu/*",
    element: <MainMenu />,
  },
  {
    path: "pruebas/",
    element: <ComponentePruebas />,
  },
];

const Root = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Root;
