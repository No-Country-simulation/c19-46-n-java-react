import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './LoginForm.css';
import Input from '../input/Input';
import Primerinicio from '../images/primerInicio.png';

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!name || !phone || !city) {
      setError('Información requerida incompleta.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simula una petición de registro
      await fakeRegisterRequest({ name, phone, city });

      // Lógica después de un registro exitoso
      console.log('Registro exitoso');
      setIsSubmitting(false);  // Restablecer estado isSubmitting
    } catch (err) {
      setError('Error en el registro. Inténtalo de nuevo.');
      setIsSubmitting(false);  // Restablecer estado isSubmitting
    }
  };

  return (
    <div className="container">
      <div className="image">
        <img src={Primerinicio} alt="Imagen de inicio" />
      </div>
      <form className='form' onSubmit={handleRegister}>
        <h1>Completa tu perfil para comenzar</h1>
        <div className='campo'>
          <Input
            id="name"
            placeholder="tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            required
          />
          <Input 
            id="phone"
            placeholder="teléfono de contacto"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={15}
            required
          />
          <Input 
            id="city"
            placeholder="ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            maxLength={50}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <Button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'AGREGAR UNA MASCOTA'}
          </Button>
        </div>
        <div>
          <Link to="/register">
            <Button className="btn-secondary">
              VOLVER
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

// Simulación de petición de registro
const fakeRegisterRequest = ({ name, phone, city }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulación de éxito o fallo
      if (name && phone && city) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

export default LoginForm;