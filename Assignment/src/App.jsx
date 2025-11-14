import Registration from './Registration';
import Login from './Login';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
	return (
		<>
			<div className="navbar-container">
				<Navbar />
			</div>

			<div style={{ paddingTop: '60px' }}>
				<Outlet />
			</div>
		</>
	);
}
