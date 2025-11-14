import React from 'react';

export default function Card({ image, title }) {
	return (
		<div className="card">
			<div className="card-image">
				<img height={150} width={150} src={image} />
			</div>
			<div className="card-title">{title}</div>
		</div>
	);
}
