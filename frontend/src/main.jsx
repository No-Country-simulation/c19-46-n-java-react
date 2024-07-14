import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";

const customDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E36414", // Primario: Naranja
    },
    secondary: {
      main: "#0F4C5C", // Secundario: Azul
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1d1d1d", // Fondo de componentes
    },
    text: {
      primary: "#ffffff", // Texto principal
      secondary: "#aaaaaa", // Texto secundario
    },
  },
  typography: {
    fontFamily: "Poppins,Roboto, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={customDarkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
