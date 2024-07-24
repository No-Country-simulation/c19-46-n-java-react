import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/components/button/Button";
import "../Formulario.css";
import Input from "../../../shared/components/input/Input";
import Inicio from "../../../shared/assets/Inicio.png";

const LoginForm = ({ onNext, onRegister }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    // console.log("No entra");

    setIsSubmitting(true);
    setError("");

    try {
      // Simula una petición de inicio de sesión
      // await fakeLoginRequest({ username, password });

      // Lógica después de un inicio de sesión exitoso
      console.log("Entrar");
      onNext();
    } catch (err) {
      setError("Nombre de usuario o contraseña incorrectos.");
      setIsSubmitting(false);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (error) setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  return (
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
              placeholder={"nombre de usuario"}
              value={username}
              onChange={handleUsernameChange}
              maxLength={50}
              required="true"
            />
            <Input
              id={"password"}
              type={"password"}
              placeholder={"contraseña"}
              value={password}
              onChange={handlePasswordChange}
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
              {isSubmitting ? "Enviando..." : "ENTRAR"}
            </Button>
          </div>
          <div>
            
            <Button
              type="button"
              className="btn-secundary"
              onClick={onRegister}
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
  );
};

// Simulación de petición de inicio de sesión
const fakeLoginRequest = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

export default LoginForm;
