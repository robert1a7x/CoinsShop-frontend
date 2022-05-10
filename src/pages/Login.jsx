import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../images/coinsShop.png';
import { requestLogin } from '../services/requests';

const Login = () => {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

	const login = async (event) => {
		event.preventDefault();

		try {
			const endPoint = '/login';

			const { token, user } = await requestLogin(endPoint, { email, password });

			localStorage.setItem('user', JSON.stringify({ token, ...user }));
			setIsLogged(true)
		} catch (error) {	
			setFailedTryLogin(true);
			setIsLogged(false)
		}
	}

	useEffect(() => {
		setFailedTryLogin(false);
	}, [email, password]);

	if (isLogged) return <Navigate to="/products" />

	return (
		<section className="user-login-area">
			<img src={ logo } alt="coinsShop logo" />
			<form>
				<input
					type="email"
					className="email-input"
					value={ email }
					onChange={ ({ target: { value } }) => setEmail(value) }
					placeholder="Email"
				/>
				<input
					type="password"
					className="password-input"
					value={ password }
					onChange={ ({ target: { value } }) => setPassword(value) }
					placeholder="Senha"
				/>
				{
					(failedTryLogin)
					? (
						<p>
							{
								`O endereço de e-mail ou a senha não estão corretos.
								Por favor, tente novamente.`
            	}
						</p>
					)
					: null
				}
				<button
					type='submit'
					onClick={ (event) => login(event) }
				>
					Entrar	
				</button>
			</form>
		</section>
	)
}

export default Login