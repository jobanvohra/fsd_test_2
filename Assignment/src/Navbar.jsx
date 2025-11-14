import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const navLinks = [
		{
			page: 'Home',
			to: '/home',
		},
		{
			page: 'About',
			to: '/about',
		},
		{
			page: 'Logout',
			to: '/login',
		},
	];
	return (
		<div className="navbar">
			{navLinks.map((item) => (
				<Link className="nav-items" key={item.page} to={item.to}>
					{item.page}
				</Link>
			))}
		</div>
	);
}
