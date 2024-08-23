import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import "./main.css";

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E36414", // Primario: Naranja
    },
    secondary: {
      main: "#0F4C5C", // Secundario: Azul
    },
    background: {
      // default: "#121212", // Fondo oscuro
      // default: "#f1f1f1", // Fondo gris 0.5
      // default: "#e3e3e3", // Fondo gris 1
      default: "#c9c9c9", // Fondo gris 2
      paper: "#ffffff", // Fondo de componentes
    },
    text: {
      primary: "#000000", // Texto principal oscuro
      secondary: "#666666", // Texto secundario oscuro
    },
  },
  typography: {
    fontFamily: "Poppins,Roboto, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
