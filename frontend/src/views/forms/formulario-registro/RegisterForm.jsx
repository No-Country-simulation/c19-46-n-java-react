import Button from "../../../shared/components/button/Button";
import "../Formulario.css";
import Input from "../../../shared/components/input/Input";
import formularioRegistro from "../../../shared/assets/formularioRegistro.png";
import { useUsuario } from "../../../shared/hooks/useUsuario";
import useValidacionInput from "../../../shared/hooks/useValidacionInput";
import { validarRegisterForm } from "../../../shared/utils/validaciones";

const RegisterForm = ({ onPrevious, onNext }) => {

  const {
    estadoForm: {
      error,
      isSubmitting
    },
    estadoUsuario: {
      setUsername,
      setEmail,
      setPassword,
      setConfirmarPassword,
      username,
      email,
      password,
      confirmarPassword
    },
    handleSubmitRegisterForm
  } = useUsuario(onNext);

  const initialValues = {
    username: username || "",
    email: email || "",
    password: password || "",
    confirmarPassword: confirmarPassword || ""
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleValidateRegisterForm
  } = useValidacionInput(initialValues, validarRegisterForm);

  return (
    <div className="divisor image-below">
      <div className="container">
        <form className="form" onSubmit={(e) => handleSubmitRegisterForm(e, handleValidateRegisterForm)}>
          <h3>¡Únete a nuestra comunidad hoy!</h3>
          <p>Regístrate para empezar.</p>
          <div className="campo">
            <Input
              id="formulario-registro-username"
              name="username"
              placeholder="tu nombre de usuario"
              value={values.username}
              onChange={(e) => {
                handleChange(e);
                setUsername(e.target.value);
              }}
              onBlur={handleBlur}
              maxLength={30}
              isValid={!errors.username}
              errorMessage={errors.username}
              touched={touched.username}
              required
            />
            <Input
              id="formulario-registro-email"
              name="email"
              placeholder="correo electronico"
              type="email"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
                setEmail(e.target.value);
              }}
              onBlur={handleBlur}
              maxLength={50}
              isValid={!errors.email}
              errorMessage={errors.email}
              touched={touched.email}
              required
            />
            <Input
              id="formulario-registro-password"
              name="password"
              placeholder="contraseña"
              type="password"
              value={values.password}
              onChange={(e) => {
                handleChange(e);
                setPassword(e.target.value);
              }}
              onBlur={handleBlur}
              minLength={6}
              maxLength={8}
              isValid={!errors.password}
              errorMessage={errors.password}
              touched={touched.password}
              required
            />
            <Input
              id="formulario-registro-confirmar-password"
              name="confirmarPassword"
              placeholder="confirmar contraseña"
              type="password"
              value={values.confirmarPassword}
              onChange={(e) => {
                handleChange(e);
                setConfirmarPassword(e.target.value);
              }}
              onBlur={handleBlur}
              minLength={6}
              maxLength={8}
              isValid={!errors.confirmarPassword}
              errorMessage={errors.confirmarPassword}
              touched={touched.confirmarPassword}
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