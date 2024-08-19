import { useEffect } from "react";
import Button from "../../../shared/components/button/Button";
import "../Formulario.css";
import Input from "../../../shared/components/input/Input";
import Primerinicio from "../../../shared/assets/primerInicio.png";
import { useUsuario } from "../../../shared/hooks/useUsuario";
import useValidacionInput from "../../../shared/hooks/useValidacionInput";
import { validarPerfilForm } from "../../../shared/utils/validaciones";

const PerfilForm = ({ onPrevious, onNext }) => {
  const {
    estadoForm: {
      error,
      isSubmitting
    },
    estadoUsuario: {
      nombre,
      telefono,
      ciudad,
      ciudades,
      setNombre,
      setTelefono,
      setCiudad,
    },
    handleSubmitPerfilForm,
    getCiudades
  } = useUsuario(onNext);

  const initialValues = {
    nombre: nombre || "",
    telefono: telefono || "",
    ciudad: ciudad || ""
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleValidatePerfilForm
  } = useValidacionInput(initialValues, validarPerfilForm);

  useEffect(() => {
    getCiudades();
  }, []);

  return (
    <div className="divisor">
      <div className="container">
        <form className="form" onSubmit={(e) => handleValidatePerfilForm(e, handleSubmitPerfilForm)}>
          <h1>Completa tu perfil para comenzar</h1>
          <div className="campo">
            <Input
              id="formulario-perfil-nombre"
              name="nombre"
              placeholder="tu nombre"
              value={values.nombre}
              onChange={(e) => {
                handleChange(e);
                setNombre(e.target.value);
              }}
              onBlur={handleBlur}
              minLength={3}
              maxLength={50}
              isValid={!errors.nombre}
              errorMessage={errors.nombre}
              touched={touched.nombre}
              required
            />
            <Input
              id="formulario-perfil-telefono"
              name="telefono"
              type="tel"
              placeholder="teléfono de contacto"
              value={values.telefono}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, ''); // Filtra todo excepto los números
                e.target.value = numericValue;
                handleChange(e);
                setTelefono(e.target.value);
              }}
              onBlur={handleBlur}
              minLength={10}
              maxLength={15}
              isValid={!errors.telefono}
              errorMessage={errors.telefono}
              touched={touched.telefono}
              required
            />
            <Input
              id="formulario-perfil-ciudad"
              name="ciudad"
              type="select"
              placeholder="Selecciona una ciudad"
              value={ciudad || ""}
              options={ciudades}
              onChange={(selectedItem) => setCiudad(selectedItem)}
              touched={touched.ciudad}
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

export default PerfilForm;