import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Header.css'

const Header = ({ user: { email, coins } }) => {
  const navigate = useNavigate();

  const logoff = () => {
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <header className="header-container">
      <h1>Coins Shop</h1>
      <div className="email">{`Email: ${email}`}</div>
      <p>
        <span>
          { `${coins}` }
        </span>
        <span> Moedas</span>
      </p>
      <button
        onClick={ () => logoff() }
      >
        Sair
      </button>
    </header>
  );
};

Header.defaultProps = {
  user: {
    email: '',
    coins: 0
  }
};

export default Header;
