import React, { useState, useEffect } from 'react';
import DashboardButton from '../components/DashboardButton';
import Header from '../components/Header';
import { requestData, setToken } from '../services/requests';
import '../styles/pages/Products.css'

const Products = () => {
  const [isAdm, setIsAdm] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.role === 'admin') setIsAdm(true);

    setUser(user);

    const fetchProducts = async () => {
      const endpoint = '/products';
      setToken(user.token);
      const data = await requestData(endpoint);

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <Header email={user.email} coins={user.coins} />
      {isAdm ? <DashboardButton /> : null}
      <h1>Produtos</h1>
      <div className="products-container">
        {products.map(({ name, description, price, image }) => (
          <div className="product-card" key={name}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{description}</p>
            <p>{price} Moedas</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
