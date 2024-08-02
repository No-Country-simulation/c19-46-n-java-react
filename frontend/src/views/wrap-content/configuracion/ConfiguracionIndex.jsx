import { useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >

        <Grid container justifyContent="center" spacing={10} mt={2}>
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

        </Grid>
      </motion.div>
    </>
  )
};

export default ConfiguracionIndex;
