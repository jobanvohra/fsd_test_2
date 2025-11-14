import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Registration() {
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/home');
	};
	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<p>Login</p>
				<input className="input" type="email" placeholder="Email" />
				<input
					className="input"
					type="password"
					placeholder="Password"
				/>
				<button type="submit" className="button">
					Submit
				</button>
				<div style={{ display: 'flex', gap: '5px' }}>
					Click here to <Link to="/register">Register</Link>
				</div>
			</form>
		</>
	);
}
