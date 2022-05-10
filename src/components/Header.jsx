import React from 'react';
import '../styles/components/Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <h1>Coins Shop</h1>
      <div className="email" data-testid="email-field">{`Email: teste@teste.com`}</div>
      <p>
        <span data-testid="total-field">
          0
        </span>
        <span data-testid="header-currency-field"> Moedas</span>
      </p>
    </header>
  );
};

export default Header;
