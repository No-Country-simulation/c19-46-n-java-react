import Button from "@mui/material/Button";
import OnboardingIndex from "./views/onboarding/OnboardingIndex";

function App() {
  return (
    <>
      {/* COMPONENTE INDEX (LOGIN, REGISTRO Y MASCOTA) */}
      <OnboardingIndex />

      {/* ESTE BOTON TE REDIRECCIONA AL MENU PRINCIPAL SIN INICIAR SESION */}
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <Button variant="contained" href="/main-menu">
          Ingresar sin iniciar sesion
        </Button>
      </div>
    </>
  );
}

export default App;
