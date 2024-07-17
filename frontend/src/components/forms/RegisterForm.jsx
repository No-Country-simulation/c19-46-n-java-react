import React from 'react';
import Button from '../button/Button';
import './LoginForm.css';
import Input from '../input/Input';
import Primerinicio from '../images/primerInicio.png'


const LoginForm = () => {
  const handleLogin = () => {
    console.log('EntrarAgregar una mascota');
  };

  const handleRegister = () => {
    console.log('Volver');
  };
 
  return (

    <div className="container">
      <form className='form'>
        <h1>Completa tu perfil para comenzar</h1>
          <div className='campo'>
            <Input 
              placeholder={"tu nombre"}>
            </Input>

            <Input 
              placeholder={"telefono de contacto"}>
            </Input>

            <Input 
              placeholder={"ciudad"}>
            </Input>
          </div>
          
        <div>
          <Button onClick={handleLogin} className="btn-primary">
          AGREGAR UNA MASCOTA    
          </Button>
        </div>

        <div>
          <Button onClick={handleRegister} className="btn-secondary">
            VOLVER
          </Button>
        </div>
      </form>

      <div className="image">
        <img src={Primerinicio} alt="Primer inicio"/>
      </div>
    </div>

  );
};

export default LoginForm;