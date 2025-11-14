import React, { useEffect, useState } from 'react';
import Card from './Card';

function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=10')
			.then((res) => res.json())
			.then((item) => setData(item));
	});

	return (
		<div className="card-container">
			{data &&
				data.map((item) => (
					<Card key={item.id} image={item.image} title={item.title} />
				))}
		</div>
	);
}

export default Home;
