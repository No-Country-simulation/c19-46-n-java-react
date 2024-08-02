import { Grid } from "@mui/material";
import NavBarRoutes from "../routes/NavBarRoutes";
import Navbar from "./navbar/Navbar";
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { usePreviousLocation } from '../shared/hooks/usePreviousLocation';

const MainMenu = () => {
  const location = useLocation();
  const { getDirection } = usePreviousLocation();

  return (
    <>
      <Grid container >
        <Navbar />
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: getDirection() }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: getDirection() }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <NavBarRoutes />
          </motion.div>
        </AnimatePresence>
      </Grid>
    </>
  );
};

export default MainMenu;
