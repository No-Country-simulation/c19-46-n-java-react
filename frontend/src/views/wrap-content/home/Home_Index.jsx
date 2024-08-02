import React, { useState } from 'react';
import PetInfoCard from '../../../shared/components/datosdemascota/PetInfoCard';
import muestra1 from '../../../shared/assets/muestra1.webp';
import muestra2 from '../../../shared/assets/muestra2.webp';
import muestra3 from '../../../shared/assets/muestra3.webp';
import like from '../../../shared/assets/like.png'; // Imagen de like
import flechaIzquierda from '../../../shared/assets/flechaIzquierda.png'; // Imagen de flecha izquierda
import flechaDerecha from '../../../shared/assets/flechaDerecha.png'; // Imagen de flecha derecha
import liked from '../../../shared/assets/liked.png'; // Imagen de liked

const HomeIndex = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const petDataList = [
    {
      nombre: 'Rufo',
      raza: 'Pug',
      sexo: 'Macho',
      photos: [muestra1, muestra2, muestra3], // Array de fotos
    },
    {
      nombre: 'Luna',
      raza: 'Beagle',
      sexo: 'Hembra',
      photos: [muestra2, muestra3, muestra1], // Otro array de fotos
    },
    {
      nombre: 'Max',
      raza: 'Labrador',
      sexo: 'Macho',
      photos: [muestra3, muestra1, muestra2], // Otro array de fotos
    },
  ];

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + petDataList.length) % petDataList.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % petDataList.length);
  };

  const currentPet = petDataList[currentIndex];

  return (
    <div>
      <PetInfoCard 
        nombre={currentPet.nombre} 
        raza={currentPet.raza} 
        sexo={currentPet.sexo} 
        photos={currentPet.photos}
        like={like}
        liked={liked}
        flechaIzquierda={flechaIzquierda}
        flechaDerecha={flechaDerecha}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </div>
  );
};
export default HomeIndex; 