import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [coins, setCoins] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    setEmail(user.email);
    setCoins(user.coins);
  }, [])

  const logoff = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="header-container">
      <h1>Coins Shop</h1>
      <div className="email">{`Email: ${email}`}</div>
      <p>
        <span>{`${coins}`}</span>
        <span> Moedas</span>
      </p>
      <button onClick={() => logoff()}>Sair</button>
    </header>
  );
};

export default Header;
