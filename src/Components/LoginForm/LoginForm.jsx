import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <div className='title'>
          <h1>
            Inicia Sesión <BsArrowUpRightSquareFill className='icon' />
          </h1>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Usuario" required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Contraseña" required />
          <FaLock className='icon' />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Recordar usuario</label>
          <a href='#'>¿Olvidaste la contraseña?</a>
        </div>

        <button type="submit">Continuar</button>

        <div className="register-link">
          <p>¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
