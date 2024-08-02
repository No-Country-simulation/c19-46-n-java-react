import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import './PetInfoCard.css'; // Archivo CSS para los estilos

const PetInfoCard = ({
  nombre,
  raza,
  sexo,
  photos,
  like,
  liked,
  flechaIzquierda,
  flechaDerecha,
  handleLeftClick,
  handleRightClick
}) => {

  const [isLiked, setIsLiked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 para derecha, -1 para izquierda

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handlePhotoLeftClick = () => {
    setDirection(-1); // Dirección hacia la izquierda
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    handleLeftClick();
  };

  const handlePhotoRightClick = () => {
    setDirection(1); // Dirección hacia la derecha
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    handleRightClick();
  };

  const handleLeftArrowClick = () => {
    setDirection(-1); // Dirección hacia la izquierda
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    handleLeftClick();
  };

  const handleRightArrowClick = () => {
    setDirection(1); // Dirección hacia la derecha
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    handleRightClick();
  };

  // Variantes de animación
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="pet-info-card-container">
      {/* Foto adicional izquierda */}
      <div className="pet-photo-container small" onClick={handleLeftArrowClick}>
        <img src={photos[(currentIndex - 1 + photos.length) % photos.length]} alt="Foto adicional izquierda" className="pet-photo" />
      </div>
      {/* Foto principal */}
      <div className="pet-photo-container main">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="photo-wrapper"
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <img src={photos[currentIndex]} alt={`${nombre}`} className="pet-photo" />
          </motion.div>
        </AnimatePresence>
        <div className="pet-info-card">
          <h2 className="pet-nombre">{nombre}</h2>
          <p className="pet-raza">{raza}</p>
          <p className="pet-sexo">{sexo}</p>
        </div>
        {/* Imagen de like */}
        <img
          src={isLiked ? liked : like}
          alt="Like"
          className="pet-like-image"
          onClick={handleLikeClick}
        />
        {/* Flechas de navegación */}
        <div className="pet-flecha-container">
          <motion.img
            src={flechaIzquierda}
            alt="Flecha izquierda"
            className="pet-flecha"
            onClick={handleLeftArrowClick}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={flechaDerecha}
            alt="Flecha derecha"
            className="pet-flecha"
            onClick={handleRightArrowClick}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>
      {/* Foto adicional derecha */}
      <div className="pet-photo-container small" onClick={handlePhotoRightClick}>
        <img src={photos[(currentIndex + 1) % photos.length]} alt="Foto adicional derecha" className="pet-photo" />
      </div>
    </div>
  );
};

PetInfoCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
  sexo: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  like: PropTypes.string.isRequired,
  liked: PropTypes.string.isRequired,
  flechaIzquierda: PropTypes.string.isRequired,
  flechaDerecha: PropTypes.string.isRequired,
  handleLeftClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default PetInfoCard;