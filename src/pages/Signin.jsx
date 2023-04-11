import React, { useState } from 'react';
import './signin.css';

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Signin() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email | !password) {
      setError('Preencha os campos');
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate('/home');
  };


  return (
    <div className='signin-container'>
      <div className='signin-wrapper'>
        <h2>LOGIN</h2>

        <div>
          <input
            type="email"
            placeholder='Digite seu e-mail'
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError('')]}
          />

          <input
            type="password"
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError('')]}
          />
          <label>{error}</label>
          <button onClick={handleLogin}>Entrar</button>
          <label>
            Não tem uma conta?
            <strong>
              <Link to="/signup">Registre-se</Link>
            </strong>
          </label>
        </div>
      </div>
    </div>

  );
}

export default Signin;
