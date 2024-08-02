import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomeIndex from '../views/wrap-content/home/Home_Index';
import MensajeIndex from '../views/wrap-content/mensaje/MensajeIndex';
import PerfilIndex from '../views/wrap-content/perfil/PerfilIndex';
import ConfiguracionIndex from '../views/wrap-content/configuracion/ConfiguracionIndex';
import { usePreviousLocation } from '../shared/hooks/usePreviousLocation';

const NavBarRoutes = () => {
  const location = useLocation();
  const { getDirection } = usePreviousLocation();

  const routes = [
    {
      path: "/",
      element: <HomeIndex />,
    },
    {
      path: "/home",
      element: <HomeIndex />,
    },
    {
      path: "/mensaje",
      element: <MensajeIndex />,
    },
    {
      path: "/perfil",
      element: <PerfilIndex />,
    },
    {
      path: "/configuracion",
      element: <ConfiguracionIndex />,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: getDirection() }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: getDirection() }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%' }}
              >
                {route.element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default NavBarRoutes;
