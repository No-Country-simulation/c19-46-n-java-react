import Button from "../../../shared/components/button/Button";
import "../Formulario.css";
import Input from "../../../shared/components/input/Input";
import formularioRegistro from "../../../shared/assets/formularioRegistro.png";
import { useUsuario } from "../../../shared/hooks/useUsuario";

const RegisterForm = ({ onPrevious, onNext }) => {

  const {
    estadoForm: {
      error,
      isSubmitting
    },
    estadoUsuario: {
      setNombre,
      setEmail,
      setPassword,
      nombre,
      email,
      password
    },
    handleRegister
  } = useUsuario();


  return (
    <div className="divisor image-below">
      <div className="container">
        <form className="form" onSubmit={handleRegister(onNext)}>
          <h3>¡Únete a nuestra comunidad hoy!</h3>
          <p>Regístrate para empezar.</p>
          <div className="campo">
            <Input
              id="name"
              placeholder="tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              maxLength={50}
              required
            />
            <Input
              id="email"
              placeholder="correo electronico"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={50}
              required
            />
            <Input
              id="password"
              placeholder="contraseña"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={8}
              required
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div>
            <Button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "CONFIRMAR"}
            </Button>
          </div>
          <div>
            <Button className="btn-secondary" onClick={onPrevious}>
              VOLVER
            </Button>
          </div>
        </form>
        <div className="image-below-container">
          <img
            src={formularioRegistro}
            alt="Imagen de registro"
            style={{ height: 250 }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;