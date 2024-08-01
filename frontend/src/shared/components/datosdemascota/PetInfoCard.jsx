import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PetInfoCard.css'; // Archivo CSS para los estilos

const PetInfoCard = ({ nombre, raza, sexo, photos, like, liked, flechaIzquierda, flechaDerecha, handleLeftClick, handleRightClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handlePhotoLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    handleLeftClick();
  };

  const handlePhotoRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    handleRightClick();
  };

  const mainPhoto = photos[currentIndex];
  const leftPhoto = photos[(currentIndex - 1 + photos.length) % photos.length];
  const rightPhoto = photos[(currentIndex + 1) % photos.length];

  return (
    <div className="pet-info-card-container">
      {/* Foto adicional izquierda */}
      <div className="pet-photo-container small" onClick={handlePhotoLeftClick}>
        <img src={leftPhoto} alt="Foto adicional izquierda" className="pet-photo" />
      </div>
      {/* Foto principal */}
      <div className="pet-photo-container main">
        <img src={mainPhoto} alt={`${nombre}`} className="pet-photo" />
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
          <img src={flechaIzquierda} alt="Flecha izquierda" className="pet-flecha" onClick={handleLeftClick} />
          <img src={flechaDerecha} alt="Flecha derecha" className="pet-flecha" onClick={handleRightClick} />
        </div>
      </div>
      {/* Foto adicional derecha */}
      <div className="pet-photo-container small" onClick={handlePhotoRightClick}>
        <img src={rightPhoto} alt="Foto adicional derecha" className="pet-photo" />
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