import React, { useState, useEffect } from 'react'
import DashboardButton from '../components/DashboardButton';
import Header from '../components/Header'

const Products = () => {
	const [isAdm, setIsAdm] = useState(false);
	const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
		if (user.role === 'admin') setIsAdm(true);
		setUser(user);
  }, []);

	return (
		<div>
			<Header user={ user }/>
			{
				(isAdm)
				? <DashboardButton />
				: null
			}
			<div>Products</div>
		</div>
	)
}

export default Products