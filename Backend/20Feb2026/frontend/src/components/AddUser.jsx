import { useState } from 'react';
import Input from './Input';

export default function AddUser({ user }) {
	const [name, setName] = useState(user?.name || '');
	const [contact, setContact] = useState(user?.contact || '');
	const [email, setEmail] = useState(user?.email || '');
	const [designation, setDesignation] = useState(user?.designation || '');
	const [company, setCompany] = useState(user?.company || '');
	const [address, setAddress] = useState(user?.address || '');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (user) {
			//
		} else {
			//
		}

		setName('');
		setContact('');
		setEmail('');
		setDesignation('');
		setCompany('');
		setAddress('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder="Contact"
					value={contact}
					onChange={(e) => setContact(e.target.value)}
				/>
				<Input
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="Designation"
					value={designation}
					onChange={(e) => setDesignation(e.target.value)}
				/>
				<Input
					placeholder="Company"
					value={company}
					onChange={(e) => setCompany(e.target.value)}
				/>
				<Input
					placeholder="Address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<button type="submit">
					{user ? 'Update User' : 'Add User'}
				</button>
			</form>
		</div>
	);
}
