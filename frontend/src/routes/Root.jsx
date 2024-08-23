import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainMenu from "../views/MainMenu";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
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
