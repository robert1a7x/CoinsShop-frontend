import React, { useState, useEffect } from 'react'
import DashboardButton from '../components/DashboardButton';
import Header from '../components/Header'
import { requestData, setToken } from '../services/requests';

const Products = () => {
	const [isAdm, setIsAdm] = useState(false);
	const [user, setUser] = useState();
	const [products, setProducts] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
		if (user.role === 'admin') setIsAdm(true);
		setUser(user);

		const fetchProducts = async () => {
			const endpoint = '/products';
			setToken(user.token);
			const data = await requestData(endpoint);
	
		setProducts(data);
		}

		fetchProducts();
  }, []);

	return (
		<div>
			<Header user={ user }/>
			{
				(isAdm)
				? <DashboardButton />
				: null
			}
			<div className="products-container">
				{ products.map(({ name, description, price, image }) => (
					<div key={ name }>
						<p>{ name }</p>
						<p>{ description }</p>
						<p>{ price }</p>
						<img src={ image } alt={ name } />
					</div>
				)) }
			</div>
		</div>
	)
}

export default Products