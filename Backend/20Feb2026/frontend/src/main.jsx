import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AddUserPage from './pages/AddUserPage.jsx';
import Homepage from './pages/Homepage.jsx';
import UpdateUserPage from './pages/UpdateUserPage.jsx';
import DeleteUserPage from './pages/DeleteUserPage.jsx';
import SearchUserPage from './pages/SearchUserPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/add-user',
				element: <AddUserPage />,
			},
			{
				path: '/update-user',
				element: <UpdateUserPage />,
			},
			{
				path: '/delete-user',
				element: <DeleteUserPage />,
			},
			{
				path: '/search',
				element: <SearchUserPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
