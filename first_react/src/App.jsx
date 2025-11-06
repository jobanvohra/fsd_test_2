import Card from './components/Card';

function App() {
	return (
		<>
			<div className="card-container">
				<Card
					image="/image1.jpg"
					title="React Basics"
					description="Learn about components,props and state."
				/>
				<Card
					image="https://picsum.photos/200/151"
					title="JavaScript"
					description="Master the language behind React."
				/>
				<Card
					image="https://picsum.photos/200/152"
					title="CSS Tricks"
					description="Style your components beautifully."
				/>
			</div>
		</>
	);
}

export default App;
