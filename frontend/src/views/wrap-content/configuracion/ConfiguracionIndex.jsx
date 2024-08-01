import { useState } from "react";
import { Grid } from "@mui/material";
import { useUsuario } from "../../../shared/hooks/useUsuario";
import FormularioCambioEmail from "./form-cambio-email/FormularioCambioEmail";
import FormularioCambioPassword from "./form-cambio-password/FormularioCambioPassword";

const ConfiguracionIndex = () => {

  // Nuevos valores
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("")
  const [newEmail, setNewEmail] = useState("")

  const {
    estadoForm: {
      error,
      isSubmitting
    },
    estadoUsuario: {
      email,
      setEmail,
      password,
      setPassword
    },
    handleSubmitChangePassword,
    handleSubmitChangeEmail
  } = useUsuario(newEmail, newPassword, newPasswordConfirm);

  return <Grid container justifyContent="center" spacing={10} mt={2}>
    <Grid item>
      <FormularioCambioPassword
        error={error}
        isSubmitting={isSubmitting}
        password={password}
        setPassword={setPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        newPasswordConfirm={newPasswordConfirm}
        setNewPasswordConfirm={setNewPasswordConfirm}
        handleSubmitChangePassword={handleSubmitChangePassword}
      />
    </Grid>

    <Grid item>
      <FormularioCambioEmail
        error={error}
        isSubmitting={isSubmitting}
        email={email}
        setEmail={setEmail}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        handleSubmitChangeEmail={handleSubmitChangeEmail}
      />
    </Grid>

  </Grid>;
};

export default ConfiguracionIndex;
