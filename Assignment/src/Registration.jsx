import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/home');
	};
	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<p>Registration Form</p>
				<input className="input" type="text" placeholder="Name" />
				<input className="input" type="email" placeholder="Email" />
				<input
					className="input"
					type="password"
					placeholder="Password"
				/>
				<button type="submit" className="button">
					Submit
				</button>
			</form>
		</>
	);
}
