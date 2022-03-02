import Bikes from './components/Bikes';

function App() {
	const bikesArr = [
		{
			id: 0,
			name: 'Select 🚲',
			price: 0,
		},
		{
			id: 1,
			name: 'Mountain',
			price: 500,
		},
		{
			id: 2,
			name: 'Child',
			price: 200,
		},
		{
			id: 3,
			name: 'Road',
			price: 1500,
		},
		{
			id: 4,
			name: 'Gravel',
			price: 2500,
		},
	];
	const daysArr = [
		{
			id: 0,
			number: 0,
			placeHolder: 'Number of days',
		},
		{
			id: 1,
			number: 1,
			placeHolder: '1 day',
		},
		{
			id: 2,
			number: 7,
			placeHolder: '7 days',
		},
		{
			id: 3,
			number: 14,
			placeHolder: '2 weeks',
		},
		{
			id: 4,
			number: 30,
			placeHolder: '1 month',
		},
	];
	return (
		<div className='App'>
			{/* custom component, args => bikes and days array */}
			<Bikes bikesArr={bikesArr} daysArr={daysArr} />
		</div>
	);
}

export default App;
