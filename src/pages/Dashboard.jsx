import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { postProduct, setToken } from '../services/requests';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [postError, setPostError] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  const createProduct = async (event) => {
    event.preventDefault();
    const endPoint = '/products';
    const user = JSON.parse(localStorage.getItem('user'));

    try {
      setToken(user.token);

      const response = await postProduct(endPoint, {
        name,
        description,
        price,
        image,
      });

      if (response.error) setPostError(response.error);

      setPostSuccess(true);
    } catch (error) {
      const {
        response: { data },
      } = error;

      setPostError(data.error);
    }
  };

  useEffect(() => {
    setPostError(false);
    setPostSuccess(false);
  }, [name, description, price, image]);

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="product-form-container">
          <h2>Cadastrar um novo produto</h2>
          <form className="product-form">
            <input
              type="text"
              className="name-input"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              placeholder="Nome"
            />
            <textarea
              className="description-input"
              value={description}
              onChange={({ target: { value } }) => setDescription(value)}
              placeholder="Descrição"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="number"
              onChange={({ target: { value } }) => setPrice(value)}
              className="price-input"
              value={price}
              placeholder="Preço"
            />
            <input
              type="text"
              className="image-input"
              value={image}
              onChange={({ target: { value } }) => setImage(value)}
              placeholder="Endereço da imagem"
            />
            {postError ? <p>{postError}</p> : null}
            {postSuccess ? <p>Product criado com sucesso!</p> : null}
            <button type="submit" onClick={(event) => createProduct(event)}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
