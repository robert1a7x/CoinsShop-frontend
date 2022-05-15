import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../images/coinsShop.png';
import { requestLogin } from '../services/requests';
import '../styles/pages/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const endPoint = '/login';

      const { token, user } = await requestLogin(endPoint, { email, password });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      setLoading(false);
      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/products" />;

  return (
    <section className="user-login-area">
      <img src={logo} alt="coinsShop logo" />
      <form>
        <input
          type="email"
          className="email-input"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="password-input"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Senha"
        />
        {failedTryLogin ? (
          <p>{ `E-mail ou a senha incorretos. Por favor, tente novamente.` }</p>
        ) : null}
        { loading ? <p style={ { color: 'black' } }>Carregando...</p> : null }
        <button type="submit" onClick={(event) => login(event)}>
          Entrar
        </button>
      </form>
    </section>
  );
};

export default Login;
