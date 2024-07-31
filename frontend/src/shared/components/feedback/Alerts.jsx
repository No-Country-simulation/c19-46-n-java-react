import { Alert, Slide, Snackbar } from "@mui/material";

/**
 * Componente que muestra una alerta en la parte superior de la pantalla.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.open - Indica si la alerta debe ser visible.
 * @param {function} props.setOpen - Función para cambiar el estado de la alerta.
 * @param {string} [props.mensaje="mensaje"] - Mensaje a mostrar en la alerta.
 * @param {string} [props.tipo="info"] - Tipo de alerta. Puede ser "success", "warning" o "error".
 * @returns {JSX.Element} - El componente de alerta.
 */
const Alerts = ({
  open,
  setOpen,
  mensaje = "mensaje",
  tipo = "info"
}) => {
  // estos son los tipos de alerta para los mensajes
  // severity="info"
  // severity="success"
  // severity="warning"
  // severity="error"

  //  EJEMPLO DE USO:
  //  EN EL COMPONENTE DONDE SE VA A UTILIZAR, AGREGAR ESTOS ESTADOS:

  //   const [openAlert, setOpenAlert] = useState(false);
  //   const [alertMessage, setAlertMessage] = useState("");
  //   const [alertType, setAlertType] = useState("info");

  //   LUEGO AGREGAR EL COMPONENTE Y PASARLE LOS ESTADOS,
  //   EL MENSAJE ES LO QUE VA A DECIR Y LOS TIPOS SON ESTOS, POR DEFECTO ES INFO:
  //   severity="info"
  //   severity="success"
  //   severity="warning"
  //   severity="error"

  //   <Alerts
  //         open={openAlert}
  //         setOpen={setOpenAlert}
  //         mensaje={alertMessage}
  //         tipo={alertType}
  //   />

  const SlideTransition = (props) => {
    return <Slide {...props} direction="down" />;
  };

  return (
    <Snackbar
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={4000}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      key={"bottom" + "right"}
    >
      <Alert severity={tipo} variant="filled" sx={{ width: "100%" }}>
        {mensaje}
      </Alert>
    </Snackbar>
  );
};

export default Alerts;
