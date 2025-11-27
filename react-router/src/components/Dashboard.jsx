import { useEffect, useState } from 'react';

export default function Dashboard() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://fakestoreapi.com/products');
			const jsonData = await response.json();
			setData(jsonData);
			console.log(jsonData);
		}
		fetchData();
	}, []);

	function addToCart(item) {
		alert(item.title);
	}

	return (
		<div>
			{data.length === 0 ? (
				<h2>Data is not available at this time</h2>
			) : (
				data.map((item) => (
					<div style={{ border: 'black 1px solid', padding: '10px' }}>
						<img src={item.image} height={100} width={100} />
						<h1>{item.title}</h1>
						<h3>${item.price}</h3>
						<h4>{item.description}</h4>
						<h4>{item.category}</h4>
						<button onClick={() => addToCart(item)}>
							Add to Cart
						</button>
					</div>
				))
			)}

			{/* {JSON.stringify(data)} */}
		</div>
	);
}
