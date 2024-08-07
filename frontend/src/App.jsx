import Button from "@mui/material/Button";
import OnboardingIndex from "./views/onboarding/OnboardingIndex";
import logo from "./shared/assets/logo.png";

function App() {
  return (
    <>

      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: 100,
            height: 100,
            objectFit: "contain",
            objectPosition: "center",
            marginLeft: 10,
          }}
        />
      </div>

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
