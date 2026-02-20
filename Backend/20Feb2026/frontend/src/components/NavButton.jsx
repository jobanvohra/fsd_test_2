import { Link } from 'react-router-dom';
export default function NavButton({ label, to }) {
	return (
		<Link className="nav-link" to={to}>
			{label}
		</Link>
	);
}
