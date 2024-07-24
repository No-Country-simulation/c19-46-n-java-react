import { useState } from "react";
import Button from "../../../shared/components/button/Button";
import "../Formulario.css";
import Input from "../../../shared/components/input/Input";
import formularioRegistro from "../../../shared/assets/formularioRegistro.png";

const LoginForm = ({ onPrevious, onNext }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!name || !email || !password) {
      setError("Información requerida incompleta.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Simula una petición de registro
      // await fakeRegisterRequest({ name, email, password });

      // Lógica después de un registro exitoso
      console.log("Registro exitoso");
      setIsSubmitting(false); // Restablecer estado isSubmitting
      onNext();
    } catch (err) {
      setError("Error en el registro. Inténtalo de nuevo.");
      setIsSubmitting(false); // Restablecer estado isSubmitting
    }
  };

  return (
    <div className="divisor">
      <div className="container">
        <form className="form" onSubmit={handleRegister}>
          <h3>¡Únete a nuestra comunidad hoy!</h3>
          <p>Regístrate para empezar.</p>
          <div className="campo">
            <Input
              id="name"
              placeholder="tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
        <div className="image">
          <img
            src={formularioRegistro}
            alt="Imagen de registro"
            style={{ height: 550 }}
          />
        </div>
      </div>
    </div>
  );
};

// Simulación de petición de registro
const fakeRegisterRequest = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulación de éxito o fallo
      if (name && email && password) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

export default LoginForm;