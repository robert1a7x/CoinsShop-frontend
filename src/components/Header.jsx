import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Header.css';
import logo from '../images/coinsShop.png';

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
      <Link to="/products">
        <img src={ logo } alt="" width="150px"/>
      </Link>
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
