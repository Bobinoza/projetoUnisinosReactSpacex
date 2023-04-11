import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import './signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !password) {
      setError('Preencha todos os campos');
      return;
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais');
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert('Usuário cadastrado com sucesso!');
    navigate('/');
  };

  return (
    <div className='signup-container'>
      <div className='signup-wrapper'>
        <h2>CADASTRE-SE</h2>
        <div>
          <input
            type="email"
            placeholder='Seu melhor email'
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError('')]}
          />
          <input
            type="email"
            placeholder='Confirme o email'
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError('')]}
          />
          <input
            type='password'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError('')]}
          />
          <label>{error}</label>
          <button onClick={handleSignup}>Inscrever-se</button>
          <div>
            <h2>Já tem uma conta?</h2>
            <strong><Link to='/'>Entre</Link></strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;