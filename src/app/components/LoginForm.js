"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../styles/styles.css"; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password') {
      router.push('/dashboard'); 
    } else {
      setError('Email or password incorrect');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Iniciar Sesion</h2> {}
        {error && <p className="error">{error}</p>}
        <div>
          <label>Correo: </label> 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo" 
            required
          />
        </div>
        <div>
          <label>Contraseña: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña" 
            required
          />
        </div>
        <button type="submit" className="submitButton">Registrate</button>
      </form>
    </div>
  );
};

export default LoginForm;