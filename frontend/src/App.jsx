import Button from "@mui/material/Button";

function App() {
  return (
    <body>
      <h1>hola, soy una version muy temprana de la app</h1>
      {/* Aca va el componente de entrada al sistema (bienvenido y login) */}
      {/* este componente MainMenu es temporal, sirve para acceder al menu principal directamente sin iniciar sesion */}
      <Button variant="contained" href="/main-menu">
        Ingresar sin iniciar sesion
      </Button>
    </body>
  );
}

export default App;
