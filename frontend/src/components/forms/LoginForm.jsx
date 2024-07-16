import React from 'react';
import Button from '../button/Button';
import './LoginForm.css';
import Input from '../input/Input';
import Inicio from '../images/Inicio.png'; 


const LoginForm = () => {
  const handleLogin = () => {
    console.log('Entrar');
  };

  const handleRegister = () => {
    console.log('Registrarse');
  };
 
  return (

    <div className="container">
      <div className="image">
        <img src={Inicio} alt="Imagen de inicio"/>
      </div>
      <form className='form'>
        <h1>¡Bienvenido!</h1>
        <p>Por favor, inicia sesión para continuar</p>
          <div className='campo'>
            <Input 
              placeholder={"nombre de usuario"}>
            </Input>

            <Input 
              type={"password"}
              placeholder={"contraseña"}>
            </Input>
          </div>
          
        <div>
          <Button onClick={handleLogin} className="btn-primary">
          ENTRAR    
          </Button>
        </div>

        <div>
          <Button onClick={handleRegister} className="btn-secondary">
            REGISTRARSE
          </Button>
        </div>
        <p>olvidaste la contraseña...</p>
      </form>
    </div>

  );
};

export default LoginForm;