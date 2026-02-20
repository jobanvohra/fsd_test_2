import NavButton from '../components/NavButton';

export default function Homepage() {
	const navButtons = [
		{
			label: 'Add User',
			to: '/add-user',
		},
		{
			label: 'Update User',
			to: '/update-user',
		},
		{
			label: 'Delete User',
			to: '/delete-user',
		},
		{
			label: 'Search User',
			to: '/search',
		},
	];
	return (
		<div className="page">
			<h2 className="page-title">User Management</h2>
			<div className="nav">
				{navButtons.map((item) => (
					<NavButton
						to={item.to}
						label={item.label}
						key={item.label}
					/>
				))}
			</div>
		</div>
	);
}
