import Button from "../../../shared/components/button/Button";
import "../Formulario.css";
import Input from "../../../shared/components/input/Input";
import Inicio from "../../../shared/assets/Inicio.png";
import { useUsuario } from "../../../shared/hooks/useUsuario";

const LoginForm = ({ onNext }) => {

  const {
    estadoForm: {
      error,
      isSubmitting
    },
    estadoUsuario: {
      username,
      password,
      setUsername,
      setPassword
    },
    handleLogin,
  } = useUsuario();

  return (
    <>
      <div className="divisor">
        <div className="container">
          <div className="image">
            <img src={Inicio} alt="Imagen de inicio" />
          </div>
          <form className="form" onSubmit={handleLogin}>
            <h1>¡Bienvenido!</h1>
            <p>Por favor, inicia sesión para continuar</p>
            <div className="campo">
              <Input
                id="nicknameLogin"
                placeholder="nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength={50}
                required={true}
              />
              <Input
                id="password"
                type="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={8}
                required={true}
              />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <div>
              <Button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "INICIAR SESION"}
              </Button>
            </div>
            <div>
              <Button
                type="button"
                className="btn-secundary"
                onClick={onNext}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "REGISTRARSE"}
                {/* REGISTRARSE */}
              </Button>

            </div>
            <p>olvidaste la contraseña...</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
