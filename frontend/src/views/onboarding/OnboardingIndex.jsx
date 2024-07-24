import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "../forms/formulario-login/LoginForm";
import RegisterForm from "../forms/formulario-registro/RegisterForm";
import PerfilForm from "../forms/formulario-usuario/PerfilForm";
import FormularioMascotaIndex from "../forms/formulario-mascota/FormularioMascotaIndex";


/**
 * El componente utiliza el hook `useState` para manejar el estado de la 'página' actual del flujo.
 * El valor de `step` puede ser 0, 1 o 2, correspondiendo a las páginas de inicio de sesión, registro y formulario de mascota respectivamente.
 *
 * El componente utiliza el componente `AnimatePresence` de Framer Motion para animar la transición entre las diferentes páginas.
 * Cada página se renderiza dentro de un componente `motion.div` con animaciones definidas para las propiedades `opacity` y `x`.
 *
 * La página de inicio de sesión se renderiza cuando `step` es 0, la página de registro se renderiza cuando `step` es 1 y
 * la página de formulario de mascota se renderiza cuando `step` es 2.
 *
 * Los botones de navegación entre las diferentes páginas se pasan como propiedades a los componentes de
 * `LoginForm`, `RegisterForm` y `FormularioMascotaIndex`.
 *
 * El componente `OnboardingIndex` es exportado como el componente predeterminado para este archivo.
 */
const OnboardingIndex = () => {
  const Form1 = ({ onNext }) => (
    <>
      {/* FORMULARIO LOGIN - PAGINA 0 */}
      <LoginForm onNext={onNext} />
    </>
  );

  const Form2 = ({ onPrevious, onNext }) => (
    <>
      {/* FORMULARIO REGISTRO - PAGINA 1 */}
      <RegisterForm onPrevious={onPrevious} onNext={onNext} />
    </>
  );

  const Form3 = ({ onPrevious, onNext }) => (
    <>
      {/* FORMULARIO MASCOTA - PAGINA 2 */}
      <PerfilForm onPrevious={onPrevious} onNext={onNext} />
    </>
  );

  const Form4 = ({ onPrevious }) => (
    <>
      {/* FORMULARIO PERFIL - PAGINA 3 */}
      <FormularioMascotaIndex onPrevious={onPrevious} />
    </>
  );
  const [step, setStep] = useState(0);

  return (
    <>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="form1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* FORMULARIO LOGIN - PAGINA 0 */}
            <Form1 onNext={() => setStep(1)} />
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            key="form2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* FORMULARIO REGISTRO - PAGINA 1 */}
            <Form2 onPrevious={() => setStep(0)} onNext={() => setStep(2)} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="form3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* FORMULARIO MASCOTA - PAGINA 2 */}
            <Form3 onPrevious={() => setStep(1)} onNext={() => setStep(3)} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="form4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* FORMULARIO PERFIL - PAGINA 3 */}
            <Form4 onPrevious={() => setStep(1)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OnboardingIndex;
