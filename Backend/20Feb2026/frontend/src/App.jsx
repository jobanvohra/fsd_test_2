import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="app-container">
			<div className="nav"></div>
			<Outlet />
		</div>
	);
}

export default App;
