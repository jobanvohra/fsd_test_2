import DeleteUser from '../components/DeleteUser';
import { useState, useEffect } from 'react';
import Input from '../components/Input';

export default function DeleteUserPage() {
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
					<DeleteUser user={user} />
				</div>
			)}
		</>
	);
}
