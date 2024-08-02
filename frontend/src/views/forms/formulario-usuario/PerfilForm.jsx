import Button from "../../../shared/components/button/Button";
import "../Formulario.css";
import Input from "../../../shared/components/input/Input";
import Primerinicio from "../../../shared/assets/primerInicio.png";
import { useUsuario } from "../../../shared/hooks/useUsuario";

const RegisterForm = ({ onPrevious, onNext }) => {

  const {
    estadoForm: {
      error,
      isSubmitting
    },
    estadoUsuario: {
      nombre,
      telefono,
      ciudad,
      setNombre,
      setTelefono,
      setCiudad
    },
    handleProfileRegister
  } = useUsuario(onNext);

  return (
    <div className="divisor">
      <div className="container">
        <form className="form" onSubmit={handleProfileRegister}>
          <h1>Completa tu perfil para comenzar</h1>
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
              id="phone"
              placeholder="teléfono de contacto"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              maxLength={15}
              required
            />
            <Input
              id="city"
              placeholder="ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              maxLength={50}
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
              {isSubmitting ? "Enviando..." : "CONTINUAR"}
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
            src={Primerinicio}
            alt="Imagen de inicio"
            style={{ height: 550 }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
