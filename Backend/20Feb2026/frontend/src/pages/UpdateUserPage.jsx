import { useState, useEffect } from 'react';
import AddUser from '../components/AddUser';
import Input from '../components/Input';

export default function UpdateUserPage() {
	const [user, setUser] = useState('');

	useEffect(() => {
		//fetch
	}, [user]);

	return (
		<>
			<Input
				placeholder="Enter User"
				value={user}
				onChange={(e) => setUser(e.target.value)}
			/>
			{user ?? (
				<div className="page">
					<h2 className="page-title">Add User</h2>
					<AddUser user={user} />
				</div>
			)}
		</>
	);
}
